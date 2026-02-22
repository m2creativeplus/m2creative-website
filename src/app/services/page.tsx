"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Code2,
  Landmark,
  Palette,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Rocket,
  MessageSquare,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 size={40} />,
  Code2: <Code2 size={40} />,
  Landmark: <Landmark size={40} />,
  Palette: <Palette size={40} />,
};

const processSteps = [
  {
    icon: <MessageSquare size={24} />,
    title: "Consult",
    description: "Deep-dive discovery session to understand your institutional DNA.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Architect",
    description: "Blueprint the sovereign system with precision engineering.",
  },
  {
    icon: <Code2 size={24} />,
    title: "Build",
    description: "Full-stack implementation with AI-native methodologies.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Launch",
    description: "Deploy, train, and hand over the keys to your digital sovereignty.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-m2-gold/5 rounded-full blur-[128px]" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[4px] text-m2-gold mb-4">
                What We Build
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-m2-text mb-6">
                Digital Sovereignty{" "}
                <span className="gradient-text-gold">Systems</span>
              </h1>
              <p className="text-lg text-m2-text-muted max-w-2xl leading-relaxed">
                We don&apos;t provide services — we build systems that empower nations
                and enterprises to own their digital future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-16 lg:py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass p-8 lg:p-12 border-l-4 border-l-m2-gold/30 hover:border-l-m2-gold transition-colors"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="text-m2-gold mb-4">{iconMap[service.icon]}</div>
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-m2-text mb-3">
                      {service.title}
                    </h2>
                    <p className="text-m2-text-muted leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-m2-gold shrink-0 mt-0.5" />
                          <span className="text-sm text-m2-text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:w-64 shrink-0">
                    <div className="glass-subtle p-6 text-center">
                      <p className="text-xs text-m2-text-muted uppercase tracking-wider mb-2">
                        Investment
                      </p>
                      <p className="font-heading text-2xl font-bold text-m2-gold mb-3">
                        {service.price}
                      </p>
                      <p className="text-xs text-m2-text-muted mb-4">
                        Flagship: {service.flagship}
                      </p>
                      <Link
                        href="/contact"
                        className="block w-full py-3 bg-m2-gold text-m2-void text-sm font-semibold rounded-lg hover:bg-m2-gold-dark transition-colors"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="py-16 lg:py-24 bg-m2-void-light/30">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs font-semibold uppercase tracking-[4px] text-m2-gold mb-4">
                Our Process
              </p>
              <h2 className="font-heading text-3xl font-bold text-m2-text">
                From Vision to Sovereignty
              </h2>
              <div className="mt-6 w-12 h-0.5 bg-m2-gold mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="glass p-6 text-center relative"
                >
                  <div className="absolute -top-3 left-6 w-6 h-6 bg-m2-gold text-m2-void text-xs font-bold rounded-full flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div className="text-m2-gold mb-4 flex justify-center">{step.icon}</div>
                  <h3 className="font-heading text-lg font-semibold text-m2-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-m2-text-muted">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-m2-void via-m2-blue/5 to-m2-void" />
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
              Tell us about your challenge. We&apos;ll architect the solution.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-m2-gold text-m2-void font-bold text-lg rounded-xl hover:bg-m2-gold-dark transition-all hover:shadow-xl hover:shadow-m2-gold/20"
            >
              Start a Conversation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
