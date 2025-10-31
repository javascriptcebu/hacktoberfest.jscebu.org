"use client";

import { useEffect } from "react";

interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  glow: string;
  gradient: string;
}

// Theme configurations for each award
const AWARD_THEMES: Record<string, ThemeConfig> = {
"Best Overall Project": {
  primary: "#E6C200", // royal gold with subtle warmth
  secondary: "#B48E00", // darker gold for depth
  accent: "#F3E8FF", // soft lavender-white highlight
  glow: "rgba(230, 194, 0, 0.35)", // subtle golden glow
  gradient: "linear-gradient(135deg, rgba(230, 194, 0, 0.12) 0%, rgba(139, 92, 246, 0.08) 100%)", // gold fading into violet
},

  "Best Use of AI": {
    primary: "#60a5fa", // blue-400
    secondary: "#3b82f6", // blue-500
    accent: "#dbeafe", // blue-100
    glow: "rgba(96, 165, 250, 0.3)",
    gradient: "linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(147, 51, 234, 0.05) 100%)",
  },
  "Most Fun / Best Easter Egg": {
    primary: "#f472b6", // pink-400
    secondary: "#ec4899", // pink-500
    accent: "#fce7f3", // pink-100
    glow: "rgba(244, 114, 182, 0.3)",
    gradient: "linear-gradient(135deg, rgba(244, 114, 182, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)",
  },
  "Best Easter Egg": {
    primary: "#f472b6", // pink-400
    secondary: "#ec4899", // pink-500
    accent: "#fce7f3", // pink-100
    glow: "rgba(244, 114, 182, 0.3)",
    gradient: "linear-gradient(135deg, rgba(244, 114, 182, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)",
  },
  "Best Use of Blockchain": {
    primary: "#34d399", // emerald-400
    secondary: "#10b981", // emerald-500
    accent: "#d1fae5", // emerald-100
    glow: "rgba(52, 211, 153, 0.3)",
    gradient: "linear-gradient(135deg, rgba(52, 211, 153, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%)",
  },
  "Best Open Source Contribution": {
    primary: "#4ade80", // green-400
    secondary: "#22c55e", // green-500
    accent: "#dcfce7", // green-100
    glow: "rgba(74, 222, 128, 0.3)",
    gradient: "linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)",
  },
};

interface AwardThemeWrapperProps {
  awards?: string[];
  children: React.ReactNode;
}

export function AwardThemeWrapper({ awards, children }: AwardThemeWrapperProps) {
  useEffect(() => {
    if (!awards || awards.length === 0) {
      // Reset to default theme
      document.documentElement.style.removeProperty("--award-primary");
      document.documentElement.style.removeProperty("--award-secondary");
      document.documentElement.style.removeProperty("--award-accent");
      document.documentElement.style.removeProperty("--award-glow");
      document.documentElement.style.removeProperty("--award-gradient");
      document.documentElement.classList.remove("award-theme-active");
      return;
    }

    // Use the first award for theming (or could blend multiple)
    const primaryAward = awards[0];
    const theme = AWARD_THEMES[primaryAward];

    if (theme) {
      // Apply theme CSS variables
      document.documentElement.style.setProperty("--award-primary", theme.primary);
      document.documentElement.style.setProperty("--award-secondary", theme.secondary);
      document.documentElement.style.setProperty("--award-accent", theme.accent);
      document.documentElement.style.setProperty("--award-glow", theme.glow);
      document.documentElement.style.setProperty("--award-gradient", theme.gradient);
      document.documentElement.classList.add("award-theme-active");
    }

    // Cleanup on unmount
    return () => {
      document.documentElement.style.removeProperty("--award-primary");
      document.documentElement.style.removeProperty("--award-secondary");
      document.documentElement.style.removeProperty("--award-accent");
      document.documentElement.style.removeProperty("--award-glow");
      document.documentElement.style.removeProperty("--award-gradient");
      document.documentElement.classList.remove("award-theme-active");
    };
  }, [awards]);

  return <>{children}</>;
}
