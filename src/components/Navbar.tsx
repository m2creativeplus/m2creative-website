"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Our Agency", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Ecosystem", href: "/products" },
  { label: "Our Work", href: "/portfolio" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 bg-black/95 ${
        scrolled ? "border-b border-m2-border py-4" : "border-b border-white/5 py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span className="font-accent text-xl sm:text-2xl font-extrabold tracking-[0.15em] text-white">
            M2 CREATIVE<span className="text-m2-gold">+</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
             <Link 
               key={link.label} 
               href={link.href}
               className={`font-accent text-[12px] font-bold uppercase tracking-[0.15em] transition-colors ${
                 pathname === link.href ? "text-white" : "text-m2-text-muted hover:text-white"
               }`}
             >
               {link.label}
             </Link>
          ))}
          <Link href="/contact">
            <Button variant="primary" size="sm" className="ml-4">
              Let&apos;s Talk!
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-[76px] bg-black z-[90] p-8 flex flex-col gap-8"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-heading font-black text-white hover:text-m2-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button size="lg" className="w-full">Let&apos;s Talk!</Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
