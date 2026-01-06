import React from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <header className="w-full bg-background-muted border-b border-border py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <span className="block text-[11px] font-semibold tracking-eyebrow text-foreground-muted uppercase mb-3">
          {eyebrow}
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-bold text-foreground mb-4 tracking-tight leading-[1.1]">
          {title}
        </h1>

        {subtitle ? (
          <p className="text-base md:text-lg text-foreground-muted font-normal max-w-2xl text-balance leading-relaxed">
            {subtitle}
          </p>
        ) : null}
      </div>
    </header>
  );
}
