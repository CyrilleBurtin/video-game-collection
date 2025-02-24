import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: '*.googleusercontent.com',
      },
      {
        hostname: '*.githubusercontent.com',
      },
      {
        hostname: 'media.rawg.io',
      },
    ],
  },
};

export default nextConfig;
