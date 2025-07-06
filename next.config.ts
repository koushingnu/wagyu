import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      // Turbopackの実験的機能を無効化
      enabled: false,
    },
  },
};

export default nextConfig;
