"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  Shield,
  Palette,
  Zap,
  GraduationCap,
  Award,
  Globe,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { founder, siteConfig } from "@/lib/data";

const pillarIcons: Record<string, React.ReactNode> = {
  Building2: <Building2 size={28} />,
  Shield: <Shield size={28} />,
  Palette: <Palette size={28} />,
  Zap: <Zap size={28} />,
  GraduationCap: <GraduationCap size={28} />,
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-m2-purple/10 rounded-full blur-[128px]" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[4px] text-m2-gold mb-4">
                About Us
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-m2-text mb-6">
                The <span className="gradient-text-gold">Sovereign Architect</span>
              </h1>
              <p className="text-lg text-m2-text-muted max-w-2xl leading-relaxed">
                {siteConfig.name} is an institutional-grade digital agency based
                in Hargeisa, Republic of Somaliland. We design and build the
                visual systems, digital platforms, and strategic communications
                that sovereign institutions need to operate at an international
                standard.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 lg:py-24 bg-m2-void-light/30">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-xs font-semibold uppercase tracking-[4px] text-m2-gold mb-4">
                  Our Story
                </p>
                <h2 className="font-heading text-3xl font-bold text-m2-text mb-6">
                  15 Years Building Somaliland&apos;s Digital Future
                </h2>
                <div className="space-y-4 text-m2-text-muted leading-relaxed">
                  <p>
                    M2 Creative Plus was founded with a singular
                    conviction: that technology should serve sovereignty. In a
                    world where nations outsource their most critical digital
                    infrastructure, we chose to build it locally.
                  </p>
                  <p>
                    From designing Somaliland&apos;s National ID Card — the document
                    every citizen carries as proof of identity — to architecting
                    the comprehensive modernization framework for the National Printing
                    Agency, our work has always been about more than code.
                  </p>
                  <p>
                    We don&apos;t provide services. We build{" "}
                    <span className="text-m2-gold font-semibold">
                      sovereign systems
                    </span>{" "}
                    that last generations.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-8"
              >
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: <Award size={24} />, value: "ISO", label: "Standard Aligned" },
                    { icon: <Globe size={24} />, value: "15+", label: "Years of Impact" },
                    { icon: <Users size={24} />, value: "200+", label: "Projects Delivered" },
                    { icon: <Building2 size={24} />, value: "5+", label: "Government Partners" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="text-m2-gold mb-2 flex justify-center">{item.icon}</div>
                      <p className="font-heading text-2xl font-bold text-m2-gold">{item.value}</p>
                      <p className="text-xs text-m2-text-muted mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-16 lg:py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs font-semibold uppercase tracking-[4px] text-m2-gold mb-4">
                Founder
              </p>
              <h2 className="font-heading text-3xl font-bold text-m2-text">
                {founder.name}
              </h2>
              <p className="text-m2-text-muted italic mt-1">
                ({founder.nameSomali})
              </p>
              <p className="text-m2-purple font-medium mt-2">{founder.title}</p>
            </motion.div>

            {/* Founder Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mb-12"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-m2-gold/30 shadow-xl shadow-m2-gold/10">
                <Image
                  src="/images/founder-portrait.png"
                  alt="Eng. Mahmoud Mohamed Awaleh"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 lg:p-12 mb-12"
            >
              <p className="text-m2-text-muted leading-relaxed text-lg text-center max-w-3xl mx-auto">
                {founder.bio}
              </p>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="font-heading text-xl font-semibold text-m2-text text-center mb-8">
                Key Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {founder.achievements.map((achievement) => (
                  <div
                    key={achievement}
                    className="glass-subtle p-4 flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-m2-gold mt-2 shrink-0" />
                    <p className="text-sm text-m2-text-muted">{achievement}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Strategic Pillars */}
        <section className="py-16 lg:py-24 bg-m2-void-light/30">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs font-semibold uppercase tracking-[4px] text-m2-gold mb-4">
                Our Framework
              </p>
              <h2 className="font-heading text-3xl font-bold text-m2-text">
                The 5 Strategic Pillars
              </h2>
              <div className="mt-6 w-12 h-0.5 bg-m2-gold mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {founder.pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass p-6 ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="text-m2-gold mb-4">
                    {pillarIcons[pillar.icon]}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-m2-text mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-m2-text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
