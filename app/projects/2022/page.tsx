import { Redis } from "@upstash/redis";
import { allProjects } from "contentlayer/generated";
import ProjectsList from "../past-projects";

const redis = Redis.fromEnv();

const YEAR = 2022;

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

  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        // only include projects from this year
        new Date(project.date ?? Number.POSITIVE_INFINITY).getFullYear() === YEAR
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return <ProjectsList views={views} projects={sorted} year={YEAR} />;
}
