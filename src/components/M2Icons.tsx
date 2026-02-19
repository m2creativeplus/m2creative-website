// M2 Creative — SVG Icon System
// Reusable logo mark and icon variants for the M2 brand

import React from "react";

interface M2IconProps {
  size?: number;
  variant?: "mark" | "wordmark" | "full" | "favicon" | "monogram";
  className?: string;
  color?: "gold" | "white" | "dark" | "gradient";
}

const colorMap = {
  gold: { primary: "#fbbf24", secondary: "#f59e0b" },
  white: { primary: "#f8fafc", secondary: "#e2e8f0" },
  dark: { primary: "#0f172a", secondary: "#1e293b" },
  gradient: { primary: "url(#m2-gradient)", secondary: "url(#m2-gradient)" },
};

/**
 * M2 Creative Logo Mark — The "M2" monogram in a rounded square
 */
export function M2Logo({
  size = 40,
  variant = "mark",
  className = "",
  color = "gold",
}: M2IconProps) {
  const id = React.useId();
  const c = colorMap[color];

  if (variant === "favicon") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="32" y2="32">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill={`url(#${id}-grad)`} />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontFamily="'Outfit', sans-serif"
          fontWeight="700"
          fontSize="16"
          fill="#0f172a"
        >
          M2
        </text>
      </svg>
    );
  }

  if (variant === "monogram") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id={`${id}-mono`} x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor={c.primary === "url(#m2-gradient)" ? "#fbbf24" : c.primary} />
            <stop offset="100%" stopColor={c.secondary === "url(#m2-gradient)" ? "#f59e0b" : c.secondary} />
          </linearGradient>
        </defs>
        {/* Outer ring */}
        <circle cx="24" cy="24" r="22" stroke={`url(#${id}-mono)`} strokeWidth="2" fill="none" />
        {/* M2 text */}
        <text
          x="24"
          y="30"
          textAnchor="middle"
          fontFamily="'Outfit', sans-serif"
          fontWeight="700"
          fontSize="18"
          fill={c.primary === "url(#m2-gradient)" ? "#fbbf24" : c.primary}
        >
          M2
        </text>
      </svg>
    );
  }

  if (variant === "wordmark") {
    return (
      <svg
        width={size * 4}
        height={size}
        viewBox="0 0 200 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id={`${id}-wm`} x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        {/* Logo mark */}
        <rect width="48" height="48" rx="12" fill={`url(#${id}-wm)`} />
        <text
          x="24"
          y="32"
          textAnchor="middle"
          fontFamily="'Outfit', sans-serif"
          fontWeight="700"
          fontSize="20"
          fill="#0f172a"
        >
          M2
        </text>
        {/* Wordmark */}
        <text
          x="60"
          y="26"
          fontFamily="'Outfit', sans-serif"
          fontWeight="600"
          fontSize="16"
          fill={c.primary === "url(#m2-gradient)" ? "#f8fafc" : c.primary}
        >
          Creative
        </text>
        <text
          x="60"
          y="40"
          fontFamily="'Outfit', sans-serif"
          fontWeight="400"
          fontSize="10"
          fill="#94a3b8"
        >
          & Consulting
        </text>
      </svg>
    );
  }

  if (variant === "full") {
    return (
      <svg
        width={size * 6}
        height={size}
        viewBox="0 0 300 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id={`${id}-full`} x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        {/* Logo mark */}
        <rect width="48" height="48" rx="12" fill={`url(#${id}-full)`} />
        <text
          x="24"
          y="32"
          textAnchor="middle"
          fontFamily="'Outfit', sans-serif"
          fontWeight="700"
          fontSize="20"
          fill="#0f172a"
        >
          M2
        </text>
        {/* Full name */}
        <text
          x="60"
          y="30"
          fontFamily="'Outfit', sans-serif"
          fontWeight="600"
          fontSize="14"
          fill={c.primary === "url(#m2-gradient)" ? "#f8fafc" : c.primary}
        >
          M2 Creative & Consulting
        </text>
        {/* Tagline */}
        <text
          x="60"
          y="43"
          fontFamily="'Outfit', sans-serif"
          fontWeight="400"
          fontSize="9"
          fill="#94a3b8"
          letterSpacing="2"
        >
          ARCHITECTING THE DIGITAL FUTURE
        </text>
      </svg>
    );
  }

  // Default: mark
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={`${id}-mark`} x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill={`url(#${id}-mark)`} />
      <text
        x="24"
        y="32"
        textAnchor="middle"
        fontFamily="'Outfit', sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="#0f172a"
      >
        M2
      </text>
    </svg>
  );
}

