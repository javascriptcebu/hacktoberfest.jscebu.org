"use client";

import { ExternalLink, GitBranch, GithubIcon } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import { SubmittedProject } from "./utils";

export function SubmittedProjectCard({ project }: { project: SubmittedProject }) {
  return (
    <Card>
      <Link href={`/projects/submitted/${project.id}`}>
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white">
              {project.title}
            </h3>
            {project.projectType !== "hackathon" && (
              <span className="flex-shrink-0 inline-flex items-center px-3 py-1 text-sm font-medium text-green-400 bg-green-900/50 border border-green-800 rounded-full">
                Open for PRs
              </span>
            )}
          </div>

          <p className="text-sm text-zinc-400 mb-4 line-clamp-3">
            {project.description}
          </p>

          {project.specialNote && (
            <div className="mb-4 p-2 bg-lavender/10 rounded border border-lavender/20">
              <p className="text-xs text-zinc-300 line-clamp-2">{project.specialNote}</p>
            </div>
          )}

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-zinc-500" />
              <span className="text-sm text-blue-400 hover:text-blue-300 truncate">
                {project.repository.replace("https://github.com/", "")}
              </span>
            </div>

            {project.url && (
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-zinc-500" />
                <span className="text-sm text-blue-400 hover:text-blue-300 truncate">
                  Live Demo
                </span>
              </div>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-zinc-800">
            <div className="flex items-center justify-between">
              <span className="text-xs text-zinc-500">
                Submitted {new Date(project.submittedAt).toLocaleDateString()}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.repository, "_blank");
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-zinc-100 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors"
                >
                  <GithubIcon className="w-3 h-3" />
                  View Repo
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
}