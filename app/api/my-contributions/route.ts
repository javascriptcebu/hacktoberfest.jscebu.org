import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "../../logto";

const redis = Redis.fromEnv();

interface Contribution {
  id: string;
  prUrl: string;
  projectName: string;
  projectUrl: string;
  isLocalProject: boolean;
  contributionType: string;
  description: string;
  email: string;
  submittedBy: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
  year: number;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    // Check authentication
    const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);
    if (!isAuthenticated) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 });
    }

    const userEmail = claims?.email;
    if (!userEmail) {
      return NextResponse.json({ error: "User email not found" }, { status: 400 });
    }

    // Get all contribution IDs from different lists
    const [pendingIds, approvedIds, rejectedIds] = await Promise.all([
      redis.lrange("pending-contributions", 0, -1),
      redis.lrange("approved-contributions", 0, -1),
      redis.lrange("rejected-contributions", 0, -1),
    ]);

    // Combine all IDs
    const allContributionIds = [
      ...(pendingIds as string[]),
      ...(approvedIds as string[]),
      ...(rejectedIds as string[]),
    ];

    // Fetch all contributions and filter by user
    const userContributions = await Promise.all(
      allContributionIds.map(async (id) => {
        try {
          const contributionData = await redis.get(`contribution:${id}`);
          if (contributionData) {
            const parsed = typeof contributionData === 'string'
              ? JSON.parse(contributionData)
              : contributionData;

            // Check if this contribution belongs to the user
            if (parsed.email === userEmail ||
                parsed.submittedBy === userEmail ||
                parsed.submittedBy === claims?.name) {
              return parsed as Contribution;
            }
          }
        } catch (e) {
          console.error(`Error fetching contribution ${id}:`, e);
        }
        return null;
      })
    );

    // Filter out nulls and sort by submission date (newest first)
    const filteredContributions = userContributions
      .filter((c): c is Contribution => c !== null)
      .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());

    return NextResponse.json({ contributions: filteredContributions });

  } catch (error) {
    console.error("Error fetching user contributions:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}