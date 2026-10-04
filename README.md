# Sitio web — Lucho Balladares (Alcaldía de Zamora 2027–2031)

Sitio oficial de campaña de Luis Fernando Balladares Villavicencio, en producción en
https://luchoballadares.com.

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.
- Despliegue en Firebase App Hosting (backend `luis-balladeres`, región `us-east4`).
  Cada push a `master` se despliega automáticamente.
- Dominio en Porkbun; `www` redirige al dominio principal. La URL `*.hosted.app` de
  App Hosting redirige con 301 al dominio propio (`src/proxy.ts`).
- Sin base de datos ni formularios: la participación ciudadana se canaliza al grupo de
  WhatsApp de la campaña (`WHATSAPP_GROUP_URL` en `src/lib/site.ts`).

## Cómo correr el proyecto

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abrir http://localhost:3000. Build de producción: `npm run build`.

Pruebas:

```bash
npm run test        # Vitest
npm run test:e2e    # Playwright (reutiliza el servidor de dev en el puerto 3000)
```

Si los estilos o el posicionamiento se rompen sin razón en `next dev`, la caché de
compilación está corrupta: detener el servidor, `rm -rf .next` y volver a arrancar.

## Contenido

| Archivo | Contenido |
|---|---|
| `src/lib/plan-trabajo.ts` | Plan de Trabajo 2027–2031 (visión, objetivos, ejes, propuestas, cronograma, participación) |
| `src/lib/proposal-topics.ts` | Temas de `/propuestas` y su foto |
| `src/lib/territories.ts` | Parroquias del cantón |
| `src/lib/campaign-photos.ts` | Fotografías de campaña (`public/media/campana/`) |
| `src/app/(public)/trayectoria/page.tsx` | Cronología de la experiencia pública |

Las fuentes de cada dato se conservan en los datos (`sources`), aunque no se muestran en
la web pública. No publicar datos personales del candidato (cédula, teléfono).

## SEO

- Metadata, URL canónica por página, imagen Open Graph (`src/app/opengraph-image.jpg`) y
  datos estructurados schema.org (`WebSite` + `Person`) en `src/app/layout.tsx`.
- `sitemap.xml` y `robots.txt` generados; `robots.txt` permite explícitamente a los
  rastreadores de asistentes de IA.
- `llms.txt` y `llms-full.txt` (`src/lib/llms.ts`) se generan desde los mismos datos que
  la web, así que se actualizan solos.
- La URL pública sale de `NEXT_PUBLIC_SITE_URL` (en `apphosting.yaml`).
