import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-md text-[10px] font-semibold tracking-eyebrow uppercase bg-[rgba(0,0,0,0.04)] text-foreground-muted border border-border ${className}`}
    >
      {children}
    </span>
  );
}