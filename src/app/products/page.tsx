"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, techStack } from "@/lib/data";

const statusColors: Record<string, string> = {
  green: "bg-m2-success/20 text-m2-success border-m2-success/30",
  blue: "bg-m2-blue/20 text-m2-blue border-m2-blue/30",
  gold: "bg-m2-gold/20 text-m2-gold border-m2-gold/30",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-m2-blue/10 rounded-full blur-[128px]" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[4px] text-m2-gold mb-4">
                Our Ecosystem
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-m2-text mb-6">
                The M2 <span className="gradient-text-blue">Product Suite</span>
              </h1>
              <p className="text-lg text-m2-text-muted max-w-2xl leading-relaxed">
                A complete ecosystem of sovereign technology products — from
                creator economy platforms to GovTech infrastructure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass p-6 hover:-translate-y-1 transition-all hover:shadow-xl group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                        statusColors[product.statusColor]
                      }`}
                    >
                      {product.status}
                    </span>
                    <ExternalLink
                      size={16}
                      className="text-m2-text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-m2-text mb-1 group-hover:text-m2-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-m2-blue font-medium mb-3">
                    {product.category}
                  </p>
                  <p className="text-sm text-m2-text-muted leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs bg-m2-void-light text-m2-text-muted rounded-md border border-m2-border/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-m2-border/30">
                    <p className="text-xs text-m2-text-muted">
                      <span className="text-m2-gold font-semibold">{product.revenue}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 lg:py-24 bg-m2-void-light/30">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs font-semibold uppercase tracking-[4px] text-m2-gold mb-4">
                Powered By
              </p>
              <h2 className="font-heading text-3xl font-bold text-m2-text">
                Our Tech Stack
              </h2>
              <div className="mt-6 w-12 h-0.5 bg-m2-gold mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((stack, i) => (
                <motion.div
                  key={stack.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6"
                >
                  <h3 className="font-heading text-sm font-semibold text-m2-gold uppercase tracking-wider mb-4">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-sm bg-m2-void text-m2-text-muted rounded-lg border border-m2-border/30 hover:text-m2-text hover:border-m2-gold/30 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
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
