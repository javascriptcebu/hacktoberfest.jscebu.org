"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale" | "blur";
  delay?: number;
  duration?: number;
  threshold?: number;
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing to prevent re-animation
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return "opacity-0 translate-y-8";
        case "fade-in":
          return "opacity-0";
        case "fade-left":
          return "opacity-0 translate-x-8";
        case "fade-right":
          return "opacity-0 -translate-x-8";
        case "scale":
          return "opacity-0 scale-95";
        case "blur":
          return "opacity-0 blur-sm";
        default:
          return "opacity-0";
      }
    }

    switch (animation) {
      case "fade-up":
      case "fade-left":
      case "fade-right":
        return "opacity-100 translate-x-0 translate-y-0";
      case "scale":
        return "opacity-100 scale-100";
      case "blur":
        return "opacity-100 blur-0";
      default:
        return "opacity-100";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${getAnimationClass()} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
}

// Stagger animation wrapper for lists
interface StaggerAnimationProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale" | "blur";
}

export function StaggerAnimation({
  children,
  className = "",
  staggerDelay = 0.1,
  animation = "fade-up",
}: StaggerAnimationProps) {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <ScrollAnimation
              key={index}
              animation={animation}
              delay={index * staggerDelay}
            >
              {child}
            </ScrollAnimation>
          ))
        : children}
    </div>
  );
}