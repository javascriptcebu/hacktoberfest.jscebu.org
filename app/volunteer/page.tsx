import { Navigation } from "../components/nav";
import Link from "next/link";

export default function VolunteerPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto max-w-6xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">
            Cebu Hacktoberfest 2025
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl lg:text-7xl">
            SUPPORT US BY VOLUNTEERING
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            Sign up today to help out...
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500">
            <span>→</span>
            <span className="font-mono tracking-wide">HF.CEBUTECHCOMMUNITIES.ORG/VOLUNTEER</span>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg text-left">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Event Coordination</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Help organize and coordinate events, manage registrations, and ensure smooth operations.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Registration desk</li>
                <li>• Attendee support</li>
                <li>• Schedule management</li>
              </ul>
            </div>

            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg text-left">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Technical Mentorship</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Guide participants, answer technical questions, and help with project development.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Code reviews</li>
                <li>• Technical guidance</li>
                <li>• Workshop assistance</li>
              </ul>
            </div>

            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg text-left">
              <div className="text-3xl mb-4">📸</div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Content Creation</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Capture moments, create social media content, and document the event.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Photography</li>
                <li>• Video coverage</li>
                <li>• Social media</li>
              </ul>
            </div>

            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg text-left">
              <div className="text-3xl mb-4">🎤</div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Workshop Facilitation</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Lead or assist in conducting workshops, talks, and learning sessions.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Session hosting</li>
                <li>• Q&A moderation</li>
                <li>• Material preparation</li>
              </ul>
            </div>

            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg text-left">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Community Outreach</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Connect with schools, organizations, and communities to spread awareness.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Partnership building</li>
                <li>• Campus ambassadors</li>
                <li>• Community engagement</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-zinc-800 rounded-lg">
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">Why Volunteer?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-zinc-100 mb-2">Build Network</h3>
                <p className="text-sm text-zinc-400">
                  Connect with developers, designers, and tech enthusiasts in Cebu.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-100 mb-2">Gain Experience</h3>
                <p className="text-sm text-zinc-400">
                  Learn event management, mentorship, and community building skills.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-100 mb-2">Give Back</h3>
                <p className="text-sm text-zinc-400">
                  Help grow the local tech community and support aspiring developers.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-zinc-900 border border-zinc-800 rounded-lg">
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">Sign Up to Volunteer</h2>
            <p className="text-zinc-400 mb-6">
              Join our amazing team of volunteers and help make Hacktoberfest Cebu 2025 unforgettable!
            </p>
            <button className="px-8 py-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
              Become a Volunteer
            </button>
            <p className="mt-4 text-sm text-zinc-500">
              We'll contact you with more details about volunteer opportunities and schedules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}