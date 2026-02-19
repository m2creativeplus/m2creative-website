"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/data";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-m2-gold/5 rounded-full blur-[128px]" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[4px] text-m2-gold mb-4">
                Portfolio
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-m2-text mb-6">
                Strategy Meets <span className="gradient-text-gold">Impact</span>
              </h1>
              <p className="text-lg text-m2-text-muted max-w-2xl leading-relaxed">
                Real projects. Measurable outcomes. From institutional modernization
                frameworks to parliamentary digital portals — every system we build creates
                lasting institutional value.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-12">
            {caseStudies.map((cs, i) => (
              <motion.article
                key={cs.slug}
                id={cs.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="glass overflow-hidden"
              >
                {/* Header Band */}
                <div className="bg-gradient-to-r from-m2-void-light to-m2-void p-8 lg:p-12 border-b border-m2-border/30">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-m2-purple mb-2">
                        {cs.category} · {cs.pillar}
                      </p>
                      <h2 className="font-heading text-2xl lg:text-3xl font-bold text-m2-text mb-2">
                        {cs.title}
                      </h2>
                      <p className="text-sm text-m2-text-muted">
                        {cs.client} · {cs.timeline}
                      </p>
                      <p className="text-xs text-m2-text-muted mt-1">
                        Role: {cs.role}
                      </p>
                    </div>
                    <div className="text-center lg:text-right shrink-0">
                      <p className="font-heading text-4xl lg:text-5xl font-bold text-m2-gold">
                        {cs.impact}
                      </p>
                      <p className="text-sm text-m2-text-muted">
                        {cs.impactLabel}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 lg:p-12">
                  {/* Quote */}
                  <blockquote className="border-l-4 border-m2-gold/40 pl-6 mb-8">
                    <p className="text-m2-text-muted italic text-lg leading-relaxed">
                      &ldquo;{cs.quote}&rdquo;
                    </p>
                  </blockquote>

                  {/* Challenge / Solution */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-m2-gold uppercase tracking-wider mb-3">
                        The Challenge
                      </h3>
                      <p className="text-sm text-m2-text-muted leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-m2-gold uppercase tracking-wider mb-3">
                        The Solution
                      </h3>
                      <p className="text-sm text-m2-text-muted leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h3 className="font-heading text-sm font-semibold text-m2-gold uppercase tracking-wider mb-3">
                      Results
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cs.results.map((result) => (
                        <div
                          key={result}
                          className="flex items-start gap-3 glass-subtle p-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-m2-gold mt-1.5 shrink-0" />
                          <p className="text-sm text-m2-text-muted">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {cs.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="text-center glass-subtle p-4"
                      >
                        <p className="font-heading text-2xl font-bold text-m2-gold">
                          {metric.value}
                        </p>
                        <p className="text-xs text-m2-text-muted mt-1">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-m2-void via-m2-purple/5 to-m2-void" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-3xl mx-auto px-6 text-center"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-m2-text mb-6">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-m2-text-muted mb-8">
              Let&apos;s architect a sovereign system tailored to your mission.
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
