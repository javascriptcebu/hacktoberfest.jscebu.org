import { notFound } from "next/navigation";
import { NavWrapper } from "../../../components/nav-wrapper";
import { Footer } from "../../../components/footer";
import { Card } from "../../../components/card";
import { WinnerBanner } from "../../../components/winner-banner";
import { AwardThemeWrapper } from "../../../components/award-theme-wrapper";
import { ThemedBackButton } from "../../../components/themed-back-button";
import { GitBranch, ExternalLink, User, Calendar, Mail, ArrowLeft, Users, Github } from "lucide-react";
import Link from "next/link";
import { SubmittedProject, getSubmittedProjectBySlug, generateSlug } from "../../utils";
import { Metadata } from "next";

// Static mapping of project titles to video URLs
const PROJECT_VIDEO_MAPPING: { [key: string]: string } = {
  "bayanihancebu": "https://youtu.be/riHq0HgD0iA",
  "barangay konek": "https://youtu.be/qRyh4UJRBvI",
  "the_adaptifork": "https://youtu.be/alLE0aPBeuc",
  "sabot": "https://youtu.be/SOUhmg-Kqlo",
  "finding dormy": "https://youtu.be/QJYk7eg1DGE",
  "trustchain": "https://youtu.be/hPOnchVn22I",
  "totoo ba ito": "https://youtu.be/CbO9pHo4uVQ",
  "marshal": "https://youtu.be/Qo1ETgeX6QY",
};

// Static mapping of project titles to winner photos
const PROJECT_PHOTO_MAPPING: { [key: string]: string } = {
  "totoo ba ito": "/images/winners/2025/totoo-ba-ito-team.png",
  "barangay konek": "/images/winners/2025/barangay-konek-team.png",
  "quiz attack": "/images/winners/2025/quiz-attack-team.png",
  "bayanihancebu": "/images/winners/2025/bayanihancebu-team.png",
};

// Helper function to get video URL for a project
function getVideoUrlForProject(title: string): string | undefined {
  const normalizedTitle = title.toLowerCase().trim();
  
  // Direct match first
  if (PROJECT_VIDEO_MAPPING[normalizedTitle]) {
    return PROJECT_VIDEO_MAPPING[normalizedTitle];
  }
  
  // Check if title contains any of the mapped keys
  for (const [key, url] of Object.entries(PROJECT_VIDEO_MAPPING)) {
    if (normalizedTitle.includes(key) || key.includes(normalizedTitle)) {
      return url;
    }
  }
  
  return undefined;
}

// Helper function to get winner photo URL for a project
function getWinnerPhotoForProject(title: string): string | undefined {
  const normalizedTitle = title.toLowerCase().trim();
  
  // Direct match first
  if (PROJECT_PHOTO_MAPPING[normalizedTitle]) {
    return PROJECT_PHOTO_MAPPING[normalizedTitle];
  }
  
  // Check if title contains any of the mapped keys
  for (const [key, url] of Object.entries(PROJECT_PHOTO_MAPPING)) {
    if (normalizedTitle.includes(key) || key.includes(normalizedTitle)) {
      return url;
    }
  }
  
  return undefined;
}

// Helper function to convert YouTube URL to embed format
function getYouTubeEmbedUrl(url: string): string {
  return url
    .replace('youtu.be/', 'youtube.com/embed/')
    .replace('watch?v=', 'embed/')
    .replace('youtube.com/embed/embed/', 'youtube.com/embed/');
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = await getSubmittedProjectBySlug(params.slug);

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
      url: `https://hacktoberfest.jscebu.org/projects/submitted/${project.slug || generateSlug(project.title)}`,
    },
  };
}

