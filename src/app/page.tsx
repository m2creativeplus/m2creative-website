"use client";

import MainLayout from "@/components/layout/MainLayout";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProblemSection } from "@/components/ProblemSection";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero />

      {/* Trust Bar (Marquee) */}
      <Marquee />

      {/* Agitation Section */}
      <ProblemSection />

      {/* Featured Work Teaser */}
      <Section className="bg-black">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <Typography variant="label" className="text-m2-gold">Our Legacy</Typography>
            <Typography variant="h2" className="text-white">
              Institutional Masterpieces
            </Typography>
          </div>
          <Typography variant="label" className="cursor-pointer hover:text-white transition-colors">
            Explore All Work ↗
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "SNPA Modernization", category: "Audit & Strategy", img: "snpa" },
            { title: "Guurti Legislative Portal", category: "GovTech", img: "guurti" }
          ].map((project, i) => (
            <Card key={i} className="aspect-[4/3] group relative overflow-hidden bg-[#0a0a0a]">
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
               <div className="absolute inset-0 grid-bg opacity-10 group-hover:scale-110 transition-transform duration-1000" />
               
               <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-m2-gold group-hover:text-black transition-all group-hover:rotate-45 z-20">
                 <ArrowRight size={20} />
               </div>

               <div className="absolute bottom-10 left-10 z-20">
                 <Typography variant="tiny" className="mb-2">{project.category}</Typography>
                 <Typography variant="h3" className="text-white !text-3xl">{project.title}</Typography>
               </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Global CTA */}
      <Section className="bg-black text-center py-40 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10" />
        <Typography variant="h1" className="text-white mb-10 relative z-10 !leading-[1.1]">
          Ready to <span className="italic text-m2-gold">Sovereignize?</span>
        </Typography>
        <div className="relative z-10">
          <button className="bg-m2-gold text-black px-12 py-5 font-accent font-black text-sm uppercase tracking-[0.2em] rounded-sm hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(255,212,0,0.4)] transition-all duration-300">
            Initiate Protocol
          </button>
        </div>
      </Section>
    </MainLayout>
  );
}
