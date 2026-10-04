import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

const siteUrl = getSiteUrl();

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
