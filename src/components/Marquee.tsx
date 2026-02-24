"use client";

import React from "react";

const items = [
  "STRATEGY AS SOVEREIGNTY",
  "DESIGN AS POLICY",
  "NATION-LEVEL ARCHITECTURE",
  "ELITE GOVTECH SYSTEMS",
  "DIGITAL DIPLOMACY",
  "INSTITUTIONAL PRECISION",
];

export const Marquee: React.FC = () => {
  return (
    <div className="marquee-strip relative z-20">
      <div className="marquee-content">
        {[...items, ...items, ...items].map((item, i) => (
          <span 
            key={i} 
            className="font-accent text-sm sm:text-lg font-black uppercase tracking-[0.1em] text-black inline-flex items-center"
          >
            {item}
            <span className="mx-8 md:mx-16 opacity-30 text-2xl">›</span>
          </span>
        ))}
      </div>
    </div>
  );
};
