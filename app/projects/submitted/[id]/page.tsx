import { Redis } from "@upstash/redis";
import { notFound } from "next/navigation";
import { Navigation } from "../../../components/nav";
import { Footer } from "../../../components/footer";
import { Card } from "../../../components/card";
import { GitBranch, ExternalLink, User, Calendar, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SubmittedProject } from "../../utils";
import { Metadata } from "next";

const redis = Redis.fromEnv();

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = await getSubmittedProject(params.id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Hacktoberfest Cebu 2025`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://hacktoberfest.jscebu.org/projects/submitted/${project.id}`,
    },
  };
}

async function getSubmittedProject(id: string): Promise<SubmittedProject | null> {
  try {
    const submissionData = await redis.get(`submission:${id}`);
    if (!submissionData) {
      return null;
    }

    const parsed = typeof submissionData === 'string'
      ? JSON.parse(submissionData)
      : submissionData;

    // Only show approved projects
    if (parsed.status !== 'approved') {
      return null;
    }

    return parsed as SubmittedProject;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

export default async function SubmittedProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await getSubmittedProject(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-4xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
              {project.title}
            </h1>
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-green-400 bg-green-900/50 border border-green-800 rounded-full">
              Open for PRs
            </span>
          </div>

          <p className="text-lg text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          {/* Project Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Submitted by {project.submittedBy}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={project.submittedAt}>
                {new Date(project.submittedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            {project.email && (
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href={`mailto:${project.email}`}
                  className="hover:text-zinc-100 transition-colors"
                >
                  Contact maintainer
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Project Links */}
        <Card>
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-zinc-100">Project Links</h2>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <GitBranch className="w-5 h-5 text-zinc-500 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-zinc-500 mb-1">Repository</p>
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 break-all"
                  >
                    {project.repository}
                  </a>
                </div>
              </div>

              {project.url && (
                <div className="flex items-start gap-3">
                  <ExternalLink className="w-5 h-5 text-zinc-500 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-zinc-500 mb-1">Live Demo</p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 break-all"
                    >
                      {project.url}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* How to Contribute */}
        <Card>
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-zinc-100">How to Contribute</h2>
            <ol className="space-y-3 text-zinc-400">
              <li className="flex gap-3">
                <span className="text-lavender font-semibold">1.</span>
                <div>
                  <p className="font-medium text-zinc-300">Fork the repository</p>
                  <p className="text-sm mt-1">Create your own copy of the project on GitHub</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-lavender font-semibold">2.</span>
                <div>
                  <p className="font-medium text-zinc-300">Find an issue or create one</p>
                  <p className="text-sm mt-1">Check the repository's issues tab for tasks to work on</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-lavender font-semibold">3.</span>
                <div>
                  <p className="font-medium text-zinc-300">Create a pull request</p>
                  <p className="text-sm mt-1">Submit your changes for review</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-lavender font-semibold">4.</span>
                <div>
                  <p className="font-medium text-zinc-300">Get it merged</p>
                  <p className="text-sm mt-1">Once approved, your contribution will be part of the project!</p>
                </div>
              </li>
            </ol>
          </div>
        </Card>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
          >
            <GitBranch className="w-5 h-5" />
            View Repository
          </a>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 text-zinc-100 rounded-md font-medium hover:bg-zinc-700 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              View Live Demo
            </a>
          )}
        </div>

        {/* Additional Info */}
        {project.image && (
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-zinc-100 mb-4">Project Preview</h2>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </Card>
        )}
      </div>
      <Footer />
    </div>
  );
}