export default async function SubmittedProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getSubmittedProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Get video URL from mapping or from project data
  const videoUrl = project.videoUrl || getVideoUrlForProject(project.title);
  
  // Get winner photo from static mapping or from project data
  const winnerPhoto = project.winnerPhoto || getWinnerPhotoForProject(project.title);
  
  // Determine submitter display name:
  // Prefer GitHub handle of lead team member, then name of lead,
  // then the email local-part, then the raw submittedBy value.
  const submitterDisplay = (() => {
    if (project.teamMembers && project.teamMembers.length > 0) {
      const lead = project.teamMembers.find((m) => /lead/i.test(m.role)) || project.teamMembers[0];
      if (lead.github) return `${lead.github}`;
      if (lead.name) return lead.name;
    }
    if (project.submittedBy && project.submittedBy.includes("@")) {
      return project.submittedBy.split("@")[0];
    }
    return project.submittedBy;
  })();

  return (
    <AwardThemeWrapper awards={project.awards}>
      <div 
        className="relative pb-16"
        style={project.awards && project.awards.length > 0 ? {
          background: 'var(--award-gradient, linear-gradient(135deg, rgba(160, 160, 255, 0.05) 0%, rgba(90, 90, 181, 0.02) 100%))'
        } : undefined}
      >
        <NavWrapper />
        <div className="px-6 pt-20 mx-auto space-y-8 max-w-4xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        {/* Back Button */}
        <ThemedBackButton hasAward={!!(project.awards && project.awards.length > 0)} />

        {/* Winner Banner - shown if project has awards */}
        {project.awards && project.awards.length > 0 && (
          <WinnerBanner awards={project.awards} />
        )}

        {/* Winner Photo Hero - shown if winner photo exists */}
        {winnerPhoto && project.awards && project.awards.length > 0 && (
          <Card>
            <div className="relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  background: 'var(--award-gradient, linear-gradient(135deg, rgba(160, 160, 255, 0.3) 0%, rgba(90, 90, 181, 0.1) 100%))'
                }}
              />
              <div className="relative p-6 md:p-8">
                <h2 className="text-2xl font-bold text-zinc-100 mb-4 text-center">
                  🎉 Meet the Winners 🎉
                </h2>
                <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden border-2 award-glow"
                  style={{
                    borderColor: 'var(--award-primary, rgba(160, 160, 255, 0.5))'
                  }}
                >
                  <img
                    src={winnerPhoto}
                    alt={`${project.title} - Award Winners Team Photo`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Project Header */}
        <div className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <h1 
              className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl"
              style={project.awards && project.awards.length > 0 ? {
                textShadow: '0 0 30px var(--award-glow, rgba(160, 160, 255, 0.3))'
              } : undefined}
            >
              {project.title}
            </h1>
            {project.projectType !== "hackathon" && (
              <span className="flex-shrink-0 inline-flex items-center px-3 py-1 text-sm font-medium text-green-400 bg-green-900/50 border border-green-800 rounded-full">
                Open for PRs
              </span>
            )}
          </div>

          <p className="text-lg text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          {/* Special Note */}
          {project.specialNote && (
            <div className="p-4 bg-lavender/10 rounded-lg border border-lavender/20">
              <p className="text-sm font-semibold text-lavender mb-2">Special Note from Maintainer:</p>
              <p className="text-zinc-300 break-words">{project.specialNote}</p>
            </div>
          )}

          {/* Project Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Submitted by {submitterDisplay}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={project.submittedAt}>
                {new Date(project.submittedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  timeZone: 'Asia/Manila'
                })}
              </time>
            </div>
            {project.email && (
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a
                  href={`${project.repository}`} target="_blank"
                  className="hover:text-zinc-100 transition-colors"
                >
                  Repository
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
                    className="break-all transition-colors"
                    style={{
                      color: project.awards && project.awards.length > 0
                        ? 'var(--award-primary, #60a5fa)' // Award color (blueish)
                        : '#ffffff' // White color if no award
                    }}
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
                      className="break-all transition-colors"
                      style={{
                      color: project.awards && project.awards.length > 0
                        ? 'var(--award-primary, #60a5fa)' // Award color (blueish)
                        : '#ffffff' // White color if no award
                    }}
                    >
                      {project.url}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Project Video */}
        {videoUrl && (
          <Card>
            <div className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-zinc-100">Project Demo Video</h2>
              <div className="aspect-video w-full">
                <iframe
                  src={getYouTubeEmbedUrl(videoUrl)}
                  title={`${project.title} Demo Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg border-0"
                />
              </div>
            </div>
          </Card>
        )}

        {/* Team Members */}
        {project.projectType === "hackathon" && project.teamMembers && project.teamMembers.length > 0 && (
          <Card>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-lavender" />
                <h2 className="text-xl font-semibold text-zinc-100">Team Members</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-lavender/30 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-lavender" />
                        <span className="font-medium text-zinc-100">{member.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-md font-medium ${
                        index === 0
                          ? "bg-lavender/20 text-lavender border border-lavender/30"
                          : "bg-zinc-800 text-zinc-400"
                      }`}>
                        {member.role || `Member ${index + 1}`}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm">
                      {/* <div className="flex items-center gap-2 text-zinc-400">
                        <Mail className="w-3 h-3" />
                        <a
                          href={`mailto:${member.email}`}
                          className="hover:text-zinc-100 transition-colors"
                        >
                          {member.email}
                        </a>
                      </div> */}

                      {member.github && (
                        <div className="flex items-center gap-2 text-zinc-400">
                          <GitBranch className="w-3 h-3" />
                          <a
                            href={`https://github.com/${member.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-zinc-100 transition-colors"
                          >
                            @{member.github}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        )}

        {/* How to Contribute (only for existing projects) */}
        {project.projectType !== "hackathon" && (
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
        )}

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
    </AwardThemeWrapper>
  );
}