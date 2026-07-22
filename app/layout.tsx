import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "./components/PageTransition";

export const metadata: Metadata = {
  title: {
    default: "Proxima Mumbai — Founder Community and Startup Network",
    template: "%s | Proxima Mumbai",
  },
  description: "Proxima Mumbai is a high-trust founder community and startup network for ambitious technology companies, engineers, researchers, and builders in Mumbai.",
  metadataBase: new URL("https://www.proximamumbai.com"),
  applicationName: "Proxima Mumbai",
  alternates: { canonical: "/" },
  keywords: ["Proxima Mumbai", "Mumbai founder community", "Mumbai startups", "Mumbai tech community", "Indian startup network"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Proxima Mumbai — Mumbai’s builder network, in public.",
    description: "Small rooms. Useful artifacts. Relationships that compound.",
    type: "website",
    url: "/",
    siteName: "Proxima Mumbai",
    images: [{ url: "/og.png", width: 1729, height: 910, alt: "Proxima Mumbai — Mumbai’s builder network, in public." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proxima Mumbai",
    description: "Mumbai’s builder network, in public.",
    images: ["/og.png"],
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
        description: "A high-trust founder community and startup network in Mumbai.",
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
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        <PageTransition />
        {children}
      </body>
    </html>
  );
}
