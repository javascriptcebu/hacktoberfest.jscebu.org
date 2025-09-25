import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";
import { Navigation } from "../components/nav";
import { ContributionForm } from "./contribution-form";
import { Card } from "../components/card";
import Link from "next/link";
import { GitPullRequest, Trophy, Star, Zap, GitBranch, TrendingUp, Award, Sparkles, Shield, ArrowRight, CheckCircle2 } from "lucide-react";

export default async function ContributionsPage() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto max-w-4xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <span className="text-sm font-semibold tracking-wider text-space-haze uppercase">
              Cebu Hacktoberfest 2025
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-space-white sm:text-5xl lg:text-6xl">
              SUBMIT YOUR CONTRIBUTION
            </h1>
            <p className="mt-6 text-lg text-space-dust">
              Track your pull requests and compete for recognition. Contributions to Cebu-based projects count double!
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm text-space-haze">
              <span>→</span>
              <span className="font-mono tracking-wide">HF.CEBUTECHCOMMUNITIES.ORG/CONTRIBUTIONS</span>
            </div>
          </div>

          {/* How It Works */}
          <Card>
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-lavender/20 rounded-full flex items-center justify-center">
                  <GitPullRequest className="w-5 h-5 text-lavender" />
                </div>
                <h2 className="text-xl font-bold text-melrose">How Contribution Tracking Works</h2>
              </div>

              <div className="grid gap-4">
                {/* Step 1 */}
                <div className="flex gap-4 p-4 bg-gradient-to-r from-lavender/10 to-transparent rounded-lg border border-lavender/20">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-lavender/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-lavender">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-space-white mb-1">Make Your Contribution</h3>
                    <p className="text-sm text-space-dust">
                      Create pull requests to open source projects. Focus on Cebu-based projects for double points,
                      or contribute to any project that interests you.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 p-4 bg-gradient-to-r from-melrose/10 to-transparent rounded-lg border border-melrose/20">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-melrose/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-melrose">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-space-white mb-1">Submit PR Details</h3>
                    <p className="text-sm text-space-dust">
                      Once your PR is created (doesn't need to be merged yet), submit the details here
                      including the PR URL, project name, and contribution type.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 p-4 bg-gradient-to-r from-blue-violet/10 to-transparent rounded-lg border border-blue-violet/20">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-violet/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-violet">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-space-white mb-1">Track & Compete</h3>
                    <p className="text-sm text-space-dust">
                      Your contributions will be tracked throughout the event. Compete for Top Contributor,
                      Best Local Contribution, and other recognition categories.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scoring System */}
              <div className="mt-6 p-4 bg-gradient-to-r from-lavender/20 to-melrose/20 rounded-lg border border-lavender/30">
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="w-5 h-5 text-lavender" />
                  <p className="font-semibold text-melrose">Contribution Scoring</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-space-dust">Regular Open Source PR</span>
                    <span className="font-mono text-space-white">1x points</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-space-dust">Cebu-based Project PR</span>
                    <span className="font-mono text-lavender font-bold">2x points</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-space-dust">Documentation/Translation</span>
                    <span className="font-mono text-space-white">1x points</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-space-dust">Bug Fix/Feature</span>
                    <span className="font-mono text-melrose">1.5x points</span>
                  </div>
                </div>
              </div>

              {/* What Counts */}
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-east-bay/30 rounded-lg border border-blue-violet/30">
                  <h4 className="font-semibold text-melrose mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Valid Contributions
                  </h4>
                  <ul className="text-sm text-space-dust space-y-1">
                    <li>• Code improvements & features</li>
                    <li>• Bug fixes & patches</li>
                    <li>• Documentation updates</li>
                    <li>• Design assets & UI improvements</li>
                    <li>• Translations & localizations</li>
                    <li>• Test coverage improvements</li>
                  </ul>
                </div>
                <div className="p-4 bg-east-bay/30 rounded-lg border border-blue-violet/30">
                  <h4 className="font-semibold text-melrose mb-2">
                    🏆 Recognition Categories
                  </h4>
                  <ul className="text-sm text-space-dust space-y-1">
                    <li>• Top Overall Contributor</li>
                    <li>• Best Local Contribution</li>
                    <li>• Most Helpful Reviewer</li>
                    <li>• Rising Star (First-timers)</li>
                    <li>• Documentation Hero</li>
                    <li>• Community Champion</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {isAuthenticated ? (
            <div className="mt-8">
              <ContributionForm userEmail={claims?.email || undefined} />
            </div>
          ) : (
            <div className="mt-8">
              <Card>
                <div className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-lavender/20 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-lavender" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-melrose">Sign In to Track Contributions</h2>
                    <p className="text-space-dust max-w-md mx-auto">
                      Sign in with your OneCebby account to submit and track your pull requests
                      throughout Hacktoberfest.
                    </p>
                  </div>
                  <div className="pt-2">
                    <Link
                      href="/signin?returnTo=/contributions"
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