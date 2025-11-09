import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";
import { NavWrapper } from "../components/nav-wrapper";
import { SubmissionForm } from "./submission-form";
import { Card } from "../components/card";
import Link from "next/link";
import { Trophy, Users, Star, Zap, GitBranch, TrendingUp, Award, Sparkles, Shield, ArrowRight } from "lucide-react";
import { Footer } from "../components/footer";

export default async function SubmitPage() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  return (
    <div className="relative">
      <NavWrapper />
      <div className="px-6 pt-20 pb-16 mx-auto max-w-4xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <span className="text-sm font-semibold tracking-wider text-space-haze uppercase">
              Cebu Hacktoberfest 2025
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-space-white sm:text-5xl lg:text-6xl">
              SUBMIT YOUR PROJECT
            </h1>
            <p className="mt-6 text-lg text-space-dust">
              Submit your existing open source project for a chance to be featured and attract contributors during Hacktoberfest.
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm text-zinc-500">
              <span>→</span>
              <span className="font-mono tracking-wide">HF.CEBUTECHCOMMUNITIES.ORG/SUBMIT</span>
            </div>
          </div>

          {/* Why Submit Your Project */}
          <Card>
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-lavender/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-lavender" />
                </div>
                <h2 className="text-xl font-bold text-melrose">Why Submit Your Project?</h2>
              </div>

              <div className="grid gap-4">
                {/* Priority Contributions */}
                <div className="flex gap-4 p-4 bg-gradient-to-r from-lavender/10 to-transparent rounded-lg border border-lavender/20">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-lavender/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-lavender" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-space-white mb-1">Priority for Contributions</h3>
                    <p className="text-sm text-space-dust">
                      Existing projects submitted early get prioritized during the event, attracting more contributors
                      who are looking for established codebases to contribute to.
                    </p>
                  </div>
                </div>

                {/* Featured Showcase */}
                <div className="flex gap-4 p-4 bg-gradient-to-r from-melrose/10 to-transparent rounded-lg border border-melrose/20">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-melrose/20 rounded-full flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-melrose" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-space-white mb-1">Chance to be Featured</h3>
                    <p className="text-sm text-space-dust">
                      Get the opportunity to have your project highlighted during ceremonies, workshops, and on our website,
                      gaining visibility among 100+ developers and tech enthusiasts.
                    </p>
                  </div>
                </div>

                {/* Community Support */}
                <div className="flex gap-4 p-4 bg-gradient-to-r from-blue-violet/10 to-transparent rounded-lg border border-blue-violet/20">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-violet/20 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-violet" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-space-white mb-1">Community Support</h3>
                    <p className="text-sm text-space-dust">
                      Connect with experienced developers who can contribute code, provide feedback, and help
                      take your project to the next level through collaboration.
                    </p>
                  </div>
                </div>

                {/* Win Prizes */}
                <div className="flex gap-4 p-4 bg-gradient-to-r from-lavender/10 to-transparent rounded-lg border border-lavender/20">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-lavender/20 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-lavender" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-space-white mb-1">Compete for Recognition</h3>
                    <p className="text-sm text-space-dust">
                      Existing projects that attract the most contributions and community engagement may be
                      recognized with awards and prizes during the culmination ceremony.
                    </p>
                  </div>
                </div>


                {/* Open Source Journey */}
                <div className="flex gap-4 p-4 bg-gradient-to-r from-blue-violet/10 to-transparent rounded-lg border border-blue-violet/20">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-violet/20 rounded-full flex items-center justify-center">
                      <GitBranch className="w-4 h-4 text-blue-violet" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-space-white mb-1">Start Your Open Source Journey</h3>
                    <p className="text-sm text-space-dust">
                      Learn how to manage an open source project, handle contributions, and build a community
                      around your work with support from experienced maintainers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action Box */}
              <div className="mt-6 p-4 bg-gradient-to-r from-lavender/20 to-melrose/20 rounded-lg border border-lavender/30">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-lavender" />
                  <p className="font-semibold text-melrose">Submit Early for Maximum Impact!</p>
                </div>
                <p className="text-sm text-space-dust">
                  Submit your existing open source projects now! Projects submitted early have better chances
                  of being featured and attracting quality contributors during the October 5-26 event.
                </p>
              </div>
            </div>
          </Card>

          {isAuthenticated ? (
            <div className="mt-8">
              <SubmissionForm userEmail={claims?.email || undefined} />
            </div>
          ) : (
            <div className="mt-8">
              <Card>
                <div className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-lavender/20 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-lavender" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-melrose">Sign In Required</h2>
                    <p className="text-space-dust max-w-md mx-auto">
                      To submit your project, you need to sign in with your OneCebby account.
                      This helps us showcase your work properly and connect you with contributors.
                    </p>
                  </div>
                  <div className="pt-2">
                    <Link
                      href="/signin?returnTo=/submit"
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
      <Footer/>
    </div>
  );
}