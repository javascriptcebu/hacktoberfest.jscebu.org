"use client";

import { Card } from "./card";
import { ReactNode } from "react";

interface ThemedCardProps {
  children: ReactNode;
  hasAward?: boolean;
  className?: string;
}

export function ThemedCard({ children, hasAward, className }: ThemedCardProps) {
  return (
    <Card>
      <div 
        className={className}
        style={hasAward ? {
          borderColor: 'var(--award-primary, transparent)',
          borderWidth: '1px',
          borderStyle: 'solid',
          opacity: '0.5'
        } : undefined}
      >
        {children}
      </div>
    </Card>
  );
}
