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
import { WinnersCard } from "../components/winners-card";

import { GithubIcon } from "lucide-react";

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

  // Determine winners from submitted hackathon projects (fall back to placeholders)
  const winners = {
      BestOverall: hackathonProjects.find((p) => p.title.toLowerCase().includes("totoo ba ito")) || {
        id: "placeholder-1",
        title: "Totoo Ba Ito?",
        description: "An AI-powered Product and Industry Verification Checker using the official FDA Datasets",
        repository: "https://github.com/Neil-urk12/totoo-ba",
        submittedAt: "October 22, 2025",
        status: "approved",
        year: 2025,
        awards: ["Best Overall Project"],
      },
      BestBlockchain: hackathonProjects.find((p) => p.title.toLowerCase().includes("barangay konek")) || {
          id: "placeholder-blockchain",
          title: "Barangay Konek",
          description: "Barangay Konek revolutionizes barangay services through AI and blockchain, bringing convenience, transparency, and accessibility to every Filipino.",
          repository: "https://github.com/robwilsoncaldosa/barangay-konek",
          submittedAt: "October 11, 2025",
          status: "approved",
          year: 2025,
          awards: ["Best Use of Blockchain"],
      },
      BestAI: hackathonProjects.find((p) => p.title.toLowerCase().includes("quiz attack")) || {
        id: "placeholder-2",
        title: "Quiz Attack - AI-Powered Quiz Battles",
        description: "A competitive 1v1 quiz battle web app where students challenge each other using AI-generated lectures and quizzes. Built with React, Firebase, and Google Gemini.",
        repository: "https://github.com/EdocEdoc/quiz-atk-prj",
        submittedAt: "October 10, 2025",
        status: "approved",
        year: 2025,
      },
      BestEasterEgg: hackathonProjects.find((p) => p.title.toLowerCase().includes("bayanihancebu")) || {
        id: "placeholder-3",
        title: "BayanihanCebu",
        description: "BayanihanCebu is a blockchain-powered disaster relief platform that enhances transparency, coordination, and accountability during calamities in Cebu. By integrating Laravel’s robust backend with Lisk blockchain technology, it ensures that every donation, request, and transaction is traceable and tamper-proof. This system streamlines coordination among barangays, BDRRMC, and LDRRMO—eliminating duplication, reducing delays, and rebuilding public trust in disaster response operations.",
        repository: "https://github.com/chelsepit/BayanihanCebu.git",
        submittedAt: "October 24, 2025",
        status: "approved",
        year: 2025,
      },
    };
  
  
    const currentYearProjects = getProjectsByYear(allProjects, YEAR);
    const sorted = hackathonProjects.filter(
      (project) =>
        project.id !== winners.BestOverall.id &&
        project.id !== winners.BestAI.id &&
        project.id !== winners.BestEasterEgg.id &&
        project.id !== winners.BestBlockchain.id
    );
  

  // For open-source contribution winner we keep a placeholder until announced
  const contributionWinner = {
    id: "placeholder-contrib",
    title: "To Be Announced",
    description: "Best Open Source Contribution - Winner will be announced soon.",
    repository: "#",
    submittedAt: new Date().toISOString(),
    status: "pending",
    year: YEAR,
  };


  // Featured project - Cebby only
  const featured = allProjects.find((project) => project.slug === "cebby") || allProjects
    .filter((project) => project.published)
    .sort((a, b) => {
      if (new Date(a.date ?? Number.POSITIVE_INFINITY).getTime() > new Date(b.date ?? Number.POSITIVE_INFINITY).getTime()) {
        return -1;
      }
      return 1;
    })[0];

  // const BestBlockchain = allProjects
  //   .filter((project) => project.published)
  //   .sort((a, b) => {
  //     if (new Date(a.date ?? Number.POSITIVE_INFINITY).getTime() > new Date(b.date ?? Number.POSITIVE_INFINITY).getTime()) {
  //       return -1;
  //     }
  //     return 1;
  //   })[1];

  // const BestAI = allProjects
  //   .filter((project) => project.published)
  //   .sort((a, b) => {
  //     if (new Date(a.date ?? Number.POSITIVE_INFINITY).getTime() > new Date(b.date ?? Number.POSITIVE_INFINITY).getTime()) {
  //       return -1;
  //     }
  //     return 1;
  //   })[2];

  return (
    <div className="relative pb-16">
      <NavWrapper />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        {/* Winners Section (highlight hackathon winners) */}
        <div className="max-w-4xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Hackathon Winners
          </h2>
          <p className="mt-4 text-zinc-400">
            Congratulations to the winners of the Hacktoberfest {YEAR} hackathon track!
          </p>
        </div>

        <div className="grid grid-rows-1 gap-8 mx-auto lg:grid-rows-2">
          {/* Best Overall Project - Large Featured Card */}
          <WinnersCard
            winner={winners.BestOverall}
            badge="🏆 Best Overall Project"
            award="Best Overall Project"
            size="large"
          />

          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
             {/* Best Use of Blockchain - Large Card */}
            <WinnersCard
              winner={winners.BestBlockchain}
              badge="⛓️ Best Use of Blockchain"
              award="Best Use of Blockchain"
              size="large"
            />

            {/* Best Use of AI - Medium Card */}
            <WinnersCard
              winner={winners.BestAI}
              badge="🤖 Best Use of AI"
              award="Best Use of AI"
              size="medium"
            />

            {/* Best Easter Egg - Medium Card */}
            <WinnersCard
              winner={winners.BestEasterEgg}
              badge="🎉 Best Easter Egg"
              award="Best Easter Egg"
              size="medium"
            />
          </div>
        </div>

        
        <Card>
          <Link href={`/contributions/best-open-source-contribution/${YEAR}`}>
            <article className="relative w-full h-full mx-2 p-4 md:p-8 transition-all duration-200 hover:scale-[1.01]">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">
                  <time dateTime={new Date(2024, 9, 22).toISOString()}>
                    {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(2024, 9, 22))}
                  </time>
                  <span className="ml-2 text-xs text-zinc-100 bg-blue-900 px-2 py-1 rounded-md">
                    🌟 Best Open Source Contribution
                  </span>
                </div>
              </div>
              
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-zinc-100 group-hover:text-white font-display">
                Best Open Source Contribution Winners
              </h2>
              
              <div className="mt-4 space-y-3">
                <div className="border-l-2 border-blue-500 pl-3">
                  <p className="text-zinc-200 font-medium mb-1">javascriptcebu/hacktoberfest.jscebu.org (PR #31)</p>
                  <p className="text-zinc-400 text-sm">
                    Added a new Criteria page that displays both Contribute and Create evaluation tables side-by-side with an interactive focus/tab.
                  </p>
                </div>
                
                <div className="border-l-2 border-blue-500 pl-3">
                  <p className="text-zinc-200 font-medium mb-1">dotnize/prompt-ui (PR #2)</p>
                  <p className="text-zinc-400 text-sm">
                    Removed required and minLength attributes from the textarea to allow custom toast validation messages to display correctly instead of native browser validation.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-blue-400 hover:text-blue-300 transition-colors">
                  View full details <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </article>
          </Link>
        </Card>

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

        <div className="grid grid-cols-1 gap-8 max-w-2xl">
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
                <p className="mt-4 mb-12 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
