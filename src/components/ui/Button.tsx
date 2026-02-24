"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-11 py-[18px] text-[14px] font-extrabold tracking-[0.12em] uppercase",
  };

  const variantClasses = {
    primary: "bg-m2-gold text-m2-void hover:bg-white hover:text-black shadow-[0_8px_30px_rgba(255,212,0,0.2)]",
    outline: "border border-m2-border-gold font-bold text-m2-gold hover:bg-m2-gold/10",
    ghost: "text-m2-text-muted font-bold hover:text-m2-text hover:bg-white/5",
    link: "text-m2-gold hover:underline p-0",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={`inline-flex items-center justify-center rounded-[2px] font-accent transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
