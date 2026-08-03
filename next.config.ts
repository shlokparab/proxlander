import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.proximamumbai.com",
        pathname: "/founders/**",
      },
      {
        protocol: "https",
        hostname: "media.proximamumbai.com",
        pathname: "/comps/**",
      },
    ],
  },
};

export default nextConfig;
