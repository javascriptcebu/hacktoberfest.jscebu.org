"use client";

import { useEffect, useState } from "react";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { Card } from "../components/card";
import Link from "next/link";
import { GitPullRequest, Calendar, ExternalLink, CheckCircle, Clock, XCircle, Loader2 } from "lucide-react";

interface MyContributionsClientProps {
  isAuthenticated: boolean;
  userEmail?: string;
  userName?: string;
  onSignOut?: () => Promise<void>;
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
}

export function MyContributionsClient({
  isAuthenticated,
  userEmail,
  userName,
  onSignOut,
}: MyContributionsClientProps) {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchContributions();
  }, []);

  const fetchContributions = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/my-contributions", {
        method: "GET",
      });

      if (response.status === 401) {
        // User not authenticated
        window.location.href = "/signin?redirect=/my-contributions";
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to fetch contributions");
      }

      const data = await response.json();
      setContributions(data.contributions || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch contributions");
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      approved: {
        icon: CheckCircle,
        text: "Merged",
        className: "text-green-400 bg-green-900/50 border-green-800",
      },
      pending: {
        icon: Clock,
        text: "Under Review",
        className: "text-yellow-400 bg-yellow-900/50 border-yellow-800",
      },
      rejected: {
        icon: XCircle,
        text: "Closed",
        className: "text-red-400 bg-red-900/50 border-red-800",
      },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    const Icon = config.icon;

    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-full ${config.className}`}>
        <Icon className="w-3 h-3" />
        {config.text}
      </span>
    );
  };

  const getContributionTypeColor = (type: string) => {
    const typeColors: Record<string, string> = {
      "bug-fix": "text-red-400",
      "feature": "text-green-400",
      "documentation": "text-blue-400",
      "testing": "text-purple-400",
      "refactoring": "text-orange-400",
      "other": "text-gray-400"
    };
    return typeColors[type] || "text-gray-400";
  };

  if (loading) {
    return (
      <div className="relative min-h-screen bg-gradient-to-tl from-void via-space-haze/20 to-void">
        <Navigation
          isAuthenticated={isAuthenticated}
          userEmail={userEmail}
          userName={userName}
          onSignOut={onSignOut}
        />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-lavender" />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-void via-space-haze/20 to-void">
      <Navigation
        isAuthenticated={isAuthenticated}
        userEmail={userEmail}
        userName={userName}
        onSignOut={onSignOut}
      />

      <div className="px-6 pt-20 pb-20 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-space-white sm:text-4xl">
            My Contributions
          </h1>
          <p className="mt-4 text-space-dust">
            Track your pull requests and contributions to open source projects
          </p>
        </div>

        {error && (
          <Card>
            <div className="p-6 text-center">
              <p className="text-red-400">{error}</p>
              <button
                onClick={fetchContributions}
                className="mt-4 px-4 py-2 bg-lavender text-void rounded-md hover:bg-melrose transition-colors"
              >
                Try Again
              </button>
            </div>
          </Card>
        )}

        {!error && contributions.length === 0 ? (
          <Card>
            <div className="p-12 text-center">
              <GitPullRequest className="w-12 h-12 mx-auto mb-4 text-space-haze" />
              <h3 className="text-lg font-semibold text-space-white mb-2">
                No contributions yet
              </h3>
              <p className="text-space-dust mb-6">
                Start contributing to open source projects and track your PRs here!
              </p>
              <Link
                href="/contributions"
                className="inline-flex items-center gap-2 px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
              >
                Submit Your First Contribution
              </Link>
            </div>
          </Card>
        ) : (
          <div className="space-y-6">
            {contributions.map((contribution) => (
              <Card key={contribution.id}>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-space-white">
                          {contribution.projectName}
                        </h3>
                        {getStatusBadge(contribution.status)}
                        {contribution.isLocalProject && (
                          <span className="text-xs px-2 py-1 bg-purple-900/50 border border-purple-800 rounded-full text-purple-400">
                            Local Project
                          </span>
                        )}
                      </div>

                      <div className="mb-3">
                        <span className={`text-sm font-medium ${getContributionTypeColor(contribution.contributionType)}`}>
                          {contribution.contributionType.replace("-", " ").charAt(0).toUpperCase() +
                           contribution.contributionType.slice(1).replace("-", " ")}
                        </span>
                      </div>

                      <p className="text-space-dust mb-4">{contribution.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <a
                          href={contribution.prUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                        >
                          <GitPullRequest className="w-4 h-4" />
                          View Pull Request
                        </a>
                        <a
                          href={contribution.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Project Repository
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
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}