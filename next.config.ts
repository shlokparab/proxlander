import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.proximamumbai.com",
        pathname: "/founders/**",
      },
    ],
  },
};

export default nextConfig;
