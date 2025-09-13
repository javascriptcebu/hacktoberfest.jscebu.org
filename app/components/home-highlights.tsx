"use client";

import { Card } from "./card";
import { ScrollAnimation } from "./scroll-animation";
import Link from "next/link";

interface HighlightCard {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  team?: string;
  bgGradient: string;
  titleColor: string;
}

const highlights: HighlightCard[] = [
  {
    icon: "🥇",
    title: "Best Overall Project",
    subtitle: "Varo.dev",
    description: "AI-powered developer matchmaking platform",
    team: "Team Mugnavo: Nathaniel Tampus, Josh Dimpas, Khent Amancio, Marion Buhat",
    bgGradient: "bg-gradient-to-br from-yellow-900/20 to-zinc-800/50 border-yellow-800/50",
    titleColor: "text-yellow-400"
  },
  {
    icon: "🥈",
    title: "Best Use of AI",
    subtitle: "What Can I Cook",
    description: "Recipe suggestions based on available ingredients",
    team: "Team Solucion: Mac Dylan Balagtas, Niño Angelo Balagtas, John Laurence Sison",
    bgGradient: "bg-gradient-to-br from-gray-700/20 to-zinc-800/50 border-gray-600/50",
    titleColor: "text-gray-300"
  },
  {
    icon: "🥉",
    title: "Most Fun / Best Easter Egg",
    subtitle: "Helpful Tooltips Extension",
    description: "Browser extension with humorous security insights",
    team: "Team AI-MARRK: Arcgel Chavez, Rowen Borgonia, Kent Otadoy, Manuel Cando",
    bgGradient: "bg-gradient-to-br from-orange-900/20 to-zinc-800/50 border-orange-800/50",
    titleColor: "text-orange-400"
  }
];

export function HomeHighlights() {
  return (
    <section className="py-12">
      <ScrollAnimation animation="fade-up">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-4 text-center">
          🏆 Hacktoberfest 2024 Highlights
        </h2>
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" delay={0.1}>
        <p className="text-base sm:text-lg text-zinc-400 text-center max-w-3xl mx-auto mb-12">
          Last year was incredible! Over 100 developers, 25+ teams, and
          10 amazing open source projects created in just 21 days.
        </p>
      </ScrollAnimation>

      <div className="grid lg:grid-cols-3 gap-6 mb-12">
        {highlights.map((highlight, index) => (
          <ScrollAnimation key={index} animation="fade-up" delay={0.2 + index * 0.1}>
            <Card>
              <div className={`p-6 ${highlight.bgGradient}`}>
                <div className="text-3xl mb-3">{highlight.icon}</div>
                <h4 className={`text-lg font-semibold ${highlight.titleColor} mb-2`}>
                  {highlight.title}
                </h4>
                <p className="text-base text-zinc-100 font-medium mb-1">
                  {highlight.subtitle}
                </p>
                <p className="text-sm text-zinc-400 mb-3">
                  {highlight.description}
                </p>
                <p className="text-zinc-500 text-xs">
                  {highlight.team}
                </p>
              </div>
            </Card>
          </ScrollAnimation>
        ))}
      </div>

      <ScrollAnimation animation="fade-up" delay={0.5}>
        <Card>
          <div className="p-8 bg-gradient-to-r from-green-900/10 to-zinc-800/30">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-green-400 mb-4">
                  🌟 Best Overall Contribution
                </h4>
                <p className="text-zinc-200 font-medium mb-2">
                  dorelljames/event-ni (PR #5)
                </p>
                <p className="text-zinc-400 text-sm">
                  Implemented Sort by Month and Year Feature for better
                  event organization
                </p>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-zinc-100 mb-4">
                  📊 2024 Impact
                </h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 10 open
                    source projects created
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 25+ teams
                    participated in the hackathon
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 100+
                    developers engaged
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 15+
                    partner communities involved
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </ScrollAnimation>

      <div className="mt-8 text-center">
        <Link
          href="/projects/2024"
          className="inline-flex items-center justify-center px-6 py-3 border border-zinc-700 text-zinc-300 rounded-md font-medium hover:bg-zinc-800 transition-colors"
        >
          View All 2024 Projects →
        </Link>
      </div>
    </section>
  );
}