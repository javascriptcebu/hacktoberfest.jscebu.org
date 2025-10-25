import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "../../../logto";

const redis = Redis.fromEnv();

// Get admin emails from environment variable (comma-separated)
const ADMIN_EMAILS = process.env.ADMIN_EMAILS 
  ? process.env.ADMIN_EMAILS.split(',').map(email => email.trim())
  : [];

async function checkAdmin() {
  try {
    const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

    console.log("Admin check - Authenticated:", isAuthenticated, "Email:", claims?.email, "Is Admin:", claims?.email ? ADMIN_EMAILS.includes(claims.email) : false);

    if (!isAuthenticated || !claims?.email || !ADMIN_EMAILS.includes(claims.email)) {
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    const isAdmin = await checkAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get all submission IDs from different lists
    const [pendingIds, approvedIds, rejectedIds] = await Promise.all([
      redis.lrange("pending-submissions", 0, -1) as Promise<string[]>,
      redis.lrange("approved-submissions", 0, -1) as Promise<string[]>,
      redis.lrange("rejected-submissions", 0, -1) as Promise<string[]>
    ]);

    console.log("Fetching submissions - Pending:", pendingIds.length, "Approved:", approvedIds.length, "Rejected:", rejectedIds.length);

    // Combine all IDs and remove duplicates
    const allIds = [...new Set([...pendingIds, ...approvedIds, ...rejectedIds])];

    console.log("Total unique IDs:", allIds.length, "Before dedup:", pendingIds.length + approvedIds.length + rejectedIds.length);

    // Get all submissions
    const submissions = [];
    if (allIds.length > 0) {
      // Fetch in batches to avoid issues with large datasets
      for (const id of allIds) {
        try {
          const submissionData = await redis.get(`submission:${id}`);
          if (submissionData) {
            const parsed = typeof submissionData === 'string'
              ? JSON.parse(submissionData)
              : submissionData;
            submissions.push(parsed);
          }
        } catch (e) {
          console.error(`Failed to parse submission ${id}:`, e);
        }
      }
    }
    
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
      console.log("PATCH request denied - not an admin");
      return NextResponse.json({ error: "Unauthorized - Admin access required" }, { status: 401 });
    }

    const body = await req.json();
    const { submissionId, status, projectType } = body;

    console.log("PATCH request - Submission ID:", submissionId, "Status:", status, "Project Type:", projectType);

    if (!submissionId) {
      return NextResponse.json(
        { error: `Invalid submission ID (${submissionId})` },
        { status: 400 }
      );
    }

    // Validate that either status or projectType is provided
    if (!status && !projectType) {
      return NextResponse.json(
        { error: "Either status or projectType must be provided" },
        { status: 400 }
      );
    }

    // Validate status if provided
    if (status && !["approved", "rejected"].includes(status)) {
      return NextResponse.json(
        { error: `Invalid status (${status})` },
        { status: 400 }
      );
    }

    // Validate projectType if provided
    if (projectType && !["hackathon", "existing"].includes(projectType)) {
      return NextResponse.json(
        { error: `Invalid project type (${projectType})` },
        { status: 400 }
      );
    }

    // Get the submission
    const submissionData = await redis.get(`submission:${submissionId}`);
    if (!submissionData) {
      console.error(`Submission not found with ID: ${submissionId}`);
      return NextResponse.json(
        { error: `Submission not found with ID: ${submissionId}` },
        { status: 404 }
      );
    }

    const submission = typeof submissionData === 'string'
      ? JSON.parse(submissionData)
      : submissionData;

    // Update status if provided
    if (status) {
      submission.status = status;
      submission.reviewedAt = new Date().toISOString();
      console.log(`Updating submission ${submissionId} to status: ${status}`);

      // Remove from all lists to prevent duplicates
      await Promise.all([
        redis.lrem("pending-submissions", 0, submissionId),
        redis.lrem("approved-submissions", 0, submissionId),
        redis.lrem("rejected-submissions", 0, submissionId)
      ]);

      // Add to appropriate list
      if (status === "approved") {
        await redis.lpush("approved-submissions", submissionId);
        console.log(`Approved submission: ${submission.title} (ID: ${submissionId})`);
      } else {
        await redis.lpush("rejected-submissions", submissionId);
        console.log(`Rejected submission: ${submission.title} (ID: ${submissionId})`);
      }
    }

    // Update project type if provided
    if (projectType) {
      submission.projectType = projectType;
      console.log(`Updating submission ${submissionId} project type to: ${projectType}`);
    }

    // Update the submission
    await redis.set(`submission:${submissionId}`, JSON.stringify(submission));

    return NextResponse.json({
      success: true,
      message: `Submission updated successfully`
    });

  } catch (error) {
    console.error("Admin submission update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}