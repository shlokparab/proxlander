import type { MetadataRoute } from "next";
import { companies } from "./data/companies";

const BASE_URL = "https://www.proximamumbai.com";
const LAST_UPDATED = new Date("2026-07-29T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/companies`, lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: .95 },
    ...companies.map((company) => ({
      url: `${BASE_URL}/companies/${company.slug}`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: .8,
    })),
  ];
}
