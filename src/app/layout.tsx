import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M2 Creative & Consulting — Architecting East Africa's Digital Future",
  description:
    "AI-native digital transformation agency. We build sovereign systems for governments and enterprises across East Africa.",
  keywords: "M2 Creative, digital transformation, Somaliland, GovTech, AI, SaaS, strategic architecture",
  icons: {
    icon: "/M2 Creative logo MD-01.webp",
  },
  openGraph: {
    title: "M2 Creative & Consulting",
    description: "Architecting the Digital Future of East Africa",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "M2 Creative & Consulting",
    description: "Architecting the Digital Future of East Africa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
