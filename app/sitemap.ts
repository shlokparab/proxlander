import type { MetadataRoute } from "next";
import { companies } from "./data/companies";
import { getSiteUrl } from "./lib/site-url";

const LAST_UPDATED = new Date("2026-08-10T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    { url: siteUrl, lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/companies`, lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: .95 },
    { url: `${siteUrl}/brand`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: .65 },
    ...companies.map((company) => ({
      url: `${siteUrl}/companies/${company.slug}`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: .8,
    })),
  ];
}
