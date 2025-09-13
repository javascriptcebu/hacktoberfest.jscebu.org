"use client";

import { Card } from "./card";
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
          <div className="p-8 text-center">
            <p className="text-zinc-300 mb-4">
              Hacktoberfest Cebu 2025 is spearheaded by{" "}
              <strong className="text-zinc-100">JavaScript Cebu</strong>,{" "}
              <strong className="text-zinc-100">
                PizzaPy Cebu Python Users Group
              </strong>{" "}
              and{" "}
              <strong className="text-zinc-100">
                Etherium Philippines
              </strong>
              , with support from local tech communities including but not
              limited to:
            </p>
            <p className="text-zinc-400">
              React Cebu, Laravel Cebu, Cebu Game Dev, DevCon Cebu, GDG
              Cebu, Cebu WordPress Meetup, CebuXD, Web3 Cebu, AI Gen Cebu,
              and other commuunity organizations of the Cebu Tech Community.
            </p>
          </div>
        </Card>
      </ScrollAnimation>
    </section>
  );
}