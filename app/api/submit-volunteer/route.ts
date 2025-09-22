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
      name,
      email,
      phone,
      role,
      experience,
      availability,
      skills,
      motivation,
      github,
      linkedin
    } = body;

    // Basic validation
    if (!name || !email || !phone || !role || !experience || !availability || !motivation) {
      return NextResponse.json(
        { error: "Name, email, phone, role, experience, availability, and motivation are required" },
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

    // Create volunteer application object
    const application = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      role: role,
      experience: experience.trim(),
      availability: availability.trim(),
      skills: skills?.trim() || null,
      motivation: motivation.trim(),
      github: github?.trim() || null,
      linkedin: linkedin?.trim() || null,
      submittedBy: claims?.email || email,
      submittedAt: new Date().toISOString(),
      status: "pending", // pending, approved, rejected
      year: 2025,
    };

    // Store in Redis
    const applicationKey = `volunteer:${application.id}`;
    await redis.set(applicationKey, JSON.stringify(application));

    // Add to pending volunteers list
    await redis.lpush("pending-volunteers", application.id);

    // Log the application for admin tracking
    await redis.lpush("volunteer-log", JSON.stringify({
      id: application.id,
      name: application.name,
      email: application.email,
      role: application.role,
      timestamp: application.submittedAt
    }));

    // Send notification (could be expanded to email/webhook)
    console.log(`New volunteer application: ${name} (${email}) for ${role}`);

    return NextResponse.json({
      success: true,
      message: "Volunteer application submitted successfully",
      applicationId: application.id
    });

  } catch (error) {
    console.error("Volunteer application error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}