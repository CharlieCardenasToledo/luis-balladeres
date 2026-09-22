import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages sirve únicamente archivos estáticos.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS ? "/luis-balladeres" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/luis-balladeres/" : undefined,
};

export default nextConfig;
