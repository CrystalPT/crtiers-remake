import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/crtiers-remake/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/crtiers-remake' : '',
};

export default nextConfig;
