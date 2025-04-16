import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  assetPrefix: process.env.NODE_ENV === 'production' ? '/moon-town/' : '',
};

export default nextConfig;
