import { NavWrapper } from "../../components/nav-wrapper";
import { Footer } from "../../components/footer";
import { Card } from "../../components/card";
import { WinnerBanner } from "../../components/winner-banner";
import { AwardThemeWrapper } from "../../components/award-theme-wrapper";
import { ThemedBackButton } from "../../components/themed-back-button";
import { Trophy, GitBranch, ExternalLink, User, Calendar, Github, Award } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Open Source Contribution Winners | Hacktoberfest Cebu 2025",
  description: "Celebrating the outstanding open source contributions at Hacktoberfest Cebu 2025",
  openGraph: {
    title: "Best Open Source Contribution Winners | Hacktoberfest Cebu 2025",
    description: "Celebrating the outstanding open source contributions at Hacktoberfest Cebu 2025",
    url: "https://hacktoberfest.jscebu.org/contributions/best-open-source-contribution",
  },
};

// Define the two winners for Best Open Source Contribution
const winners = [
  {
    name: "Neil Kalman Alfeche",
    github: "neilveil",
    contribution: "dorelljames/event-ni",
    prUrl: "https://github.com/dorelljames/event-ni/pull/5",
    prTitle: "Sort by Month and Year Feature",
    description: "Implemented a sophisticated sorting feature that enhances event discovery by allowing users to filter events by month and year. This contribution significantly improved the user experience and navigation of the platform.",
    submittedAt: "2024-10-15",
    photo: "/images/winners/2025/yuriiAndNeil.png", // Placeholder - update with actual photo
  },
];

export default function BestOpenSourceContributionPage() {
  const award = "Best Open Source Contribution";
  
  return (
    <AwardThemeWrapper awards={[award]}>
      <div 
        className="relative pb-16"
        style={{
          background: 'var(--award-gradient, linear-gradient(135deg, rgba(160, 160, 255, 0.05) 0%, rgba(90, 90, 181, 0.02) 100%))'
        }}
      >
        <NavWrapper />
        <div className="px-6 pt-20 mx-auto space-y-8 max-w-6xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          {/* Back Button */}
          <ThemedBackButton hasAward={true} />

          {/* Winner Banner */}
          <WinnerBanner awards={[award]} />

          {/* Page Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Trophy 
                className="w-12 h-12"
                style={{ color: 'var(--award-primary, #fbbf24)' }}
              />
              <h1 
                className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100"
                style={{
                  textShadow: '0 0 30px var(--award-glow, rgba(160, 160, 255, 0.3))'
                }}
              >
                Best Open Source Contribution
              </h1>
              <Trophy 
                className="w-12 h-12"
                style={{ color: 'var(--award-primary, #fbbf24)' }}
              />
            </div>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              Celebrating exceptional contributors who went above and beyond in the open source community during Hacktoberfest Cebu 2025.
            </p>
          </div>

          {/* Winners Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {winners.map((winner, index) => (
              <Card key={index}>
                <div className="p-6 md:p-8 space-y-6">
                  {/* Winner Photo */}
                  {winner.photo && (
                    <div className="relative w-full aspect-square md:aspect-video rounded-xl overflow-hidden border-2 award-glow"
                      style={{
                        borderColor: 'var(--award-primary, rgba(160, 160, 255, 0.5))'
                      }}
                    >
                      <img
                        src={winner.photo}
                        alt={`${winner.name} - Best Open Source Contribution Winner`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Winner Info */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold text-zinc-100 mb-2">
                          {winner.name}
                        </h2>
                        <div className="flex items-center gap-2 text-zinc-400">
                          <Github className="w-4 h-4" />
                          <a
                            href={`https://github.com/${winner.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-zinc-100 transition-colors"
                            style={{
                              color: 'var(--award-primary, #60a5fa)'
                            }}
                          >
                            @{winner.github}
                          </a>
                        </div>
                      </div>
                      <Award 
                        className="w-8 h-8 flex-shrink-0"
                        style={{ color: 'var(--award-primary, #fbbf24)' }}
                      />
                    </div>

                    {/* Contribution Details */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-500 mb-1">Contribution</h3>
                        <p className="text-zinc-300">{winner.prTitle}</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-zinc-500 mb-1">Project</h3>
                        <p className="text-zinc-300">{winner.contribution}</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-zinc-500 mb-1">Impact</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                          {winner.description}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-zinc-800">
                      <a
                        href={winner.prUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors"
                        style={{
                          backgroundColor: 'var(--award-primary, rgba(96, 165, 250, 0.2))',
                          color: 'var(--award-primary, #60a5fa)',
                          border: '1px solid var(--award-primary, rgba(96, 165, 250, 0.5))'
                        }}
                      >
                        <GitBranch className="w-4 h-4" />
                        View Contribution
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Recognition Section */}
          <Card>
            <div className="p-8 space-y-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div 
                  className="w-12 h-1 rounded-full"
                  style={{ backgroundColor: 'var(--award-primary, #fbbf24)' }}
                />
                <Trophy 
                  className="w-8 h-8"
                  style={{ color: 'var(--award-primary, #fbbf24)' }}
                />
                <div 
                  className="w-12 h-1 rounded-full"
                  style={{ backgroundColor: 'var(--award-primary, #fbbf24)' }}
                />
              </div>
              
              <h2 className="text-2xl font-bold text-zinc-100">
                What Makes a Great Open Source Contribution?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="space-y-2">
                  <div className="text-3xl">💡</div>
                  <h3 className="font-semibold text-zinc-200">Innovation</h3>
                  <p className="text-sm text-zinc-400">
                    Bringing creative solutions to real problems
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl">🤝</div>
                  <h3 className="font-semibold text-zinc-200">Community Impact</h3>
                  <p className="text-sm text-zinc-400">
                    Making the project better for everyone
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl">⭐</div>
                  <h3 className="font-semibold text-zinc-200">Quality & Care</h3>
                  <p className="text-sm text-zinc-400">
                    Thoughtful code and thorough documentation
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  These winners exemplify the spirit of open source: collaboration, innovation, 
                  and dedication to making technology accessible to all. Their contributions have 
                  made a lasting impact on the community.
                </p>
              </div>
            </div>
          </Card>

          {/* CTA Section */}
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-zinc-100">
              Inspired to contribute?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
              >
                Browse Open Source Projects
              </Link>
              <Link
                href="/contributions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 text-zinc-100 rounded-md font-medium hover:bg-zinc-700 transition-colors"
              >
                View All Contributions
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </AwardThemeWrapper>
  );
}
