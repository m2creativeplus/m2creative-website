"use client";

import React from "react";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { PulsingAtoms } from "@/components/ui/PulsingAtoms";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-8 pt-20 overflow-hidden bg-black">
      <PulsingAtoms />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Typography variant="h1" className="text-white mb-2">
            Architecting the Foundations
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          <Typography variant="h2" className="mb-10">
            of Digital Sovereignty
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        >
          <Typography variant="body" className="mb-12 max-w-2xl mx-auto text-m2-text-muted">
            Your vision is running the nation. Our genius is building the systems that sustain it. 
            Elite GovTech architecture for the modern Era.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg">Initiate Protocol</Button>
            <Typography variant="label" className="m-0 !text-[12px] cursor-pointer hover:text-white transition-colors">
              Explore Our Work ↗
            </Typography>
          </div>
        </motion.div>
      </div>

      {/* Press Bar Simulation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-20 left-0 w-full px-12 border-t border-white/5 pt-12 flex flex-wrap justify-center gap-8 lg:gap-16 opacity-30 invert brightness-200"
      >
        {["REPUBLIC OF SOMALILAND", "GUURTI LEGISLATURE", "SNPA AUTHORITY", "CSC COMMISSION", "EPD COMMITTEE"].map((label) => (
          <span key={label} className="font-accent text-[11px] font-bold tracking-[0.2em] text-white">
            {label}
          </span>
        ))}
      </motion.div>
    </section>
  );
};
