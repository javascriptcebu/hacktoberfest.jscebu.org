"use client";

import { Card } from "./card";
import Image from "next/legacy/image";
import { ScrollAnimation } from "./scroll-animation";

export function HomePartners() {
  return (
    <section className="py-12">
      <ScrollAnimation animation="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8 text-center">
          🤝 Organizers & Partners
        </h2>
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" delay={0.1}>
        <Card>
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-zinc-200 mb-6 text-center">
                Lead Organizers
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/jscebu.png"
                    alt="JavaScript Cebu"
                    width={160}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/pizzapyhorizontal-primary-white.png"
                    alt="PizzaPy Python Users Group"
                    width={150}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/DkBG_Rectangle.png"
                    alt="Ethereum Philippines"
                    width={106}
                    height={60}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-zinc-300 mb-4">
                Hacktoberfest Cebu 2025 is spearheaded by{" "}
                <strong className="text-zinc-100">JavaScript Cebu</strong>,{" "}
                <strong className="text-zinc-100">
                  PizzaPy Cebu Python Users Group
                </strong>{" "}
                and{" "}
                <strong className="text-zinc-100">Ethereum Philippines</strong>,
                with support from local tech communities including but not
                limited to:
              </p>
              <p className="text-zinc-400">
                React Cebu, Laravel Cebu x PHPxCebu, Cebu Game Dev, DevCon Cebu,
                GDG Cebu, Cebu WordPress Meetup, CebuXD, Web3 Cebu, AI Gen Cebu,
                and other community organizations of the Cebu Tech Community.
              </p>
            </div>
          </div>
        </Card>
      </ScrollAnimation>
    </section>
  );
}
