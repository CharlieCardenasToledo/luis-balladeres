# Sitio web — Luis Balladares (Alcaldía de Zamora)

Andamiaje técnico (Fases 0–2 del plan maestro) para el sitio informativo de la
candidatura, con contenido público ya poblado a partir de una investigación
verificada. Ver `plan_web_luis_balladares_ux_ui_firebase.md` para el plan
técnico completo y `inventario_contenidos_web_luis_balladares_17sep2026.md`
para la investigación fuente de todo el contenido factual del sitio.

**Regla editorial (se mantiene en todo el código):** ningún dato factual sobre
el candidato se publica sin una fuente pública verificable citada junto al
texto. Donde el inventario no encontró información suficiente, la página lo
declara explícitamente ("No encontrado" / "No verificado") en vez de
completarlo con inferencias. Los datos personales no públicos (nacimiento,
familia, etc.) nunca se incluyen. El Plan de Trabajo oficial del CNE no se ha
localizado públicamente y no se sustituye por declaraciones de prensa.

## Stack

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, preparado para
Firebase (Firestore, Storage, Auth) vía `firebase` (cliente) y
`firebase-admin` (servidor).

## Cómo correr el proyecto

```bash
npm install
cp .env.example .env.local   # completar con credenciales reales de Firebase
npm run dev
```

Abrir http://localhost:3000

Para verificar el build de producción:

```bash
npm run build
```

## Qué incluye este scaffold

- Rutas públicas de la sección 7 del plan (`src/app/(public)/...`). La
  mayoría ya tiene contenido real y citado: homepage, `/luis`, `/trayectoria`
  (cronología completa con 20+ hitos fechados y fuente cada uno),
  `/propuestas` (índice + 8 subpáginas), `/territorio` (índice + las 8
  parroquias, vía `src/lib/territories.ts` y ruta dinámica con
  `generateStaticParams`), `/noticias`, `/redes`, `/agenda`, `/documentos`,
  `/plan-de-trabajo`, `/transparencia` y `/contacto`. `/privacidad` y
  `/accesibilidad` siguen como placeholder a propósito: el inventario indica
  que deben redactarse desde decisiones legales/técnicas reales, no antes.
- `src/components/ui/SourceNote.tsx`: componente compartido para citar
  fuente + estado de verificación (`SourceNote`) y para listar datos no
  encontrados (`NotFoundList`), usado en todas las páginas con contenido real.
- `src/components/proposals/ProposalDetail.tsx`: plantilla compartida para
  las 8 páginas de propuestas (evita duplicar el mismo layout 8 veces).
- Homepage (`src/app/(public)/page.tsx`) con hero full-screen y las secciones
  de la sección 66 del plan; `HomeSection` ahora acepta `pending={false}`
  para ocultar el aviso "[Contenido pendiente]" en secciones ya pobladas.
- Layout raíz con header accesible (landmarks, menú hamburguesa móvil como
  Client Component) y footer con enlaces legales y descripción real de la
  candidatura.
- Formulario de contacto funcional (`src/components/forms/ContactForm.tsx` +
  `src/app/api/forms/contact/route.ts`): valida con Zod, honeypot, rate
  limit básico en memoria, y guarda en `formSubmissions` vía Admin SDK.
  Verificado end-to-end contra el proyecto Firebase real.
- Design tokens exactos del plan (colores, radios, espaciado, anchuras
  máximas) en `src/app/globals.css`. Tipografía: Inter (texto) y Archivo
  Black (titulares), vía `next/font/google`.
- Tipos TypeScript `Proposal`, `Event` (`src/types/content.ts`) y
  `SocialPost` (`src/types/social.ts`), copiados literalmente del plan.
- `src/lib/firebase/client.ts` y `admin.ts`: inicialización estándar de
  Firebase leyendo únicamente de variables de entorno, sin valores
  hardcodeados.
- `src/lib/social/normalize.ts`: solo la forma de la función de
  normalización y el índice de unicidad `platform:externalId` — sin
  integración real con ninguna plataforma.
- `robots.ts` y `sitemap.ts` básicos (excluyen `/admin` y `/api`).
- `.env.example` con todas las variables necesarias (Firebase client/admin y
  placeholders comentados de redes sociales).
- `firestore.rules` y `storage.rules`: reglas de seguridad por defecto
  (secciones 19-21, 40 del plan). El sitio público solo lee contenido con
  `status == "published"`/`"active"`; toda escritura queda reservada al
  Admin SDK server-side. Preparadas para custom claims de rol
  (`SUPER_ADMIN`/`EDITOR`/`REVIEWER`) cuando exista Firebase Auth admin.
