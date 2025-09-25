import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = Redis.fromEnv();

// Debug endpoint to check submissions data
export async function GET(): Promise<NextResponse> {
  try {
    // Get all submission IDs from different lists
    const [pendingIds, approvedIds, rejectedIds] = await Promise.all([
      redis.lrange("pending-submissions", 0, -1) as Promise<string[]>,
      redis.lrange("approved-submissions", 0, -1) as Promise<string[]>,
      redis.lrange("rejected-submissions", 0, -1) as Promise<string[]>
    ]);

    // Get a sample submission if any exist
    let sampleSubmission = null;
    if (pendingIds.length > 0) {
      const firstId = pendingIds[0];
      const submissionData = await redis.get(`submission:${firstId}`);
      if (submissionData) {
        sampleSubmission = typeof submissionData === 'string'
          ? JSON.parse(submissionData)
          : submissionData;
      }
    }

    return NextResponse.json({
      debug: {
        pending_count: pendingIds.length,
        approved_count: approvedIds.length,
        rejected_count: rejectedIds.length,
        total_count: pendingIds.length + approvedIds.length + rejectedIds.length,
        pending_ids: pendingIds.slice(0, 5), // Show first 5 IDs
        sample_submission: sampleSubmission,
        redis_status: "connected"
      }
    });

  } catch (error) {
    console.error("Debug error:", error);
    return NextResponse.json(
      {
        error: "Debug check failed",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}