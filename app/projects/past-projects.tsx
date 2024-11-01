import { Card } from "@/app/components/card";
import { Navigation } from "@/app/components/nav";
import { Article } from "@/app/projects/article";
import type { Project } from "contentlayer/generated";

interface ProjectListProps {
  year: number;
  views: Record<string, number>;
  projects: Project[];
  // future ideas: support for hackathon winners, featured projects, etc.
}

export default async function ProjectsList({ year, views, projects }: ProjectListProps) {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Open Source Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            These are the open source projects that were showcased during Cebu Hacktoberfest {year}{" "}
            opening day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, colIndex) => (
            <div key={colIndex} className="grid grid-cols-1 gap-4">
              {projects
                .filter((_, i) => i % 3 === colIndex)
                .map((project) => (
                  <Card key={project.slug}>
                    <Article project={project} views={views[project.slug] ?? 0} />
                  </Card>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
