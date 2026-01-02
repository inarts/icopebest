import React from "react";
import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function Card({ children, className = "", href }: CardProps) {
  const baseClasses =
    "block bg-white border border-border rounded-lg p-8 transition-all duration-300 hover:shadow-soft hover:-translate-y-[2px]";
  
  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return <div className={`${baseClasses} ${className}`}>{children}</div>;
}