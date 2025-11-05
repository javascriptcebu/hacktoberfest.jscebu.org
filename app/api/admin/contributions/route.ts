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

    // Get all contribution IDs from different lists
    const [pendingIds, approvedIds, rejectedIds] = await Promise.all([
      redis.lrange("pending-contributions", 0, -1) as Promise<string[]>,
      redis.lrange("approved-contributions", 0, -1) as Promise<string[]>,
      redis.lrange("rejected-contributions", 0, -1) as Promise<string[]>
    ]);

    console.log("Fetching contributions - Pending:", pendingIds.length, "Approved:", approvedIds.length, "Rejected:", rejectedIds.length);

    // Combine all IDs
    const allIds = [...pendingIds, ...approvedIds, ...rejectedIds];

    // Get all contributions
    const contributions = [];
    if (allIds.length > 0) {
      for (const id of allIds) {
        try {
          const contributionData = await redis.get(`contribution:${id}`);
          if (contributionData) {
            const parsed = typeof contributionData === 'string'
              ? JSON.parse(contributionData)
              : contributionData;
            contributions.push(parsed);
          }
        } catch (e) {
          console.error(`Failed to parse contribution ${id}:`, e);
        }
      }
    }

    return NextResponse.json({
      contributions: contributions.sort((a, b) =>
        new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
      )
    });

  } catch (error) {
    console.error("Admin contributions error:", error);
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
      return NextResponse.json({ error: "Unauthorized - Admin access required" }, { status: 401 });
    }

    const body = await req.json();
    const { contributionId, status } = body;

    if (!contributionId || !["approved", "rejected"].includes(status)) {
      return NextResponse.json(
        { error: `Invalid contribution ID or status` },
        { status: 400 }
      );
    }

    // Get the contribution
    const contributionData = await redis.get(`contribution:${contributionId}`);
    if (!contributionData) {
      return NextResponse.json(
        { error: `Contribution not found with ID: ${contributionId}` },
        { status: 404 }
      );
    }

    const contribution = typeof contributionData === 'string'
      ? JSON.parse(contributionData)
      : contributionData;

    contribution.status = status;
    contribution.reviewedAt = new Date().toISOString();

    // Update the contribution
    await redis.set(`contribution:${contributionId}`, JSON.stringify(contribution));

    // Remove from pending list
    await redis.lrem("pending-contributions", 0, contributionId);

    // Add to appropriate list
    if (status === "approved") {
      await redis.lpush("approved-contributions", contributionId);
      console.log(`Approved contribution: ${contribution.projectName} (ID: ${contributionId})`);
    } else {
      await redis.lpush("rejected-contributions", contributionId);
      console.log(`Rejected contribution: ${contribution.projectName} (ID: ${contributionId})`);
    }

    return NextResponse.json({
      success: true,
      message: `Contribution ${status} successfully`
    });

  } catch (error) {
    console.error("Admin contribution update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    const isAdmin = await checkAdmin();
    if (!isAdmin) {
      console.log("DELETE request denied - not an admin");
      return NextResponse.json({ error: "Unauthorized - Admin access required" }, { status: 401 });
    }

    const body = await req.json();
    const { contributionId } = body;

    console.log("DELETE request - Contribution ID:", contributionId);

    if (!contributionId) {
      return NextResponse.json(
        { error: "Invalid contribution ID" },
        { status: 400 }
      );
    }

    // Check if contribution exists
    const contributionData = await redis.get(`contribution:${contributionId}`);
    if (!contributionData) {
      console.error(`Contribution not found with ID: ${contributionId}`);
      return NextResponse.json(
        { error: `Contribution not found with ID: ${contributionId}` },
        { status: 404 }
      );
    }

    const contribution = typeof contributionData === 'string'
      ? JSON.parse(contributionData)
      : contributionData;

    console.log(`Deleting contribution: ${contribution.projectName} (ID: ${contributionId})`);

    // Remove from all lists
    await Promise.all([
      redis.lrem("pending-contributions", 0, contributionId),
      redis.lrem("approved-contributions", 0, contributionId),
      redis.lrem("rejected-contributions", 0, contributionId)
    ]);

    // Delete the contribution data
    await redis.del(`contribution:${contributionId}`);

    console.log(`Successfully deleted contribution: ${contributionId}`);

    return NextResponse.json({
      success: true,
      message: `Contribution deleted successfully`
    });

  } catch (error) {
    console.error("Admin contribution delete error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
