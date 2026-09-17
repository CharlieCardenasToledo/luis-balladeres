# Sitio web — Luis Balladares (Alcaldía de Zamora)

Andamiaje técnico inicial (Fases 0–2 del plan maestro) para el sitio informativo
de la candidatura. Ver `plan_web_luis_balladares_ux_ui_firebase.md` para el
plan completo (UX/UI, arquitectura, roadmap).

**Importante:** este scaffold no contiene biografía, fechas de cargos,
propuestas ni cifras reales. Todo el contenido está marcado explícitamente
como `[Contenido pendiente]` hasta que el candidato/campaña entregue y
autorice la información real.

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

- Rutas públicas de la sección 7 del plan, cada una con `<h1>` y aviso de
  "[Contenido pendiente]" (`src/app/(public)/...`).
- Homepage (`src/app/(public)/page.tsx`) con hero full-screen y las secciones
  de la sección 66 del plan, todas con contenido de marcador de posición.
- Layout raíz con header accesible (landmarks, menú hamburguesa móvil como
  Client Component) y footer con enlaces legales.
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

## Qué falta configurar

1. **Firebase real**: crear proyectos `balladares-dev` / `balladares-prod`,
   completar `.env.local` con las credenciales, y configurar Firebase App
   Hosting (sección 55-58 del plan).
2. **Contenido real**: reemplazar cada `[Contenido pendiente]` cuando el
   candidato entregue y autorice la información. Ver sección 64 del plan —
   qué pedir exactamente al candidato (Plan de Trabajo CNE en PDF, CV,
   confirmación de cargos y fechas, retratos, logo SVG, enlaces de redes
   oficiales, etc.).
3. **Integraciones sociales**: Facebook, Instagram y TikTok no están
   integradas. Falta: cuentas/apps de desarrollador, tokens en Secret
   Manager, Cloud Functions/Cloud Run de sincronización, Cloud Scheduler,
   normalización real y dashboard de estado (secciones 12-18, 41-44).
4. **Admin/CMS**: `/admin` no existe todavía. Falta Firebase Auth, roles
   (SUPER_ADMIN/EDITOR/REVIEWER), workflow editorial y Firestore Security
   Rules (secciones 19-21, 40).
5. **Colecciones Firestore**: crear el esquema descrito en la sección 21
   (`siteSettings`, `pages`, `proposals`, `timeline`, `territories`, `news`,
   `events`, `socialPosts`, `socialAccounts`, `documents`, `media`, `forms`,
   `formSubmissions`, `users`, `auditLogs`, `syncJobs`).
6. **Formularios**: `/contacto` y `/reportar-error` son placeholders sin
   lógica de envío, validación (Zod) ni consentimiento real todavía.

## Roadmap pendiente (plan maestro, sección 61)

- **Fase 0 — Contenido y activos**: pendiente completa (logo SVG,
  retratos, CV, Plan CNE, redes oficiales, contacto, documentos,
  autorización de datos personales).
- **Fase 1 — Diseño UX/UI**: wireframes y prototipo detallados, más allá de
  los tokens ya aplicados.
- **Fase 2 — Base técnica**: este scaffold cubre Next.js + Tailwind +
  estructura de carpetas + tipos. Falta Firebase real, App Hosting,
  Firestore schema, Auth admin y CI/CD.
- **Fase 3 — Contenido**: cargar contenido real una vez autorizado.
- **Fase 4 — Redes**: integración Facebook/Instagram/TikTok completa.
- **Fase 5 — Calidad**: Lighthouse, Playwright, accesibilidad, SEO,
  seguridad, pruebas responsive.
- **Fase 6 — Lanzamiento**: dominio, DNS, Search Console, backups,
  monitoreo.

## Restricciones respetadas en este scaffold

- Sin autenticación Firebase ni CMS admin implementados.
- Sin integraciones reales de Meta/TikTok (solo tipos y estructura).
- Sin biografía, fechas de cargos, propuestas de política pública ni
  cifras inventadas.
- Mobile-first y accesibilidad básica: landmarks, foco visible, sin
  animación permanente, sin autoplay, `prefers-reduced-motion` respetado.
