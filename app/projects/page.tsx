import { Eye } from "lucide-react";
import {
  getApprovedSubmittedProjects,
  getApprovedContributions,
  getProjectViews,
  getProjectsByYear,
} from "./utils";

import { Article } from "./article";
import { Card } from "../components/card";
import { Footer } from "../components/footer";
import Link from "next/link";
import { Metadata } from "next";
import { NavWrapper } from "../components/nav-wrapper";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { SubmittedProjectCard } from "./submitted-project-card";
import { ContributionCard } from "./contribution-card";

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
  const contributions = await getApprovedContributions();

  // Helper function to deduplicate projects by repository URL
  // Keeps the most recent submission for each unique repository
  const deduplicateProjects = (projects: typeof submittedProjects) => {
    const uniqueProjects = new Map<string, typeof submittedProjects[0]>();

    projects.forEach((project) => {
      const repoKey = project.repository.toLowerCase().trim();
      const existing = uniqueProjects.get(repoKey);

      // Keep the most recent submission
      if (!existing || new Date(project.submittedAt) > new Date(existing.submittedAt)) {
        uniqueProjects.set(repoKey, project);
      }
    });

    return Array.from(uniqueProjects.values());
  };

  // Separate and deduplicate hackathon projects
  const hackathonProjectsRaw = submittedProjects.filter(
    (p) => p.projectType === "hackathon"
  );
  const hackathonProjects = deduplicateProjects(hackathonProjectsRaw);

  // Get hackathon project repositories for cross-category deduplication
  const hackathonRepos = new Set(
    hackathonProjects.map((p) => p.repository.toLowerCase().trim())
  );

  // Filter and deduplicate existing projects, excluding any that already appear in hackathon projects
  const existingProjectsRaw = submittedProjects.filter(
    (p) => (p.projectType === "existing" || !p.projectType) &&
    !hackathonRepos.has(p.repository.toLowerCase().trim())
  );
  const existingProjects = deduplicateProjects(existingProjectsRaw);

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
      <NavWrapper />
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

        {/* Hackathon Projects Section */}
        {hackathonProjects.length > 0 && (
          <>
            <div className="hidden w-full h-px md:block bg-zinc-800" />

            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
                Hackathon Projects
              </h2>
              <p className="mt-4 text-base text-zinc-400">
                New projects created for the 20-day hackathon with teams competing for prizes!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-3">
              {hackathonProjects.map((project) => (
                <SubmittedProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}

        {/* Existing Projects Section */}
        {existingProjects.length > 0 && (
          <>
            <div className="hidden w-full h-px md:block bg-zinc-800" />

            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
                Existing Projects Seeking Contributors
              </h2>
              <p className="mt-4 text-base text-zinc-400">
                Open source projects from our community looking for contributors!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-3">
              {existingProjects.map((project) => (
                <SubmittedProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}

        {/* Approved Contributions Section */}
        {contributions.length > 0 && (
          <>
            <div className="hidden w-full h-px md:block bg-zinc-800" />

            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
                Community Contributions
              </h2>
              <p className="mt-4 text-base text-zinc-400">
                Pull requests submitted by our community members during Hacktoberfest {YEAR}.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-3">
              {contributions.map((contribution) => (
                <ContributionCard key={contribution.id} contribution={contribution} />
              ))}
            </div>
          </>
        )}

        {/* Call to Action */}
        {(hackathonProjects.length > 0 || existingProjects.length > 0 || contributions.length > 0) && (
          <Card>
            <div className="p-8 text-center">
              <h3 className="text-xl font-bold text-zinc-100 mb-2">
                Want to participate?
              </h3>
              <p className="text-zinc-400 mb-4">
                Submit your open source project or track your contributions!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/submit"
                  className="inline-flex items-center justify-center px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
                >
                  Submit Your Project →
                </Link>
                <Link
                  href="/contributions"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-violet text-space-white rounded-md font-medium hover:bg-lavender hover:text-void transition-colors"
                >
                  Track Contributions →
                </Link>
              </div>
            </div>
          </Card>
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
