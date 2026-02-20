"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Code2,
  Landmark,
  Palette,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedM2Logo from "@/components/AnimatedM2Logo";
import { stats, services, caseStudies } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 size={32} />,
  Code2: <Code2 size={32} />,
  Landmark: <Landmark size={32} />,
  Palette: <Palette size={32} />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* ═══════════════════ HERO ═══════════════════ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Hero Background Texture */}
          <div className="absolute inset-0 hero-bg-overlay" />
          {/* Animated Grid */}
          <div className="absolute inset-0 grid-bg opacity-30" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-m2-void/60 via-m2-void/80 to-m2-void" />
          {/* Radial glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-m2-purple/10 rounded-full blur-[128px]" />
          <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-m2-gold/5 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="space-y-8 flex flex-col items-center"
            >
              <div className="mb-4">
                <AnimatedM2Logo size="lg" variant="intro" />
              </div>
              
              {/* Overline */}
              <motion.p
                custom={0}
                variants={fadeUp}
                className="inline-block text-xs font-semibold uppercase tracking-[4px] text-m2-gold bg-m2-gold/10 px-4 py-2 rounded-full border border-m2-gold/20"
              >
                AI-Native Digital Transformation
              </motion.p>

              {/* Headline */}
              <motion.h1
                custom={1}
                variants={fadeUp}
                className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-m2-text"
              >
                Where Strategy
                <br />
                <span className="gradient-text-gold">Meets Sovereignty</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                custom={2}
                variants={fadeUp}
                className="text-lg sm:text-xl text-m2-text-muted max-w-xl mx-auto leading-relaxed"
              >
                We architect sovereign digital systems that power governments
                and enterprises across East Africa.
              </motion.p>

              {/* CTAs */}
              <motion.div
                custom={3}
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  href="/portfolio"
                  className="group flex items-center gap-2 px-8 py-4 bg-m2-gold text-m2-void font-semibold rounded-xl hover:bg-m2-gold-dark transition-all hover:shadow-lg hover:shadow-m2-gold/25"
                >
                  View Our Work
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-8 py-4 border border-m2-gold/30 text-m2-gold font-semibold rounded-xl hover:bg-m2-gold/10 transition-all"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-20 glass p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl sm:text-4xl font-bold text-m2-gold">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-m2-text-muted mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════ SERVICES ═══════════════════ */}
        <section className="py-24 lg:py-32 bg-m2-void relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs font-semibold uppercase tracking-[4px] text-m2-gold mb-4">
                What We Build
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-m2-text">
                Digital Sovereignty Systems
              </h2>
              <p className="mt-4 text-m2-text-muted max-w-2xl mx-auto">
                We don&apos;t provide services — we build systems that empower
                nations and enterprises to own their digital future.
              </p>
              <div className="mt-6 w-12 h-0.5 bg-m2-gold mx-auto rounded-full" />
            </motion.div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href="/services"
                    className="group block glass p-8 border-l-4 border-l-m2-gold/30 hover:border-l-m2-gold transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="text-m2-gold mb-4">
                      {iconMap[service.icon]}
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-m2-text mb-2 group-hover:text-m2-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-m2-text-muted leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-m2-gold font-heading font-bold text-lg">
                        {service.price}
                      </span>
                      <span className="text-m2-text-muted text-sm group-hover:text-m2-gold transition-colors flex items-center gap-1">
                        Learn more
                        <ChevronRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ FEATURED WORK ═══════════════════ */}
        <section className="py-24 lg:py-32 bg-m2-void-light/30 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs font-semibold uppercase tracking-[4px] text-m2-gold mb-4">
                Featured Projects
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-m2-text">
                Strategy Meets Impact
              </h2>
              <div className="mt-6 w-12 h-0.5 bg-m2-gold mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.slice(0, 4).map((cs, i) => (
                <motion.div
                  key={cs.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={`/portfolio#${cs.slug}`}
                    className="group block glass overflow-hidden hover:-translate-y-1 transition-all hover:shadow-xl"
                  >
                    {/* Project Image */}
                    <div className="h-48 relative overflow-hidden border-b border-m2-border/30">
                      {cs.image ? (
                        <Image
                          src={cs.image}
                          alt={cs.title}
                          fill
                          className="object-cover card-image-zoom"
                        />
                      ) : (
                        <div className="h-full bg-gradient-to-br from-m2-void-light to-m2-void flex items-center justify-center">
                          <p className="font-heading text-4xl font-bold text-m2-gold">
                            {cs.impact}
                          </p>
                        </div>
                      )}
                      {/* Impact badge overlay */}
                      <div className="absolute bottom-3 right-3 bg-m2-void/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-m2-gold/20">
                        <p className="font-heading text-lg font-bold text-m2-gold leading-tight">
                          {cs.impact}
                        </p>
                        <p className="text-[10px] text-m2-text-muted">
                          {cs.impactLabel}
                        </p>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-m2-purple mb-2">
                        {cs.category} · {cs.timeline.split(" – ")[0]}
                      </p>
                      <h3 className="font-heading text-xl font-semibold text-m2-text mb-2 group-hover:text-m2-gold transition-colors">
                        {cs.title}
                      </h3>
                      <p className="text-sm text-m2-text-muted line-clamp-2 mb-4">
                        {cs.challenge}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-m2-text-muted">
                          {cs.client}
                        </span>
                        <span className="text-sm text-m2-gold flex items-center gap-1 group-hover:gap-2 transition-all">
                          View Study
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 border border-m2-gold/30 text-m2-gold font-semibold rounded-xl hover:bg-m2-gold/10 transition-all"
              >
                View All Projects
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════ CTA ═══════════════════ */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-m2-void via-m2-purple/5 to-m2-void" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-m2-gold/5 rounded-full blur-[120px]" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-3xl mx-auto px-6 text-center"
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-m2-text mb-6">
              Let&apos;s Build Something{" "}
              <span className="gradient-text-gold">Sovereign</span>
            </h2>
            <p className="text-lg text-m2-text-muted mb-8 max-w-xl mx-auto">
              Ready to transform your institution? We architect systems that
              last generations.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-m2-gold text-m2-void font-bold text-lg rounded-xl hover:bg-m2-gold-dark transition-all hover:shadow-xl hover:shadow-m2-gold/20"
            >
              Start a Conversation
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
