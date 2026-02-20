// M2 Creative & Consulting — Site Data
// Single source of truth for all website content

export const siteConfig = {
  name: "M2 Creative Plus",
  tagline: "Architecting the Digital Future of East Africa.",
  description:
    "AI-native digital transformation agency. We build sovereign systems for governments and enterprises across East Africa.",
  domain: "m2creative.so",
  email: "info@m2creative.so",
  location: "Hargeisa, Republic of Somaliland",
  founded: 2020,
  social: {
    linkedin: "https://linkedin.com/company/m2creative",
    github: "https://github.com/m2creative",
    twitter: "https://x.com/m2creative",
    behance: "https://behance.net/m2creative",
  },
};

export const stats = [
  { value: "ISO", label: "Standard Aligned" },
  { value: "15+", label: "Years of Impact" },
  { value: "200+", label: "Projects Completed" },
  { value: "500+", label: "AI Workflows Built" },
];

export const services = [
  {
    id: "strategic-architecture",
    title: "Strategic Architecture",
    description:
      "End-to-end institutional modernization. We transform government agencies and corporations into high-efficiency digital powerhouses.",
    price: "Enterprise Scale",
    icon: "Building2",
    features: [
      "Institutional transformation frameworks",
      "Operational efficiency audits",
      "ISO alignment roadmaps",
      "Digital infrastructure blueprints",
    ],
    flagship: "SNPA Modernization Framework",
  },
  {
    id: "saas-engineering",
    title: "SaaS Product Engineering",
    description:
      "Full-stack application architecture with localized AI integration. From blueprint to production deployment.",
    price: "Custom Build",
    icon: "Code2",
    features: [
      "Next.js / React full-stack development",
      "Custom AI model integration",
      "Multi-tenant SaaS architecture",
      "Real-time data pipelines",
    ],
    flagship: "MASS VWMS, Kaltirsi Calendar",
  },
  {
    id: "govtech-advisory",
    title: "GovTech Advisory",
    description:
      "Strategic frameworks for parliamentary diplomacy, legislative modernization, and sovereign digital infrastructure.",
    price: "Retainer & Project",
    icon: "Landmark",
    features: [
      "Parliamentary digital platforms",
      "Diplomatic communication systems",
      "E-governance portals",
      "Legislative archive systems",
    ],
    flagship: "Guurti PGEU Diplomatic Engine",
  },
  {
    id: "ecosystem-branding",
    title: "Ecosystem Branding",
    description:
      "High-moat brand systems aligned with ISO standards. National branding, security printing, and cultural asset design.",
    price: "Comprehensive Systems",
    icon: "Palette",
    features: [
      "Complete brand architecture (40+ page systems)",
      "Security document design (ICAO/ISO)",
      "Cultural heritage digitization",
      "Multi-platform identity systems",
    ],
    flagship: "National ID & Visa System",
  },
];

export const products = [
  {
    name: "M2 Creative OS",
    category: "Creator Economy SaaS",
    status: "Blueprint Complete",
    statusColor: "purple",
    description:
      "The ultimate creator economy platform for Africa. AI Labs, digital marketplace, training academy, and Somali language premium features.",
    tech: ["Next.js", "Convex", "AI"],
    revenue: "Empowering Creators",
  },
  {
    name: "MASS VWMS",
    category: "Workshop Management",
    status: "Live",
    statusColor: "green",
    description:
      "Vehicle Workshop Management System. Digital job cards, live inventory tracking, customer portal, and mechanic analytics.",
    tech: ["Next.js", "Supabase", "TypeScript"],
    revenue: "Operational Clarity",
  },
  {
    name: "Kaltirsi Calendar",
    category: "Cultural Heritage",
    status: "Design Complete",
    statusColor: "green",
    description:
      "Somali indigenous calendar app with Gregorian/Islamic/Kaltirsi conversion. Preserving pastoral heritage through modern technology.",
    tech: ["React", "Convex"],
    revenue: "Cultural Preservation",
  },
  {
    name: "M2 Moving Ads",
    category: "AdTech Platform",
    status: "PRD Complete",
    statusColor: "purple",
    description:
      "Next-gen moving billboard platform. GPS-verified campaigns connecting brands with high-visibility transit assets.",
    tech: ["React Native", "Supabase", "GPS"],
    revenue: "High-Visibility Reach",
  },
  {
    name: "M2 Sovereign VPN",
    category: "Privacy & Security",
    status: "Planning",
    statusColor: "gold",
    description:
      "Digital sovereignty through privacy-first VPN infrastructure. Built for Somaliland's unique connectivity landscape.",
    tech: ["WireGuard", "Node.js"],
    revenue: "Sovereign Security",
  },
  {
    name: "Gov Digital Profiles",
    category: "GovTech",
    status: "Planning",
    statusColor: "gold",
    description:
      "Digital profile suite for government officials. QR-enabled identity cards, e-signatures, and AI-powered media kits.",
    tech: ["Next.js", "QR", "AI"],
    revenue: "Digital Identity",
  },
];

