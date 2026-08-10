const fallbackSiteUrl = "https://www.proximamumbai.com";

function normalizeUrl(value: string) {
  return value.startsWith("http://") || value.startsWith("https://") ? value : `https://${value}`;
}

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const publicVercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

  return normalizeUrl(configuredUrl || publicVercelUrl || fallbackSiteUrl).replace(/\/$/, "");
}

export const socialImageVersion = "20260810-2";
