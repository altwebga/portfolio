import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.digital-env.ru",
        port: "",
        pathname: "/assets/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
