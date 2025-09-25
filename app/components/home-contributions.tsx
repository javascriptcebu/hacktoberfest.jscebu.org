"use client";

import { Card } from "./card";
import Link from "next/link";
import { ScrollAnimation } from "./scroll-animation";

interface HomeContributionsProps {
  isAuthenticated: boolean;
}

export function HomeContributions({
  isAuthenticated,
}: HomeContributionsProps) {
  return (
    <section className="py-12">
      <ScrollAnimation animation="fade-up">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-4 text-center">
          🌟 Open Source Contributions
        </h2>
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" delay={0.1}>
        <p className="text-base sm:text-lg text-zinc-400 text-center max-w-3xl mx-auto mb-12">
          Make your mark in the open source community!{" "}
          <span className="text-zinc-200 font-semibold">
            Contributions to Cebu-based projects count double
          </span>{" "}
          towards recognition.
        </p>
      </ScrollAnimation>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <ScrollAnimation animation="fade-up" delay={0.2}>
          <Card>
            <div className="p-6 bg-gradient-to-br from-blue-900/20 to-zinc-800/50 border border-blue-800/30">
              <div className="text-2xl mb-3">🏆</div>
              <h4 className="text-lg font-bold text-blue-400 mb-2">
                Best Local Contribution
              </h4>
              <p className="text-zinc-300 text-sm mb-2">
                Award for the best contribution to a Cebu-based open source
                project
              </p>
              <p className="text-zinc-500 text-xs">
                Priority given to projects submitted during Hacktoberfest
              </p>
            </div>
          </Card>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={0.3}>
          <Card>
            <div className="p-6 bg-gradient-to-br from-purple-900/20 to-zinc-800/50 border border-purple-800/30">
              <div className="text-2xl mb-3">🔥</div>
              <h4 className="text-lg font-bold text-purple-400 mb-2">
                Most Contributed Project
              </h4>
              <p className="text-zinc-300 text-sm mb-2">
                Recognition for the submitted project that receives the most
                contributions
              </p>
              <p className="text-zinc-500 text-xs">
                Great for project maintainers!
              </p>
            </div>
          </Card>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={0.4}>
          <Card>
            <div className="p-6 bg-gradient-to-br from-green-900/20 to-zinc-800/50 border border-green-800/30">
              <div className="text-2xl mb-3">⭐</div>
              <h4 className="text-lg font-bold text-green-400 mb-2">
                Top Contributor
              </h4>
              <p className="text-zinc-300 text-sm mb-2">
                Most impactful contributor across all projects
              </p>
              <p className="text-zinc-500 text-xs">Quality over quantity</p>
            </div>
          </Card>
        </ScrollAnimation>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollAnimation animation="fade-up" delay={0.5}>
          <Card>
            <div className="p-8">
              <h4 className="text-xl font-bold text-zinc-100 mb-4">
                What Counts More?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">⭐⭐</span>
                  <div>
                    <p className="text-zinc-300 font-medium">
                      Local Project Contributions
                    </p>
                    <p className="text-zinc-500 text-sm">
                      PRs to Cebu-based projects score more points! Support your
                      local dev community
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <p className="text-zinc-300 font-medium">
                      Code Contributions
                    </p>
                    <p className="text-zinc-500 text-sm">
                      Bug fixes, new features, performance improvements
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <p className="text-zinc-300 font-medium">Documentation</p>
                    <p className="text-zinc-500 text-sm">
                      README improvements, API docs, tutorials
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <p className="text-zinc-300 font-medium">
                      Design & Translations
                    </p>
                    <p className="text-zinc-500 text-sm">
                      UI/UX improvements, logos, localizations
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Card>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={0.6}>
          <Card>
            <div className="p-8">
              <h4 className="text-xl font-bold text-zinc-100 mb-4">
                How to Win
              </h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-zinc-400 font-bold mr-3">1.</span>
                  <div>
                    <p className="text-zinc-300 font-medium">Start Local</p>
                    <p className="text-zinc-500 text-sm">
                      Check out projects submitted by Cebu developers first
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-zinc-400 font-bold mr-3">2.</span>
                  <div>
                    <p className="text-zinc-300 font-medium">
                      Quality Over Quantity
                    </p>
                    <p className="text-zinc-500 text-sm">
                      One meaningful PR beats ten trivial ones
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-zinc-400 font-bold mr-3">3.</span>
                  <div>
                    <p className="text-zinc-300 font-medium">
                      Engage & Collaborate
                    </p>
                    <p className="text-zinc-500 text-sm">
                      Work with maintainers, help other contributors
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-zinc-400 font-bold mr-3">4.</span>
                  <div>
                    <p className="text-zinc-300 font-medium">
                      Submit Your Project
                    </p>
                    <p className="text-zinc-500 text-sm">
                      Get contributions and compete for Most Contributed Project
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </ScrollAnimation>
      </div>

      <ScrollAnimation animation="fade-up" delay={0.7}>
        <div className="mt-8">
          <Card>
            <div className="p-8 bg-gradient-to-r from-zinc-800/50 to-zinc-800/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold text-zinc-100 mb-3">
                    🚀 Ready to Contribute?
                  </h4>
                  <p className="text-zinc-400 mb-2">
                    Submit your open source projects and let the community
                    contribute!
                  </p>
                  <p className="text-zinc-500 text-sm">
                    Projects with the most contributions win special recognition
                  </p>
                </div>
                <div className="text-center md:text-right">
                  {isAuthenticated ? (
                    <Link
                      href="/submit"
                      className="inline-flex items-center justify-center px-8 py-3 bg-zinc-100 text-zinc-900 rounded-md font-medium hover:bg-zinc-200 transition-colors"
                    >
                      Submit Your Project →
                    </Link>
                  ) : (
                    <Link
                      href="/signin?returnTo=/submit"
                      className="inline-flex items-center justify-center px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
                    >
                      Sign in to submit projects →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </ScrollAnimation>
    </section>
  );
}
