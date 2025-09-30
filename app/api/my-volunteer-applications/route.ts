import { NextRequest, NextResponse } from "next/server";

import { Redis } from "@upstash/redis";
import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "../../logto";

const redis = Redis.fromEnv();

interface VolunteerApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
  availability: string;
  skills?: string;
  motivation: string;
  github?: string;
  linkedin?: string;
  submittedBy: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
  year: number;
}

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    // Check authentication
    const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const userEmail = claims?.email;
    if (!userEmail) {
      return NextResponse.json(
        { error: "User email not found" },
        { status: 400 }
      );
    }

    // Get all volunteer application IDs from different lists
    const [pendingIds, approvedIds, rejectedIds] = await Promise.all([
      redis.lrange("pending-volunteers", 0, -1),
      redis.lrange("approved-volunteers", 0, -1),
      redis.lrange("rejected-volunteers", 0, -1),
    ]);

    // Combine all IDs
    const allVolunteerIds = [
      ...(pendingIds as string[]),
      ...(approvedIds as string[]),
      ...(rejectedIds as string[]),
    ];

    // Fetch all applications and filter by user
    const userApplications = await Promise.all(
      allVolunteerIds.map(async (id) => {
        try {
          const volunteerData = await redis.get(`volunteer:${id}`);
          if (volunteerData) {
            const parsed =
              typeof volunteerData === "string"
                ? JSON.parse(volunteerData)
                : volunteerData;

            // Check if this application belongs to the user
            if (
              parsed.email === userEmail ||
              parsed.submittedBy === userEmail ||
              parsed.submittedBy === claims?.name
            ) {
              return parsed as VolunteerApplication;
            }
          }
        } catch (e) {
          console.error(`Error fetching volunteer application ${id}:`, e);
        }
        return null;
      })
    );

    // Filter out nulls and sort by submission date (newest first)
    const filteredApplications = userApplications
      .filter((a): a is VolunteerApplication => a !== null)
      .sort(
        (a, b) =>
          new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
      );

    return NextResponse.json({ applications: filteredApplications });
  } catch (error) {
    console.error("Error fetching user volunteer applications:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
