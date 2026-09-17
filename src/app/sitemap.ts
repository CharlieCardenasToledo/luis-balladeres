import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

/**
 * Sitemap estático con las rutas públicas conocidas (plan, sección 29).
 * No incluye /admin, /api, ni contenido dinámico todavía (propuestas,
 * noticias, agenda y territorio se añadirán cuando existan datos reales
 * en Firestore).
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
    "/noticias",
    "/redes",
    "/agenda",
    "/documentos",
    "/plan-de-trabajo",
    "/contacto",
    "/privacidad",
    "/accesibilidad",
    "/transparencia",
  ];

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
