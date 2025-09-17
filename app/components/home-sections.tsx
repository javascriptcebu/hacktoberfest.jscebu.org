"use client";

import { Card } from "./card";
import { ScrollAnimation } from "./scroll-animation";
import Link from "next/link";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSectionTitle({ children, className = "", delay = 0 }: SectionTitleProps) {
  return (
    <ScrollAnimation animation="fade-up" delay={delay}>
      <h2 className={className}>
        {children}
      </h2>
    </ScrollAnimation>
  );
}

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedText({ children, className = "", delay = 0.1 }: AnimatedTextProps) {
  return (
    <ScrollAnimation animation="fade-up" delay={delay}>
      <p className={className}>
        {children}
      </p>
    </ScrollAnimation>
  );
}

interface AnimatedCardsProps {
  items: any[];
  renderCard: (item: any, index: number) => React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function AnimatedCards({
  items,
  renderCard,
  className = "",
  staggerDelay = 0.1
}: AnimatedCardsProps) {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <ScrollAnimation
          key={index}
          animation="fade-up"
          delay={0.2 + index * staggerDelay}
        >
          {renderCard(item, index)}
        </ScrollAnimation>
      ))}
    </div>
  );
}

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedCard({ children, delay = 0 }: AnimatedCardProps) {
  return (
    <ScrollAnimation animation="fade-up" delay={delay}>
      <Card>
        {children}
      </Card>
    </ScrollAnimation>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  delay?: number;
}

export function AnimatedFAQItem({ question, answer, delay = 0 }: FAQItemProps) {
  return (
    <ScrollAnimation animation="fade-up" delay={delay}>
      <Card>
        <div className="p-6">
          <h4 className="text-lg font-semibold text-zinc-100 mb-2">
            {question}
          </h4>
          <p className="text-zinc-400">{answer}</p>
        </div>
      </Card>
    </ScrollAnimation>
  );
}

interface TimelineWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedTimeline({ children, delay = 0.2 }: TimelineWrapperProps) {
  return (
    <ScrollAnimation animation="fade-up" delay={delay}>
      {children}
    </ScrollAnimation>
  );
}