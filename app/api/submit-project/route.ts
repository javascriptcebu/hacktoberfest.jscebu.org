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
    const {
      title,
      description,
      specialNote,
      repository,
      url,
      image,
      email,
      projectType,
      category,
      techStack,
      lookingFor,
      teamMembers
    } = body;

    // Basic validation
    if (!title || !description || !repository || !email || !projectType || !category || !techStack) {
      return NextResponse.json(
        { error: "Title, description, repository, email, project type, category, and tech stack are required" },
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

    // Additional validation for existing projects
    if (projectType === "existing" && !lookingFor) {
      return NextResponse.json(
        { error: "Please specify what kind of contributions you're looking for" },
        { status: 400 }
      );
    }

    // Validate team members for hackathon projects
    if (projectType === "hackathon") {
      const validTeamMembers = teamMembers?.filter((m: any) => m.name && m.email) || [];
      if (validTeamMembers.length === 0) {
        return NextResponse.json(
          { error: "At least one team member is required for hackathon projects" },
          { status: 400 }
        );
      }
      if (validTeamMembers.length > 4) {
        return NextResponse.json(
          { error: "Maximum 4 team members allowed" },
          { status: 400 }
        );
      }
    }

    // Create submission object
    const submission = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      specialNote: specialNote?.trim() || null,
      repository: repository.trim(),
      url: url?.trim() || null,
      image: image?.trim() || null,
      email: email.trim(),
      projectType,
      category,
      techStack: techStack.trim(),
      lookingFor: projectType === "existing" ? lookingFor?.trim() : null,
      teamMembers: projectType === "hackathon" ? (teamMembers?.filter((m: any) => m.name) || []) : [],
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