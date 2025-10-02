import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
    ],
  },
  /* config options here */
  eslint: {
    // Warning: allows builds to succeed despite ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
