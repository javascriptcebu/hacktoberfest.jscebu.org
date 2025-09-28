import { Card } from "../components/card";
import Link from "next/link";
import { Navigation } from "../components/nav";

export default function EventsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
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

        <div className="mb-16">
          <Card className="overflow-hidden bg-gradient-to-br from-lavender/10 via-melrose/5 to-blue-violet/10 border-lavender/30">
            <div className="p-8 md:p-12">
              <div className="flex items-start gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-lavender/20 text-lavender border border-lavender/30">
                  MAIN EVENT
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                  84+ Attending
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-space-white mb-4">
                🚀 Cebu Hacktoberfest 2025 Kickoff
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📅</span>
                    <div>
                      <p className="text-sm text-space-haze font-medium">
                        Date & Time
                      </p>
                      <p className="text-space-dust">Sunday, October 5, 2025</p>
                      <p className="text-space-dust">10:00 AM - 5:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-sm text-space-haze font-medium">
                        Venue
                      </p>
                      <p className="text-space-dust">Performing Arts Hall</p>
                      <p className="text-space-dust">
                        UP Cebu, Lahug, Cebu City
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <p className="text-sm text-space-haze font-medium">
                        What to Expect
                      </p>
                      <ul className="text-space-dust text-sm space-y-1 mt-1">
                        <li>• Keynote speakers from the tech community</li>
                        <li>• Hacktoberfest orientation & guidelines</li>
                        <li>• Team formation for hackathon</li>
                        <li>• Networking with 100+ developers</li>
                        <li>• Free swag and refreshments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-space-dust mb-8">
                Kick off a month of open-source celebration! Learn about
                contributing to open source, form your hackathon team, and
                connect with Cebu's vibrant developer community. Whether you're
                new to open source or a seasoned contributor, this is your
                starting point for an amazing Hacktoberfest journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://www.getcebby.com/events/cebu-hacktoberfest-2025-kickoff--4208054"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
                >
                  Register on Cebby →
                </Link>
                <Link
                  href="https://www.facebook.com/events/1471381994068060"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 border border-blue-violet/50 text-space-dust rounded-md font-medium hover:bg-east-bay/50 transition-colors"
                >
                  View on Facebook
                </Link>
              </div>

              <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-800/30 rounded-lg">
                <p className="text-sm text-yellow-400">
                  <span className="font-semibold">⚡ Pro tip:</span>{" "}
                  Registration requires a OneCebby account - the unified
                  identity for Cebu's tech community. Create one when you
                  register!
                </p>
              </div>
            </div>
          </Card>
        </div>

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
    </div>
  );
}
