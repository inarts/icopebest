import React from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <div className="w-full bg-background-muted border-b border-border py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <span className="block text-[11px] font-semibold tracking-eyebrow text-foreground-muted uppercase mb-4">
          {eyebrow}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-foreground-muted font-normal max-w-2xl text-balance leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}