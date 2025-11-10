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

type WinnersCardProps = {
  winner: WinnerProject;
  badge: string;
  badgeColor: string;
  size?: "large" | "medium";
};

export function WinnersCard({ winner, badge, badgeColor, size = "medium" }: WinnersCardProps) {
  const isLarge = size === "large";
  const slug = winner.slug || generateSlug(winner.title);

  return (
    <Card>
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
              <span className={`ml-2 text-xs text-zinc-100 ${badgeColor} px-2 py-1 rounded-md`}>
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
  );
}
