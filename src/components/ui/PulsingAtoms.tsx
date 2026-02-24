"use client";

import React from "react";
import { motion } from "framer-motion";

export const PulsingAtoms: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 hero-gradient opacity-60" />
      
      {/* Atom 1 */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[800px] h-[800px] -top-[300px] -left-[200px] border border-m2-gold/10 rounded-full"
      />
      
      {/* Atom 2 */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-[600px] h-[600px] top-[100px] -right-[150px] border border-m2-gold/5 rounded-full"
      />
      
      {/* Atom 3 */}
      <motion.div
        animate={{ scale: [1, 1.03, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute w-[400px] h-[400px] bottom-[100px] left-[20%] border border-m2-gold/10 rounded-full"
      />
      
      {/* Atom 4 */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute w-[200px] h-[200px] top-[40%] left-[50%] border border-m2-gold/20 rounded-full"
      />
    </div>
  );
};
