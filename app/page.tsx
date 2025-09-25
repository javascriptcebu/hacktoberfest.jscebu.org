import {
  AnimatedSectionTitle,
  AnimatedText,
  AnimatedTimeline,
} from "./components/home-sections";
import { getLogtoContext, signOut } from "@logto/next/server-actions";

import { Card } from "./components/card";
import { Footer } from "./components/footer";
import { HomeContributions } from "./components/home-contributions";
import { HomeFAQ } from "./components/home-faq";
import { HomeHackathon } from "./components/home-hackathon";
import { HomeHighlights } from "./components/home-highlights";
import { HomePartners } from "./components/home-partners";
import { HomeRegistration } from "./components/home-registration";
import { HomeSponsors } from "./components/home-sponsors";
import { HomeWhyJoin } from "./components/home-why-join";
import { Navigation } from "./components/nav";
import Image from "next/legacy/image";
import Link from "next/link";
import Particles from "./components/particles";
import React from "react";
import { Timeline } from "./components/timeline";
import { logtoConfig } from "./logto";

const scheduleEvents = [
  {
    date: "Sep",
    title: "Preptember",
    icon: "📅",
    description:
      "Preparation month! Join pre-event workshops, form teams, brainstorm project ideas, and get familiar with Git and open-source contribution guidelines.",
  },
  {
    date: "Oct 5",
    title: "Kickoff",
    icon: "🚀",
    description:
      "Kick off Hacktoberfest with keynotes, orientation, and community mixers. Meet fellow developers and form teams for the month-long hackathon.",
  },
  {
    date: "Oct 6-20",
    title: "Community Events",
    icon: "💡",
    description:
      "Partner communities across Cebu will host talks, workshops, and mini hack nights. Watch out for announcements and join the sessions that fit your interests.",
  },
  {
    date: "Oct 5-26",
    title: "20-Day Hackathon",
    icon: "⚡",
    description:
      "Teams of up to 4 will have 20 days to create a brand-new open source project. Submissions will be judged across categories, with winners taking home exclusive prizes and swag.",
  },
  {
    date: "Oct 26",
    title: "Culmination & Awards",
    icon: "🏆",
    description:
      "Celebrate the best of Hacktoberfest Cebu 2025. Winning teams, top contributors, and outstanding community efforts will be recognized.",
  },
];

const hackathonCategories = [
  { name: "Best Overall Project", icon: "🏆" },
  { name: "Best Use of AI", icon: "🤖" },
  { name: "Most Fun / Best Easter Egg", icon: "🎮" },
  { name: "Best Open Source Contribution", icon: "🌟" },
];

const reasons = [
  "Contribute to open source projects that make a difference",
  "Build something new in a collaborative hackathon",
  "Connect with Cebu's vibrant developer communities",
  "Learn from workshops, talks, and mentors",
  "Take home swags and prizes from our partners",
];

const faqs = [
  {
    question: "Who can join?",
    answer:
      "Anyone! Students, professionals, hobbyists - no matter your level, you're welcome.",
  },
  {
    question: "Do I need to know coding?",
    answer:
      "Not at all. Teams can include designers, writers, project managers, and more.",
  },
  {
    question: "Is this free?",
    answer: "Yes - Hacktoberfest Cebu is free and open to the public.",
  },
  {
    question: "What if I don't have a team?",
    answer:
      "You can form or join a team during Opening Day or through our community channels.",
  },
  {
    question: "What counts as an open source contribution?",
    answer:
      "Any accepted pull request to a public open-source repo - it can be code, documentation, design assets, or translations.",
  },
  {
    question: "Will there be online options?",
    answer:
      "Yes, we aim for hybrid participation. Details will be announced closer to the event.",
  },
];

