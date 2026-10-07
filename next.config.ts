import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages Static Export এর জন্য আবশ্যক
  output: "export",
  images: {
    unoptimized: true,
  },

  experimental: {
    agentFeedback: true,
  },

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