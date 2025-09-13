import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration for static export
  assetPrefix: process.env.NODE_ENV === 'production' ? '/crtiers-remake/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/crtiers-remake' : '',
};

export default nextConfig;
