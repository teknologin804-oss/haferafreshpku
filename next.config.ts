import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the same build can be served from cPanel/XAMPP or Vercel.
  output: "export",
  trailingSlash: true,
  images: {
    // Required by `output: "export"`: the host serves the pre-sized local files.
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
