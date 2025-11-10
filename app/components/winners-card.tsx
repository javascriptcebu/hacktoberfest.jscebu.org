"use client";

import Link from "next/link";
import { Card } from "./card";
import { generateSlug } from "../projects/utils";

export type WinnerProject = {
  id: string;
  title: string;
  description: string;
  repository: string;
  submittedAt: string;
  status: string;
  year: number;
  slug?: string;
};

// Theme configurations for each award
const AWARD_THEMES = {
  "Best Overall Project": {
    borderColor: "border-yellow-500/50",
    gradient: "from-yellow-500/10 via-purple-500/5 to-transparent",
    glowColor: "rgba(230, 194, 0, 0.2)",
    badgeColor: "bg-yellow-900/80 border border-yellow-500/30",
  },
  "Best Use of AI": {
    borderColor: "border-blue-400/50",
    gradient: "from-blue-400/10 via-purple-500/5 to-transparent",
    glowColor: "rgba(96, 165, 250, 0.2)",
    badgeColor: "bg-blue-900/80 border border-blue-400/30",
  },
  "Best Easter Egg": {
    borderColor: "border-pink-400/50",
    gradient: "from-pink-400/10 via-red-500/5 to-transparent",
    glowColor: "rgba(244, 114, 182, 0.2)",
    badgeColor: "bg-pink-900/80 border border-pink-400/30",
  },
  "Best Use of Blockchain": {
    borderColor: "border-emerald-400/50",
    gradient: "from-emerald-400/10 via-teal-500/5 to-transparent",
    glowColor: "rgba(52, 211, 153, 0.2)",
    badgeColor: "bg-emerald-900/80 border border-emerald-400/30",
  },
  "Best Open Source Contribution": {
    borderColor: "border-green-400/50",
    gradient: "from-green-400/10 via-emerald-500/5 to-transparent",
    glowColor: "rgba(74, 222, 128, 0.2)",
    badgeColor: "bg-green-900/80 border border-green-400/30",
  },
};

type WinnersCardProps = {
  winner: WinnerProject;
  badge: string;
  award: string; // Award type for theming
  size?: "large" | "medium";
};

export function WinnersCard({ winner, badge, award, size = "medium" }: WinnersCardProps) {
  const isLarge = size === "large";
  const slug = winner.slug || generateSlug(winner.title);
  const theme = AWARD_THEMES[award as keyof typeof AWARD_THEMES] || AWARD_THEMES["Best Overall Project"];

  return (
    <div 
      className="transition-all duration-300 hover:scale-[1.02]"
      style={{
        filter: `drop-shadow(0 0 20px ${theme.glowColor})`,
      }}
    >
      <Card 
        className={`
          bg-gradient-to-br ${theme.gradient}
          border-2 ${theme.borderColor}
          relative overflow-hidden
          group h-full
        `}
      >
      <Link href={`/projects/submitted/${slug}`}>
        <article className={`relative w-full h-full p-4 md:p-8`}>
          <div className="flex items-center justify-between gap-2">
            <div className="text-xs text-zinc-100">
              {winner.submittedAt ? (
                <time dateTime={new Date(winner.submittedAt).toISOString()}>
                  {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                    new Date(winner.submittedAt)
                  )}
                </time>
              ) : (
                <span>SOON</span>
              )}
              <span className={`ml-2 text-xs text-zinc-100 ${theme.badgeColor} px-2 py-1 rounded-md`}>
                {badge}
              </span>
            </div>
          </div>

          <h2
            className={`mt-4 font-bold text-zinc-100 group-hover:text-white font-display ${
              isLarge ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
            }`}
          >
            {winner.title}
          </h2>
          <p
            className={`mt-2 text-zinc-400 group-hover:text-zinc-300 ${
              isLarge ? "mt-4 leading-8" : "line-clamp-3"
            }`}
          >
            {winner.description}
          </p>

        </article>
      </Link>
    </Card>
    </div>
  );
}
