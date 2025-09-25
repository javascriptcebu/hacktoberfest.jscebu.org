"use client";

import { Card } from "./card";
import { ScrollAnimation } from "./scroll-animation";
import Link from "next/link";

interface HomeRegistrationProps {
  isAuthenticated: boolean;
}

export function HomeRegistration({
  isAuthenticated,
}: HomeRegistrationProps) {
  return (
    <section className="py-12">
      <ScrollAnimation animation="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8 text-center">
          📝 Registration
        </h2>
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" delay={0.1}>
        <Card>
          <div className="p-8">
            <p className="text-zinc-100 text-lg font-semibold mb-4 text-center">
              Hacktoberfest Cebu is free and open to everyone!
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-zinc-400 font-semibold mr-3">
                  Step 1:
                </span>
                <p className="text-zinc-400">
                  Read about and register at Hacktoberfest.com
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-zinc-400 font-semibold mr-3">
                  Step 2:
                </span>
                <p className="text-zinc-400">
                  Sign up and{" "}
                  <Link
                    href="/signin"
                    className="text-lavender hover:text-melrose underline transition-colors"
                  >
                    create an account here via OneCebby
                  </Link>
                  <span className="ml-1"></span>
                  to stay updated, find teams, and track your participation...
                </p>
              </div>
            </div>
          </div>
        </Card>
      </ScrollAnimation>
    </section>
  );
}
