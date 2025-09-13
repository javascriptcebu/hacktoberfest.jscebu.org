"use client";

import { Card } from "./card";
import { ScrollAnimation } from "./scroll-animation";

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedCard({ children, delay = 0, className = "" }: AnimatedCardProps) {
  return (
    <ScrollAnimation animation="fade-up" delay={delay}>
      <Card>
        <div className={className}>
          {children}
        </div>
      </Card>
    </ScrollAnimation>
  );
}