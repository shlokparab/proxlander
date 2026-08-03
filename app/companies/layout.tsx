import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Companies in Motion — Startups in the Proxima Mumbai Network",
  description: "Explore 18 technology companies and startups in the Proxima Mumbai network, including Supermemory, Huddle01, Anomaly Bio, Manicule, LiteFold, Vanar Robots, and more.",
  alternates: { canonical: "/companies" },
  keywords: ["Proxima Mumbai companies", "Mumbai startups", "Indian technology companies", "Mumbai founders", "Proxima startup network"],
  openGraph: {
    title: "Companies in Motion — Proxima Mumbai",
    description: "The companies, founders, labs, and products being built inside the Proxima Mumbai network.",
    url: "/companies",
    type: "website",
    images: [{ url: "/og.png", width: 1729, height: 910, alt: "Companies in the Proxima Mumbai network" }],
  },
};

export default function CompaniesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