export const caseStudies = [
  {
    slug: "snpa-transformation",
    title: "SNPA Transformation",
    client: "Somaliland National Printing Agency",
    category: "Institutional Modernization",
    image: "/images/election-infographic.png",
    timeline: "2024 – Present",
    role: "Chief Strategy & Innovation Advisor",
    pillar: "Sovereignty",
    impact: "ISO",
    impactLabel: "Standard Aligned",
    quote:
      "Sovereignty is not just a flag; it is the ability to produce our own secure identity.",
    challenge:
      "For decades, critical national security documents—Passports, National IDs, Tax Stamps, and Land Deeds—were being outsourced, creating significant operational inefficiencies and security vulnerabilities.",
    solution:
      "Applied a Strategic Sovereignty Doctrine: transitioned production to ISO 14298 and ISO 9001 standards, built the first Digital Product Catalogue and Granular Costing Engine.",
    results: [
      "300% operational efficiency increase",
      "Local industry protection via Presidential Decree",
      "SNPA repositioned as Secure Printing Hub of the Horn of Africa",
      "ISO Annual Meeting 2026 delegation prepared",
    ],
    metrics: [
      { value: "300%", label: "Efficiency" },
      { value: "ISO", label: "14298 & 9001" },
      { value: "100%", label: "Sovereign" },
      { value: "ICAO", label: "Compliant" },
    ],
  },
  {
    slug: "guurti-portal",
    title: "Guurti Digital Portal",
    client: "House of Elders (Golaha Guurtida)",
    category: "Digital Sovereignty",
    image: "/images/epd-architecture.png",
    timeline: "2024 – Present",
    role: "Strategic Architecture & Lead Design",
    pillar: "Modernization",
    impact: "Digital",
    impactLabel: "Motherboard",
    quote:
      "When I designed the Guurti Portal, 'Modern' wasn't enough. It had to be 'Indigenous'.",
    challenge:
      "The Somaliland House of Elders is the backbone of the nation's stability, but its institutional wisdom and legislative history were decentralized, with no unified digital framework.",
    solution:
      "Architected a unified portal balancing high-tech functionality with Somaliland's cultural soul: Digital Sovereignty Hub, Samo-Talis heritage integration, Legislative Compendium, and E-Learning Module for MPs.",
    results: [
      "Created Sovereign UI with Void & Gold design language",
      "Enhanced international parliamentary diplomacy capacity",
      "Transformed centuries of oral wisdom into searchable digital archive",
      "Bridged traditional governance and digital age",
    ],
    metrics: [
      { value: "100+", label: "Laws Digitized" },
      { value: "82", label: "MPs Connected" },
      { value: "1", label: "Unified Portal" },
      { value: "∞", label: "Heritage Preserved" },
    ],
  },
  {
    slug: "csc-digital-reform",
    title: "CSC Digital Reform",
    client: "Civil Service Commission",
    category: "Institutional Modernization",
    image: "/images/smart-school-dashboard.png",
    timeline: "2021 – 2023",
    role: "Communications & PR Director",
    pillar: "Modernization",
    impact: "High",
    impactLabel: "Engagement Rate",
    quote:
      "Digital reform isn't just about software; it's about making the machinery of government visible and accountable to the people.",
    challenge:
      "The CSC faced the dual challenge of managing a nationwide workforce while maintaining transparent, real-time communication. Data was siloed, media channels insufficient, and no unified digital platform existed.",
    solution:
      "Led the strategic communications pivot: transparent digital reporting, policy digitization into accessible formats, knowledge repository framework, and standardized digital brand signaling professionalism.",
    results: [
      "Increased civic engagement through verified digital channels",
      "Streamlined civil service codes dissemination",
      "Created technical prototype for SNPA and Guurti modernizations",
      "Transitioned CSC from analog HR body to digital reform leader",
    ],
    metrics: [
      { value: "High", label: "Engagement" },
      { value: "100%", label: "Digital Shift" },
      { value: "24/7", label: "Accessibility" },
      { value: "1st", label: "Gov Digital PR" },
    ],
  },
  {
    slug: "xaaji-muuse-construction",
    title: "Xaaji Muuse Construction",
    client: "Xaaji Muuse Construction Company",
    category: "Infrastructure & Innovation",
    image: "/images/vpn-mockup.png",
    timeline: "February 2026",
    role: "Digital Strategist & Competitive Intelligence Lead",
    pillar: "Infrastructure",
    impact: "Trust",
    impactLabel: "Signal Architecture",
    quote:
      "We are building the trust-engine that ensures Xaaji Muuse never loses a tender based on perception again.",
    challenge:
      "Xaaji Muuse Construction is a legacy-dominant entity with massive technical capacity but minimal digital footprint. Needed verified institutional trust signals to compete internationally.",
    solution:
      "Conducted a deep Digital Audit & Strategic Proposal: competitive landscape analysis, SERP ownership strategy, institutional trust signal architecture, and alignment with international donor standards.",
    results: [
      "Brand ownership path defined for xaajimuuse.com",
      "Shifted from price-only to trust-first bidding strategy",
      "Established modernization benchmark for local construction firms",
      "Secured project history in owned secure ecosystem",
    ],
    metrics: [
      { value: "High", label: "Trust Score" },
      { value: "100%", label: "SERP Strategy" },
      { value: "ESG", label: "Aligned" },
      { value: "#1", label: "Trust Engine" },
    ],
  },
];

