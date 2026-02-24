"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Check } from "lucide-react";

const pains = [
  "Burned by agencies that don't understand government nuance.",
  "Seeking a trusted partner to architect national-scale prestige.",
  "Tired of over-promised templates and under-delivered strategy.",
  "Frustrated with visual systems that lack institutional authority.",
  "Seeking self-governing digital infrastructure that lasts decades.",
  "Eager to define the digital future of the Republic."
];

export const ProblemSection: React.FC = () => {
  return (
    <Section className="bg-[#f5f5f3]" id="problem">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Side: Agitation */}
        <div>
          <Typography variant="label" className="text-m2-gold">The Problem</Typography>
          <Typography variant="h2" className="text-black mb-8 !not-italic">
            Most institutions know they are <span className="italic text-m2-gold">destined for more.</span>
          </Typography>
          
          <ul className="space-y-6 mt-12">
            {pains.map((pain, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-m2-gold rounded-full flex items-center justify-center mt-1">
                  <Check size={14} className="text-black stroke-[3px]" />
                </div>
                <Typography variant="body" className="text-black/80 font-medium">
                  {pain}
                </Typography>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Authority Quote / Image */}
        <div className="lg:mt-16">
          <Card className="bg-white p-10 lg:p-16 shadow-2xl border-none">
            <span className="font-heading text-8xl text-m2-gold leading-[0.1] block mb-8 italic">
              &quot;
            </span>
            <Typography variant="body" className="text-black/70 italic text-xl leading-relaxed mb-10">
              I would highly recommend M2 Creative for any high-level or institutional initiative. 
              They are incredibly innovative, helping us achieve strategic goals we weren&apos;t even 
              aware were possible within our timeframe.
            </Typography>
            
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-m2-gold font-accent font-black text-xl">
                MA
              </div>
              <div>
                <Typography variant="h4" className="text-black !text-sm mb-1">
                  Mahmoud Awaleh
                </Typography>
                <Typography variant="caption" className="text-black/40 font-bold uppercase tracking-widest">
                  Strategic Advisor | Somaliland
                </Typography>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