export default async function Home() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  return (
    <div className="flex flex-col items-center w-screen min-h-screen overflow-x-hidden bg-gradient-to-tl from-void via-space-haze/20 to-void">
      <Navigation
        isHomepage={true}
        isAuthenticated={isAuthenticated}
        onSignOut={async () => {
          "use server";
          await signOut(logtoConfig);
        }}
      />

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-lavender/0 via-lavender/50 to-lavender/0" />

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <div className="flex flex-col items-center justify-center px-4 py-16">
        <div className="animate-fade-in mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <Image
              src="/images/jscebu.png"
              alt="JavaScript Cebu"
              width={196}
              height={50}
              className="opacity-90"
            />
            <Image
              src="/images/pizzapyhorizontal-primary-white.png"
              alt="PizzaPy Python Users Group"
              width={180}
              height={50}
              className="opacity-90"
            />
            <Image
              src="/images/DkBG_Rectangle.png"
              alt="ETHPH"
              width={142}
              height={80}
              className="opacity-90"
            />
          </div>
        </div>

        <h1 className="py-3.5 px-0.5 z-10 text-5xl text-transparent duration-1000 bg-gradient-to-r from-melrose via-lavender to-blue-violet cursor-default animate-title font-display sm:text-7xl md:text-8xl whitespace-nowrap bg-clip-text">
          HACKTOBERFEST
        </h1>
        <div className="text-center mt-4">
          <span className="text-lg sm:text-xl text-space-dust font-medium animate-fade-in">
            October 5-26, 2025
          </span>
          <span className="block text-2xl sm:text-3xl font-bold text-melrose mt-2 animate-fade-in">
            CEBU 2025
          </span>
        </div>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-lavender/0 via-lavender/50 to-lavender/0 mt-8" />

        <div className="mt-8 mb-16 text-center animate-fade-in max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 px-4 py-2 rounded-full mb-6 border border-yellow-800/30">
            <span className="text-yellow-400">🔥</span>
            <span className="text-yellow-400 text-sm font-semibold">
              Preptember begins...
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-space-white mb-4 leading-tight">
            Build. Contribute. Win.{" "}
            <span className="text-lavender">Repeat.</span>
          </h2>

          <p className="text-base sm:text-lg text-space-dust mb-4">
            Join <strong className="text-melrose">100+ developers</strong> for
            Cebu's biggest open source celebration
          </p>

          <p className="text-sm sm:text-base text-space-haze mb-8 max-w-2xl mx-auto">
            20 days of hacking, workshops from partner communities, get rewards,
            and the chance to make your mark in open source history not just
            locally but globally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
              <Link
                href="/submit"
                className="inline-flex items-center justify-center px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
              >
                Submit Your Open Source Project →
              </Link>
            ) : (
              <Link
                href="/signin?returnTo=/submit"
                className="inline-flex items-center justify-center px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
              >
                Submit Your Open Source Project →
              </Link>
            )}
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-violet/50 text-space-dust rounded-md font-medium hover:bg-east-bay/50 transition-colors"
            >
              Browse 2025 Projects
            </Link>
          </div>
        </div>

        <div className="w-full max-w-6xl px-4 space-y-16">
          <HomeHighlights />

          {/* Quick Links Section */}
          <section className="py-12">
            <AnimatedSectionTitle className="text-3xl md:text-4xl font-bold text-space-white mb-8 text-center">
              Get Involved
            </AnimatedSectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/events" className="group">
                <div className="p-6 bg-east-bay/30 border border-blue-violet/30 rounded-lg hover:border-lavender/50 transition-all">
                  <div className="text-3xl mb-3">📅</div>
                  <h3 className="text-lg font-semibold text-space-white mb-2 group-hover:text-melrose transition">
                    Register for Events
                  </h3>
                  <p className="text-sm text-space-dust">
                    Join workshops, hackathons, and the culmination ceremony
                  </p>
                </div>
              </Link>

              <Link href="/join" className="group">
                <div className="p-6 bg-east-bay/30 border border-blue-violet/30 rounded-lg hover:border-lavender/50 transition-all">
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="text-lg font-semibold text-space-white mb-2 group-hover:text-melrose transition">
                    Join Hacktoberfest
                  </h3>
                  <p className="text-sm text-space-dust">
                    Choose to contribute to existing projects or create new ones
                  </p>
                </div>
              </Link>


              <Link href="/sponsor" className="group">
                <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all">
                  <div className="text-3xl mb-3">💎</div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-purple-400 transition">
                    Become a Sponsor
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Support the community with sponsorship opportunities
                  </p>
                </div>
              </Link>

              <Link href="/volunteer" className="group">
                <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all">
                  <div className="text-3xl mb-3">🤝</div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-green-400 transition">
                    Volunteer With Us
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Help organize and run Hacktoberfest Cebu 2025
                  </p>
                </div>
              </Link>

              <Link href="/submit" className="group">
                <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all">
                  <div className="text-3xl mb-3">📝</div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-orange-400 transition">
                    Submit Project
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Get your open-source project featured and contributed on
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <section className="py-12">
            <AnimatedSectionTitle className="text-3xl md:text-4xl font-bold text-zinc-100 mb-12 text-center">
              📅 Event Timeline
            </AnimatedSectionTitle>
            <AnimatedTimeline>
              <Timeline events={scheduleEvents} />
            </AnimatedTimeline>
          </section>

          <HomeHackathon />

          <HomeContributions
            isAuthenticated={isAuthenticated}
          />

          <HomeWhyJoin />

          <HomePartners />

          <HomeSponsors />

          <HomeRegistration
            isAuthenticated={isAuthenticated}
          />

          <HomeFAQ />
        </div>
      </div>
      <Footer />
    </div>
  );
}
