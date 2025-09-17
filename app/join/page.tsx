import Link from "next/link";
import { Navigation } from "../components/nav";

export default function JoinPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto max-w-6xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">
            Cebu Hacktoberfest 2025
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl lg:text-7xl">
            PREPARE TO CONTRIBUTE &|| CREATE
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            Prepare to make the best contribution and build the best open-source
            project(s)...
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500">
            <span>→</span>
            <span className="font-mono tracking-wide">
              HF.CEBUTECHCOMMUNITIES.ORG/JOIN
            </span>
          </div>

          {/* User Journey Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-zinc-800 rounded-lg">
            <h2 className="text-2xl font-bold text-zinc-100 mb-2">
              Our Mission
            </h2>
            <p className="text-zinc-400 mb-8">
              Hacktoberfest is the Cebu Tech Communities' flagship event, out of
              our desire{" "}
              <span className="text-zinc-100 font-semibold">
                to level up the Tech Scene in Cebu
              </span>
              .
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-zinc-800 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-zinc-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-zinc-100 mb-2">User</h3>
                <p className="text-sm text-zinc-400">
                  Most of us are Open Source Software Users
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-zinc-800 rounded-full flex items-center justify-center relative">
                  <span className="absolute -left-8 text-3xl text-purple-400">
                    →
                  </span>
                  <svg
                    className="w-12 h-12 text-zinc-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-zinc-100 mb-2">
                  Contributor
                </h3>
                <p className="text-sm text-zinc-400">
                  We help more People become Open Source Contributors
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-zinc-800 rounded-full flex items-center justify-center relative">
                  <span className="absolute -left-8 text-3xl text-purple-400">
                    →
                  </span>
                  <svg
                    className="w-12 h-12 text-zinc-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-zinc-100 mb-2">
                  Builder
                </h3>
                <p className="text-sm text-zinc-400">
                  And eventually be Open Source Project Creators
                </p>
              </div>
            </div>
            <p className="text-center mt-8 text-sm text-zinc-400">
              The goal is to encourage People from level up from simply{" "}
              <span className="text-zinc-300">Using</span> Open-Source Software,
              into <span className="text-zinc-300">Contributing</span> to those
              projects, then into eventually{" "}
              <span className="text-zinc-300">
                Building World-Class Open Source Projects
              </span>{" "}
              of their own.
            </p>
          </div>

          {/* Two Modes Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-zinc-100 mb-8">
              Two Modes for Cebu Hacktoberfest
            </h2>
            <div className="p-8 bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-zinc-800 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-zinc-100 mb-4">
                Project Modes:{" "}
                <span className="text-zinc-400">Existing and/or New</span>
              </h3>
              <p className="text-zinc-400">
                Participants have a choice of going in one or both: Contribute
                to Existing Open Source Projects, Form a Team to Create a New
                Open Source Project
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-zinc-900 border-2 border-pink-800/50 rounded-lg">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">
                  Contribute
                </h3>
                <p className="text-zinc-400 mb-6">
                  Contribute to existing Open Source Projects by submitting Pull
                  Requests to the GitHub/GitLab Codebase.
                </p>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>Find issues labeled "hacktoberfest"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>Submit quality pull requests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>Get them reviewed and merged</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>Earn recognition for contributions</span>
                  </li>
                </ul>
                <Link
                  href="/projects"
                  className="inline-block mt-6 px-6 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 transition"
                >
                  Find Projects to Contribute
                </Link>
              </div>

              <div className="p-8 bg-zinc-900 border-2 border-purple-800/50 rounded-lg">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">
                  Create
                </h3>
                <p className="text-zinc-400 mb-6">
                  Join as a team of 1-4 Individuals, open for Professionals and
                  Students, to create a new Open Source Project.
                </p>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Form a team (1-4 members)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Build something innovative</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Open source your project</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Compete for prizes</span>
                  </li>
                </ul>
                <Link
                  href="/submit"
                  className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition"
                >
                  Submit Your Project
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-lg text-left">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Why Contribute?
              </h2>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Find local open-source projects to contribute to</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>
                    Learn from experienced developers in the community
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Make meaningful contributions that matter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Build your portfolio with real-world projects</span>
                </li>
              </ul>
              <Link
                href="/projects"
                className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
              >
                Browse Projects
              </Link>
            </div>

            <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-lg text-left">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Why Build?
              </h2>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Get your project featured to local developers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Receive quality contributions from the community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Compete for prizes and recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Grow your project with community support</span>
                </li>
              </ul>
              <Link
                href="/submit"
                className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition"
              >
                Submit Project
              </Link>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-zinc-800 rounded-lg">
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">
              21-Day Hackathon
            </h2>
            <p className="text-zinc-400 mb-6">
              Join our month-long hackathon and compete to get rewarded while
              building something meaningful for the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
