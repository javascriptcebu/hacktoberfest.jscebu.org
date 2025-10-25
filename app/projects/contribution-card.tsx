"use client";

import { ExternalLink, GitBranch, Star } from "lucide-react";
import { Card } from "../components/card";
import { ApprovedContribution } from "./utils";

export function ContributionCard({
  contribution,
}: {
  contribution: ApprovedContribution;
}) {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-zinc-100">
            {contribution.projectName}
          </h3>
          {contribution.isLocalProject && (
            <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-purple-400 bg-purple-900/50 border border-purple-800 rounded-full">
              <Star className="w-3 h-3" />
              2x Cebu
            </span>
          )}
        </div>

        <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
          {contribution.description}
        </p>

        <div className="mb-3">
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-400 bg-blue-900/50 border border-blue-800 rounded-full capitalize">
            {contribution.contributionType.replace("-", " ")}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-zinc-500 flex-shrink-0" />
            <a
              href={contribution.prUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sm text-blue-400 hover:text-blue-300 truncate"
            >
              {contribution.prUrl.split("/").slice(-2).join("/")}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-zinc-500 flex-shrink-0" />
            <a
              href={contribution.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sm text-blue-400 hover:text-blue-300 truncate"
            >
              {contribution.projectUrl.replace("https://github.com/", "")}
            </a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-zinc-800">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-500">
              Submitted {new Date(contribution.submittedAt).toLocaleDateString()}
            </span>
            {contribution.points && (
              <span className="text-xs font-semibold text-lavender">
                {contribution.points} pts
              </span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
