"use client";

import { useEffect, useState } from "react";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { Card } from "../components/card";
import { SubmittedProject } from "../projects/utils";
import { Pencil, Trash2, Eye, ExternalLink, GitBranch, Plus, Loader2 } from "lucide-react";
import Link from "next/link";
import { EditProjectModal } from "./edit-project-modal";
import { useRouter } from "next/navigation";

interface MyProjectsClientProps {
  isAuthenticated?: boolean;
  userEmail?: string;
  onSignOut?: () => Promise<void>;
}

export function MyProjectsClient({ isAuthenticated, userEmail, onSignOut }: MyProjectsClientProps) {
  const [projects, setProjects] = useState<SubmittedProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState<SubmittedProject | null>(null);
  const [authError, setAuthError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/edit-project");
      if (response.status === 401) {
        setAuthError(true);
        router.push("/signin?redirect=/my-projects");
        return;
      }
      if (response.ok) {
        const data = await response.json();
        setProjects(data.projects);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project? This action cannot be undone.")) {
      return;
    }

    try {
      const response = await fetch(`/api/edit-project?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProjects(projects.filter(p => p.id !== id));
        alert("Project deleted successfully");
      } else {
        const error = await response.json();
        alert(`Failed to delete project: ${error.error}`);
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Failed to delete project");
    }
  };

  const handleEdit = (project: SubmittedProject) => {
    setEditingProject(project);
  };

  const handleSave = async (updatedProject: SubmittedProject) => {
    try {
      const response = await fetch("/api/edit-project", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProject),
      });

      if (response.ok) {
        const data = await response.json();
        setProjects(projects.map(p => p.id === data.project.id ? data.project : p));
        setEditingProject(null);
        alert("Project updated successfully");
      } else {
        const error = await response.json();
        alert(`Failed to update project: ${error.error}`);
      }
    } catch (error) {
      console.error("Error updating project:", error);
      alert("Failed to update project");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "text-green-400 bg-green-900/50 border-green-800";
      case "pending":
        return "text-yellow-400 bg-yellow-900/50 border-yellow-800";
      case "rejected":
        return "text-red-400 bg-red-900/50 border-red-800";
      default:
        return "text-zinc-400 bg-zinc-900/50 border-zinc-800";
    }
  };

  if (loading) {
    return (
      <div className="relative pb-16">
        <Navigation isAuthenticated={isAuthenticated} userEmail={userEmail} onSignOut={onSignOut} />
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="w-8 h-8 animate-spin text-lavender" />
        </div>
        <Footer />
      </div>
    );
  }

  if (authError) {
    return (
      <div className="relative pb-16">
        <Navigation isAuthenticated={false} />
        <div className="flex items-center justify-center min-h-screen">
          <Card>
            <div className="p-8 text-center">
              <h3 className="text-xl font-bold text-zinc-100 mb-2">
                Authentication Required
              </h3>
              <p className="text-zinc-400 mb-4">
                Please sign in to manage your projects
              </p>
              <Link
                href="/signin?redirect=/my-projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
              >
                Sign In
              </Link>
            </div>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative pb-16">
      <Navigation isAuthenticated={isAuthenticated} userEmail={userEmail} onSignOut={onSignOut} />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            My Projects
          </h1>
          <p className="mt-4 text-zinc-400">
            Manage your submitted projects for Hacktoberfest 2025
          </p>
        </div>

        {projects.length === 0 ? (
          <Card>
            <div className="p-8 text-center">
              <h3 className="text-xl font-bold text-zinc-100 mb-2">
                No projects yet
              </h3>
              <p className="text-zinc-400 mb-4">
                Submit your first open source project to get started!
              </p>
              <Link
                href="/submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
              >
                <Plus className="w-5 h-5" />
                Submit a Project
              </Link>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-zinc-100">
                      {project.title}
                    </h3>
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {project.specialNote && (
                    <div className="mb-4 p-3 bg-lavender/10 rounded-md border border-lavender/20">
                      <p className="text-xs font-semibold text-lavender mb-1">Special Note:</p>
                      <p className="text-sm text-zinc-300">{project.specialNote}</p>
                    </div>
                  )}

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-zinc-500" />
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 hover:text-blue-300 truncate"
                      >
                        {project.repository.replace("https://github.com/", "")}
                      </a>
                    </div>

                    {project.url && (
                      <div className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 text-zinc-500" />
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:text-blue-300 truncate"
                        >
                          Live Demo
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <span className="text-xs text-zinc-500">
                      {project.lastUpdatedAt
                        ? `Updated ${new Date(project.lastUpdatedAt).toLocaleDateString()}`
                        : `Submitted ${new Date(project.submittedAt).toLocaleDateString()}`}
                    </span>
                    <div className="flex gap-2">
                      {project.status === "approved" && (
                        <Link
                          href={`/projects/submitted/${project.id}`}
                          className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
                          title="View public page"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                      )}
                      <button
                        onClick={() => handleEdit(project)}
                        className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
                        title="Edit project"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="p-2 text-red-500 hover:text-red-400 transition-colors"
                        title="Delete project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="flex justify-center">
          <Link
            href="/submit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
          >
            <Plus className="w-5 h-5" />
            Submit Another Project
          </Link>
        </div>
      </div>
      <Footer />

      {editingProject && (
        <EditProjectModal
          project={editingProject}
          onClose={() => setEditingProject(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}