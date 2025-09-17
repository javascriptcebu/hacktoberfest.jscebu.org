"use client";

import { Card } from "./card";
import Link from "next/link";
import { ScrollAnimation } from "./scroll-animation";

export function HomeSponsors() {
  return (
    <section className="py-12">
      <ScrollAnimation animation="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8 text-center">
          💎 Our Partners & Sponsors
        </h2>
      </ScrollAnimation>
      <div className="space-y-8">
        <ScrollAnimation animation="fade-up" delay={0.1}>
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-4 text-center">
              Co-Presentor
            </h4>
            <Card>
              <div className="p-10 text-center bg-gradient-to-br from-purple-900/20 to-zinc-800/50 border border-purple-800/30">
                <p className="text-lg text-zinc-300">Premium Partnership Available</p>
                <p className="text-sm text-zinc-500 mt-2">Be the face of Hacktoberfest Cebu 2025</p>
              </div>
            </Card>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={0.2}>
          <div>
            <h4 className="text-lg font-semibold text-slate-300 mb-4 text-center">
              Platinum Sponsors
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <div className="p-8 text-center bg-gradient-to-br from-slate-600/10 to-zinc-800/50">
                  <p className="text-zinc-400 text-sm">Major Partnership Available</p>
                </div>
              </Card>
              <Card>
                <div className="p-8 text-center bg-gradient-to-br from-slate-600/10 to-zinc-800/50">
                  <p className="text-zinc-400 text-sm">Major Partnership Available</p>
                </div>
              </Card>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={0.3}>
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-4 text-center">
              Gold Sponsors
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <div className="p-6 text-center bg-gradient-to-br from-amber-900/10 to-zinc-800/50">
                  <p className="text-zinc-400 text-sm">Key Partnership Available</p>
                </div>
              </Card>
              <Card>
                <div className="p-6 text-center bg-gradient-to-br from-amber-900/10 to-zinc-800/50">
                  <p className="text-zinc-400 text-sm">Key Partnership Available</p>
                </div>
              </Card>
              <Card>
                <div className="p-6 text-center bg-gradient-to-br from-amber-900/10 to-zinc-800/50">
                  <p className="text-zinc-400 text-sm">Key Partnership Available</p>
                </div>
              </Card>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={0.4}>
          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-4 text-center">
              Silver Sponsors
            </h4>
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <div className="p-4 text-center">
                  <p className="text-zinc-400 text-sm">Supporting Partner</p>
                </div>
              </Card>
              <Card>
                <div className="p-4 text-center">
                  <p className="text-zinc-400 text-sm">Supporting Partner</p>
                </div>
              </Card>
              <Card>
                <div className="p-4 text-center">
                  <p className="text-zinc-400 text-sm">Supporting Partner</p>
                </div>
              </Card>
              <Card>
                <div className="p-4 text-center">
                  <p className="text-zinc-400 text-sm">Supporting Partner</p>
                </div>
              </Card>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={0.4}>
          <div className="text-center mt-8">
            <Card>
              <div className="relative p-8 bg-gradient-to-br from-yellow-900/20 via-zinc-800/50 to-orange-900/20 border border-yellow-800/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-orange-500/5 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-yellow-900/30 px-3 py-1 rounded-full mb-4 border border-yellow-800/50">
                    <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wider">
                      Limited Slots Available
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-100 mb-3">
                    🎯 Become a Partner
                  </h4>
                  <p className="text-base text-zinc-300 mb-6 max-w-md mx-auto">
                    Join us in building Cebu's thriving tech ecosystem.
                    <span className="text-yellow-400 font-semibold">
                      {" "}All partnership levels are customizable
                    </span>{" "}
                    to align with your organization's goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <Link
                      href="/sponsor"
                      className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-md font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Explore Partnership Options →
                    </Link>
                    <span className="text-zinc-500 text-sm">
                      or email us at{" "}
                      <a
                        href="mailto:sponsors@hacktoberfest.jscebu.org"
                        className="text-yellow-400 hover:text-yellow-300 underline"
                      >
                        sponsors@hacktoberfest.jscebu.org
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
