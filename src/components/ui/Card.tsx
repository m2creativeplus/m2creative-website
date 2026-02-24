import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  glass = true,
  hover = true,
}) => {
  return (
    <div
      className={`relative overflow-hidden transition-all duration-700 rounded-sm border border-m2-border ${
        glass ? "bg-m2-void-accent/60 backdrop-blur-2xl" : "bg-m2-void-accent"
      } ${
        hover ? "hover:border-m2-gold/40 hover:shadow-[0_0_50px_rgba(212,175,55,0.08)] group" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
