// components/SectionHeading.tsx
import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-serif font-bold text-foreground">
      {children}
    </h2>
  );
}
