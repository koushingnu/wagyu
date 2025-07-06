import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental.turboは非推奨になったため、turbopackに移行
  turbopack: {
    enabled: false,
  },
};

export default nextConfig;
