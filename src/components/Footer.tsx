import Link from "next/link";
import { siteConfig } from "@/lib/data";
import M2Logo from "@/components/M2Icons";
import { Typography } from "@/components/ui/Typography";

export default function Footer() {
  return (
    <footer className="bg-m2-void border-t border-m2-border py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-m2-gold/5 rounded-full blur-[128px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-8">
          <M2Logo size={48} color="gold" variant="mark" />
        </div>
        
        {/* Name */}
        <Typography variant="h3" className="mb-4 text-white !tracking-widest !uppercase">
          {siteConfig.name}
        </Typography>
        
        {/* Tagline */}
        <Typography variant="body" className="max-w-md mb-12 opacity-60">
          Where Strategy Meets Sovereignty. Architecting the digital foundations of modern governance.
        </Typography>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-16">
          {["Work", "Services", "Ecosystem", "Intelligence", "Contact"].map((label) => (
             <Link key={label} href="/" className="text-xs font-heading font-bold uppercase tracking-[4px] text-m2-text-muted hover:text-m2-gold transition-colors">
               {label}
             </Link>
          ))}
        </div>

        {/* Legal / Social */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            {Object.entries(siteConfig.social).map(([platform, url]) => (
              <a 
                key={platform} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-m2-text-muted hover:text-m2-gold transition-colors"
                aria-label={platform}
              >
                 <span className="text-[10px] font-bold uppercase tracking-widest">{platform}</span>
              </a>
            ))}
          </div>
          
          <div className="text-[10px] text-m2-text-muted/40 font-mono flex items-center gap-4">
            <span>© {new Date().getFullYear()} M2 CREATIVE & CONSULTING</span>
            <span className="h-3 w-[1px] bg-white/10" />
            <span>HARGEISA, REPUBLIC OF SOMALILAND</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
