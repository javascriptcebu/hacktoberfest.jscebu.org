"use client";

import { Card } from "./card";
import { Trophy, Sparkles } from "lucide-react";

interface WinnerBannerProps {
  awards?: string | string[]; // allow string or array
}

// Map award names to their icons and colors
const AWARD_CONFIG: Record<string, { icon: string; gradient: string; borderColor: string }> = {
  "Best Overall Project": {
    icon: "🏆",
    gradient: "from-yellow-500/20 via-amber-500/10 to-orange-500/20",
    borderColor: "border-yellow-500/50",
  },
  "Best Use of AI": {
    icon: "🤖",
    gradient: "from-blue-500/20 via-purple-500/10 to-indigo-500/20",
    borderColor: "border-blue-500/50",
  },
  "Best Easter Egg": {
    icon: "🎮",
    gradient: "from-pink-500/20 via-rose-500/10 to-red-500/20",
    borderColor: "border-pink-500/50",
  },
  "Best Use of Blockchain": {
    icon: "⛓️",
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    borderColor: "border-emerald-500/50",
  },
  "Best Open Source Contribution": {
    icon: "🌟",
    gradient: "from-green-500/20 via-lime-500/10 to-emerald-500/20",
    borderColor: "border-green-500/50",
  },
};

export function WinnerBanner({ awards }: WinnerBannerProps) {
  const awardList = Array.isArray(awards)
    ? awards
    : typeof awards === "string"
    ? [awards]
    : [];

  if (awardList.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {awardList.map((award, index) => {
        const config = AWARD_CONFIG[award] || {
          icon: "🏅",
          gradient: "from-purple-500/20 via-violet-500/10 to-indigo-500/20",
          borderColor: "border-purple-500/50",
        };

        return (
          <Card key={index}>
            <div
              className={`relative overflow-hidden bg-gradient-to-r ${config.gradient} border-2 ${config.borderColor} p-6 sm:p-8`}
            >
              {/* Sparkle decorations */}
              <div className="absolute top-4 right-4 animate-pulse">
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="absolute bottom-4 left-4 animate-pulse delay-75">
                <Sparkles className="w-5 h-5 text-yellow-300 opacity-70" />
              </div>

              {/* Main content */}
              <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                {/* Trophy icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-zinc-900/50 rounded-full border-2 border-zinc-700/50 backdrop-blur">
                    <span className="text-4xl sm:text-5xl">{config.icon}</span>
                  </div>
                </div>

                {/* Award info */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <span className="text-xs sm:text-sm font-bold text-yellow-400 uppercase tracking-wider">
                      Winner
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-100 mb-1">
                    {award}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400">
                    Hacktoberfest Cebu 2025
                  </p>
                </div>

                {/* Decorative badge */}
                <div className="hidden lg:block flex-shrink-0">
                  <div className="px-4 py-2 bg-zinc-900/70 rounded-full border border-zinc-700/50 backdrop-blur">
                    <span className="text-sm font-semibold text-zinc-100">
                      🎉 Awarded
                    </span>
                  </div>
                </div>
              </div>

              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer pointer-events-none"></div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