- `firebase.json`, `firestore.indexes.json`, `.firebaserc`: configuración
  base del proyecto Firebase (`luis-balladeres`).
- Tipo `SiteSettings` (`src/types/content.ts`), sección 22 del plan.

## Qué falta configurar

1. **Firebase real**: ya conectado a un único proyecto (`luis-balladeres`).
   Falta separar `-dev` / `-prod` antes de producción real, y configurar
   Firebase App Hosting (sección 55-58 del plan). Las Firestore/Storage
   Security Rules están escritas pero **no desplegadas** — ejecutar
   `npx firebase deploy --only firestore:rules,storage --project luis-balladeres`.
2. **Contenido pendiente de verificar directamente con el candidato**: el
   inventario deja vacíos explícitos que solo el candidato/campaña puede
   llenar — Plan de Trabajo CNE en PDF, CV, confirmación de fechas exactas de
   cargos, cargo en GAD Yacuambi, retratos y logo originales, correo/WhatsApp
   oficiales de campaña, y confirmación de la URL exacta de Facebook y
   cuentas en otras redes. Ver sección 39 del inventario para el estado
   página por página, y sección 64 del plan para qué pedir exactamente.
3. **Integraciones sociales**: Facebook, Instagram y TikTok no están
   integradas. Falta: cuentas/apps de desarrollador, tokens en Secret
   Manager, Cloud Functions/Cloud Run de sincronización, Cloud Scheduler,
   normalización real y dashboard de estado (secciones 12-18, 41-44).
4. **Admin/CMS**: `/admin` no existe todavía. Falta Firebase Auth y el
   workflow editorial para poder editar este contenido sin tocar código.
5. **Colecciones Firestore**: las reglas de seguridad ya cubren el esquema
   de la sección 21 (`siteSettings`, `pages`, `proposals`, `timeline`,
   `territories`, `news`, `events`, `socialPosts`, `socialAccounts`,
   `documents`, `media`, `forms`, `formSubmissions`, `users`, `auditLogs`,
   `syncJobs`), pero salvo `formSubmissions` (ya en uso por el formulario de
   contacto) ninguna colección existe todavía en Firestore ni tiene datos
   semilla — el contenido de propuestas/trayectoria/territorio vive por ahora
   como constantes en el código, no en Firestore.
6. **Formulario de reporte de errores** (`/reportar-error`, sección 47 del
   plan) no está implementado; solo existe el de contacto.

## Roadmap pendiente (plan maestro, sección 61)

- **Fase 0 — Contenido y activos**: parcial. Logo (`logo.png`, pendiente de
  integrar y de un SVG vectorial editable — ver sección 6). Aún faltan
  retratos en alta resolución, CV, Plan de Trabajo CNE en PDF, confirmación
  de redes/contacto oficiales y autorización de datos personales.
- **Fase 1 — Diseño UX/UI**: wireframes y prototipo detallados, más allá de
  los tokens ya aplicados.
- **Fase 2 — Base técnica**: Next.js + Tailwind + Firebase conectado +
  Firestore/Storage rules escritas (no desplegadas) + formulario de contacto
  funcional. Falta App Hosting, Auth admin y CI/CD.
- **Fase 3 — Contenido**: gran parte del contenido público ya está cargado y
  citado (ver arriba); falta lo que solo el candidato/campaña puede aportar.
- **Fase 4 — Redes**: integración Facebook/Instagram/TikTok completa.
- **Fase 5 — Calidad**: Lighthouse, Playwright, accesibilidad, SEO,
  seguridad, pruebas responsive.
- **Fase 6 — Lanzamiento**: dominio, DNS, Search Console, backups,
  monitoreo.

## Restricciones respetadas en este scaffold

- Sin autenticación Firebase ni CMS admin implementados.
- Sin integraciones reales de Meta/TikTok (solo tipos y estructura).
- Todo dato factual sobre el candidato (biografía, fechas de cargos,
  propuestas, cifras) tiene una fuente pública citada junto al texto; nada
  se completa por inferencia. Donde el inventario no encontró información,
  la página lo declara explícitamente.
- Mobile-first y accesibilidad básica: landmarks, foco visible, sin
  animación permanente, sin autoplay, `prefers-reduced-motion` respetado.
