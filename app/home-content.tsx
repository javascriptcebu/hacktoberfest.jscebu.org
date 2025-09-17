"use client";

import {
  ScrollAnimation,
  StaggerAnimation,
} from "./components/scroll-animation";

import { Card } from "./components/card";
import Image from "next/legacy/image";
import Link from "next/link";
import SignIn from "./sign-in";
import { Timeline } from "./components/timeline";

interface HomeContentProps {
  isAuthenticated: boolean;
  navigation: Array<{ name: string; href: string }>;
  scheduleEvents: any[];
  hackathonCategories: any[];
  reasons: string[];
  faqs: any[];
  signInAction: () => Promise<void>;
}

export function HomeContent({
  isAuthenticated,
  navigation,
  scheduleEvents,
  hackathonCategories,
  reasons,
  faqs,
  signInAction,
}: HomeContentProps) {
  return (
    <>
      <div className="mt-8 mb-16 text-center animate-fade-in max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 px-4 py-2 rounded-full mb-6 border border-yellow-800/30">
          <span className="text-yellow-400">🔥</span>
          <span className="text-yellow-400 text-sm font-semibold">
            Preptember begins...
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4 leading-tight">
          Build. Contribute. Win. <span className="text-zinc-400">Repeat.</span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 mb-4">
          Join <strong className="text-zinc-100">100+ developers</strong> for
          Cebu's biggest open source celebration
        </p>

        <p className="text-sm sm:text-base text-zinc-400 mb-8 max-w-2xl mx-auto">
          21 days of hacking, workshops from 10+ partner communities, exclusive
          swag, and the chance to make your mark in open source history not just
          locally but globally.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {isAuthenticated ? (
            <Link
              href="/submit"
              className="inline-flex items-center justify-center px-6 py-3 bg-zinc-100 text-zinc-900 rounded-md font-medium hover:bg-zinc-200 transition-colors"
            >
              Submit Your Open Source Project →
            </Link>
          ) : (
            <SignIn text="Submit your projects →" onSignIn={signInAction} />
          )}
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-zinc-700 text-zinc-300 rounded-md font-medium hover:bg-zinc-800 transition-colors"
          >
            Browse 2025 Projects
          </Link>
        </div>
      </div>

      <div className="w-full max-w-6xl px-4 space-y-16">
        {/* Add your animated sections here */}
        {/* This is a placeholder - you can move the rest of the content here */}
      </div>
    </>
  );
}
