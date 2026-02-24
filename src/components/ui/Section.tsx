import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  container?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  id,
  container = true,
}) => {
  return (
    <section id={id} className={`py-24 lg:py-40 relative overflow-hidden ${className}`}>
      {container ? (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};
