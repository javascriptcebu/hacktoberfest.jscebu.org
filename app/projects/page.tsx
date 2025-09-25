import { ExternalLink, Eye, GitBranch, GithubIcon } from "lucide-react";
import {
  getApprovedSubmittedProjects,
  getProjectViews,
  getProjectsByYear,
} from "./utils";

import { Article } from "./article";
import { Card } from "../components/card";
import { Footer } from "../components/footer";
import Link from "next/link";
import { Metadata } from "next";
import { Navigation } from "../components/nav";
import React from "react";
import { allProjects } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Open Source Projects",
  description:
    "Explore open source projects from the Cebu developer community. Submit your projects and contribute to local initiatives during Hacktoberfest 2025.",
  openGraph: {
    title: "Open Source Projects | Hacktoberfest Cebu 2025",
    description:
      "Explore open source projects from the Cebu developer community. Submit your projects and contribute to local initiatives.",
    url: "https://hacktoberfest.jscebu.org/projects",
  },
};

const YEAR = 2025;

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = await getProjectViews(allProjects);
  const submittedProjects = await getApprovedSubmittedProjects();

  const winners = {
    top1: allProjects.find((project) => project.slug === "empty")!,
    top2: allProjects.find((project) => project.slug === "empty")!,
    top3: allProjects.find((project) => project.slug === "empty")!,
  };

  const featured = allProjects.find((project) => project.slug === "cebby")!;
  const top2 = allProjects.find((project) => project.slug === "empty")!;
  const top3 = allProjects.find((project) => project.slug === "empty")!;
  const currentYearProjects = getProjectsByYear(allProjects, YEAR);
  const sorted = currentYearProjects.filter(
    (project) =>
      project.slug !== featured.slug &&
      project.slug !== top2.slug &&
      project.slug !== top3.slug
  );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        {/* <div className="max-w-4xl mx-auto lg:mx-0 hidden">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Open Source Projects Winners
          </h2>
          <p className="mt-4 text-zinc-400">
            Here are the winners of the Open Source Projects during Cebu
            Hacktoberfest {YEAR}...
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2  hidden">
          <Card>
            <Link href={`/projects/${winners.top1.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {winners.top1.date ? (
                      <time
                        dateTime={new Date(winners.top1.date).toISOString()}
                      >
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(winners.top1.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                    <span className="ml-2 text-xs text-zinc-100 bg-green-900 px-2 py-1 rounded-md">
                      Best Overall Project
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[winners.top1.slug] ?? 0
                    )}
                  </span>
                </div>

                <h2
                  id="winners.top1-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {winners.top1.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {winners.top1.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[winners.top2, winners.top3].map((project) => (
              <Card key={project.slug}>
                <Article
                  project={project}
                  views={views[project.slug] ?? 0}
                  badge={
                    project.slug === winners.top2.slug
                      ? "Best Use of AI"
                      : "Most Fun / Best Easter Egg"
                  }
                />
              </Card>
            ))}
          </div>
        </div>

        <Card key={featured.slug}>
          <Link href={"https://github.com/dorelljames/event-ni/pull/5"}>
            <div className="mt-2 flex items-center justify-between gap-2">
              <span className="ml-2 text-xs text-zinc-100 bg-green-900 px-2 py-1 rounded-md">
                Best Overall Contribution
              </span>
            </div>
            <article className="p-4 md:p-8">
              <h2 className="mt-2 z-20 text-xl font-medium duration-1000 lg:text-2xl text-zinc-200 group-hover:text-white font-display">
                <div className="flex items-center justify-center gap-2">
                  <h2>Coming soon</h2>
                  <span className="text-zinc-400">
                    who will this year's winner be?
                  </span>
                </div>
              </h2>
            </article>
          </Link>
        </Card>

        <div className="hidden w-full h-px md:block bg-zinc-800" /> */}
        {/* Submitted Projects Section */}
        {submittedProjects.length > 0 && (
          <>
            <div className="hidden w-full h-px md:block bg-zinc-800" />

            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
                Community Submitted Projects
              </h2>
              <p className="mt-4 text-base text-zinc-400">
                Open source projects submitted by our community members for
                Hacktoberfest {YEAR}. Looking for contributors!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-3">
              {submittedProjects.map((project) => (
                <Card key={project.id}>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white">
                        {project.title}
                      </h3>
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-400 bg-green-900/50 border border-green-800 rounded-full">
                        Open for PRs
                      </span>
                    </div>

                    <p className="text-sm text-zinc-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <GitBranch className="w-4 h-4 text-zinc-500" />
                        <a
                          href={project.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:text-blue-300 truncate"
                        >
                          {project.repository.replace(
                            "https://github.com/",
                            ""
                          )}
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

                    <div className="mt-4 pt-4 border-t border-zinc-800">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-zinc-500">
                          Submitted{" "}
                          {new Date(project.submittedAt).toLocaleDateString()}
                        </span>
                        <div className="flex gap-2">
                          <a
                            href={project.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-zinc-100 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors"
                          >
                            <GithubIcon className="w-3 h-3" />
                            View Repo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-zinc-100 mb-2">
                  Want your project featured here?
                </h3>
                <p className="text-zinc-400 mb-4">
                  Submit your open source project and get contributions from the
                  community!
                </p>
                <Link
                  href="/submit"
                  className="inline-flex items-center justify-center px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
                >
                  Submit Your Project →
                </Link>
              </div>
            </Card>
          </>
        )}

        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            Featured Projects
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            These projects are from our very own local developers here in Cebu,
            PH.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[featured.slug] ?? 0
                    )}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={views[project.slug] ?? 0} />
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
