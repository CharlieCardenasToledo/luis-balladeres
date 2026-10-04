/**
 * URL pública del sitio. Viene de NEXT_PUBLIC_SITE_URL (apphosting.yaml en
 * producción, .env.local en desarrollo). Sin valor por defecto: un canonical
 * o sitemap apuntando a un dominio equivocado es peor que un build fallido.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  if (!raw) {
    throw new Error("Falta NEXT_PUBLIC_SITE_URL (definirla en apphosting.yaml o .env.local).");
  }
  return raw.replace(/\/+$/, "");
}
