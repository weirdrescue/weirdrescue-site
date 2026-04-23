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
      {
        protocol: "https",
        hostname: "substack-post-media.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "substackcdn.com",
      },
      {
        protocol: "https",
        hostname: "images.substackcdn.com",
      },
    ],
  },
};

export default nextConfig;
