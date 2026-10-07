import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages Static Export এর জন্য প্রয়োজনীয় কনফিগ
  output: "export",
  images: {
    unoptimized: true,
  },

  /* আপনার বিদ্যমান কনফিগ অপশনগুলো */
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