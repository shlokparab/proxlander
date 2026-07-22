import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.proximamumbai.com/sitemap.xml",
    host: "https://www.proximamumbai.com",
  };
}
