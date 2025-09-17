import Link from "next/link";
import { Navigation } from "../components/nav";

export default function EventsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto max-w-6xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">
            Cebu Hacktoberfest 2025
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl lg:text-7xl">
            REGISTER TO THE EVENTS
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            Join the culmination, awarding and events/workshops in between...
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500">
            <span>→</span>
            <span className="font-mono tracking-wide">
              HF.CEBUTECHCOMMUNITIES.ORG/EVENTS
            </span>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                Kickoff Event
              </h3>
              <p className="text-sm text-zinc-400 mb-4">
                October 5 - Start Hacktoberfest with keynotes, orientation, and
                community mixers.
              </p>
              <Link
                href="https://www.getcebby.com/events/cebu-hacktoberfest-2025-kickoff--4208054"
                target="_blank"
                className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
              >
                Register Now →
              </Link>
            </div>

            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                Community Workshops
              </h3>
              <p className="text-sm text-zinc-400 mb-4">
                October 6-20 - Partner communities host talks, workshops, and
                mini hack nights.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
              >
                More details soon
              </Link>
            </div>

            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                Culmination & Awards
              </h3>
              <p className="text-sm text-zinc-400 mb-4">
                October 26 - Demo Day showcase and awards ceremony for
                outstanding projects.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
              >
                Save the Date →
              </Link>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-zinc-800 rounded-lg">
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">
              Stay Updated
            </h2>
            <p className="text-zinc-400 mb-6">
              Get notified about new events, workshops, and important
              announcements.
            </p>
            <Link
              href="#"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
