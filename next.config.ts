import type { NextConfig } from "next";
import path from "path";

const wpUrl = process.env.WORDPRESS_API_URL
  ? new URL(process.env.WORDPRESS_API_URL)
  : null;

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },

  images: {
    remotePatterns: [
      // WordPress media uploads
      ...(wpUrl
        ? [
            {
              protocol: wpUrl.protocol.replace(":", "") as "https" | "http",
              hostname: wpUrl.hostname,
            },
          ]
        : []),
      // Gravatar (WordPress author avatars)
      {
        protocol: "https" as const,
        hostname: "secure.gravatar.com",
      },
    ],
  },
};

export default nextConfig;
