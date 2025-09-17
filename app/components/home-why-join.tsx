"use client";

import { Card } from "./card";
import { ScrollAnimation } from "./scroll-animation";

const reasons = [
  "Contribute to open source projects that make a difference",
  "Build something new in a collaborative hackathon",
  "Connect with Cebu's vibrant developer communities",
  "Learn from workshops, talks, and mentors",
  "Take home swags and prizes from our partners",
];

export function HomeWhyJoin() {
  return (
    <section className="py-12">
      <ScrollAnimation animation="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8 text-center">
          🙌 Why Join?
        </h2>
      </ScrollAnimation>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reasons.map((reason, index) => (
          <ScrollAnimation
            key={index}
            animation="fade-up"
            delay={0.1 + index * 0.05}
          >
            <Card>
              <div className="p-6">
                <p className="text-base text-zinc-300">{reason}</p>
              </div>
            </Card>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}