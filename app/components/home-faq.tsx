"use client";

import { Card } from "./card";
import { ScrollAnimation } from "./scroll-animation";

const faqs = [
  {
    question: "Who can join?",
    answer:
      "Anyone! Students, professionals, hobbyists - no matter your level, you're welcome.",
  },
  {
    question: "Do I need to know coding?",
    answer:
      "Not at all. Teams can include designers, writers, project managers, and more.",
  },
  {
    question: "Is this free?",
    answer: "Yes - Hacktoberfest Cebu is free and open to the public.",
  },
  {
    question: "What if I don't have a team?",
    answer:
      "You can form or join a team during Opening Day or through our community channels.",
  },
  {
    question: "What counts as an open source contribution?",
    answer:
      "Any accepted pull request to a public open-source repo - it can be code, documentation, design assets, or translations.",
  },
  {
    question: "Will there be online options?",
    answer:
      "Yes, we aim for hybrid participation. Details will be announced closer to the event.",
  },
];

export function HomeFAQ() {
  return (
    <section className="py-12 pb-20">
      <ScrollAnimation animation="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8 text-center">
          🙋 FAQ
        </h2>
      </ScrollAnimation>
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <ScrollAnimation
            key={index}
            animation="fade-up"
            delay={0.1 + index * 0.05}
          >
            <Card>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-zinc-100 mb-2">
                  {faq.question}
                </h4>
                <p className="text-zinc-400">{faq.answer}</p>
              </div>
            </Card>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}
