"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ThemedBackButtonProps {
  hasAward: boolean;
}

export function ThemedBackButton({ hasAward }: ThemedBackButtonProps) {
  return (
    <Link
      href="/projects"
      className="inline-flex items-center gap-2 text-sm transition-colors"
      style={{
        color: hasAward ? 'var(--award-accent, #FFFFFF)' : '#FFFFFF',
      }}
      onMouseEnter={(e) => {
        if (hasAward) {
          e.currentTarget.style.color = 'var(--award-primary)';
        }
      }}
      onMouseLeave={(e) => {
        if (hasAward) {
          e.currentTarget.style.color = 'var(--award-accent)';
        }
      }}
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Projects
    </Link>
  );
}
