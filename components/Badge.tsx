// components/Badge.tsx
import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Optional style variants (all low-salience).
   * Default keeps current behavior.
   */
  variant?: "default" | "subtle" | "outline";
}

export default function Badge({
  children,
  className = "",
  variant = "default",
}: BadgeProps) {
  const base =
    "inline-flex items-center px-3 py-1 rounded-md text-[10px] font-semibold tracking-eyebrow uppercase";

  // Keep everything light / neutral (no black buttons or high-salience fills)
  const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
    default:
      "bg-[rgba(0,0,0,0.04)] text-foreground-muted border border-border",
    subtle:
      "bg-background-muted text-foreground-muted border border-border",
    outline:
      "bg-transparent text-foreground-muted border border-border",
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
