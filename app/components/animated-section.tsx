"use client";

import { ScrollAnimation } from "./scroll-animation";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale" | "blur";
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0
}: AnimatedSectionProps) {
  return (
    <ScrollAnimation animation={animation} delay={delay} className={className}>
      {children}
    </ScrollAnimation>
  );
}

interface AnimatedGridProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function AnimatedGrid({
  children,
  className = "",
  staggerDelay = 0.1
}: AnimatedGridProps) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <div className={className}>
      {items.map((child, index) => (
        <ScrollAnimation
          key={index}
          animation="fade-up"
          delay={index * staggerDelay}
        >
          {child}
        </ScrollAnimation>
      ))}
    </div>
  );
}