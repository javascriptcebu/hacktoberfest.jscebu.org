import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "../../../logto";

const redis = Redis.fromEnv();

const ADMIN_EMAILS = process.env.ADMIN_EMAILS?.split(",").map(email => email.trim()) || [];

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

    if (!isAuthenticated || !claims?.email || !ADMIN_EMAILS.includes(claims.email)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const allVolunteerIds = await redis.lrange("pending-volunteers", 0, -1) as string[];

    const allVolunteers = await Promise.all(
      allVolunteerIds.map(async (id) => {
        const volunteerData = await redis.get(`volunteer:${id}`);
        if (volunteerData) {
          return JSON.parse(volunteerData as string);
        }
        return null;
      })
    );

    const volunteers = allVolunteers.filter(v => v !== null);

    return NextResponse.json({
      volunteers: volunteers.sort((a, b) =>
        new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
      )
    });

  } catch (error) {
    console.error("Error fetching volunteers:", error);
    return NextResponse.json(
      { error: "Failed to fetch volunteers" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest): Promise<NextResponse> {
  try {
    const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

    if (!isAuthenticated || !claims?.email || !ADMIN_EMAILS.includes(claims.email)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const { volunteerId, status } = await req.json();

    if (!volunteerId || !status || !["approved", "rejected"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
      );
    }

    const volunteerData = await redis.get(`volunteer:${volunteerId}`);
    if (!volunteerData) {
      return NextResponse.json(
        { error: "Volunteer not found" },
        { status: 404 }
      );
    }

    const volunteer = JSON.parse(volunteerData as string);
    volunteer.status = status;
    volunteer.reviewedBy = claims.email;
    volunteer.reviewedAt = new Date().toISOString();

    await redis.set(`volunteer:${volunteerId}`, JSON.stringify(volunteer));

    if (status === "approved") {
      await redis.lpush("approved-volunteers", volunteerId);
    }

    await redis.lrem("pending-volunteers", 0, volunteerId);

    return NextResponse.json({
      success: true,
      message: `Volunteer ${status} successfully`
    });

  } catch (error) {
    console.error("Error updating volunteer status:", error);
    return NextResponse.json(
      { error: "Failed to update volunteer status" },
      { status: 500 }
    );
  }
}