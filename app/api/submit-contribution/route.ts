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
      prUrl,
      projectName,
      projectUrl,
      isLocalProject,
      contributionType,
      description,
      email
    } = body;

    // Basic validation
    if (!prUrl || !projectName || !projectUrl || !contributionType || !description || !email) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate URLs
    const urlRegex = /^https?:\/\/.+/;
    if (!urlRegex.test(prUrl) || !urlRegex.test(projectUrl)) {
      return NextResponse.json(
        { error: "Please provide valid URLs" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Create contribution object
    const contribution = {
      id: crypto.randomUUID(),
      prUrl: prUrl.trim(),
      projectName: projectName.trim(),
      projectUrl: projectUrl.trim(),
      isLocalProject: !!isLocalProject,
      contributionType,
      description: description.trim(),
      email: email.trim(),
      submittedBy: claims?.email || email,
      submittedAt: new Date().toISOString(),
      status: "pending", // pending, verified, rejected
      year: 2025,
      // Calculate initial points based on type and local project
      points: calculatePoints(contributionType, !!isLocalProject),
    };

    // Store in Redis
    const contributionKey = `contribution:${contribution.id}`;
    await redis.set(contributionKey, JSON.stringify(contribution));

    // Add to pending contributions list
    await redis.lpush("pending-contributions", contribution.id);

    // Track user's contributions
    await redis.lpush(`user-contributions:${email}`, contribution.id);

    // If it's a local project, add to special list
    if (isLocalProject) {
      await redis.lpush("local-contributions", contribution.id);
    }

    // Log the contribution for tracking
    await redis.lpush("contribution-log", JSON.stringify({
      id: contribution.id,
      email: contribution.email,
      projectName: contribution.projectName,
      type: contribution.contributionType,
      isLocal: contribution.isLocalProject,
      timestamp: contribution.submittedAt
    }));

    // Send notification (could be expanded to email/webhook)
    console.log(`New contribution: ${prUrl} to ${projectName} by ${email}`);

    return NextResponse.json({
      success: true,
      message: "Contribution submitted successfully",
      contributionId: contribution.id,
      points: contribution.points
    });

  } catch (error) {
    console.error("Contribution submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function calculatePoints(type: string, isLocal: boolean): number {
  let basePoints = 1;

  // Base points by contribution type
  switch (type) {
    case "bugfix":
    case "code":
      basePoints = 1.5;
      break;
    case "documentation":
    case "translation":
    case "design":
      basePoints = 1;
      break;
    case "testing":
      basePoints = 1.2;
      break;
    default:
      basePoints = 1;
  }

  // Double points for local projects
  return isLocal ? basePoints * 2 : basePoints;
}