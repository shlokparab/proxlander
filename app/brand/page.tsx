import type { Metadata } from "next";
import Link from "next/link";
import BrandAssetsClient from "./BrandAssetsClient";
import CompanyNavigation from "../companies/CompanyNavigation";
import BrandMark from "../components/BrandMark";

export const metadata: Metadata = {
  title: "Brand Assets",
  description: "Download the official Proxima Mumbai and 3F.VC marks and copy the Proxima Mumbai colour palette.",
  alternates: { canonical: "/brand" },
};

export default function BrandAssetsPage() {
  return (
    <main className="brand-assets-page">
      <CompanyNavigation />
      <BrandAssetsClient />
      <footer>
        <Link className="brand footer-brand" href="/" aria-label="Proxima Mumbai home"><BrandMark /></Link>
        <p>Use it well.<br />Keep it moving.<br />Stay recognisable.</p>
        <div><Link href="/">Home</Link><Link href="/companies">Companies</Link><Link href="/brand">Brand assets</Link><a href="mailto:hello@proxima.mumbai">Email us</a></div>
        <small>© 2026 Proxima Mumbai</small>
      </footer>
    </main>
  );
}
