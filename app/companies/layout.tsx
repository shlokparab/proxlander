import type { Metadata } from "next";
import { getSiteUrl, socialImageVersion } from "../lib/site-url";

const socialImageUrl = `${getSiteUrl()}/og-whatsapp.jpg?v=${socialImageVersion}`;

export const metadata: Metadata = {
  title: "Companies in Motion — Startups in the Proxima Mumbai Network",
  description: "Explore 17 technology companies and startups in the Proxima Mumbai network, including Supermemory, Huddle01, Anomaly Bio, Manicule, LiteFold, Vanar Robots, and more.",
  alternates: { canonical: "/companies" },
  keywords: ["Proxima Mumbai companies", "Mumbai startups", "Indian technology companies", "Mumbai founders", "Proxima startup network"],
  openGraph: {
    title: "Companies in Motion — Proxima Mumbai",
    description: "The companies, founders, labs, and products being built inside the Proxima Mumbai network.",
    url: "/companies",
    type: "website",
    images: [{ url: socialImageUrl, secureUrl: socialImageUrl, width: 1200, height: 630, type: "image/jpeg", alt: "Companies in the Proxima Mumbai network" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Companies in Motion — Proxima Mumbai",
    description: "The companies, founders, labs, and products being built inside the Proxima Mumbai network.",
    images: [socialImageUrl],
  },
};

export default function CompaniesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
