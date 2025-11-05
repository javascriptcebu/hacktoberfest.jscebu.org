"use client";

import { Card } from "./card";
import Link from "next/link";
import { ScrollAnimation } from "./scroll-animation";

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
    icon: "🏆",
    title: "Best Overall Project",
    subtitle: "Totoo Ba Ito?",
    description: "An AI-powered Product and Industry Verification Checker using the official FDA Datasets",
    team: "Neil-urk12",
    bgGradient:
      "bg-gradient-to-br from-green-900/20 to-zinc-800/50 border-green-800/50",
    titleColor: "text-green-400",
  },
  {
    icon: "⛓️",
    title: "Best Use of Blockchain",
    subtitle: "Barangay Konek",
    description: "Revolutionizes barangay services through AI and blockchain, bringing convenience, transparency, and accessibility",
    team: "robwilsoncaldosa",
    bgGradient:
      "bg-gradient-to-br from-orange-900/20 to-zinc-800/50 border-orange-800/50",
    titleColor: "text-orange-400",
  },
  {
    icon: "🤖",
    title: "Best Use of AI",
    subtitle: "Quiz Attack",
    description: "A competitive 1v1 quiz battle web app where students challenge each other using AI-generated lectures and quizzes",
    team: "EdocEdoc",
    bgGradient:
      "bg-gradient-to-br from-blue-900/20 to-zinc-800/50 border-blue-800/50",
    titleColor: "text-blue-400",
  },
  {
    icon: "🎉",
    title: "Best Easter Egg",
    subtitle: "BayanihanCebu",
    description: "A blockchain-powered disaster relief platform that enhances transparency, coordination, and accountability during calamities",
    team: "chelsepit",
    bgGradient:
      "bg-gradient-to-br from-purple-900/20 to-zinc-800/50 border-purple-800/50",
    titleColor: "text-purple-400",
  },
];

export function HomeHighlights() {
  return (
    <section className="py-12">
      <ScrollAnimation animation="fade-up">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-4 text-center">
          🏆 Hacktoberfest 2025 Winners
        </h2>
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" delay={0.1}>
        <p className="text-base sm:text-lg text-zinc-400 text-center max-w-3xl mx-auto mb-12">
          Celebrating our amazing winners from this year's hackathon! These talented developers created incredible projects during our 20-day challenge.
        </p>
      </ScrollAnimation>

      <div className="grid lg:grid-cols-2 gap-6 mb-12">
        {highlights.map((highlight, index) => (
          <ScrollAnimation
            key={index}
            animation="fade-up"
            delay={0.2 + index * 0.1}
          >
            <Card>
              <div className={`p-6 ${highlight.bgGradient}`}>
                <div className="text-3xl mb-3">{highlight.icon}</div>
                <h4
                  className={`text-lg font-semibold ${highlight.titleColor} mb-2`}
                >
                  {highlight.title}
                </h4>
                <p className="text-base text-zinc-100 font-medium mb-1">
                  {highlight.subtitle}
                </p>
                <p className="text-sm text-zinc-400 mb-3">
                  {highlight.description}
                </p>
                <p className="text-zinc-500 text-xs">{highlight.team}</p>
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
                  🌟 Best Open Source Contributions
                </h4>
                <Link target="_blank" rel="noopener noreferrer" href="https://github.com/javascriptcebu/hacktoberfest.jscebu.org/pull/31#issue-3545498769" >
                  <p className="mt-2 text-zinc-200 font-medium mb-2">javascriptcebu/hacktoberfest.jscebu.org (PR #31) </p>
                  <p className="text-zinc-400 text-sm mb-3">
                      Added a new Criteria page that displays both Contribute and Create evaluation tables side-by-side with an interactive focus/tab.
                  </p>
                </Link>
                            
                <Link target="_blank" rel="noopener noreferrer" href="https://github.com/dotnize/prompt-ui/pull/2" >
                  <p className="text-zinc-200 font-medium mb-2 mt-3">dotnize/prompt-ui (PR #2)</p>
                <p className="text-zinc-400 text-sm">
                      Removed required and minLength attributes from the textarea to allow custom toast validation messages to display correctly instead of native browser validation.
                   </p>
                </Link>
              </div>
             
              <div>
                <h4 className="text-base sm:text-lg font-bold text-zinc-100 mb-4">
                  📊 2025 Impact
                </h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 13 open
                    source projects created
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 13 teams
                    participated in the hackathon
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 50+
                    developers engaged
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 14 partner
                    communities involved
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </ScrollAnimation>

      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center px-6 py-3 border border-zinc-700 text-zinc-300 rounded-md font-medium hover:bg-zinc-800 transition-colors"
        >
          View All 2025 Projects →
        </Link>
      </div>
    </section>
  );
}
