"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { EditProjectModal } from "../my-projects/edit-project-modal";
import {
  Loader2,
  GitBranch,
  ExternalLink,
  Calendar,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  Code,
  Users,
  GitPullRequest,
  FileText,
} from "lucide-react";
import { SubmittedProject } from "../projects/utils";

interface MySubmissionsClientProps {
  isAuthenticated: boolean;
  userEmail?: string;
  userName?: string;
  onSignOut?: () => Promise<void>;
}

interface Contribution {
  id: string;
  projectTitle: string;
  prUrl: string;
  description: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
}

interface VolunteerApplication {
  id: string;
  name: string;
  role: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
}

type TabType = "projects" | "contributions" | "volunteer";

export function MySubmissionsClient({
  isAuthenticated,
  userEmail,
  userName,
  onSignOut,
}: MySubmissionsClientProps) {
  const [activeTab, setActiveTab] = useState<TabType>("projects");
  const [projects, setProjects] = useState<SubmittedProject[]>([]);
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [volunteerApplications, setVolunteerApplications] = useState<VolunteerApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authError, setAuthError] = useState(false);
  const [editingProject, setEditingProject] = useState<SubmittedProject | null>(null);
  const [deletingProjectId, setDeletingProjectId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (activeTab === "projects") {
      fetchProjects();
    } else if (activeTab === "contributions") {
      fetchContributions();
    } else if (activeTab === "volunteer") {
      fetchVolunteerApplications();
    }
  }, [activeTab]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/edit-project", {
        method: "GET",
      });

      if (response.status === 401) {
        setAuthError(true);
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }

      const data = await response.json();
      setProjects(data.projects || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  const fetchContributions = async () => {
    try {
      setLoading(true);
      setError(null);
      // For now, we'll simulate this since the API might not exist yet
      // You can implement the actual API endpoint later
      const response = await fetch("/api/my-contributions", {
        method: "GET",
      });

      if (response.status === 401) {
        setAuthError(true);
        return;
      }

      if (response.ok) {
        const data = await response.json();
        setContributions(data.contributions || []);
      } else {
        // If API doesn't exist, just set empty array
        setContributions([]);
      }
    } catch (err) {
      // If API doesn't exist, just set empty array
      setContributions([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchVolunteerApplications = async () => {
    try {
      setLoading(true);
      setError(null);
      // For now, we'll simulate this since the API might not exist yet
      const response = await fetch("/api/my-volunteer-applications", {
        method: "GET",
      });

      if (response.status === 401) {
        setAuthError(true);
        return;
      }

      if (response.ok) {
        const data = await response.json();
        setVolunteerApplications(data.applications || []);
      } else {
        setVolunteerApplications([]);
      }
    } catch (err) {
      setVolunteerApplications([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async (projectId: string) => {
    if (!confirm("Are you sure you want to delete this project? This action cannot be undone.")) {
      return;
    }

    try {
      setDeletingProjectId(projectId);
      const response = await fetch(`/api/edit-project?id=${projectId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete project");
      }

      setProjects(projects.filter((p) => p.id !== projectId));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to delete project");
    } finally {
      setDeletingProjectId(null);
    }
  };

  const handleUpdateProject = async (projectId: string, updates: Partial<SubmittedProject>) => {
    try {
      const response = await fetch("/api/edit-project", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: projectId, updates }),
      });

      if (!response.ok) {
        throw new Error("Failed to update project");
      }

      const data = await response.json();
      setProjects(projects.map((p) => (p.id === projectId ? data.project : p)));
      setEditingProject(null);
    } catch (err) {
      throw err;
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      approved: {
        icon: CheckCircle,
        text: "Approved",
        className: "text-green-400 bg-green-900/50 border-green-800",
      },
      pending: {
        icon: Clock,
        text: "Pending Review",
        className: "text-yellow-400 bg-yellow-900/50 border-yellow-800",
      },
      rejected: {
        icon: XCircle,
        text: "Rejected",
        className: "text-red-400 bg-red-900/50 border-red-800",
      },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    const Icon = config.icon;

    return (
      <span
        className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-full ${config.className}`}
      >
        <Icon className="w-3 h-3" />
        {config.text}
      </span>
    );
  };

  const getProjectTypeIcon = (projectType?: string) => {
    if (projectType === "hackathon") {
      return <Users className="w-4 h-4 text-purple-400" title="Hackathon Project" />;
    }
    return <Code className="w-4 h-4 text-blue-400" title="Existing Project" />;
  };

  if (loading) {
    return (
      <div className="relative pb-16">
        <Navigation
          isAuthenticated={isAuthenticated}
          userEmail={userEmail}
          userName={userName}
          onSignOut={onSignOut}
        />
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
              <p className="text-zinc-400 mb-4">Please sign in to view your submissions</p>
              <Link
                href="/signin?redirect=/my-submissions"
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
      <Navigation
        isAuthenticated={isAuthenticated}
        userEmail={userEmail}
        userName={userName}
        onSignOut={onSignOut}
      />

      <div className="px-6 pt-20 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-space-white sm:text-4xl">
            My Submissions
          </h1>
          <p className="mt-4 text-space-dust">
            Manage all your Hacktoberfest 2025 submissions in one place
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 p-1 mb-8 bg-east-bay/30 rounded-lg border border-blue-violet/30">
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${
              activeTab === "projects"
                ? "bg-lavender text-void"
                : "text-space-dust hover:text-space-white hover:bg-east-bay/50"
            }`}
          >
            <Code className="w-4 h-4" />
            Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab("contributions")}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${
              activeTab === "contributions"
                ? "bg-lavender text-void"
                : "text-space-dust hover:text-space-white hover:bg-east-bay/50"
            }`}
          >
            <GitPullRequest className="w-4 h-4" />
            Contributions ({contributions.length})
          </button>
          <button
            onClick={() => setActiveTab("volunteer")}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${
              activeTab === "volunteer"
                ? "bg-lavender text-void"
                : "text-space-dust hover:text-space-white hover:bg-east-bay/50"
            }`}
          >
            <FileText className="w-4 h-4" />
            Volunteer ({volunteerApplications.length})
          </button>
        </div>

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="space-y-6">
            {projects.length === 0 ? (
              <Card>
                <div className="p-12 text-center">
                  <Code className="w-12 h-12 mx-auto mb-4 text-space-haze" />
                  <h3 className="text-lg font-semibold text-space-white mb-2">
                    No projects yet
                  </h3>
                  <p className="text-space-dust mb-6">
                    Submit your first open source project for Hacktoberfest 2025!
                  </p>
                  <Link
                    href="/submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
                  >
                    Submit Project
                  </Link>
                </div>
              </Card>
            ) : (
              projects.map((project) => (
                <Card key={project.id}>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {getProjectTypeIcon(project.projectType)}
                          <h3 className="text-xl font-bold text-space-white">
                            {project.title}
                          </h3>
                          {getStatusBadge(project.status)}
                        </div>
                        <p className="text-space-dust mb-4">{project.description}</p>

                        {project.specialNote && (
                          <div className="mb-4 p-3 bg-lavender/10 rounded-lg border border-lavender/20">
                            <p className="text-sm text-space-dust">{project.specialNote}</p>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-4 text-sm">
                          <a
                            href={project.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                          >
                            <GitBranch className="w-4 h-4" />
                            Repository
                          </a>
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </a>
                          )}
                          <span className="flex items-center gap-1 text-space-haze">
                            <Calendar className="w-4 h-4" />
                            {new Date(project.submittedAt).toLocaleDateString()}
                          </span>
                        </div>

                        {project.projectType === "hackathon" && project.teamMembers && project.teamMembers.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-east-bay/50">
                            <p className="text-sm font-medium text-space-white mb-2">Team Members:</p>
                            <div className="flex flex-wrap gap-2">
                              {project.teamMembers.map((member, idx) => (
                                <span key={idx} className="text-xs px-2 py-1 bg-east-bay/30 rounded text-space-dust">
                                  {member.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => setEditingProject(project)}
                          className="p-2 text-space-dust hover:text-melrose hover:bg-east-bay/50 rounded-md transition-colors"
                          title="Edit project"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          disabled={deletingProjectId === project.id}
                          className="p-2 text-space-dust hover:text-red-400 hover:bg-red-900/20 rounded-md transition-colors disabled:opacity-50"
                          title="Delete project"
                        >
                          {deletingProjectId === project.id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        )}

        {/* Contributions Tab */}
        {activeTab === "contributions" && (
          <div className="space-y-6">
            {contributions.length === 0 ? (
              <Card>
                <div className="p-12 text-center">
                  <GitPullRequest className="w-12 h-12 mx-auto mb-4 text-space-haze" />
                  <h3 className="text-lg font-semibold text-space-white mb-2">
                    No contributions yet
                  </h3>
                  <p className="text-space-dust mb-6">
                    Start contributing to open source projects!
                  </p>
                  <Link
                    href="/contributions"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
                  >
                    Submit Contribution
                  </Link>
                </div>
              </Card>
            ) : (
              contributions.map((contribution) => (
                <Card key={contribution.id}>
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-space-white">
                            {contribution.projectTitle}
                          </h3>
                          {getStatusBadge(contribution.status)}
                        </div>
                        <p className="text-space-dust mb-4">{contribution.description}</p>
                        <div className="flex gap-4 text-sm">
                          <a
                            href={contribution.prUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                          >
                            <GitPullRequest className="w-4 h-4" />
                            View Pull Request
                          </a>
                          <span className="flex items-center gap-1 text-space-haze">
                            <Calendar className="w-4 h-4" />
                            {new Date(contribution.submittedAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        )}

        {/* Volunteer Tab */}
        {activeTab === "volunteer" && (
          <div className="space-y-6">
            {volunteerApplications.length === 0 ? (
              <Card>
                <div className="p-12 text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-space-haze" />
                  <h3 className="text-lg font-semibold text-space-white mb-2">
                    No volunteer applications
                  </h3>
                  <p className="text-space-dust mb-6">
                    Join us as a volunteer for Hacktoberfest 2025!
                  </p>
                  <Link
                    href="/volunteer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
                  >
                    Apply as Volunteer
                  </Link>
                </div>
              </Card>
            ) : (
              volunteerApplications.map((application) => (
                <Card key={application.id}>
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-space-white">
                            {application.role}
                          </h3>
                          {getStatusBadge(application.status)}
                        </div>
                        <p className="text-space-dust mb-4">Applied as: {application.name}</p>
                        <div className="flex gap-4 text-sm">
                          <span className="flex items-center gap-1 text-space-haze">
                            <Calendar className="w-4 h-4" />
                            {new Date(application.submittedAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        )}
      </div>

      {/* Edit Project Modal */}
      {editingProject && (
        <EditProjectModal
          project={editingProject}
          onClose={() => setEditingProject(null)}
          onSave={handleUpdateProject}
        />
      )}

      <Footer />
    </div>
  );
}