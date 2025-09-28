import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "../../logto";
import { SubmittedProject } from "../../projects/utils";

const redis = Redis.fromEnv();

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

    // Get all submission IDs
    const allSubmissionIds = [
      ...(await redis.lrange("pending-submissions", 0, -1) as string[]),
      ...(await redis.lrange("approved-submissions", 0, -1) as string[]),
      ...(await redis.lrange("rejected-submissions", 0, -1) as string[])
    ];

    // Fetch all submissions and filter by user
    const userProjects = await Promise.all(
      allSubmissionIds.map(async (id) => {
        try {
          const submissionData = await redis.get(`submission:${id}`);
          if (submissionData) {
            const parsed = typeof submissionData === 'string'
              ? JSON.parse(submissionData)
              : submissionData;

            // Check if this project belongs to the user
            if (parsed.submittedBy === userEmail || parsed.email === userEmail) {
              return parsed as SubmittedProject;
            }
          }
        } catch (e) {
          console.error(`Error fetching submission ${id}:`, e);
        }
        return null;
      })
    );

    // Filter out nulls and sort by submission date (newest first)
    const filteredProjects = userProjects
      .filter((p): p is SubmittedProject => p !== null)
      .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());

    return NextResponse.json({ projects: filteredProjects });

  } catch (error) {
    console.error("Error fetching user projects:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest): Promise<NextResponse> {
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

    // Parse request body
    const body = await req.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
    }

    // Fetch the existing project
    const submissionKey = `submission:${id}`;
    const existingData = await redis.get(submissionKey);

    if (!existingData) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    const existingProject = typeof existingData === 'string'
      ? JSON.parse(existingData)
      : existingData;

    // Check ownership
    if (existingProject.submittedBy !== userEmail && existingProject.email !== userEmail) {
      return NextResponse.json({ error: "You don't have permission to edit this project" }, { status: 403 });
    }

    // Merge updates with existing data
    const updatedProject = {
      ...existingProject,
      title: updates.title || existingProject.title,
      description: updates.description || existingProject.description,
      repository: updates.repository || existingProject.repository,
      url: updates.url !== undefined ? updates.url : existingProject.url,
      image: updates.image !== undefined ? updates.image : existingProject.image,
      specialNote: updates.specialNote !== undefined ? updates.specialNote : existingProject.specialNote,
      techStack: updates.techStack || existingProject.techStack,
      lookingFor: updates.lookingFor !== undefined ? updates.lookingFor : existingProject.lookingFor,
      category: updates.category || existingProject.category,
      teamMembers: updates.teamMembers !== undefined ? updates.teamMembers : existingProject.teamMembers,
      lastUpdatedAt: new Date().toISOString()
    };

    // Validate required fields
    if (!updatedProject.title || !updatedProject.description || !updatedProject.repository) {
      return NextResponse.json(
        { error: "Title, description, and repository are required" },
        { status: 400 }
      );
    }

    // Save updated project
    await redis.set(submissionKey, JSON.stringify(updatedProject));

    return NextResponse.json({
      success: true,
      message: "Project updated successfully",
      project: updatedProject
    });

  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
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

    // Get project ID from query params
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
    }

    // Fetch the existing project
    const submissionKey = `submission:${id}`;
    const existingData = await redis.get(submissionKey);

    if (!existingData) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    const existingProject = typeof existingData === 'string'
      ? JSON.parse(existingData)
      : existingData;

    // Check ownership
    if (existingProject.submittedBy !== userEmail && existingProject.email !== userEmail) {
      return NextResponse.json({ error: "You don't have permission to delete this project" }, { status: 403 });
    }

    // Remove from all lists
    await redis.lrem("pending-submissions", 0, id);
    await redis.lrem("approved-submissions", 0, id);
    await redis.lrem("rejected-submissions", 0, id);

    // Delete the project data
    await redis.del(submissionKey);

    return NextResponse.json({
      success: true,
      message: "Project deleted successfully"
    });

  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}