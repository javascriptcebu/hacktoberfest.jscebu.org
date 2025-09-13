import { getLogtoContext, signIn, signOut } from "@logto/next/server-actions";

import { Card } from "./components/card";
import Image from "next/legacy/image";
import Link from "next/link";
import Particles from "./components/particles";
import React from "react";
import SignIn from "./sign-in";
import SignOut from "./sign-out";
import { logtoConfig } from "./logto";

const navigation = [
  { name: "2025 Projects", href: "/projects" },
  { name: "Submit Project", href: "/submit" },
  { name: "Contact", href: "/contact" },
];

const scheduleEvents = [
  {
    date: "October 5, 2025",
    title: "Opening Day",
    description:
      "Kick off Hacktoberfest with keynotes, orientation, and community mixers. Meet fellow developers and form teams for the month-long hackathon.",
  },
  {
    date: "October 6–20, 2025",
    title: "Community Events",
    description:
      "Partner communities across Cebu will host talks, workshops, and mini hack nights. Watch out for announcements and join the sessions that fit your interests.",
  },
  {
    date: "October 5–26, 2025",
    title: "Hackathon",
    description:
      "Teams of up to 4 will have 21 days to create a brand-new open source project. Submissions will be judged across categories, with winners taking home exclusive prizes and swag.",
  },
  {
    date: "October 26, 2025",
    title: "Culmination & Awards",
    description:
      "Celebrate the best of Hacktoberfest Cebu 2025. Winning teams, top contributors, and outstanding community efforts will be recognized.",
  },
];

const hackathonCategories = [
  "Best Project",
  "Most Impactful",
  "Best Beginner Team",
  "Best Open Source Contribution",
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
      "Anyone! Students, professionals, hobbyists — no matter your level, you're welcome.",
  },
  {
    question: "Do I need to know coding?",
    answer:
      "Not at all. Teams can include designers, writers, project managers, and more.",
  },
  {
    question: "Is this free?",
    answer: "Yes — Hacktoberfest Cebu is free and open to the public.",
  },
  {
    question: "What if I don't have a team?",
    answer:
      "You can form or join a team during Opening Day or through our community channels.",
  },
  {
    question: "What counts as an open source contribution?",
    answer:
      "Any accepted pull request to a public open-source repo — it can be code, documentation, design assets, or translations.",
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
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
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
            <p>
              <SignIn
                onSignIn={async () => {
                  "use server";

                  await signIn(logtoConfig);
                }}
              />
            </p>
          )}
        </ul>
      </nav>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <div className="flex flex-col items-center justify-center px-4 py-16">
        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
          <div className="flex justify-center">
            <Image
              src="/images/jscebu.png"
              alt="jscebu"
              width={196}
              height={50}
              className="animate-fade-in"
            />
          </div>
          cebu #hacktoberfest
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <div className="mt-8 mb-16 text-center animate-fade-in max-w-2xl">
          <h2 className="text-3xl font-bold text-zinc-100 mb-4">
            🎉 Welcome to Hacktoberfest Cebu 2025
          </h2>
          <p className="text-zinc-400 mb-4">
            <span className="text-zinc-200">Hacktoberfest is back! 💛🦖</span>
          </p>
          <p className="text-zinc-400 mb-8">
            Join us this October for a month-long celebration of open source,
            collaboration, and community. Whether you're a beginner writing your
            first pull request or a seasoned contributor leading projects,
            Hacktoberfest Cebu is the place to connect, learn, and build
            together.
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
              <div className="inline-flex items-center justify-center px-6 py-3 bg-zinc-800 text-zinc-100 rounded-md">
                <SignIn
                  text="Submit your projects"
                  onSignIn={async () => {
                    "use server";
                    await signIn(logtoConfig);
                  }}
                />
              </div>
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
          <section>
            <h3 className="text-2xl font-bold text-zinc-100 mb-8 text-center">
              📅 Schedule of Events
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {scheduleEvents.map((event, index) => (
                <Card key={index}>
                  <div className="p-6">
                    <p className="text-sm text-zinc-500 mb-2">{event.date}</p>
                    <h4 className="text-xl font-semibold text-zinc-100 mb-3">
                      {event.title}
                    </h4>
                    <p className="text-zinc-400">{event.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-zinc-100 mb-8 text-center">
              🏆 Hackathon Details
            </h3>
            <Card>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-100 mb-4">
                      Competition Format
                    </h4>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start">
                        <span className="text-zinc-500 mr-2">•</span>
                        <span>
                          <strong className="text-zinc-300">Team Size:</strong>{" "}
                          Up to 4 members
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-zinc-500 mr-2">•</span>
                        <span>
                          <strong className="text-zinc-300">Duration:</strong>{" "}
                          21 days (Oct 5–26)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-zinc-500 mr-2">•</span>
                        <span>
                          <strong className="text-zinc-300">Prizes:</strong>{" "}
                          Swag kits, exclusive goodies, and partner-sponsored
                          awards
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-100 mb-4">
                      Categories
                    </h4>
                    <ul className="space-y-2">
                      {hackathonCategories.map((category, index) => (
                        <li
                          key={index}
                          className="flex items-center text-zinc-400"
                        >
                          <span className="text-zinc-500 mr-2">🏅</span>
                          {category}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-zinc-100 mb-8 text-center">
              🙌 Why Join?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reasons.map((reason, index) => (
                <Card key={index}>
                  <div className="p-6">
                    <p className="text-zinc-300">{reason}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-zinc-100 mb-8 text-center">
              🤝 Organizers & Partners
            </h3>
            <Card>
              <div className="p-8 text-center">
                <p className="text-zinc-300 mb-4">
                  Hacktoberfest Cebu 2025 is spearheaded by{" "}
                  <strong className="text-zinc-100">JavaScript Cebu</strong> and{" "}
                  <strong className="text-zinc-100">
                    PizzaPy Cebu Python Users Group
                  </strong>
                  , with support from local tech communities including:
                </p>
                <p className="text-zinc-400">
                  React Cebu, Laravel Cebu, Cebu Game Dev, DevCon Cebu, GDG
                  Cebu, Cebu WordPress Meetup, CebuXD, Web3 Cebu, AI Gen Cebu,
                  and more.
                </p>
                <p className="text-zinc-400 mt-4">
                  Special thanks to our venue partner{" "}
                  <strong className="text-zinc-300">enspace Cebu</strong> and to
                  our sponsors (to be announced).
                </p>
              </div>
            </Card>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-zinc-100 mb-8 text-center">
              📝 Registration
            </h3>
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
                      Register via Major League Hacking (MLH){" "}
                      <span className="text-zinc-500">(link coming soon)</span>
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-zinc-400 font-semibold mr-3">
                      Step 2:
                    </span>
                    <p className="text-zinc-400">
                      Sign up on Cebby to stay updated, find teams, and track
                      your participation
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <section className="pb-16">
            <h3 className="text-2xl font-bold text-zinc-100 mb-8 text-center">
              🙋 FAQ
            </h3>
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
    </div>
  );
}
