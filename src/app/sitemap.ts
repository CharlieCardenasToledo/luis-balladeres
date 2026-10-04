import type { MetadataRoute } from "next";
import { TERRITORIES } from "@/lib/territories";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

const siteUrl = getSiteUrl();

function priorityFor(route: string): number {
  if (route === "") return 1;
  if (route === "/plan-de-trabajo" || route === "/propuestas" || route === "/luis") return 0.9;
  if (["/privacidad", "/accesibilidad", "/reportar-error", "/transparencia"].includes(route)) return 0.3;
  return 0.7;
}

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
    changeFrequency: route === "" || route === "/noticias" || route === "/agenda" ? "weekly" : "monthly",
    priority: priorityFor(route),
  }));
}
