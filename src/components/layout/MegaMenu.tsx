"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activePillar: string | null;
}

const pillars = {
  "Sovereign Systems": {
    description: "Architecting national digital identity and legislative motherboards.",
    featured: {
      title: "Guurti Portal",
      image: "/images/projects/guurti.jpg",
      label: "Legislative Digitalization"
    },
    links: [
      { label: "National ID Infrastructure", href: "/services" },
      { label: "Legislative Portals", href: "/services" },
      { label: "Sovereign Web Ops", href: "/services" },
      { label: "Digital Sovereignty Frameworks", href: "/services" }
    ]
  },
  "SaaS Engineering": {
    description: "Building the engine rooms of modern government and enterprise.",
    featured: {
      title: "Smart School SMS",
      image: "/images/products/smart-school.jpg",
      label: "Institutional SaaS"
    },
    links: [
      { label: "Enterprise Web Applications", href: "/products" },
      { label: "Cloud Modernization", href: "/products" },
      { label: "API Governance", href: "/products" },
      { label: "Security & Scaling", href: "/products" }
    ]
  },
  "GovTech Advisory": {
    description: "Strategic consulting for digital age governance and transparency.",
    featured: {
      title: "SNPA Modernization",
      image: "/images/projects/snpa.jpg",
      label: "ISO Compliance"
    },
    links: [
      { label: "Policy Digitization", href: "/services" },
      { label: "Workflow Automation", href: "/services" },
      { label: "Digital Audit & Review", href: "/services" }
    ]
  },
  "Ecosystem Branding": {
    description: "Visual diplomacy and institutional trust branding.",
    featured: {
      title: "M2 Brand Kit",
      image: "/images/branding/m2.jpg",
      label: "Design as Policy"
    },
    links: [
      { label: "Visual Identity Design", href: "/services" },
      { label: "Strategic Narrative", href: "/services" },
      { label: "Institutional Branding", href: "/services" }
    ]
  }
};

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose, activePillar }) => {
  if (!activePillar) return null;
  const pillar = pillars[activePillar as keyof typeof pillars];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute top-full left-0 w-full bg-m2-void-light border-b border-m2-border shadow-2xl py-12"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-12 gap-12">
        {/* Description */}
        <div className="col-span-3">
          <Typography variant="tiny">{activePillar}</Typography>
          <Typography variant="h4" className="mb-4">{activePillar}</Typography>
          <Typography variant="small" className="mb-8">{pillar.description}</Typography>
          <Link href="/services" className="text-m2-gold flex items-center gap-2 text-sm font-bold group">
            Explore Pillar <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Links */}
        <div className="col-span-4 grid grid-cols-1 gap-y-4">
          <Typography variant="tiny" className="opacity-50">Core Services</Typography>
          {pillar.links.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="group flex items-center justify-between py-2 border-b border-white/5 hover:border-m2-gold/30 transition-colors"
            >
              <Typography variant="body" className="group-hover:text-m2-text transition-colors">
                {link.label}
              </Typography>
              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-m2-gold transition-all -translate-x-2 group-hover:translate-x-0" />
            </Link>
          ))}
        </div>

        {/* Featured */}
        <div className="col-span-5">
          <Typography variant="tiny" className="opacity-50">Featured Initiative</Typography>
          <Card className="mt-4 aspect-[16/9] group cursor-pointer relative overflow-hidden ring-1 ring-white/10 hover:ring-m2-gold/30">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
            <div className="absolute inset-0 bg-m2-gold/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
            {/* Image Placeholder */}
            <div className="w-full h-full bg-m2-void-accent flex items-center justify-center text-m2-text-muted">
              {pillar.featured.title} Preview
            </div>
            <div className="absolute bottom-6 left-6 z-20">
              <Typography variant="tiny" className="mb-1 text-m2-gold">{pillar.featured.label}</Typography>
              <Typography variant="h4" className="text-white">{pillar.featured.title}</Typography>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};
