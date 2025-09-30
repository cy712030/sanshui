import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.mdnice.com',
        port: '',
        pathname: '/user/70914/**',
      },
    ],
  },
};

export default nextConfig;
