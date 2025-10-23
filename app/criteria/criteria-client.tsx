"use client";

import { Footer } from "../components/footer";
import { ScrollAnimation } from "../components/scroll-animation";
import { GitBranch, Rocket, Trophy, CheckCircle2, GitPullRequest, Code } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type CriteriaPath = "contribute" | "create";

interface CriteriaClientProps {
  navWrapper: React.ReactNode;
}

export function CriteriaClient({ navWrapper }: CriteriaClientProps) {
  const [selectedPath, setSelectedPath] = useState<CriteriaPath>("contribute");

  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {navWrapper}
      <div className="px-6 pt-20 pb-20 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
        {/* Hero Section */}
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lavender/20 to-blue-violet/20 px-4 py-2 rounded-full mb-6 border border-lavender/30">
              <Trophy className="w-4 h-4 text-lavender" />
              <span className="text-lavender text-sm font-semibold">
                EVALUATION CRITERIA
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-100 mb-6 leading-tight">
              How We Judge <span className="text-lavender">Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're contributing to existing projects or creating something new, 
              here's how your work will be evaluated.
            </p>
          </div>
        </ScrollAnimation>

        {/* Two Paths Selector - Interactive Tabs */}
        <div className="mb-12">
          <ScrollAnimation animation="fade-up" delay={0.1}>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {/* Contribute Tab */}
              <button
                onClick={() => setSelectedPath("contribute")}
                className={`group text-left p-6 rounded-xl transition-all duration-300 ${
                  selectedPath === "contribute"
                    ? "bg-gradient-to-br from-blue-violet/30 to-lavender/20 border-2 border-lavender/50 shadow-lg shadow-lavender/10"
                    : "bg-gradient-to-br from-east-bay/20 to-east-bay/10 border border-blue-violet/30 hover:border-lavender/40"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                      selectedPath === "contribute"
                        ? "bg-gradient-to-br from-lavender to-melrose"
                        : "bg-gradient-to-br from-blue-violet/50 to-lavender/50"
                    }`}
                  >
                    <GitPullRequest className="w-6 h-6 text-void" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-bold mb-2 transition-colors ${
                        selectedPath === "contribute" ? "text-lavender" : "text-melrose"
                      }`}
                    >
                      Contribute
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Make meaningful contributions to existing open source projects
                    </p>
                  </div>
                  {selectedPath === "contribute" && (
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-lavender" />
                    </div>
                  )}
                </div>
              </button>

              {/* Create Tab */}
              <button
                onClick={() => setSelectedPath("create")}
                className={`group text-left p-6 rounded-xl transition-all duration-300 ${
                  selectedPath === "create"
                    ? "bg-gradient-to-br from-blue-violet/30 to-lavender/20 border-2 border-lavender/50 shadow-lg shadow-lavender/10"
                    : "bg-gradient-to-br from-east-bay/20 to-east-bay/10 border border-blue-violet/30 hover:border-lavender/40"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                      selectedPath === "create"
                        ? "bg-gradient-to-br from-lavender to-melrose"
                        : "bg-gradient-to-br from-blue-violet/50 to-lavender/50"
                    }`}
                  >
                    <Code className="w-6 h-6 text-void" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-bold mb-2 transition-colors ${
                        selectedPath === "create" ? "text-lavender" : "text-melrose"
                      }`}
                    >
                      Create
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Build an innovative open source project from scratch
                    </p>
                  </div>
                  {selectedPath === "create" && (
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-lavender" />
                    </div>
                  )}
                </div>
              </button>
            </div>
          </ScrollAnimation>
        </div>

        {/* Criteria Tables - Side by Side */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Contribute Criteria */}
            <div
              className={`transition-all duration-300 ${
                selectedPath === "contribute"
                  ? "opacity-100 scale-100 lg:scale-105"
                  : "opacity-60 scale-95"
              }`}
            >
              <ScrollAnimation animation="fade-up" delay={0.1}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-lavender to-melrose rounded-lg flex items-center justify-center">
                    <GitPullRequest className="w-5 h-5 text-void" />
                  </div>
                  <h2 className="text-2xl font-bold text-zinc-100">
                    Contribute Criteria
                  </h2>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={0.2}>
                <div className="bg-gradient-to-br from-east-bay/40 to-void/40 border border-blue-violet/40 rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                    
                      <tbody>
                        <tr className="border-b border-blue-violet/30 bg-gradient-to-r from-blue-violet/10 to-transparent">
                          <td className="p-3 md:p-4">
                            <div className="text-lavender font-bold text-xs md:text-sm mb-1">Documentation</div>
                            <div className="text-zinc-400 text-xs">
                              (Which issue in the codebase does the PR solve)
                            </div>
                          </td>
                          <td className="p-3 md:p-4 text-right">
                            <div className="text-lavender font-bold text-lg md:text-xl">25%</div>
                          </td>
                        </tr>
                        
                        <tr className="border-b border-blue-violet/30 hover:bg-east-bay/20 transition-colors">
                          <td className="p-3 md:p-4">
                            <div className="text-zinc-200 font-semibold text-xs md:text-sm">Impact</div>
                            <div className="text-zinc-400 text-xs">(Severity of the issue)</div>
                          </td>
                          <td className="p-3 md:p-4 text-right text-zinc-200 font-bold text-lg md:text-xl">25%</td>
                        </tr>

                        <tr className="border-b border-blue-violet/30 hover:bg-east-bay/20 transition-colors">
                          <td className="p-3 md:p-4">
                            <div className="text-zinc-200 font-semibold text-xs md:text-sm">Consistency</div>
                            <div className="text-zinc-400 text-xs">(Matches documentation)</div>
                          </td>
                          <td className="p-3 md:p-4 text-right text-zinc-200 font-bold text-lg md:text-xl">20%</td>
                        </tr>

                        <tr className="border-b border-blue-violet/30 hover:bg-east-bay/20 transition-colors">
                          <td className="p-3 md:p-4">
                            <div className="text-zinc-200 font-semibold text-xs md:text-sm">Code Quality</div>
                            <div className="text-zinc-400 text-xs">(Efficiency & readability)</div>
                          </td>
                          <td className="p-3 md:p-4 text-right text-zinc-200 font-bold text-lg md:text-xl">20%</td>
                        </tr>

                        <tr className="border-b border-blue-violet/30 hover:bg-east-bay/20 transition-colors">
                          <td className="p-3 md:p-4">
                            <div className="text-zinc-200 font-semibold text-xs md:text-sm">Security</div>
                            <div className="text-zinc-400 text-xs">(No API leaks)</div>
                          </td>
                          <td className="p-3 md:p-4 text-right text-zinc-200 font-bold text-lg md:text-xl">5%</td>
                        </tr>

                        <tr className="border-b border-blue-violet/30 hover:bg-east-bay/20 transition-colors">
                          <td className="p-3 md:p-4">
                            <div className="text-zinc-200 font-semibold text-xs md:text-sm">Quality Checks</div>
                            <div className="text-zinc-400 text-xs">(passed tests)</div>
                          </td>
                          <td className="p-3 md:p-4 text-right text-zinc-200 font-bold text-lg md:text-xl">5%</td>
                        </tr>

                        <tr className="bg-gradient-to-r from-lavender/10 to-transparent">
                          <td className="p-3 md:p-4">
                            <div className="text-lavender font-bold text-xs md:text-sm">Bonus</div>
                            <div className="text-zinc-400 text-xs">(Cebu Hacktoberfest 2025 projects)</div>
                          </td>
                          <td className="p-3 md:p-4 text-right text-lavender font-bold text-base md:text-lg">+10</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Create Criteria */}
            <div
              className={`transition-all duration-300 ${
                selectedPath === "create"
                  ? "opacity-100 scale-100 lg:scale-105"
                  : "opacity-60 scale-95"
              }`}
            >
              <ScrollAnimation animation="fade-up" delay={0.1}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-violet to-lavender rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-void" />
                  </div>
                  <h2 className="text-2xl font-bold text-zinc-100">
                    Create Criteria
                  </h2>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={0.2}>
                <div className="bg-gradient-to-br from-east-bay/40 to-void/40 border border-blue-violet/40 rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                  
                      <tbody>
                        {/* Documentation Section */}
                        <tr className="border-b border-blue-violet/30 bg-gradient-to-r from-melrose/10 to-transparent">
                          <td className="p-2 md:p-3" colSpan={2}>
                            <div className="text-melrose font-bold text-xs md:text-sm">DOCUMENTATION</div>
                          </td>
                        </tr>
                        <tr className="border-b border-blue-violet/20">
                          <td className="p-2 md:p-3 pl-4 md:pl-6 text-zinc-200 text-xs md:text-sm">Documentation Completeness</td>
                          <td className="p-2 md:p-3 text-right text-zinc-200 font-semibold text-xs md:text-sm">15%</td>
                        </tr>
                        <tr className="border-b border-blue-violet/20">
                          <td className="p-2 md:p-3 pl-4 md:pl-6 text-zinc-200 text-xs md:text-sm">Contribution Readiness</td>
                          <td className="p-2 md:p-3 text-right text-zinc-200 font-semibold text-xs md:text-sm">10%</td>
                        </tr>
                        <tr className="border-b border-blue-violet/30">
                          <td className="p-2 md:p-3 pl-4 md:pl-6 text-zinc-200 text-xs md:text-sm">Demo Quality</td>
                          <td className="p-2 md:p-3 text-right text-zinc-200 font-semibold text-xs md:text-sm">5%</td>
                        </tr>
                        <tr className="border-b border-blue-violet/30 bg-gradient-to-r from-lavender/5 to-transparent">
                          <td className="p-2 md:p-3 pl-3 md:pl-4 font-bold text-lavender text-xs md:text-sm">TOTAL</td>
                          <td className="p-2 md:p-3 text-right font-bold text-lavender text-base md:text-lg">30%</td>
                        </tr>

                        {/* Technical Soundness Section */}
                        <tr className="border-b border-blue-violet/30 bg-gradient-to-r from-melrose/10 to-transparent">
                          <td className="p-2 md:p-3" colSpan={2}>
                            <div className="text-melrose font-bold text-xs md:text-sm">TECHNICAL SOUNDNESS</div>
                          </td>
                        </tr>
                        <tr className="border-b border-blue-violet/20">
                          <td className="p-2 md:p-3 pl-4 md:pl-6 text-zinc-200 text-xs md:text-sm">Code Quality & Structure</td>
                          <td className="p-2 md:p-3 text-right text-zinc-200 font-semibold text-xs md:text-sm">15%</td>
                        </tr>
                        <tr className="border-b border-blue-violet/20">
                          <td className="p-2 md:p-3 pl-4 md:pl-6 text-zinc-200 text-xs md:text-sm">Solution Fit</td>
                          <td className="p-2 md:p-3 text-right text-zinc-200 font-semibold text-xs md:text-sm">10%</td>
                        </tr>
                        <tr className="border-b border-blue-violet/20">
                          <td className="p-2 md:p-3 pl-4 md:pl-6 text-zinc-200 text-xs md:text-sm">UX & Design</td>
                          <td className="p-2 md:p-3 text-right text-zinc-200 font-semibold text-xs md:text-sm">10%</td>
                        </tr>
                        <tr className="border-b border-blue-violet/20">
                          <td className="p-2 md:p-3 pl-4 md:pl-6 text-zinc-200 text-xs md:text-sm">Security Adherence</td>
                          <td className="p-2 md:p-3 text-right text-zinc-200 font-semibold text-xs md:text-sm">10%</td>
                        </tr>
                        <tr className="border-b border-blue-violet/20">
                          <td className="p-2 md:p-3 pl-4 md:pl-6 text-zinc-200 text-xs md:text-sm">Implementation Completeness</td>
                          <td className="p-2 md:p-3 text-right text-zinc-200 font-semibold text-xs md:text-sm">5%</td>
                        </tr>
                        <tr className="border-b border-blue-violet/20">
                          <td className="p-2 md:p-3 pl-4 md:pl-6 text-zinc-200 text-xs md:text-sm">Codebase Tooling</td>
                          <td className="p-2 md:p-3 text-right text-zinc-200 font-semibold text-xs md:text-sm">5%</td>
                        </tr>
                        <tr className="border-b border-blue-violet/30">
                          <td className="p-2 md:p-3 pl-4 md:pl-6 text-zinc-200 text-xs md:text-sm">Testability</td>
                          <td className="p-2 md:p-3 text-right text-zinc-200 font-semibold text-xs md:text-sm">5%</td>
                        </tr>
                        <tr className="border-b border-blue-violet/30 bg-gradient-to-r from-lavender/5 to-transparent">
                          <td className="p-2 md:p-3 pl-3 md:pl-4 font-bold text-lavender text-xs md:text-sm">TOTAL</td>
                          <td className="p-2 md:p-3 text-right font-bold text-lavender text-base md:text-lg">60%</td>
                        </tr>

                        {/* Infrastructure and Deployment Section */}
                        <tr className="border-b border-blue-violet/30 bg-gradient-to-r from-melrose/10 to-transparent">
                          <td className="p-2 md:p-3" colSpan={2}>
                            <div className="text-melrose font-bold text-xs md:text-sm">INFRASTRUCTURE & DEPLOYMENT</div>
                          </td>
                        </tr>
                        <tr className="border-b border-blue-violet/20">
                          <td className="p-2 md:p-3 pl-4 md:pl-6 text-zinc-200 text-xs md:text-sm">Deployment</td>
                          <td className="p-2 md:p-3 text-right text-zinc-200 font-semibold text-xs md:text-sm">5%</td>
                        </tr>
                        <tr className="border-b border-blue-violet/30">
                          <td className="p-2 md:p-3 pl-4 md:pl-6 text-zinc-200 text-xs md:text-sm">Scalability</td>
                          <td className="p-2 md:p-3 text-right text-zinc-200 font-semibold text-xs md:text-sm">5%</td>
                        </tr>
                        <tr className="bg-gradient-to-r from-lavender/5 to-transparent">
                          <td className="p-2 md:p-3 pl-3 md:pl-4 font-bold text-lavender text-xs md:text-sm">TOTAL</td>
                          <td className="p-2 md:p-3 text-right font-bold text-lavender text-base md:text-lg">10%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        {/* Path Details */}
        <ScrollAnimation animation="fade-up" delay={0.3}>
          <div className="bg-gradient-to-br from-east-bay/30 to-void/30 border border-blue-violet/30 rounded-xl p-6 md:p-8 mb-16">
            {selectedPath === "contribute" ? (
              <div>
                <h3 className="text-xl font-bold text-lavender mb-4">How to Contribute</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lavender mt-0.5 flex-shrink-0" />
                    <span><strong className="text-zinc-100">Priority:</strong> Local Cebu projects submitted via our platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lavender mt-0.5 flex-shrink-0" />
                    <span>Find issues labeled <code className="px-2 py-1 bg-blue-violet/30 rounded text-sm">"hacktoberfest"</code> or <code className="px-2 py-1 bg-blue-violet/30 rounded text-sm">"good first issue"</code></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lavender mt-0.5 flex-shrink-0" />
                    <span>Submit quality pull requests to existing projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lavender mt-0.5 flex-shrink-0" />
                    <span>Get them reviewed and merged by maintainers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lavender mt-0.5 flex-shrink-0" />
                    <span>Earn recognition and prizes for your contributions</span>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-lavender mb-4">How to Create</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lavender mt-0.5 flex-shrink-0" />
                    <span><strong className="text-zinc-100">Form a team</strong> of 1-4 members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lavender mt-0.5 flex-shrink-0" />
                    <span><strong className="text-zinc-100">Build something innovative</strong> that solves a real problem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lavender mt-0.5 flex-shrink-0" />
                    <span><strong className="text-zinc-100">Open source your project</strong> with proper documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lavender mt-0.5 flex-shrink-0" />
                    <span><strong className="text-zinc-100">Deploy your project</strong> and make it accessible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lavender mt-0.5 flex-shrink-0" />
                    <span><strong className="text-zinc-100">Compete for prizes</strong> based on the criteria above</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation animation="fade-up" delay={0.3}>
          <div className="bg-gradient-to-br from-lavender/20 to-blue-violet/20 border border-lavender/40 rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
              Choose your path and make your mark in open source. Browse existing projects 
              to contribute to, or submit your own innovative creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-lavender text-void font-semibold rounded-lg hover:bg-melrose transition-all transform hover:scale-105 shadow-lg"
              >
                <GitBranch className="w-5 h-5 mr-2" />
                Browse Projects
              </Link>
              <Link
                href="/submit"
                className="inline-flex items-center justify-center px-8 py-4 bg-east-bay/50 border-2 border-blue-violet text-melrose font-semibold rounded-lg hover:bg-east-bay/70 transition-all transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Submit Project
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <Footer />
    </div>
  );
}
