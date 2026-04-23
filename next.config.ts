import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pet-uploads.adoptapet.com",
      },
      {
        protocol: "https",
        hostname: "media.adoptapet.com",
      },
    ],
  },
};

export default nextConfig;
