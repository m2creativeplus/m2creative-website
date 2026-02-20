import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M2 Creative Plus — Architecting East Africa's Digital Future",
  description:
    "AI-native digital transformation agency. We build sovereign systems for governments and enterprises across East Africa.",
  keywords: "M2 Creative, digital transformation, Somaliland, GovTech, AI, SaaS, strategic architecture",
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "M2 Creative Plus",
    description: "Architecting the Digital Future of East Africa",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "M2 Creative Plus",
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
