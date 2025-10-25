"use client";

import {
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Code,
  FileText,
  GitBranch,
  Linkedin,
  Mail,
  Phone,
  User,
  Users,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Card } from "../components/card";

interface Submission {
  id: string;
  title: string;
  description: string;
  repository: string;
  url?: string;
  image?: string;
  email: string;
  submittedBy: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
  year: number;
  projectType?: "hackathon" | "existing";
}

interface Volunteer {
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
  points?: number;
}

type TabType = "projects" | "volunteers" | "contributions";

export function AdminPanel() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [projectFilter, setProjectFilter] = useState<
    "all" | "pending" | "approved" | "rejected"
  >("pending");
  const [volunteerFilter, setVolunteerFilter] = useState<
    "all" | "pending" | "approved" | "rejected"
  >("pending");
  const [contributionFilter, setContributionFilter] = useState<
    "all" | "pending" | "approved" | "rejected"
  >("pending");
  const [expandedVolunteers, setExpandedVolunteers] = useState<Set<string>>(
    new Set()
  );

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/submissions");
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched submissions:", data.submissions);
        setSubmissions(data.submissions || []);
      } else {
        console.error(
          "Failed to fetch submissions:",
          response.status,
          response.statusText
        );
        throw new Error("Failed to fetch submissions");
      }
    } catch (err) {
      if (
        err instanceof Error &&
        "digest" in err &&
        err.digest === "DYNAMIC_SERVER_USAGE"
      ) {
        throw error;
      }

      console.error("Error fetching submissions:", err);
      setError("Failed to load submissions");
    } finally {
      setLoading(false);
    }
  };

  const fetchVolunteers = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/volunteers");
      if (response.ok) {
        const data = await response.json();
        setVolunteers(data.volunteers || []);
      } else {
        throw new Error("Failed to fetch volunteers");
      }
    } catch (err) {
      if (
        err instanceof Error &&
        "digest" in err &&
        err.digest === "DYNAMIC_SERVER_USAGE"
      ) {
        throw error;
      }

      setError("Failed to load volunteers");
    } finally {
      setLoading(false);
    }
  };

  const fetchContributions = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/contributions");
      if (response.ok) {
        const data = await response.json();
        setContributions(data.contributions || []);
      } else {
        throw new Error("Failed to fetch contributions");
      }
    } catch (err) {
      if (
        err instanceof Error &&
        "digest" in err &&
        err.digest === "DYNAMIC_SERVER_USAGE"
      ) {
        throw error;
      }

      setError("Failed to load contributions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "projects") {
      fetchSubmissions();
    } else if (activeTab === "volunteers") {
      fetchVolunteers();
    } else if (activeTab === "contributions") {
      fetchContributions();
    }
  }, [activeTab]);

  const updateSubmissionStatus = async (
    submissionId: string,
    status: "approved" | "rejected"
  ) => {
    try {
      const response = await fetch("/api/admin/submissions", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ submissionId, status }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Update successful:", data);
        await fetchSubmissions();
        // Optional: Show success message
      } else {
        const errorData = await response.json();
        console.error("Failed to update submission:", errorData);
        alert(
          `Failed to update submission: ${errorData.error || "Unknown error"}`
        );
      }
    } catch (err) {
      if (
        err instanceof Error &&
        "digest" in err &&
        err.digest === "DYNAMIC_SERVER_USAGE"
      ) {
        throw error;
      }

      console.error("Error updating submission status:", err);
      alert("Failed to update submission status - check console for details");
    }
  };

  const updateVolunteerStatus = async (
    volunteerId: string,
    status: "approved" | "rejected"
  ) => {
    try {
      const response = await fetch("/api/admin/volunteers", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ volunteerId, status }),
      });

      if (response.ok) {
        await fetchVolunteers();
      } else {
        throw new Error("Failed to update volunteer");
      }
    } catch (err) {
      if (
        err instanceof Error &&
        "digest" in err &&
        err.digest === "DYNAMIC_SERVER_USAGE"
      ) {
        throw error;
      }

      alert("Failed to update volunteer status");
    }
  };

  const updateContributionStatus = async (
    contributionId: string,
    status: "approved" | "rejected"
  ) => {
    try {
      const response = await fetch("/api/admin/contributions", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contributionId, status }),
      });

      if (response.ok) {
        await fetchContributions();
      } else {
        const errorData = await response.json();
        alert(`Failed to update contribution: ${errorData.error || "Unknown error"}`);
      }
    } catch (err) {
      if (
        err instanceof Error &&
        "digest" in err &&
        err.digest === "DYNAMIC_SERVER_USAGE"
      ) {
        throw error;
      }

      alert("Failed to update contribution status");
    }
  };

  const toggleVolunteerExpand = (id: string) => {
    const newExpanded = new Set(expandedVolunteers);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedVolunteers(newExpanded);
  };

  const filteredSubmissions = submissions.filter((s) =>
    projectFilter === "all" ? true : s.status === projectFilter
  );

  const filteredVolunteers = volunteers.filter((v) =>
    volunteerFilter === "all" ? true : v.status === volunteerFilter
  );

  const filteredContributions = contributions.filter((c) =>
    contributionFilter === "all" ? true : c.status === contributionFilter
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-green-400 bg-green-900/50 border border-green-800 rounded-full">
            <CheckCircle className="w-3 h-3" />
            Approved
          </span>
        );
      case "rejected":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-red-400 bg-red-900/50 border border-red-800 rounded-full">
            <XCircle className="w-3 h-3" />
            Rejected
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-amber-400 bg-amber-900/50 border border-amber-800 rounded-full">
            <Clock className="w-3 h-3" />
            Pending
          </span>
        );
    }
  };

  const getProjectTypeBadge = (projectType?: "hackathon" | "existing") => {
    if (!projectType) return null;

    if (projectType === "hackathon") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-purple-400 bg-purple-900/50 border border-purple-800 rounded-full">
          <Users className="w-3 h-3" />
          Hackathon Project
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-blue-400 bg-blue-900/50 border border-blue-800 rounded-full">
        <Code className="w-3 h-3" />
        Existing Project
      </span>
    );
  };

  const roleDisplayNames: Record<string, string> = {
    "speaker-coordinator": "Speaker Coordinator",
    emcee: "Emcee/Host",
    "opensource-coordinator": "Open Source Coordinator",
    "judging-committee": "Judging Committee",
    "raffle-committee": "Raffle Committee",
    marketing: "Marketing Team",
    creatives: "Creatives/Design Team",
    photographer: "Photographer",
    socmed: "Social Media Team",
    "tech-team": "Tech Team (Audio/Video)",
    livestreaming: "Livestreaming Team",
    logistics: "Logistics Team",
    registration: "Registration Team",
    any: "Any Role (Flexible)",
  };

  if (loading) {
    return (
      <Card>
        <div className="p-8 text-center text-space-dust">Loading...</div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <div className="p-8 text-center text-red-400">{error}</div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex gap-2 p-1 bg-east-bay/30 rounded-lg border border-blue-violet/30">
        <button
          onClick={() => setActiveTab("projects")}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === "projects"
              ? "bg-lavender text-void"
              : "text-space-dust hover:text-space-white hover:bg-east-bay/50"
          }`}
        >
          <Code className="w-4 h-4" />
          Project Submissions ({submissions.length})
        </button>
        <button
          onClick={() => setActiveTab("contributions")}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === "contributions"
              ? "bg-lavender text-void"
              : "text-space-dust hover:text-space-white hover:bg-east-bay/50"
          }`}
        >
          <GitBranch className="w-4 h-4" />
          Contributions ({contributions.length})
        </button>
        <button
          onClick={() => setActiveTab("volunteers")}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === "volunteers"
              ? "bg-lavender text-void"
              : "text-space-dust hover:text-space-white hover:bg-east-bay/50"
          }`}
        >
          <Users className="w-4 h-4" />
          Volunteer Applications ({volunteers.length})
        </button>
      </div>

      {/* Projects Tab */}
      {activeTab === "projects" && (
        <>
          {/* Filter Tabs */}
          <div className="flex gap-2">
            {(["all", "pending", "approved", "rejected"] as const).map(
              (status) => (
                <button
                  key={status}
                  onClick={() => setProjectFilter(status)}
                  className={`px-4 py-2 rounded-md font-medium capitalize transition-colors ${
                    projectFilter === status
                      ? "bg-melrose text-void"
                      : "bg-east-bay/50 text-space-dust hover:bg-east-bay/70"
                  }`}
                >
                  {status} (
                  {
                    submissions.filter(
                      (s) => status === "all" || s.status === status
                    ).length
                  }
                  )
                </button>
              )
            )}
          </div>

          {/* Submissions List */}
          <div className="space-y-4">
            {filteredSubmissions.length === 0 ? (
              <Card>
                <div className="p-8 text-center text-space-dust">
                  No {projectFilter === "all" ? "" : projectFilter} submissions
                  found.
                </div>
              </Card>
            ) : (
              filteredSubmissions.map((submission) => (
                <Card key={submission.id}>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-space-white">
                            {submission.title}
                          </h3>
                        </div>
                        {submission.projectType && (
                          <div className="mb-2">
                            {getProjectTypeBadge(submission.projectType)}
                          </div>
                        )}
                        <p className="text-sm text-space-dust mb-4">
                          {submission.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <GitBranch className="w-4 h-4 text-lavender mt-0.5" />
                              <div>
                                <span className="text-space-haze">
                                  Repository:{" "}
                                </span>
                                <a
                                  href={submission.repository}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-melrose hover:text-lavender underline"
                                >
                                  {submission.repository}
                                </a>
                              </div>
                            </div>
                            {submission.url && (
                              <div className="flex items-start gap-2">
                                <span className="text-space-haze">Demo: </span>
                                <a
                                  href={submission.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-melrose hover:text-lavender underline"
                                >
                                  {submission.url}
                                </a>
                              </div>
                            )}
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <Mail className="w-4 h-4 text-lavender mt-0.5" />
                              <div>
                                <span className="text-space-haze">Email: </span>
                                <span className="text-space-white">
                                  {submission.email}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Calendar className="w-4 h-4 text-lavender mt-0.5" />
                              <div>
                                <span className="text-space-haze">
                                  Submitted:{" "}
                                </span>
                                <span className="text-space-white">
                                  {new Date(
                                    submission.submittedAt
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">
                        {getStatusBadge(submission.status)}
                      </div>
                    </div>

                    {submission.status === "pending" && (
                      <div className="flex gap-2 pt-4 border-t border-east-bay/50">
                        <button
                          onClick={() =>
                            updateSubmissionStatus(submission.id, "approved")
                          }
                          className="px-4 py-2 bg-green-600/20 text-green-400 border border-green-600/50 rounded-md hover:bg-green-600/30 transition-colors flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Approve
                        </button>
                        <button
                          onClick={() =>
                            updateSubmissionStatus(submission.id, "rejected")
                          }
                          className="px-4 py-2 bg-red-600/20 text-red-400 border border-red-600/50 rounded-md hover:bg-red-600/30 transition-colors flex items-center gap-2"
                        >
                          <XCircle className="w-4 h-4" />
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                </Card>
              ))
            )}
          </div>
        </>
      )}

      {/* Volunteers Tab */}
      {activeTab === "volunteers" && (
        <>
          {/* Filter Tabs */}
          <div className="flex gap-2">
            {(["all", "pending", "approved", "rejected"] as const).map(
              (status) => (
                <button
                  key={status}
                  onClick={() => setVolunteerFilter(status)}
                  className={`px-4 py-2 rounded-md font-medium capitalize transition-colors ${
                    volunteerFilter === status
                      ? "bg-melrose text-void"
                      : "bg-east-bay/50 text-space-dust hover:bg-east-bay/70"
                  }`}
                >
                  {status} (
                  {
                    volunteers.filter(
                      (v) => status === "all" || v.status === status
                    ).length
                  }
                  )
                </button>
              )
            )}
          </div>

          {/* Volunteers List */}
          <div className="space-y-4">
            {filteredVolunteers.length === 0 ? (
              <Card>
                <div className="p-8 text-center text-space-dust">
                  No {volunteerFilter === "all" ? "" : volunteerFilter}{" "}
                  volunteer applications found.
                </div>
              </Card>
            ) : (
              filteredVolunteers.map((volunteer) => (
                <Card key={volunteer.id}>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <User className="w-5 h-5 text-lavender" />
                          <h3 className="text-xl font-bold text-space-white">
                            {volunteer.name}
                          </h3>
                        </div>
                        <div className="mb-4">
                          <span className="inline-flex items-center gap-2 px-3 py-1 bg-lavender/10 border border-lavender/30 rounded-full text-sm font-medium text-lavender">
                            <FileText className="w-3 h-3" />
                            {roleDisplayNames[volunteer.role] || volunteer.role}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <Mail className="w-4 h-4 text-melrose mt-0.5" />
                              <div>
                                <span className="text-space-haze">Email: </span>
                                <span className="text-space-white">
                                  {volunteer.email}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Phone className="w-4 h-4 text-melrose mt-0.5" />
                              <div>
                                <span className="text-space-haze">Phone: </span>
                                <span className="text-space-white">
                                  {volunteer.phone}
                                </span>
                              </div>
                            </div>
                            {volunteer.github && (
                              <div className="flex items-start gap-2">
                                <GitBranch className="w-4 h-4 text-melrose mt-0.5" />
                                <div>
                                  <span className="text-space-haze">
                                    GitHub:{" "}
                                  </span>
                                  <a
                                    href={volunteer.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lavender hover:text-melrose underline"
                                  >
                                    {volunteer.github.replace(
                                      "https://github.com/",
                                      ""
                                    )}
                                  </a>
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <Calendar className="w-4 h-4 text-melrose mt-0.5" />
                              <div>
                                <span className="text-space-haze">
                                  Availability:{" "}
                                </span>
                                <span className="text-space-white">
                                  {volunteer.availability}
                                </span>
                              </div>
                            </div>
                            {volunteer.linkedin && (
                              <div className="flex items-start gap-2">
                                <Linkedin className="w-4 h-4 text-melrose mt-0.5" />
                                <div>
                                  <span className="text-space-haze">
                                    LinkedIn:{" "}
                                  </span>
                                  <a
                                    href={volunteer.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lavender hover:text-melrose underline"
                                  >
                                    Profile
                                  </a>
                                </div>
                              </div>
                            )}
                            <div>
                              <span className="text-space-haze">
                                Submitted:{" "}
                              </span>
                              <span className="text-space-white">
                                {new Date(
                                  volunteer.submittedAt
                                ).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Expandable Details */}
                        <button
                          onClick={() => toggleVolunteerExpand(volunteer.id)}
                          className="mt-4 flex items-center gap-2 text-sm text-lavender hover:text-melrose transition-colors"
                        >
                          {expandedVolunteers.has(volunteer.id) ? (
                            <>
                              <ChevronUp className="w-4 h-4" />
                              Hide Details
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4" />
                              Show Details
                            </>
                          )}
                        </button>

                        {expandedVolunteers.has(volunteer.id) && (
                          <div className="mt-4 space-y-4 p-4 bg-east-bay/30 rounded-lg border border-blue-violet/30">
                            {volunteer.skills && (
                              <div>
                                <h4 className="font-semibold text-melrose mb-1">
                                  Technical Skills:
                                </h4>
                                <p className="text-sm text-space-dust">
                                  {volunteer.skills}
                                </p>
                              </div>
                            )}
                            <div>
                              <h4 className="font-semibold text-melrose mb-1">
                                Experience:
                              </h4>
                              <p className="text-sm text-space-dust whitespace-pre-wrap">
                                {volunteer.experience}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-melrose mb-1">
                                Motivation:
                              </h4>
                              <p className="text-sm text-space-dust whitespace-pre-wrap">
                                {volunteer.motivation}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        {getStatusBadge(volunteer.status)}
                      </div>
                    </div>

                    {volunteer.status === "pending" && (
                      <div className="flex gap-2 pt-4 border-t border-east-bay/50">
                        <button
                          onClick={() =>
                            updateVolunteerStatus(volunteer.id, "approved")
                          }
                          className="px-4 py-2 bg-green-600/20 text-green-400 border border-green-600/50 rounded-md hover:bg-green-600/30 transition-colors flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Approve
                        </button>
                        <button
                          onClick={() =>
                            updateVolunteerStatus(volunteer.id, "rejected")
                          }
                          className="px-4 py-2 bg-red-600/20 text-red-400 border border-red-600/50 rounded-md hover:bg-red-600/30 transition-colors flex items-center gap-2"
                        >
                          <XCircle className="w-4 h-4" />
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                </Card>
              ))
            )}
          </div>
        </>
      )}

      {/* Contributions Tab */}
      {activeTab === "contributions" && (
        <>
          {/* Filter Tabs */}
          <div className="flex gap-2">
            {(["all", "pending", "approved", "rejected"] as const).map(
              (status) => (
                <button
                  key={status}
                  onClick={() => setContributionFilter(status)}
                  className={`px-4 py-2 rounded-md font-medium capitalize transition-colors ${
                    contributionFilter === status
                      ? "bg-melrose text-void"
                      : "bg-east-bay/50 text-space-dust hover:bg-east-bay/70"
                  }`}
                >
                  {status} (
                  {
                    contributions.filter(
                      (c) => status === "all" || c.status === status
                    ).length
                  }
                  )
                </button>
              )
            )}
          </div>

          {/* Contributions List */}
          <div className="space-y-4">
            {filteredContributions.length === 0 ? (
              <Card>
                <div className="p-8 text-center text-space-dust">
                  No {contributionFilter === "all" ? "" : contributionFilter}{" "}
                  contributions found.
                </div>
              </Card>
            ) : (
              filteredContributions.map((contribution) => (
                <Card key={contribution.id}>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-space-white">
                            {contribution.projectName}
                          </h3>
                          {contribution.isLocalProject && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-purple-400 bg-purple-900/50 border border-purple-800 rounded-full">
                              2x Cebu Project
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-space-dust mb-4">
                          {contribution.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <GitBranch className="w-4 h-4 text-lavender mt-0.5" />
                              <div>
                                <span className="text-space-haze">PR: </span>
                                <a
                                  href={contribution.prUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-melrose hover:text-lavender underline break-all"
                                >
                                  {contribution.prUrl}
                                </a>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Code className="w-4 h-4 text-lavender mt-0.5" />
                              <div>
                                <span className="text-space-haze">
                                  Project:{" "}
                                </span>
                                <a
                                  href={contribution.projectUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-melrose hover:text-lavender underline"
                                >
                                  {contribution.projectUrl}
                                </a>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-space-haze">Type: </span>
                              <span className="text-space-white capitalize">
                                {contribution.contributionType}
                              </span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <Mail className="w-4 h-4 text-lavender mt-0.5" />
                              <div>
                                <span className="text-space-haze">Email: </span>
                                <span className="text-space-white">
                                  {contribution.email}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Calendar className="w-4 h-4 text-lavender mt-0.5" />
                              <div>
                                <span className="text-space-haze">
                                  Submitted:{" "}
                                </span>
                                <span className="text-space-white">
                                  {new Date(
                                    contribution.submittedAt
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                            {contribution.points && (
                              <div className="flex items-start gap-2">
                                <span className="text-space-haze">Points: </span>
                                <span className="text-lavender font-semibold">
                                  {contribution.points}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">
                        {getStatusBadge(contribution.status)}
                      </div>
                    </div>

                    {contribution.status === "pending" && (
                      <div className="flex gap-2 pt-4 border-t border-east-bay/50">
                        <button
                          onClick={() =>
                            updateContributionStatus(contribution.id, "approved")
                          }
                          className="px-4 py-2 bg-green-600/20 text-green-400 border border-green-600/50 rounded-md hover:bg-green-600/30 transition-colors flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Approve
                        </button>
                        <button
                          onClick={() =>
                            updateContributionStatus(contribution.id, "rejected")
                          }
                          className="px-4 py-2 bg-red-600/20 text-red-400 border border-red-600/50 rounded-md hover:bg-red-600/30 transition-colors flex items-center gap-2"
                        >
                          <XCircle className="w-4 h-4" />
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                </Card>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}
