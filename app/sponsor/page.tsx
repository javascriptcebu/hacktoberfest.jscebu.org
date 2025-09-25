import {
  Award,
  Crown,
  Gift,
  Heart,
  Medal,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

import { Card } from "../components/card";
import Link from "next/link";
import { Navigation } from "../components/nav";

export default function SponsorPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-lavender/10 border border-lavender/30 rounded-full text-sm font-semibold tracking-wider text-lavender uppercase mb-6">
              <Sparkles className="w-4 h-4" />
              Cebu Hacktoberfest 2025
              <Sparkles className="w-4 h-4" />
            </span>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-space-white sm:text-6xl lg:text-7xl">
              BECOME A{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender to-melrose">
                SPONSOR
              </span>
            </h1>
            <p className="mt-6 text-xl text-space-dust max-w-3xl mx-auto leading-relaxed">
              Partner with Cebu's premier open-source event and connect with
              100+ passionate developers building the future of technology in
              the Philippines.
            </p>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-space-haze">
              <span>→</span>
              <span className="font-mono tracking-wide">
                HF.CEBUTECHCOMMUNITIES.ORG/SPONSOR
              </span>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mb-16 grid md:grid-cols-3 gap-6">
            <Card>
              <div className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-lavender/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-lavender" />
                </div>
                <h3 className="text-lg font-bold text-melrose mb-2">
                  100+ Developers
                </h3>
                <p className="text-sm text-space-dust">
                  Direct access to talented professionals and future tech
                  leaders
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-melrose/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-melrose" />
                </div>
                <h3 className="text-lg font-bold text-lavender mb-2">
                  Month-long Exposure
                </h3>
                <p className="text-sm text-space-dust">
                  October 5-26 event with pre and post-event marketing
                  visibility
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-violet/20 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-violet" />
                </div>
                <h3 className="text-lg font-bold text-melrose mb-2">
                  Targeted Reach
                </h3>
                <p className="text-sm text-space-dust">
                  Connect with developers, designers, and tech enthusiasts in
                  Cebu
                </p>
              </div>
            </Card>
          </div>

          {/* Sponsorship Tiers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-space-white mb-4">
              Sponsorship Levels
            </h2>
            <p className="text-center text-space-dust mb-12 max-w-2xl mx-auto">
              Choose a partnership level that aligns with your goals. All
              packages are customizable.
            </p>

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {/* Co-Presenter - Most Premium */}
              <div className="relative group transform hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative h-full p-8 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-purple-900/40 border-2 border-purple-500/50 rounded-2xl hover:border-purple-400/70">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full uppercase">
                      Best Value
                    </span>
                  </div>
                  <div className="text-center mb-6">
                    <Crown className="w-12 h-12 mx-auto mb-3 text-purple-400" />
                    <div className="text-purple-400 font-bold text-sm tracking-widest mb-2">
                      CO-PRESENTER
                    </div>
                    <div className="text-3xl font-bold text-space-white">
                      Premium Partner
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <Star className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">
                        Event co-branding rights
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">
                        Keynote speaking opportunity
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">
                        Premium booth location
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">
                        Exclusive recruitment access
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">
                        Award category naming
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">
                        VIP event invitations
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-purple-500/30">
                    <p className="text-xs text-purple-300 text-center">
                      Maximum Impact & Visibility
                    </p>
                  </div>
                </div>
              </div>

              {/* Platinum */}
              <div className="relative group transform hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-400/20 to-slate-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative h-full p-8 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-2 border-slate-500/50 rounded-2xl hover:border-slate-400/70">
                  <div className="text-center mb-6">
                    <Trophy className="w-10 h-10 mx-auto mb-3 text-slate-300" />
                    <div className="text-slate-300 font-bold text-sm tracking-widest mb-2">
                      PLATINUM
                    </div>
                    <div className="text-2xl font-bold text-space-white">
                      Major Partner
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <Zap className="w-4 h-4 text-slate-300 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">
                        Logo on all materials
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-4 h-4 text-slate-300 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">
                        Main event speaking slot
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-4 h-4 text-slate-300 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">
                        Dedicated booth space
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-4 h-4 text-slate-300 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">
                        Workshop sponsorship
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-4 h-4 text-slate-300 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">
                        Talent database access
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-slate-500/30">
                    <p className="text-xs text-slate-400 text-center">
                      Premium Visibility
                    </p>
                  </div>
                </div>
              </div>

              {/* Gold */}
              <div className="relative group transform hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative h-full p-8 bg-gradient-to-br from-amber-900/30 to-yellow-900/30 border-2 border-amber-600/50 rounded-2xl hover:border-amber-500/70">
                  <div className="text-center mb-6">
                    <Medal className="w-10 h-10 mx-auto mb-3 text-amber-400" />
                    <div className="text-amber-400 font-bold text-sm tracking-widest mb-2">
                      GOLD
                    </div>
                    <div className="text-2xl font-bold text-space-white">
                      Key Partner
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <Star className="w-4 h-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">
                        Logo on event materials
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-4 h-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">
                        Speaking opportunity
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-4 h-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">
                        Social media features
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-4 h-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">Recruitment booth</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-amber-600/30">
                    <p className="text-xs text-amber-500 text-center">
                      Strong Presence
                    </p>
                  </div>
                </div>
              </div>

              {/* Silver */}
              <div className="relative group transform hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative h-full p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 border-2 border-gray-600/50 rounded-2xl hover:border-gray-500/70">
                  <div className="text-center mb-6">
                    <Award className="w-10 h-10 mx-auto mb-3 text-gray-400" />
                    <div className="text-gray-400 font-bold text-sm tracking-widest mb-2">
                      SILVER
                    </div>
                    <div className="text-2xl font-bold text-space-white">
                      Supporter
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <Heart className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">Logo on website</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">
                        Social media mentions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">Event recognition</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-space-dust">
                        Certificate of support
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-600/30">
                    <p className="text-xs text-gray-500 text-center">
                      Community Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* In-Kind Partnerships */}
          <Card>
            <div className="p-10">
              <div className="text-center mb-8">
                <Gift className="w-12 h-12 mx-auto mb-4 text-lavender" />
                <h2 className="text-3xl font-bold text-space-white mb-3">
                  In-Kind Partnerships
                </h2>
                <p className="text-space-dust max-w-2xl mx-auto">
                  Support us through venues, catering, prizes, swag, or
                  professional services. Every contribution makes a meaningful
                  impact on our community's growth.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="group p-6 bg-gradient-to-br from-lavender/10 to-transparent rounded-xl border border-lavender/30 hover:border-lavender/50 transition-all text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    📍
                  </div>
                  <div className="font-semibold text-melrose">Venue Space</div>
                  <div className="text-xs text-space-dust mt-1">
                    Host our events
                  </div>
                </div>
                <div className="group p-6 bg-gradient-to-br from-melrose/10 to-transparent rounded-xl border border-melrose/30 hover:border-melrose/50 transition-all text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    🍕
                  </div>
                  <div className="font-semibold text-lavender">
                    Food & Drinks
                  </div>
                  <div className="text-xs text-space-dust mt-1">
                    Keep us energized
                  </div>
                </div>
                <div className="group p-6 bg-gradient-to-br from-blue-violet/10 to-transparent rounded-xl border border-blue-violet/30 hover:border-blue-violet/50 transition-all text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    🎁
                  </div>
                  <div className="font-semibold text-melrose">
                    Prizes & Swag
                  </div>
                  <div className="text-xs text-space-dust mt-1">
                    Reward excellence
                  </div>
                </div>
                <div className="group p-6 bg-gradient-to-br from-lavender/10 to-transparent rounded-xl border border-lavender/30 hover:border-lavender/50 transition-all text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    🎓
                  </div>
                  <div className="font-semibold text-lavender">Workshops</div>
                  <div className="text-xs text-space-dust mt-1">
                    Share expertise
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Benefits & CTA */}
          <div className="mt-16 p-10 bg-gradient-to-br from-lavender/20 via-melrose/10 to-blue-violet/20 border-2 border-lavender/30 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-void/50 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-center text-space-white mb-8">
                Why Partner with Hacktoberfest Cebu?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-lavender/20 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-lavender" />
                  </div>
                  <h3 className="font-bold text-lg text-melrose mb-2">
                    Talent Pipeline
                  </h3>
                  <p className="text-sm text-space-dust">
                    Connect directly with passionate developers and tech
                    professionals building the future
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-melrose/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-melrose" />
                  </div>
                  <h3 className="font-bold text-lg text-lavender mb-2">
                    Brand Visibility
                  </h3>
                  <p className="text-sm text-space-dust">
                    Showcase your commitment to innovation and the local tech
                    ecosystem
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-violet/20 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-blue-violet" />
                  </div>
                  <h3 className="font-bold text-lg text-melrose mb-2">
                    Community Impact
                  </h3>
                  <p className="text-sm text-space-dust">
                    Help cultivate technical excellence and innovation in
                    Central Philippines
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-space-dust mb-8">
                  <span className="text-lavender font-semibold">
                    Every partnership is customizable
                  </span>{" "}
                  to align with your goals and budget.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-lavender text-void font-bold rounded-xl hover:bg-melrose transform hover:scale-105 transition-all shadow-lg"
                >
                  <Sparkles className="w-5 h-5" />
                  Become a Partner Today
                  <Sparkles className="w-5 h-5" />
                </Link>
                <p className="mt-4 text-sm text-space-haze">
                  Let's create a partnership that works for everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
