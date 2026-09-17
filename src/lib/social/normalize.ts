/**
 * Normalización de publicaciones sociales a la forma canónica `SocialPost`.
 *
 * FUERA DE ALCANCE en este scaffold: no hay integraciones reales con
 * Meta (Facebook/Instagram) ni TikTok todavía. Solo se define la forma
 * de la función y del pipeline descrito en el plan
 * (plan_web_luis_balladares_ux_ui_firebase.md, secciones 10-17),
 * para que la sincronización real se implemente después sin rediseñar tipos.
 */
import type { SocialPost } from "@/types/social";

/**
 * Entrada cruda proveniente de cualquier proveedor (Meta Graph API,
 * TikTok Display API, etc.) antes de normalizar.
 */
export type RawSocialPost = Record<string, unknown>;

/**
 * Convierte una publicación cruda de una plataforma en el modelo
 * normalizado `SocialPost`. Implementación pendiente por plataforma.
 */
export function normalize(raw: RawSocialPost): SocialPost {
  void raw;
  throw new Error(
    "normalize() no está implementado todavía. Pendiente: integración real con Facebook, Instagram y TikTok (Fase 4 del roadmap)."
  );
}

/**
 * Índice de unicidad recomendado por el plan: platform + externalId.
 */
export function socialPostKey(platform: SocialPost["platform"], externalId: string): string {
  return `${platform}:${externalId}`;
}
