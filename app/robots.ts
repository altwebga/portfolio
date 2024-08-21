import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/private/",
        "/admin/",
        "/api/",
        "/_next/",
        "/static/",
        "/config/",
        "/privacy-policy/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
