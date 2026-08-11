import type { Metadata } from "next";
import BrandAssetsClient from "./BrandAssetsClient";
import CompanyNavigation from "../companies/CompanyNavigation";
import SiteFooter from "../components/SiteFooter";

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
      <SiteFooter />
    </main>
  );
}
