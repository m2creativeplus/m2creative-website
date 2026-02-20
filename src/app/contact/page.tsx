"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { siteConfig } from "@/lib/data";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const submitContact = useMutation(api.contact.submit);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    try {
      await submitContact({
        name: formData.name,
        email: formData.email,
        organization: formData.organization || undefined,
        service: formData.service,
        budget: formData.budget || undefined,
        message: formData.message,
      });
      setFormState("sent");
    } catch (error) {
      console.error("Form submission failed:", error);
      setFormState("idle");
      // Add a simple fallback for demo or error state if needed
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-m2-gold/5 rounded-full blur-[128px]" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[4px] text-m2-gold mb-4">
                Contact
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-m2-text mb-6">
                Let&apos;s Build{" "}
                <span className="gradient-text-gold">Together</span>
              </h1>
              <p className="text-lg text-m2-text-muted max-w-2xl leading-relaxed">
                Tell us about your challenge. We&apos;ll architect the sovereign
                system to solve it.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-16 lg:py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="font-heading text-lg font-semibold text-m2-text mb-4">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-3 text-m2-text-muted hover:text-m2-gold transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-m2-void-light flex items-center justify-center group-hover:bg-m2-gold/10 transition-colors">
                        <Mail size={18} className="text-m2-gold" />
                      </div>
                      <span className="text-sm">{siteConfig.email}</span>
                    </a>
                    <div className="flex items-center gap-3 text-m2-text-muted">
                      <div className="w-10 h-10 rounded-lg bg-m2-void-light flex items-center justify-center">
                        <MapPin size={18} className="text-m2-gold" />
                      </div>
                      <span className="text-sm">{siteConfig.location}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-heading text-sm font-semibold text-m2-text mb-3">
                    Connect
                  </h4>
                  <div className="flex gap-3">
                    {Object.entries(siteConfig.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-m2-void-light flex items-center justify-center text-m2-text-muted hover:text-m2-gold hover:bg-m2-gold/10 transition-all text-xs font-semibold uppercase"
                      >
                        {platform.slice(0, 2)}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="glass p-6">
                  <p className="text-xs text-m2-text-muted uppercase tracking-wider mb-2">
                    Response Time
                  </p>
                  <p className="font-heading text-lg font-semibold text-m2-gold">
                    Within 24 hours
                  </p>
                  <p className="text-sm text-m2-text-muted mt-1">
                    We respond to every inquiry personally.
                  </p>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                {formState === "sent" ? (
                  <div className="glass p-12 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                    >
                      <CheckCircle2
                        size={64}
                        className="text-m2-success mx-auto mb-6"
                      />
                    </motion.div>
                    <h3 className="font-heading text-2xl font-bold text-m2-text mb-3">
                      Message Received
                    </h3>
                    <p className="text-m2-text-muted">
                      We&apos;ll get back to you within 24 hours. Thank you for
                      reaching out.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass p-8 lg:p-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-m2-text mb-2"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          minLength={2}
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-m2-void border border-m2-border/50 rounded-lg text-m2-text text-sm focus:outline-none focus:border-m2-gold/50 focus:ring-1 focus:ring-m2-gold/20 transition-all placeholder:text-m2-text-muted/50"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-m2-text mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-m2-void border border-m2-border/50 rounded-lg text-m2-text text-sm focus:outline-none focus:border-m2-gold/50 focus:ring-1 focus:ring-m2-gold/20 transition-all placeholder:text-m2-text-muted/50"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="organization"
                        className="block text-sm font-medium text-m2-text mb-2"
                      >
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organization: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-m2-void border border-m2-border/50 rounded-lg text-m2-text text-sm focus:outline-none focus:border-m2-gold/50 focus:ring-1 focus:ring-m2-gold/20 transition-all placeholder:text-m2-text-muted/50"
                        placeholder="Your organization (optional)"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-m2-text mb-2"
                        >
                          Service Interest *
                        </label>
                        <select
                          id="service"
                          required
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              service: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-m2-void border border-m2-border/50 rounded-lg text-m2-text text-sm focus:outline-none focus:border-m2-gold/50 focus:ring-1 focus:ring-m2-gold/20 transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="strategic-architecture">
                            Strategic Architecture
                          </option>
                          <option value="saas-engineering">
                            SaaS Engineering
                          </option>
                          <option value="govtech-advisory">
                            GovTech Advisory
                          </option>
                          <option value="ecosystem-branding">
                            Ecosystem Branding
                          </option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium text-m2-text mb-2"
                        >
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          value={formData.budget}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              budget: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-m2-void border border-m2-border/50 rounded-lg text-m2-text text-sm focus:outline-none focus:border-m2-gold/50 focus:ring-1 focus:ring-m2-gold/20 transition-all"
                        >
                          <option value="">Select budget (optional)</option>
                          <option value="5k-15k">$5K – $15K</option>
                          <option value="15k-30k">$15K – $30K</option>
                          <option value="30k-50k">$30K – $50K</option>
                          <option value="50k+">$50K+</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-m2-text mb-2"
                      >
                        Tell Us About Your Challenge *
                      </label>
                      <textarea
                        id="message"
                        required
                        minLength={20}
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-m2-void border border-m2-border/50 rounded-lg text-m2-text text-sm focus:outline-none focus:border-m2-gold/50 focus:ring-1 focus:ring-m2-gold/20 transition-all resize-none placeholder:text-m2-text-muted/50"
                        placeholder="Describe your project, goals, and timeline..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState === "sending"}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-m2-gold text-m2-void font-semibold rounded-xl hover:bg-m2-gold-dark transition-all hover:shadow-lg hover:shadow-m2-gold/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formState === "sending" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-m2-void/30 border-t-m2-void rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
