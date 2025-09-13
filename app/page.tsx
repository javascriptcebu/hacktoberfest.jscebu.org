import { getLogtoContext, signIn, signOut } from "@logto/next/server-actions";

import { Card } from "./components/card";
import { Footer } from "./components/footer";
import Image from "next/legacy/image";
import Link from "next/link";
import Particles from "./components/particles";
import React from "react";
import SignIn from "./sign-in";
import SignOut from "./sign-out";
import { Timeline } from "./components/timeline";
import { logtoConfig } from "./logto";

const navigation = [
  { name: "2025 Projects", href: "/projects" },
  { name: "Submit Project", href: "/submit" },
  { name: "Contact", href: "/contact" },
];

const scheduleEvents = [
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
    title: "21-Day Hackathon",
    icon: "⚡",
    description:
      "Teams of up to 4 will have 21 days to create a brand-new open source project. Submissions will be judged across categories, with winners taking home exclusive prizes and swag.",
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
  {
    question: "Venue rules?",
    answer:
      "Our venue partner enspace Cebu observes a no shorts, no slippers policy. Please dress appropriately.",
  },
];

export default async function Home() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  return (
    <div className="flex flex-col items-center w-screen min-h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 border border-transparent hover:border-zinc-700/50"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {isAuthenticated ? (
            <li>
              <SignOut
                onSignOut={async () => {
                  "use server";

                  await signOut(logtoConfig);
                }}
              />
            </li>
          ) : (
            <li>
              <SignIn
                onSignIn={async () => {
                  "use server";

                  await signIn(logtoConfig);
                }}
              />
            </li>
          )}
        </ul>
      </nav>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <div className="flex flex-col items-center justify-center px-4 py-16">
        <div className="animate-fade-in mb-6">
          <Image
            src="/images/jscebu.png"
            alt="jscebu"
            width={196}
            height={50}
            className="opacity-90"
          />
        </div>

        <h1 className="py-3.5 px-0.5 z-10 text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-7xl md:text-8xl whitespace-nowrap bg-clip-text">
          HACKTOBERFEST
        </h1>
        <div className="text-center mt-4">
          <span className="text-lg sm:text-xl text-zinc-500 font-medium animate-fade-in">
            October 5-26, 2025
          </span>
          <span className="block text-2xl sm:text-3xl font-bold text-zinc-400 mt-2 animate-fade-in">
            CEBU 2025
          </span>
        </div>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 mt-8" />

        <div className="mt-8 mb-16 text-center animate-fade-in max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 px-4 py-2 rounded-full mb-6 border border-yellow-800/30">
            <span className="text-yellow-400">🔥</span>
            <span className="text-yellow-400 text-sm font-semibold">
              Preptember begins...
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4 leading-tight">
            Build. Contribute. Win.{" "}
            <span className="text-zinc-400">Repeat.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 mb-4">
            Join <strong className="text-zinc-100">100+ developers</strong> for
            Cebu's biggest open source celebration
          </p>

          <p className="text-sm sm:text-base text-zinc-400 mb-8 max-w-2xl mx-auto">
            21 days of hacking, workshops from 15+ partner communities,
            exclusive swag, and the chance to make your mark in open source
            history not just locally but globally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
              <Link
                href="/submit"
                className="inline-flex items-center justify-center px-6 py-3 bg-zinc-100 text-zinc-900 rounded-md font-medium hover:bg-zinc-200 transition-colors"
              >
                Submit Your Open Source Project →
              </Link>
            ) : (
              <SignIn
                text="Submit your projects →"
                onSignIn={async () => {
                  "use server";
                  await signIn(logtoConfig);
                }}
              />
            )}
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-zinc-700 text-zinc-300 rounded-md font-medium hover:bg-zinc-800 transition-colors"
            >
              Browse 2025 Projects
            </Link>
          </div>
        </div>

        <div className="w-full max-w-6xl px-4 space-y-16">
          <section className="py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-4 text-center">
              🏆 Hacktoberfest 2024 Highlights
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 text-center max-w-3xl mx-auto mb-12">
              Last year was incredible! Over 100 developers, 25+ teams, and
              10 amazing open source projects created in just 21 days.
            </p>

            <div className="grid lg:grid-cols-3 gap-6 mb-12">
              <Card>
                <div className="p-6 bg-gradient-to-br from-yellow-900/20 to-zinc-800/50 border-yellow-800/50">
                  <div className="text-3xl mb-3">🥇</div>
                  <h4 className="text-xl font-semibold text-yellow-400 mb-2">
                    Best Overall Project
                  </h4>
                  <p className="text-lg text-zinc-100 font-medium mb-1">
                    Varo.dev
                  </p>
                  <p className="text-base text-zinc-400 mb-3">
                    AI-powered developer matchmaking platform
                  </p>
                  <p className="text-zinc-500 text-xs">
                    Team Mugnavo: Nathaniel Tampus, Josh Dimpas, Khent Amancio,
                    Marion Buhat
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-6 bg-gradient-to-br from-gray-700/20 to-zinc-800/50 border-gray-600/50">
                  <div className="text-3xl mb-3">🥈</div>
                  <h4 className="text-xl font-semibold text-gray-300 mb-2">
                    Best Use of AI
                  </h4>
                  <p className="text-lg text-zinc-100 font-medium mb-1">
                    What Can I Cook
                  </p>
                  <p className="text-base text-zinc-400 mb-3">
                    Recipe suggestions based on available ingredients
                  </p>
                  <p className="text-zinc-500 text-xs">
                    Team Solucion: Mac Dylan Balagtas, Niño Angelo Balagtas,
                    John Laurence Sison
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-6 bg-gradient-to-br from-orange-900/20 to-zinc-800/50 border-orange-800/50">
                  <div className="text-3xl mb-3">🥉</div>
                  <h4 className="text-xl font-semibold text-orange-400 mb-2">
                    Most Fun / Best Easter Egg
                  </h4>
                  <p className="text-lg text-zinc-100 font-medium mb-1">
                    Helpful Tooltips Extension
                  </p>
                  <p className="text-base text-zinc-400 mb-3">
                    Browser extension with humorous security insights
                  </p>
                  <p className="text-zinc-500 text-xs">
                    Team AI-MARRK: Arcgel Chavez, Rowen Borgonia, Kent Otadoy,
                    Manuel Cando
                  </p>
                </div>
              </Card>
            </div>

            <Card>
              <div className="p-8 bg-gradient-to-r from-green-900/10 to-zinc-800/30">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-green-400 mb-4">
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
                    <h4 className="text-lg font-bold text-zinc-100 mb-4">
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

            <div className="mt-8 text-center">
              <Link
                href="/projects/2024"
                className="inline-flex items-center justify-center px-6 py-3 border border-zinc-700 text-zinc-300 rounded-md font-medium hover:bg-zinc-800 transition-colors"
              >
                View All 2024 Projects →
              </Link>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-12 text-center">
              📅 Event Timeline
            </h2>
            <Timeline events={scheduleEvents} />
          </section>

          <section className="py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-4 text-center">
              ⚡ The 21-Day Hackathon Challenge
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 text-center max-w-3xl mx-auto mb-12">
              Build something amazing from scratch. Form your team, ideate, and
              create an open source project that could change the world.
            </p>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <Card>
                <div className="p-8 text-center">
                  <div className="text-4xl mb-4">👥</div>
                  <h4 className="text-xl font-bold text-zinc-100 mb-2">
                    Team Formation
                  </h4>
                  <p className="text-zinc-400 mb-4">Up to 4 members per team</p>
                  <p className="text-sm text-zinc-500">
                    Mix of developers, designers, and other roles welcome
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-8 text-center">
                  <div className="text-4xl mb-4">📅</div>
                  <h4 className="text-xl font-bold text-zinc-100 mb-2">
                    21 Days to Build
                  </h4>
                  <p className="text-zinc-400 mb-4">October 5-26, 2025</p>
                  <p className="text-sm text-zinc-500">
                    Create a brand new open source project from scratch
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-8 text-center">
                  <div className="text-4xl mb-4">🎁</div>
                  <h4 className="text-xl font-bold text-zinc-100 mb-2">
                    Amazing Prizes
                  </h4>
                  <p className="text-zinc-400 mb-4">Exclusive swag & rewards</p>
                  <p className="text-sm text-zinc-500">
                    Recognition from the tech community
                  </p>
                </div>
              </Card>
            </div>

            <Card>
              <div className="p-8">
                <h4 className="text-xl font-bold text-zinc-100 mb-6 text-center">
                  Competition Categories
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {hackathonCategories.map((category, index) => (
                    <div
                      key={index}
                      className="bg-zinc-800/50 rounded-lg p-6 text-center border border-zinc-700/50 hover:border-zinc-600 hover:bg-zinc-800/70 transition-all duration-300 group"
                    >
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                        {category.icon}
                      </div>
                      <p className="text-zinc-200 font-medium text-sm">
                        {category.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </section>

          <section className="py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-4 text-center">
              🌟 Open Source Contributions
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 text-center max-w-3xl mx-auto mb-12">
              Make your mark in the open source community!{" "}
              <span className="text-zinc-200 font-semibold">
                Contributions to Cebu-based projects count double
              </span>{" "}
              towards recognition.
            </p>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
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
            </div>

            <div className="grid md:grid-cols-2 gap-8">
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
                          PRs to Cebu-based projects count double! Support your
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
                        <p className="text-zinc-300 font-medium">
                          Documentation
                        </p>
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
                          Get contributions and compete for Most Contributed
                          Project
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

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
                        Projects with the most contributions win special
                        recognition
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
                        <SignIn
                          text="Sign in to submit projects →"
                          onSignIn={async () => {
                            "use server";
                            await signIn(logtoConfig);
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8 text-center">
              🙌 Why Join?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reasons.map((reason, index) => (
                <Card key={index}>
                  <div className="p-6">
                    <p className="text-base text-zinc-300">{reason}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8 text-center">
              🤝 Organizers & Partners
            </h2>
            <Card>
              <div className="p-8 text-center">
                <p className="text-zinc-300 mb-4">
                  Hacktoberfest Cebu 2025 is spearheaded by{" "}
                  <strong className="text-zinc-100">JavaScript Cebu</strong>,{" "}
                  <strong className="text-zinc-100">
                    PizzaPy Cebu Python Users Group
                  </strong>{" "}
                  and{" "}
                  <strong className="text-zinc-100">
                    Etherium Philippines
                  </strong>
                  , with support from local tech communities including but not
                  limited to:
                </p>
                <p className="text-zinc-400">
                  React Cebu, Laravel Cebu, Cebu Game Dev, DevCon Cebu, GDG
                  Cebu, Cebu WordPress Meetup, CebuXD, Web3 Cebu, AI Gen Cebu,
                  and other commuunity organizations of the Cebu Tech Community.
                </p>
              </div>
            </Card>
          </section>

          <section className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8 text-center">
              💎 Our Sponsors
            </h2>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-zinc-300 mb-4 text-center">
                  Venue Partner
                </h4>
                <Card>
                  <div className="p-8 text-center">
                    <p className="text-lg text-zinc-100 mb-2">
                      To be announced
                    </p>
                  </div>
                </Card>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-zinc-300 mb-4 text-center">
                  Gold Sponsors
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <div className="p-8 text-center bg-gradient-to-br from-yellow-900/10 to-zinc-800/50">
                      <p className="text-zinc-400 text-sm">To be announced</p>
                    </div>
                  </Card>
                  <Card>
                    <div className="p-8 text-center bg-gradient-to-br from-yellow-900/10 to-zinc-800/50">
                      <p className="text-zinc-400 text-sm">To be announced</p>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-zinc-300 mb-4 text-center">
                  Silver Sponsors
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <div className="p-4 text-center">
                      <p className="text-zinc-400 text-sm">To be announced</p>
                    </div>
                  </Card>
                  <Card>
                    <div className="p-4 text-center">
                      <p className="text-zinc-400 text-sm">To be announced</p>
                    </div>
                  </Card>
                  <Card>
                    <div className="p-4 text-center">
                      <p className="text-zinc-400 text-sm">To be announced</p>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="text-center mt-8">
                <Card>
                  <div className="relative p-8 bg-gradient-to-br from-yellow-900/20 via-zinc-800/50 to-orange-900/20 border border-yellow-800/30 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-orange-500/5 animate-pulse"></div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 bg-yellow-900/30 px-3 py-1 rounded-full mb-4 border border-yellow-800/50">
                        <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wider">Limited Slots Available</span>
                      </div>
                      <h4 className="text-2xl font-bold text-zinc-100 mb-3">
                        🎯 Interested in Sponsoring?
                      </h4>
                      <p className="text-base text-zinc-300 mb-6 max-w-md mx-auto">
                        Join leading tech companies in supporting Cebu's developer community.
                        Get <span className="text-yellow-400 font-semibold">premium visibility</span> at our biggest open source event.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-md font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                          Become a Sponsor →
                        </Link>
                        <span className="text-zinc-500 text-sm">
                          or email us at{" "}
                          <a href="mailto:sponsors@hacktoberfest.jscebu.org" className="text-yellow-400 hover:text-yellow-300 underline">
                            sponsors@hacktoberfest.jscebu.org
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8 text-center">
              📝 Registration
            </h2>
            <Card>
              <div className="p-8">
                <p className="text-zinc-100 text-lg font-semibold mb-4 text-center">
                  Hacktoberfest Cebu is free and open to everyone!
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-zinc-400 font-semibold mr-3">
                      Step 1:
                    </span>
                    <p className="text-zinc-400">
                      Read about and register at Hacktoberfest.com
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-zinc-400 font-semibold mr-3">
                      Step 2:
                    </span>
                    <p className="text-zinc-400">
                      Sign up and{" "}
                      <SignIn
                        text="create an account here via Cebby"
                        variant="inline"
                        onSignIn={async () => {
                          "use server";
                          await signIn(logtoConfig);
                        }}
                      />{" "}
                      to stay updated, find teams, and track your
                      participation...
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <section className="py-12 pb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8 text-center">
              🙋 FAQ
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-zinc-100 mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-zinc-400">{faq.answer}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