export const founder = {
  name: "Eng. Mahmoud Mohamed Awaleh",
  nameSomali: "Maxamuud Maxamed Cawaale",
  title: "Strategic Architect | Founder & CEO",
  bio: "Mahmoud Mohamed Awaleh is a Somaliland strategic architect who has played a pivotal role in the digital and institutional modernization of the Republic of Somaliland. Over 15+ years, he has architected national systems (National ID, VISA) and established the groundwork for \"Functional Sovereignty\" in the digital age.",
  pillars: [
    {
      icon: "Building2",
      title: "Institutional Modernization",
      description: "Transforming state bureaucracy into high-efficiency service delivery engines.",
    },
    {
      icon: "Shield",
      title: "Digital Sovereignty",
      description: "Asserting nationhood through secure code, country codes, and ICAO-compliant frameworks.",
    },
    {
      icon: "Palette",
      title: "Brand Nationalism",
      description: "Using aesthetics to project national power and preserve cultural identity.",
    },
    {
      icon: "Zap",
      title: "Infrastructure & Innovation",
      description: "Building the physical/digital rails for a futuristic East Africa.",
    },
    {
      icon: "GraduationCap",
      title: "Knowledge Transfer",
      description: "Architecting the Second Brain for the nation through AI and the M2 Academy.",
    },
  ],
  achievements: [
    "Institutional Frameworks delivered for SNPA",
    "Lead designer of ICAO-compliant National ID Card",
    "Official designer for the Presidential Gold Collection",
    "Managed 16.6M characters of institutional knowledge",
    "Architected 500+ AI workflows",
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export const techStack = [
  { category: "Frontend", items: ["Next.js 15", "React 19", "TypeScript", "TailwindCSS v4"] },
  { category: "Backend", items: ["Convex", "Supabase", "PostgreSQL", "Node.js"] },
  { category: "AI/ML", items: ["Gemini", "GPT-4", "Claude", "Ollama"] },
  { category: "Design", items: ["Figma", "Adobe Suite", "Framer Motion", "shadcn/ui"] },
  { category: "Deploy", items: ["Vercel", "GitHub Actions", "Docker"] },
];
