import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
