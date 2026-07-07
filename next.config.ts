import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — export plain HTML so it can be served by any static host.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
