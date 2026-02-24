import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "small" | "tiny" | "caption" | "label";
  className?: string;
  gradient?: boolean;
}

/**
 * Typography - Redefining M2's voice using the Avintiv Pillar Stack:
 * - Playfair Display: Authority & Heritage
 * - Syne: Geometric Precision
 * - DM Sans: Modern Clarity
 */
export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body",
  className = "",
  gradient = false,
}) => {
  const baseClasses = gradient ? "gradient-text-gold inline-block" : "";
  
  switch (variant) {
    case "h1":
      // Large, bold, authoritarian (Avintiv Hero Style)
      return <h1 className={`font-heading text-clamp-h1 font-black leading-[1.05] tracking-tight ${baseClasses} ${className}`}>{children}</h1>;
    case "h2":
      // Italicized grace for sub-headings
      return <h2 className={`font-heading text-clamp-h2 font-normal italic leading-[1.2] text-m2-gold ${baseClasses} ${className}`}>{children}</h2>;
    case "h3":
      return <h3 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${baseClasses} ${className}`}>{children}</h3>;
    case "h4":
      return <h4 className={`font-accent text-xl font-bold uppercase tracking-widest ${baseClasses} ${className}`}>{children}</h4>;
    case "label":
      // Syne labels for sections
      return <span className={`font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-m2-text-muted mb-4 block ${className}`}>{children}</span>;
    case "body":
      return <p className={`font-body text-lg leading-relaxed text-m2-text-muted/80 ${className}`}>{children}</p>;
    case "small":
      return <p className={`font-body text-base leading-relaxed text-m2-text-muted/60 ${className}`}>{children}</p>;
    case "tiny":
      // Geometric accent
      return <p className={`font-accent text-[10px] font-extrabold uppercase tracking-[4px] text-m2-gold ${className}`}>{children}</p>;
    case "caption":
      return <span className={`font-body text-xs text-m2-text-muted/40 ${className}`}>{children}</span>;
    default:
      return <p className={`font-body ${className}`}>{children}</p>;
  }
};
