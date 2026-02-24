"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-m2-void selection:bg-m2-gold/30 selection:text-m2-text">
      {/* Sacred Header */}
      <Navbar />

      {/* Main Content Slot */}
      <main className="flex-grow pt-[72px] relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Sacred Footer */}
      <Footer />

      {/* Background Fixed Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute inset-0 grid-bg opacity-[0.03]" />
        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-m2-gold/5 via-transparent to-transparent opacity-30" />
      </div>
    </div>
  );
}
