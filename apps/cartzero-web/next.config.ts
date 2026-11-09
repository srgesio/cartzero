import type { NextConfig } from "next";

const adminUrl = process.env.CARTZERO_ADMIN_URL || "http://localhost:3001";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: `${adminUrl}/admin`,
      },
      {
        source: "/admin/:path*",
        destination: `${adminUrl}/admin/:path*`,
      },
      {
        source: "/admin-static/:path+",
        destination: `${adminUrl}/admin-static/:path+`,
      },
    ];
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
