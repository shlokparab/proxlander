import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import { getSiteUrl, socialImageVersion } from "./lib/site-url";

const siteUrl = getSiteUrl();
const socialImageUrl = `${siteUrl}/og-whatsapp.jpg?v=${socialImageVersion}`;

export const metadata: Metadata = {
  title: {
    default: "Proxima Mumbai — Founder Community and Startup Network",
    template: "%s | Proxima Mumbai",
  },
  description: "Proxima Mumbai is a high-trust founder network connecting ambitious Bombay builders to grants of up to ₹10 lakh with 3F.VC, national communities, and direct paths to capital.",
  metadataBase: new URL(siteUrl),
  applicationName: "Proxima Mumbai",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  alternates: { canonical: "/" },
  keywords: ["Proxima Mumbai", "Mumbai founder community", "Mumbai startups", "Mumbai tech community", "Indian startup network"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Proxima Mumbai — Mumbai’s builder network, in public.",
    description: "Mumbai founders, a high-signal national network, and direct paths to early capital—including grants of up to ₹10 lakh with 3F.VC.",
    type: "website",
    url: "/",
    siteName: "Proxima Mumbai",
    images: [{ url: socialImageUrl, secureUrl: socialImageUrl, width: 1200, height: 630, type: "image/jpeg", alt: "Proxima Mumbai — Mumbai’s builder network, in public." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proxima Mumbai",
    description: "Mumbai founders, a high-signal national network, and direct paths to early capital.",
    images: [socialImageUrl],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.proximamumbai.com/#organization",
        name: "Proxima Mumbai",
        url: "https://www.proximamumbai.com",
        logo: "https://www.proximamumbai.com/og.png",
        description: "A high-trust Mumbai founder network connecting ambitious builders to national communities and early capital.",
        sameAs: ["https://www.linkedin.com/company/proxima-mumbai", "https://x.com/ProximaMumbai", "https://www.youtube.com/@ProximaMumbai"],
        address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.proximamumbai.com/#website",
        url: "https://www.proximamumbai.com",
        name: "Proxima Mumbai",
        publisher: { "@id": "https://www.proximamumbai.com/#organization" },
      },
    ],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        <PageTransition />
        {children}
      </body>
    </html>
  );
}
