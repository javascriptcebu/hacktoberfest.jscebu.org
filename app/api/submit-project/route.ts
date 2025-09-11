import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "../../logto";

const redis = Redis.fromEnv();

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // Check authentication
    const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);
    if (!isAuthenticated) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 });
    }

    // Parse and validate request body
    const body = await req.json();
    const { title, description, repository, url, image, email } = body;

    // Basic validation
    if (!title || !description || !repository || !email) {
      return NextResponse.json(
        { error: "Title, description, repository, and email are required" },
        { status: 400 }
      );
    }

    // Validate repository URL
    if (!repository.includes("github.com") && !repository.includes("gitlab.com")) {
      return NextResponse.json(
        { error: "Repository must be a GitHub or GitLab URL" },
        { status: 400 }
      );
    }

    // Create submission object
    const submission = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      repository: repository.trim(),
      url: url?.trim() || null,
      image: image?.trim() || null,
      email: email.trim(),
      submittedBy: claims?.email || email,
      submittedAt: new Date().toISOString(),
      status: "pending", // pending, approved, rejected
      year: 2025,
    };

    // Store in Redis
    const submissionKey = `submission:${submission.id}`;
    await redis.set(submissionKey, JSON.stringify(submission));

    // Add to pending submissions list
    await redis.lpush("pending-submissions", submission.id);

    // Log the submission for admin tracking
    await redis.lpush("submission-log", JSON.stringify({
      id: submission.id,
      title: submission.title,
      email: submission.email,
      timestamp: submission.submittedAt
    }));

    // Send notification (could be expanded to email/webhook)
    console.log(`New project submission: ${title} by ${email}`);

    return NextResponse.json({ 
      success: true, 
      message: "Project submitted successfully",
      submissionId: submission.id 
    });

  } catch (error) {
    console.error("Project submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}