/**
 * M2 Brand Icons — Custom icons for the M2 ecosystem
 */
export function M2BrandIcon({
  icon,
  size = 24,
  className = "",
}: {
  icon: "sovereignty" | "architecture" | "innovation" | "heritage" | "systems";
  size?: number;
  className?: string;
}) {
  const id = React.useId();

  const icons: Record<string, React.ReactNode> = {
    sovereignty: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <defs>
          <linearGradient id={`${id}-sov`} x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        {/* Shield shape */}
        <path
          d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
          stroke={`url(#${id}-sov)`}
          strokeWidth="1.5"
          fill="none"
        />
        {/* Star */}
        <path
          d="M12 8l1.5 3 3.5.5-2.5 2.5.5 3.5L12 16l-3 1.5.5-3.5L7 11.5l3.5-.5L12 8z"
          fill={`url(#${id}-sov)`}
        />
      </svg>
    ),
    architecture: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <defs>
          <linearGradient id={`${id}-arch`} x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        {/* Building with pillars */}
        <path d="M2 20h20M4 20V10l8-6 8 6v10" stroke={`url(#${id}-arch)`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="8" y1="20" x2="8" y2="12" stroke={`url(#${id}-arch)`} strokeWidth="1.5" />
        <line x1="12" y1="20" x2="12" y2="12" stroke={`url(#${id}-arch)`} strokeWidth="1.5" />
        <line x1="16" y1="20" x2="16" y2="12" stroke={`url(#${id}-arch)`} strokeWidth="1.5" />
      </svg>
    ),
    innovation: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <defs>
          <linearGradient id={`${id}-inn`} x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        {/* Lightning bolt */}
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke={`url(#${id}-inn)`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    heritage: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <defs>
          <linearGradient id={`${id}-her`} x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        {/* Open book */}
        <path d="M2 3h6c1.1 0 2.1.4 2.8 1.1.8.8 1.2 1.8 1.2 2.9v13c0-.8-.3-1.6-.9-2.1C10.5 17.3 9.8 17 9 17H2V3z" stroke={`url(#${id}-her)`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 3h-6c-1.1 0-2.1.4-2.8 1.1-.8.8-1.2 1.8-1.2 2.9v13c0-.8.3-1.6.9-2.1.6-.6 1.3-.9 2.1-.9h7V3z" stroke={`url(#${id}-her)`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    systems: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <defs>
          <linearGradient id={`${id}-sys`} x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        {/* Circuit/node pattern */}
        <circle cx="12" cy="12" r="3" stroke={`url(#${id}-sys)`} strokeWidth="1.5" />
        <circle cx="4" cy="4" r="2" stroke={`url(#${id}-sys)`} strokeWidth="1.5" />
        <circle cx="20" cy="4" r="2" stroke={`url(#${id}-sys)`} strokeWidth="1.5" />
        <circle cx="4" cy="20" r="2" stroke={`url(#${id}-sys)`} strokeWidth="1.5" />
        <circle cx="20" cy="20" r="2" stroke={`url(#${id}-sys)`} strokeWidth="1.5" />
        <line x1="6" y1="6" x2="10" y2="10" stroke={`url(#${id}-sys)`} strokeWidth="1" />
        <line x1="18" y1="6" x2="14" y2="10" stroke={`url(#${id}-sys)`} strokeWidth="1" />
        <line x1="6" y1="18" x2="10" y2="14" stroke={`url(#${id}-sys)`} strokeWidth="1" />
        <line x1="18" y1="18" x2="14" y2="14" stroke={`url(#${id}-sys)`} strokeWidth="1" />
      </svg>
    ),
  };

  return <>{icons[icon]}</>;
}

export default M2Logo;
