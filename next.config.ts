import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: allows builds to succeed despite ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
