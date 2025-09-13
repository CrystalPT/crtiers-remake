import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export disabled temporarily for GitHub Actions deployment
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration for static export (when enabled)
  assetPrefix: process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS ? '/crtiers-remake/' : '',
  basePath: process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS ? '/crtiers-remake' : '',
};

export default nextConfig;
