"use client";

import { Card } from "../components/card";
import Link from "next/link";

export function EventsContent() {
  const events = [
    {
      id: 1,
      title: "🚀 Cebu Hacktoberfest 2025 Kickoff",
      date: "October 5, 2025",
      status: "completed" as const,
      attendees: "170+ Attended",
      description: "Kick off a month of open-source celebration! Learn about contributing to open source, form your hackathon team, and connect with Cebu's vibrant developer community.",
      links: [
        { label: "View on Facebook", url: "https://www.facebook.com/share/v/19kQHaVJ1d/" }
      ]
    },
    {
      id: 2,
      title: "💡 Lisk Pitching Day",
      date: "October 11, 2025",
      status: "completed" as const,
      attendees: "60+ Attended",
      description: "Teams pitched their project ideas to the community and received feedback. A great opportunity to refine concepts and get early validation.",
      links: [{ label: "View on Facebook", url: "https://www.facebook.com/share/v/1BBK5vwERd/" }]
    },
    {
      id: 3,
      title: "🚀 Deployment Day",
      date: "October 18, 2025",
      status: "completed" as const,
      attendees: "40+ Attended",
      description: "Focused session on deploying projects to production. Teams learned best practices for deployment, CI/CD, and making their projects accessible to the world.",
      links: [{ label: "View on Facebook", url: "https://www.facebook.com/share/v/1Zs9VDEumi/" }]
    },
    {
      id: 4,
      title: "🐘 PHPxCebu: Ai Ai Captain!",
      date: "October 25, 2025",
      status: "completed" as const,
      attendees: "70+ Attended",
      description: "Special PHP community event exploring AI integration in PHP applications. Join PHP developers and learn about the latest trends in AI-powered web development.",
      links: [
        { label: "View on Youtube", url: "https://www.youtube.com/live/nkIF1cdh7E8?si=mtKpiWyHCIYDzpO3"},
      ]
    },
    {
      id: 5,
      title: "🏆 Cebu Hacktoberfest Awarding Day",
      date: "October 26, 2025",
      status: "completed" as const,
      attendees: "70+ Attended",
      highlight: true,
      description: "The grand finale! Demo Day showcase where teams present their projects. Awards ceremony recognizing outstanding contributions, innovative solutions, and celebrating a month of open-source excellence.",
      links: [
        { label: "View on Facebook", url: "https://www.facebook.com/share/19xoMAAAEE/" }
      ]
    }
  ];

  return (
    <div className="px-6 pt-20 pb-16 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 px-4 py-2 rounded-full mb-6 border border-yellow-800/30">
          <span className="text-yellow-400">🎉</span>
          <span className="text-yellow-400 text-sm font-semibold">
            October 5-26, 2025
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-space-white sm:text-5xl lg:text-6xl">
          Cebu Hacktoberfest 2025 Events
        </h1>
        <p className="mt-6 text-lg text-space-dust max-w-3xl mx-auto">
          A month of open-source celebration through contribution,
          collaboration, and building. Join keynotes, workshops, hack nights,
          and awards ceremonies throughout October.
        </p>
      </div>

      {/* Events Grid - Compact Square Cards */}
      <div className="mb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <Card 
            key={event.id}
            className={`overflow-hidden transition-all mb-2 ${
              event.status === "completed"
                ? "bg-gradient-to-br from-zinc-800/40 via-zinc-700/20 to-zinc-800/40 border-zinc-700/50 opacity-75"
                : "bg-gradient-to-br from-lavender/10 via-melrose/5 to-blue-violet/10 border-lavender/30"
            } ${event.highlight ? "ring-2 ring-lavender/50" : ""}`}
          >
            <div className="p-6 flex flex-col h-full">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                  event.status === "completed"
                    ? "bg-zinc-600/30 text-zinc-400 border border-zinc-600/30"
                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 animate-pulse"
                }`}>
                  {event.status === "completed" ? "COMPLETED" : "UPCOMING"}
                </span>
                {event.attendees && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                    {event.attendees}
                  </span>
                )}
                {/* {event.badge && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-lavender/20 text-lavender border border-lavender/30">
                    {event.badge}
                  </span>
                )} */}
              </div>

              {/* Title */}
              <h2 className={`text-xl font-bold mb-3 ${
                event.status === "completed" ? "text-zinc-300" : "text-space-white"
              }`}>
                {event.title}
              </h2>
      
              {/* Description */}
              <p className={`text-sm mb-4 flex-grow ${
                event.status === "completed" ? "text-zinc-400" : "text-space-dust"
              }`}>
                {event.description}
              </p>

              {/* Links/Actions */}
              <div className="mt-4 space-y-4">
                {event.links && event.links.length > 0 ? (
                  event.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.url}
                      target="_blank"
                      className={`block text-center px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                        event.status === "completed"
                          ? "border-zinc-600/50 text-zinc-400 hover:bg-zinc-700/30"
                          : "border-lavender/50 text-lavender hover:bg-lavender/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))
                ) : (
                  <span className={`block text-center px-4 py-2 border rounded-md text-sm font-medium cursor-not-allowed ${
                    event.status === "completed"
                      ? "border-zinc-600/50 text-zinc-400"
                      : "border-lavender/50 text-lavender opacity-50"
                  }`}>
                    {event.status === "completed" ? "Event Ended" : "Registration Link TBA"}
                  </span>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {events.length === 0 && (
        <div className="text-center py-16 mb-16">
          <div className="text-6xl mb-4">📅</div>
          <h3 className="text-xl font-semibold text-space-white mb-2">No events found</h3>
          <p className="text-space-dust">Try selecting a different filter</p>
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        <Card className="group hover:border-lavender/50 transition-all">
          <div className="p-6">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-space-white mb-2 group-hover:text-melrose transition">
              Community Workshops
            </h3>
            <p className="text-sm text-space-haze mb-2 font-medium">
              October 6-20, 2025
            </p>
            <p className="text-space-dust mb-4">
              Partner communities across Cebu host specialized talks,
              technical workshops, and mini hack nights. Learn new
              technologies, frameworks, and best practices.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-lavender">•</span>
                <span className="text-space-dust">
                  JavaScript Cebu sessions
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-lavender">•</span>
                <span className="text-space-dust">
                  PizzaPy Python workshops
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-lavender">•</span>
                <span className="text-space-dust">
                  Web3 & blockchain talks
                </span>
              </div>
            </div>
            <div className="mt-6">
              <span className="text-sm text-space-haze">
                Schedule coming soon
              </span>
            </div>
          </div>
        </Card>

        <Card className="group hover:border-lavender/50 transition-all">
          <div className="p-6">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-space-white mb-2 group-hover:text-melrose transition">
              20-Day Hackathon
            </h3>
            <p className="text-sm text-space-haze mb-2 font-medium">
              October 5-26, 2025
            </p>
            <p className="text-space-dust mb-4">
              Teams of up to 4 members compete to build innovative open-source
              projects from scratch. Win prizes across multiple categories!
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-lavender">🏆</span>
                <span className="text-space-dust">Best Overall Project</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-lavender">🤖</span>
                <span className="text-space-dust">Best Use of AI</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-lavender">🎮</span>
                <span className="text-space-dust">Most Fun Project</span>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/join"
                className="text-sm text-melrose hover:text-lavender transition"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </Card>

        <Card className="group hover:border-lavender/50 transition-all">
          <div className="p-6">
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-space-white mb-2 group-hover:text-melrose transition">
              Culmination & Awards
            </h3>
            <p className="text-sm text-space-haze mb-2 font-medium">
              Saturday, October 26, 2025
            </p>
            <p className="text-space-dust mb-4">
              Demo Day showcase where teams present their projects. Awards
              ceremony recognizing outstanding contributions and innovative
              solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-lavender">•</span>
                <span className="text-space-dust">
                  Project demonstrations
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-lavender">•</span>
                <span className="text-space-dust">Awards ceremony</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-lavender">•</span>
                <span className="text-space-dust">Community celebration</span>
              </div>
            </div>
            <div className="mt-6">
              <span className="text-sm text-space-haze">
                Registration opens soon
              </span>
            </div>
          </div>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-east-bay/30 to-blue-violet/20 border-blue-violet/30">
        <div className="p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-space-white mb-4">
            Don't Miss Out on Any Event
          </h2>
          <p className="text-space-dust mb-8 max-w-2xl mx-auto">
            Stay connected with the Cebu tech community. Get notified about
            workshops, speaker announcements, and important updates throughout
            Hacktoberfest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.getcebby.com"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
            >
              Check out Cebby for latest events...
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-violet/50 text-space-dust rounded-md font-medium hover:bg-east-bay/50 transition-colors"
            >
              Join Today
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
