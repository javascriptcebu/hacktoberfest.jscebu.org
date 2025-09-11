import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "../../../logto";

const redis = Redis.fromEnv();

// Define admin emails - in production, this should come from environment variables
const ADMIN_EMAILS = [
  "dorelljames@gmail.com", // Add actual admin emails here
];

async function checkAdmin() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);
  
  if (!isAuthenticated || !claims?.email || !ADMIN_EMAILS.includes(claims.email)) {
    return false;
  }
  
  return true;
}

export async function GET(): Promise<NextResponse> {
  try {
    const isAdmin = await checkAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get all pending submission IDs
    const pendingIds = await redis.lrange("pending-submissions", 0, -1);
    
    // Get all submissions
    const submissions = [];
    if (pendingIds.length > 0) {
      const keys = pendingIds.map((id: string) => `submission:${id}`);
      const submissionData = await redis.mget(...keys);
      
      for (const data of submissionData) {
        if (data) {
          try {
            submissions.push(JSON.parse(data as string));
          } catch (e) {
            console.error("Failed to parse submission data:", e);
          }
        }
      }
    }

    // Also get approved/rejected submissions from a separate list
    // For now, we'll just return pending ones
    
    return NextResponse.json({ 
      submissions: submissions.sort((a, b) => 
        new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
      )
    });

  } catch (error) {
    console.error("Admin submissions error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest): Promise<NextResponse> {
  try {
    const isAdmin = await checkAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { submissionId, status } = body;

    if (!submissionId || !["approved", "rejected"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid submission ID or status" },
        { status: 400 }
      );
    }

    // Get the submission
    const submissionData = await redis.get(`submission:${submissionId}`);
    if (!submissionData) {
      return NextResponse.json(
        { error: "Submission not found" },
        { status: 404 }
      );
    }

    const submission = JSON.parse(submissionData as string);
    submission.status = status;
    submission.reviewedAt = new Date().toISOString();

    // Update the submission
    await redis.set(`submission:${submissionId}`, JSON.stringify(submission));

    // Remove from pending list
    await redis.lrem("pending-submissions", 0, submissionId);

    // Add to appropriate list
    if (status === "approved") {
      await redis.lpush("approved-submissions", submissionId);
      
      // TODO: Here you could automatically create the MDX file or add to a queue
      console.log(`Approved submission: ${submission.title}`);
    } else {
      await redis.lpush("rejected-submissions", submissionId);
    }

    return NextResponse.json({ 
      success: true, 
      message: `Submission ${status} successfully`
    });

  } catch (error) {
    console.error("Admin submission update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}