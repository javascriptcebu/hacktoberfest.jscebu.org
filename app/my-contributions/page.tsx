import { Metadata } from "next";
import { NavWrapper } from "../components/nav-wrapper";
import { Footer } from "../components/footer";
import { Card } from "../components/card";
import Link from "next/link";
import { GitPullRequest, Calendar, ExternalLink, CheckCircle, Clock, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "My Contributions | Hacktoberfest Cebu 2025",
  description: "Track your open source contributions for Hacktoberfest 2025",
};

// Mock data for now - this should come from an API
const mockContributions = [
  // Empty for now - will be populated when API is ready
];

export default async function MyContributionsPage() {
  const contributions = mockContributions;

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

  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-void via-space-haze/20 to-void">
      <NavWrapper />

      <div className="px-6 pt-20 pb-20 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-space-white sm:text-4xl">
            My Contributions
          </h1>
          <p className="mt-4 text-space-dust">
            Track your pull requests and contributions to open source projects
          </p>
        </div>

        {contributions.length === 0 ? (
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
            {contributions.map((contribution: any) => (
              <Card key={contribution.id}>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-space-white">
                          {contribution.projectTitle}
                        </h3>
                        {getStatusBadge(contribution.status)}
                      </div>
                      <p className="text-space-dust mb-4">{contribution.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <a
                          href={contribution.prUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                        >
                          <ExternalLink className="w-4 h-4" />
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
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}