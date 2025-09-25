import { ArrowRight, Shield } from "lucide-react";

import { Card } from "../components/card";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { VolunteerForm } from "./volunteer-form";
import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";

export default async function VolunteerPage() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto max-w-6xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider text-space-haze uppercase">
              Cebu Hacktoberfest 2025
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-space-white sm:text-5xl lg:text-7xl">
              VOLUNTEER APPLICATION
            </h1>
            <p className="mt-6 text-lg text-space-dust max-w-2xl mx-auto">
              Join our team of amazing volunteers and help make Hacktoberfest
              Cebu 2025 unforgettable!
            </p>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-space-haze">
              <span>→</span>
              <span className="font-mono tracking-wide">
                HF.CEBUTECHCOMMUNITIES.ORG/VOLUNTEER
              </span>
            </div>
          </div>

          {/* Volunteer Opportunities */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-space-white text-center mb-8">
              Available Volunteer Positions
            </h2>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="text-center p-4 bg-gradient-to-br from-lavender/10 to-transparent rounded-lg border border-lavender/20">
                <div className="text-3xl font-bold text-lavender mb-1">45+</div>
                <div className="text-sm text-space-dust">Total Positions</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-melrose/10 to-transparent rounded-lg border border-melrose/20">
                <div className="text-3xl font-bold text-melrose mb-1">14</div>
                <div className="text-sm text-space-dust">Different Roles</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-violet/10 to-transparent rounded-lg border border-blue-violet/20">
                <div className="text-3xl font-bold text-blue-violet mb-1">
                  4
                </div>
                <div className="text-sm text-space-dust">Team Categories</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-lavender/10 to-transparent rounded-lg border border-lavender/20">
                <div className="text-3xl font-bold text-lavender mb-1">
                  Oct 5-26
                </div>
                <div className="text-sm text-space-dust">Event Dates</div>
              </div>
            </div>

            {/* Role Categories */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Coordination Team */}
              <div className="group bg-gradient-to-br from-east-bay/30 to-east-bay/20 border border-blue-violet/30 rounded-xl p-6 hover:border-lavender/40 transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-lavender/20 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-lavender"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-melrose">
                      Coordination Team
                    </h3>
                    <p className="text-sm text-space-dust">
                      12 positions available
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between p-2 bg-east-bay/30 rounded">
                    <span className="text-space-dust">Speaker Coordinator</span>
                    <span className="text-lavender font-semibold">2 spots</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-east-bay/30 rounded">
                    <span className="text-space-dust">Emcee/Host</span>
                    <span className="text-lavender font-semibold">4 spots</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-east-bay/30 rounded">
                    <span className="text-space-dust">
                      Open Source Coordinator
                    </span>
                    <span className="text-lavender font-semibold">2 spots</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-east-bay/30 rounded">
                    <span className="text-space-dust">Judging Committee</span>
                    <span className="text-lavender font-semibold">1 spot</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-east-bay/30 rounded">
                    <span className="text-space-dust">Raffle Committee</span>
                    <span className="text-lavender font-semibold">4 spots</span>
                  </div>
                </div>
              </div>

              {/* Marketing & Content Team */}
              <div className="group bg-gradient-to-br from-blue-violet/20 to-lavender/10 border border-lavender/30 rounded-xl p-6 hover:border-melrose/40 transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-melrose/20 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-melrose"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-lavender">
                      Marketing & Content
                    </h3>
                    <p className="text-sm text-space-dust">
                      10 positions available
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between p-2 bg-blue-violet/20 rounded">
                    <span className="text-space-dust">Marketing Team</span>
                    <span className="text-melrose font-semibold">4 spots</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-violet/20 rounded">
                    <span className="text-space-dust">Creatives/Design</span>
                    <span className="text-melrose font-semibold">2 spots</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-violet/20 rounded">
                    <span className="text-space-dust">Photographer</span>
                    <span className="text-melrose font-semibold">2 spots</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-violet/20 rounded">
                    <span className="text-space-dust">Social Media</span>
                    <span className="text-melrose font-semibold">2 spots</span>
                  </div>
                </div>
              </div>

              {/* Technical Team */}
              <div className="group bg-gradient-to-br from-melrose/10 to-blue-violet/10 border border-melrose/30 rounded-xl p-6 hover:border-lavender/40 transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-violet/20 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-blue-violet"
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
                  <div>
                    <h3 className="text-lg font-bold text-blue-violet">
                      Technical Team
                    </h3>
                    <p className="text-sm text-space-dust">
                      6 positions available
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between p-2 bg-melrose/10 rounded">
                    <span className="text-space-dust">
                      Tech Team (Audio/Video)
                    </span>
                    <span className="text-blue-violet font-semibold">
                      2 spots
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-melrose/10 rounded">
                    <span className="text-space-dust">Livestreaming Team</span>
                    <span className="text-blue-violet font-semibold">
                      4 spots
                    </span>
                  </div>
                </div>
              </div>

              {/* Operations Team */}
              <div className="group bg-gradient-to-br from-lavender/10 to-melrose/10 border border-blue-violet/30 rounded-xl p-6 hover:border-lavender/40 transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-lavender/20 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-lavender"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-melrose">
                      Operations Team
                    </h3>
                    <p className="text-sm text-space-dust">
                      14 positions available
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between p-2 bg-lavender/10 rounded">
                    <span className="text-space-dust">Logistics Team</span>
                    <span className="text-lavender font-semibold">
                      10 spots
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-lavender/10 rounded">
                    <span className="text-space-dust">Registration Team</span>
                    <span className="text-lavender font-semibold">4 spots</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-blue-violet/20 to-lavender/20 border border-blue-violet/30 rounded-lg">
            <h2 className="text-2xl font-bold text-space-white mb-4">
              Why Volunteer?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-melrose mb-2">
                  Build Network
                </h3>
                <p className="text-sm text-space-dust">
                  Connect with developers, designers, and tech enthusiasts in
                  Cebu.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-melrose mb-2">
                  Gain Experience
                </h3>
                <p className="text-sm text-space-dust">
                  Learn event management, mentorship, and community building
                  skills.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-melrose mb-2">Give Back</h3>
                <p className="text-sm text-space-dust">
                  Help grow the local tech community and support aspiring
                  developers.
                </p>
              </div>
            </div>
          </div>

          {isAuthenticated ? (
            <div className="mt-12">
              <VolunteerForm
                userEmail={claims?.email || undefined}
                isAuthenticated={isAuthenticated}
              />
            </div>
          ) : (
            <div className="mt-12">
              <Card>
                <div className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-lavender/20 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-lavender" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-melrose">
                      Sign In Required
                    </h2>
                    <p className="text-space-dust max-w-md mx-auto">
                      To submit your volunteer application, you need to sign in
                      with your OneCebby account. This helps us verify your
                      identity and contact information.
                    </p>
                  </div>
                  <div className="pt-2">
                    <Link
                      href="/signin?returnTo=/volunteer"
                      className="inline-flex items-center gap-2 bg-lavender text-void py-3 px-6 rounded-md font-medium hover:bg-melrose transition-colors group"
                    >
                      <Shield className="w-5 h-5" />
                      Sign In with OneCebby
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <p className="text-sm text-space-haze mt-4">
                      Don't have an account? You can create one during sign-in.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
