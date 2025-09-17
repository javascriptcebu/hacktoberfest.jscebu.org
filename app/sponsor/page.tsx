import { Navigation } from "../components/nav";
import Link from "next/link";

export default function SponsorPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto max-w-6xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">
            Cebu Hacktoberfest 2025
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl lg:text-7xl">
            PARTNER WITH US
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            Join us in building Cebu's thriving tech ecosystem. Every contribution makes a difference.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500">
            <span>→</span>
            <span className="font-mono tracking-wide">HF.CEBUTECHCOMMUNITIES.ORG/SPONSOR</span>
          </div>

          <div className="mt-12 p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <p className="text-sm text-zinc-400 italic">
              💡 All sponsorship packages are flexible and can be customized to match your organization's objectives and budget.
              We welcome discussions about creating a partnership that works best for everyone.
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-8 bg-gradient-to-b from-purple-900/30 to-zinc-900 border border-purple-700/50 rounded-lg">
              <div className="text-purple-400 font-semibold mb-2">CO-PRESENTOR</div>
              <div className="text-2xl font-bold text-zinc-100 mb-4">Premium Partner</div>
              <ul className="space-y-2 text-sm text-zinc-400 text-left">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Event co-branding rights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Keynote speaking slot</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Premium booth location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Exclusive recruitment access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Award category naming rights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>VIP event invitations</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-b from-slate-400/20 to-zinc-900 border border-slate-500/50 rounded-lg">
              <div className="text-slate-300 font-semibold mb-2">PLATINUM SPONSOR</div>
              <div className="text-2xl font-bold text-zinc-100 mb-4">Major Partner</div>
              <ul className="space-y-2 text-sm text-zinc-400 text-left">
                <li className="flex items-start">
                  <span className="text-slate-300 mr-2">•</span>
                  <span>Logo on all materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-300 mr-2">•</span>
                  <span>Main event speaking slot</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-300 mr-2">•</span>
                  <span>Dedicated booth space</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-300 mr-2">•</span>
                  <span>Workshop sponsorship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-300 mr-2">•</span>
                  <span>Talent database access</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-b from-amber-900/20 to-zinc-900 border border-amber-800/50 rounded-lg">
              <div className="text-amber-400 font-semibold mb-2">GOLD SPONSOR</div>
              <div className="text-2xl font-bold text-zinc-100 mb-4">Key Partner</div>
              <ul className="space-y-2 text-sm text-zinc-400 text-left">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Logo on event materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Speaking opportunity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Social media features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Recruitment booth</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-b from-gray-600/20 to-zinc-900 border border-gray-600/50 rounded-lg">
              <div className="text-gray-300 font-semibold mb-2">SILVER SPONSOR</div>
              <div className="text-2xl font-bold text-zinc-100 mb-4">Supporting Partner</div>
              <ul className="space-y-2 text-sm text-zinc-400 text-left">
                <li className="flex items-start">
                  <span className="text-gray-300 mr-2">•</span>
                  <span>Logo on website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-300 mr-2">•</span>
                  <span>Social media mentions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-300 mr-2">•</span>
                  <span>Event recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-300 mr-2">•</span>
                  <span>Certificate of support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-8 bg-zinc-900 border border-zinc-800 rounded-lg">
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">In-Kind Partnerships</h2>
            <p className="text-zinc-400 mb-6">
              Partner with us through venues, catering, prizes, swag, or professional services. Your support directly impacts our community's growth and success.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="p-3 bg-zinc-800 rounded text-zinc-400">
                <div className="text-2xl mb-1">📍</div>
                Venue Space
              </div>
              <div className="p-3 bg-zinc-800 rounded text-zinc-400">
                <div className="text-2xl mb-1">🍕</div>
                Food & Drinks
              </div>
              <div className="p-3 bg-zinc-800 rounded text-zinc-400">
                <div className="text-2xl mb-1">🎁</div>
                Prizes & Swag
              </div>
              <div className="p-3 bg-zinc-800 rounded text-zinc-400">
                <div className="text-2xl mb-1">🎓</div>
                Workshops
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-zinc-800 rounded-lg">
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">Why Partner with Hacktoberfest Cebu?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div>
                <h3 className="font-semibold text-zinc-100 mb-2">Talent Pipeline</h3>
                <p className="text-sm text-zinc-400">
                  Connect with 100+ passionate developers and tech professionals actively building the future
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-100 mb-2">Brand Visibility</h3>
                <p className="text-sm text-zinc-400">
                  Showcase your commitment to open source and the local tech community
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-100 mb-2">Community Impact</h3>
                <p className="text-sm text-zinc-400">
                  Help cultivate innovation and technical excellence in Central Philippines
                </p>
              </div>
            </div>
            <p className="text-zinc-400 mb-6">
              Every partnership level is customizable to align with your organization's goals and budget.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Let's Discuss Partnership Opportunities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}