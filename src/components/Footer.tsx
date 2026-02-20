import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data";
import AnimatedM2Logo from "@/components/AnimatedM2Logo";

export default function Footer() {
  return (
    <footer className="bg-m2-void border-t border-m2-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <AnimatedM2Logo size="sm" variant="parallax" />
            </div>
            <p className="text-sm text-m2-text-muted leading-relaxed mb-4">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-m2-text-muted">
              {siteConfig.location}
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-m2-text text-sm mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-m2-text-muted hover:text-m2-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-m2-text text-sm mb-4 uppercase tracking-wider">
              Systems
            </h4>
            <ul className="space-y-3">
              {[
                "Strategic Architecture",
                "SaaS Engineering",
                "GovTech Advisory",
                "Ecosystem Branding",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-m2-text-muted hover:text-m2-text transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-semibold text-m2-text text-sm mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-m2-text-muted hover:text-m2-text transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-m2-text-muted hover:text-m2-text transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-m2-text-muted hover:text-m2-text transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-m2-text-muted hover:text-m2-text transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-m2-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-m2-text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-m2-text-muted">
            Hargeisa, Republic of Somaliland
          </p>
        </div>
      </div>
    </footer>
  );
}
