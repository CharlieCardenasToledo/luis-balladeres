import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

/**
 * Excluye /admin y /api del rastreo (plan, sección 29).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/admin/", "/api", "/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
