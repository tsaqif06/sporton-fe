import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        // hostname: "be-sporton.agunacourse.com",
        pathname: "/**",
        // pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "sporton-be.vercel.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
