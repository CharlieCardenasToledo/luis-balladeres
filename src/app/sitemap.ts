import type { MetadataRoute } from "next";
import { TERRITORIES } from "@/lib/territories";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

/**
 * Sitemap estático con las rutas públicas conocidas (plan, sección 29).
 * No incluye /admin, /api, ni contenido dinámico todavía (noticias y
 * agenda con slugs propios se añadirán cuando existan datos reales en
 * Firestore).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/luis",
    "/trayectoria",
    "/propuestas",
    "/propuestas/agua-y-saneamiento",
    "/propuestas/ciudad-y-urbanismo",
    "/propuestas/turismo",
    "/propuestas/deporte",
    "/propuestas/educacion",
    "/propuestas/salud",
    "/propuestas/parroquias",
    "/propuestas/gestion-municipal",
    "/territorio",
    ...TERRITORIES.map((t) => `/territorio/${t.slug}`),
    "/noticias",
    "/redes",
    "/agenda",
    "/documentos",
    "/plan-de-trabajo",
    "/contacto",
    "/reportar-error",
    "/privacidad",
    "/accesibilidad",
    "/transparencia",
  ];

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
