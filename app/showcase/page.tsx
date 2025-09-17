import { Navigation } from "../components/nav";
import Link from "next/link";

export default function ShowcasePage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto max-w-6xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">
            Cebu Hacktoberfest 2025
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl lg:text-7xl">
            SHOWCASING LOCAL TALENT
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            We highlight projects of our very own people...
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500">
            <span>→</span>
            <span className="font-mono tracking-wide">HF.CEBUTECHCOMMUNITIES.ORG/SHOWCASE</span>
          </div>

          <div className="mt-16">
            <div className="grid gap-12">
              <div className="text-left">
                <h2 className="text-2xl font-bold text-zinc-100 mb-6">About Cebu Hacktoberfest</h2>
                <div className="p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-zinc-800 rounded-lg mb-12">
                  <p className="text-lg text-zinc-300 leading-relaxed">
                    <span className="text-2xl mr-2">🚀</span>
                    <span className="font-bold text-zinc-100">Cebu Hacktoberfest</span> is one of the most
                    <span className="text-yellow-400 font-bold"> prominent ⭐</span> and
                    <span className="text-blue-400 font-bold"> longest-running ⏳</span> practitioner-organized and focused hackathons
                    in the region – a <span className="text-purple-400 font-bold">flagship 🏁</span> event that has united
                    <span className="text-green-400"> developers 🧑‍💻</span>,
                    <span className="text-orange-400"> designers 🎨</span>, and
                    <span className="text-red-400"> tech enthusiasts 🤖</span> since
                    <span className="font-bold text-zinc-100"> 2020 📅</span>, even launching
                    despite the <span className="text-green-500">pandemic 🦠</span>.
                  </p>
                </div>
              </div>

              <div className="text-left">
                <h2 className="text-2xl font-bold text-zinc-100 mb-4">Featured Projects</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="group p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-blue-400 transition">
                          Sample Project One
                        </h3>
                        <p className="text-sm text-zinc-500">by Local Developer</p>
                      </div>
                      <span className="px-2 py-1 text-xs bg-green-900/50 text-green-400 rounded">2024 Winner</span>
                    </div>
                    <p className="text-sm text-zinc-400 mb-4">
                      An innovative solution that addresses real community needs through technology.
                    </p>
                    <div className="flex items-center gap-4">
                      <Link href="#" className="text-sm text-blue-400 hover:text-blue-300">
                        View Project →
                      </Link>
                      <Link href="#" className="text-sm text-zinc-500 hover:text-zinc-400">
                        GitHub
                      </Link>
                    </div>
                  </div>

                  <div className="group p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-blue-400 transition">
                          Sample Project Two
                        </h3>
                        <p className="text-sm text-zinc-500">by Cebu Team</p>
                      </div>
                      <span className="px-2 py-1 text-xs bg-blue-900/50 text-blue-400 rounded">Popular</span>
                    </div>
                    <p className="text-sm text-zinc-400 mb-4">
                      A collaborative effort showcasing the strength of Cebu's developer community.
                    </p>
                    <div className="flex items-center gap-4">
                      <Link href="#" className="text-sm text-blue-400 hover:text-blue-300">
                        View Project →
                      </Link>
                      <Link href="#" className="text-sm text-zinc-500 hover:text-zinc-400">
                        GitHub
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-left">
                <h2 className="text-2xl font-bold text-zinc-100 mb-4">Success Stories</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-zinc-800 rounded-lg">
                    <blockquote className="text-zinc-300 italic mb-4">
                      "Hacktoberfest Cebu gave me the opportunity to showcase my project to a wider audience.
                      The feedback and contributions I received helped take it to the next level."
                    </blockquote>
                    <cite className="text-sm text-zinc-400">— Previous Participant</cite>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-blue-900/20 to-green-900/20 border border-zinc-800 rounded-lg">
                    <blockquote className="text-zinc-300 italic mb-4">
                      "Contributing to local projects during Hacktoberfest helped me land my first developer job.
                      The community support was incredible!"
                    </blockquote>
                    <cite className="text-sm text-zinc-400">— Community Contributor</cite>
                  </div>
                </div>
              </div>

              <div className="text-left">
                <h2 className="text-2xl font-bold text-zinc-100 mb-4">Project Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
                    <div className="text-2xl mb-2">🌐</div>
                    <div className="text-sm text-zinc-400">Web Apps</div>
                  </div>
                  <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="text-sm text-zinc-400">Mobile</div>
                  </div>
                  <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
                    <div className="text-2xl mb-2">🤖</div>
                    <div className="text-sm text-zinc-400">AI/ML</div>
                  </div>
                  <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
                    <div className="text-2xl mb-2">🔧</div>
                    <div className="text-sm text-zinc-400">Dev Tools</div>
                  </div>
                  <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
                    <div className="text-2xl mb-2">🎮</div>
                    <div className="text-sm text-zinc-400">Games</div>
                  </div>
                  <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
                    <div className="text-2xl mb-2">⛓️</div>
                    <div className="text-sm text-zinc-400">Blockchain</div>
                  </div>
                  <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="text-sm text-zinc-400">Data</div>
                  </div>
                  <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
                    <div className="text-2xl mb-2">🏥</div>
                    <div className="text-sm text-zinc-400">HealthTech</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-zinc-800 rounded-lg">
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">Be Part of the Showcase</h2>
            <p className="text-zinc-400 mb-6">
              Submit your project and get the chance to be featured, win prizes, and gain recognition in the Cebu tech community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/submit"
                className="px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition"
              >
                Submit Your Project
              </Link>
              <Link
                href="/projects"
                className="px-6 py-3 bg-zinc-800 text-white font-medium rounded-lg hover:bg-zinc-700 transition"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}