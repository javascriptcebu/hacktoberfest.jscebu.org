import {
  ArrowRight,
  Calendar,
  Code,
  GitBranch,
  GitPullRequest,
  Rocket,
  Trophy,
  Users,
} from "lucide-react";

import Link from "next/link";
import { NavWrapper } from "../components/nav-wrapper";
import { Footer } from "../components/footer";

export default function JoinPage() {
  return (
    <div className="relative">
      <NavWrapper />
      <div className="px-6 pt-20 pb-16 mx-auto max-w-6xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-space-haze uppercase mb-4">
              <Calendar className="w-4 h-4" />
              October 5-26, 2025 • Cebu
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-space-white sm:text-5xl lg:text-7xl">
              CONTRIBUTE <span className="text-lavender">&</span> CREATE
            </h1>
            <p className="mt-6 text-xl text-space-dust max-w-3xl mx-auto leading-relaxed">
              Join Cebu's biggest open-source celebration. Whether you're
              contributing to existing projects or building something new, this
              is your chance to level up.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-lavender text-void font-semibold rounded-lg hover:bg-melrose transition-all transform hover:scale-105 shadow-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Browse Projects to Contribute
              </Link>
              <Link
                href="/submit"
                className="inline-flex items-center justify-center px-8 py-4 bg-east-bay/50 border-2 border-blue-violet text-melrose font-semibold rounded-lg hover:bg-east-bay/70 transition-all transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Submit Project
              </Link>
              <Link
                href="/contributions"
                className="inline-flex items-center justify-center px-8 py-4 bg-east-bay/50 border-2 border-blue-violet text-melrose font-semibold rounded-lg hover:bg-east-bay/70 transition-all transform hover:scale-105"
              >
                <GitBranch className="w-5 h-5 mr-2" />
                Submit Contribution
              </Link>
            </div>
          </div>

          {/* Journey Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-space-white mb-4">
                Your Open Source Journey
              </h2>
              <p className="text-lg text-space-dust max-w-2xl mx-auto">
                Level up from user to contributor to builder. Join us in
                creating a thriving tech ecosystem in Cebu.
              </p>
            </div>

            <div className="relative">
              <div className="grid md:grid-cols-3 gap-8 relative">
                <div className="group">
                  <div className="bg-gradient-to-br from-east-bay/50 to-east-bay/30 border border-blue-violet/30 rounded-xl p-8 hover:border-lavender/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-violet to-lavender rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-void" />
                    </div>
                    <h3 className="text-xl font-bold text-melrose mb-3 text-center">
                      User
                    </h3>
                    <p className="text-sm text-space-dust/80 text-center leading-relaxed">
                      Start your journey as an open source user, discovering
                      amazing projects
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="bg-gradient-to-br from-blue-violet/30 to-lavender/20 border-2 border-lavender/50 rounded-xl p-8 transform scale-105 shadow-xl">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-lavender to-melrose rounded-full flex items-center justify-center">
                      <GitPullRequest className="w-8 h-8 text-void" />
                    </div>
                    <h3 className="text-xl font-bold text-lavender mb-3 text-center">
                      Contributor
                    </h3>
                    <p className="text-sm text-space-dust text-center leading-relaxed">
                      Make meaningful contributions to projects that matter
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="bg-gradient-to-br from-east-bay/50 to-east-bay/30 border border-blue-violet/30 rounded-xl p-8 hover:border-lavender/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-violet to-lavender rounded-full flex items-center justify-center">
                      <Rocket className="w-8 h-8 text-void" />
                    </div>
                    <h3 className="text-xl font-bold text-melrose mb-3 text-center">
                      Builder
                    </h3>
                    <p className="text-sm text-space-dust/80 text-center leading-relaxed">
                      Create world-class open source projects of your own
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Modes Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-space-white mb-4">
                Choose Your Path
              </h2>
              <p className="text-lg text-space-dust max-w-2xl mx-auto">
                Participate in one or both tracks: contribute to existing
                projects or create something entirely new
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-lavender/10 to-melrose/10 border border-lavender/30 hover:border-lavender/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-8">
                  <div className="flex items-center mb-6">
                    <GitPullRequest className="w-10 h-10 text-lavender mr-4" />
                    <h3 className="text-2xl font-bold text-lavender">
                      Contribute
                    </h3>
                  </div>
                  <p className="text-space-dust mb-6 leading-relaxed">
                    Jump into existing open source projects and make meaningful
                    contributions through pull requests.
                    <span className="text-lavender font-semibold">
                      {" "}
                      Local projects submitted early are prioritized and
                      featured prominently!
                    </span>
                  </p>
                  <ul className="space-y-3 text-sm text-zinc-400 list-disc list-inside mb-6">
                    <li>
                      <span className="text-lavender">Priority:</span> Local
                      Cebu projects submitted via our platform
                    </li>
                    <li>
                      Find issues labeled "hacktoberfest" or "good first issue"
                    </li>
                    <li>Submit quality pull requests to existing projects</li>
                    <li>Get them reviewed and merged by maintainers</li>
                    <li>Earn recognition and prizes for contributions</li>
                  </ul>
                  <Link
                    href="/projects"
                    className="inline-flex items-center text-lavender font-semibold hover:text-melrose transition group/link mt-4"
                  >
                    Browse Projects
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition" />
                  </Link>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-melrose/10 to-lavender/10 border border-melrose/30 hover:border-melrose/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-melrose/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-8">
                  <div className="flex items-center mb-6">
                    <Code className="w-10 h-10 text-melrose mr-4" />
                    <h3 className="text-2xl font-bold text-melrose">Create</h3>
                  </div>
                  <p className="text-space-dust mb-6 leading-relaxed">
                    Form a team of 1-4 members and build an innovative open
                    source project from scratch.
                  </p>
                  <ul className="space-y-3 text-sm text-zinc-400 list-disc list-inside mb-6">
                    <li>Form a team (1-4 members)</li>
                    <li>Build something innovative</li>
                    <li>Open source your project</li>
                    <li>Compete for prizes</li>
                  </ul>
                  <Link
                    href="/submit"
                    className="inline-flex items-center text-melrose font-semibold hover:text-lavender transition group/link mt-4"
                  >
                    Submit Project
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-space-white mb-4">
                Why Join Hacktoberfest Cebu?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-gradient-to-br from-east-bay/30 to-east-bay/20 border border-blue-violet/30 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Trophy className="w-8 h-8 text-lavender mr-3" />
                  <h3 className="text-2xl font-bold text-melrose">
                    For Contributors
                  </h3>
                </div>
                <ul className="space-y-3 text-zinc-400 list-disc list-inside">
                  <li>
                    Contribute to prioritized local Cebu projects for more
                    points
                  </li>
                  <li>Contribute to other projects globally</li>
                  <li>
                    Projects submitted early get featured during workshops
                  </li>
                  <li>Learn from experienced developers in the community</li>
                  <li>Make meaningful contributions that matter locally</li>
                  <li>Build your portfolio with real-world projects</li>
                </ul>
              </div>

              <div className="p-8 bg-gradient-to-br from-blue-violet/20 to-lavender/10 border border-lavender/30 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Rocket className="w-8 h-8 text-melrose mr-3" />
                  <h3 className="text-2xl font-bold text-lavender">
                    For Builders
                  </h3>
                </div>
                <ul className="space-y-3 text-zinc-400 list-disc list-inside">
                  <li>Get your project featured to local developers</li>
                  <li>Receive quality contributions from the community</li>
                  <li>Compete for prizes and recognition</li>
                  <li>Grow your project with community support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-lavender/20 via-melrose/10 to-blue-violet/20 border border-lavender/30 p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-t from-void/50 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-space-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-space-dust mb-8 max-w-2xl mx-auto">
                Join 100+ developers in Cebu's biggest open-source celebration.
                October 5-26, 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-lavender text-void font-semibold rounded-lg hover:bg-melrose transition-all transform hover:scale-105 shadow-lg"
                >
                  Start Contributing Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/volunteer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-east-bay/50 border-2 border-blue-violet text-melrose font-semibold rounded-lg hover:bg-east-bay/70 transition-all transform hover:scale-105"
                >
                  Become a Volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
