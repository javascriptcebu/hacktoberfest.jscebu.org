import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye, GithubIcon } from "lucide-react";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":"))
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const winners = {
    top1: allProjects.find((project) => project.slug === "varo-dev")!,
    top2: allProjects.find((project) => project.slug === "what-can-i-cook")!,
    top3: allProjects.find(
      (project) => project.slug === "helpful-tooltips-extension"
    )!,
  };

  const featured = allProjects.find((project) => project.slug === "cebevents")!;
  const top2 = allProjects.find(
    (project) => project.slug === "ph-startup-org"
  )!;
  const top3 = allProjects.find((project) => project.slug === "reflect-php")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Open Source Projects Winners
          </h2>
          <p className="mt-4 text-zinc-400">
            Here are the winners of the Open Source Projects during Cebu
            Hacktoberfest 2024...
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
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
          <Link href={`https://github.com/dorelljames/event-ni/pull/5`}>
            <div className="mt-2 flex items-center justify-between gap-2">
              <span className="ml-2 text-xs text-zinc-100 bg-green-900 px-2 py-1 rounded-md">
                Best Overall Contribution
              </span>
            </div>
            <article className="p-4 md:p-8">
              <h2 className="mt-2 z-20 text-xl font-medium duration-1000 lg:text-2xl text-zinc-200 group-hover:text-white font-display">
                <div className="flex items-center justify-center gap-2">
                  <GithubIcon /> dorelljames/event-ni → (PR #5: Sort by Month
                  and Year Feature)
                </div>
              </h2>
            </article>
          </Link>
        </Card>

        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="max-w-4xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Open Source Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            These are the open source projects that were initiated during Cebu
            Hacktoberfest 2024 opening day. See above list for winners...
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, colIndex) => (
            <div key={colIndex} className="grid grid-cols-1 gap-4">
              {sorted
                .filter((_, i) => i % 3 === colIndex)
                .map((project) => (
                  <Card key={project.slug}>
                    <Article
                      project={project}
                      views={views[project.slug] ?? 0}
                    />
                  </Card>
                ))}
            </div>
          ))}
        </div>

        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Noteworthy Projects
          </h2>
          <p className="mt-4 text-zinc-400">
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
    </div>
  );
}
