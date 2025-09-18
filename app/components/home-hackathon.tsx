"use client";

import { Card } from "./card";
import { ScrollAnimation } from "./scroll-animation";

const hackathonInfo = [
  {
    icon: "👥",
    title: "Team Formation",
    subtitle: "Up to 4 members per team",
    description: "Mix of developers, designers, and other roles welcome",
  },
  {
    icon: "📅",
    title: "20 Days to Build",
    subtitle: "October 5-26, 2025",
    description: "Create a brand new open source project from scratch",
  },
  {
    icon: "🎁",
    title: "Get Rewards",
    subtitle: "Exclusive swag & rewards",
    description: "Recognition from the tech community",
  },
];

const categories = [
  { name: "Best Overall Project", icon: "🏆" },
  { name: "Best Use of AI", icon: "🤖" },
  { name: "Most Fun / Best Easter Egg", icon: "🎮" },
  { name: "Best Open Source Contribution", icon: "🌟" },
];

export function HomeHackathon() {
  return (
    <section className="py-12">
      <ScrollAnimation animation="fade-up">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-4 text-center">
          ⚡ The 20-Day Hackathon Challenge
        </h2>
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" delay={0.1}>
        <p className="text-base sm:text-lg text-zinc-400 text-center max-w-3xl mx-auto mb-12">
          Build something amazing from scratch. Form your team, ideate, and
          create an open source project that could change the world.
        </p>
      </ScrollAnimation>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {hackathonInfo.map((info, index) => (
          <ScrollAnimation
            key={index}
            animation="fade-up"
            delay={0.2 + index * 0.1}
          >
            <Card>
              <div className="p-8 text-center">
                <div className="text-4xl mb-4">{info.icon}</div>
                <h4 className="text-lg font-bold text-zinc-100 mb-2">
                  {info.title}
                </h4>
                <p className="text-zinc-400 mb-4">{info.subtitle}</p>
                <p className="text-sm text-zinc-500">{info.description}</p>
              </div>
            </Card>
          </ScrollAnimation>
        ))}
      </div>

      <ScrollAnimation animation="fade-up" delay={0.5}>
        <Card>
          <div className="p-8">
            <h4 className="text-lg font-bold text-zinc-100 mb-6 text-center">
              Competition Categories
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((category, index) => (
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
      </ScrollAnimation>
    </section>
  );
}
