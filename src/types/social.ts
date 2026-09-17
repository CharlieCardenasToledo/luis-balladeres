/**
 * Modelo normalizado de publicaciones sociales.
 * Definición tomada literalmente del plan maestro
 * (plan_web_luis_balladares_ux_ui_firebase.md, sección 11).
 *
 * Índice de unicidad: platform + externalId (nunca duplicar publicaciones).
 */
import type { Timestamp } from "firebase/firestore";

export type SocialPost = {
  id: string;

  platform: "facebook" | "instagram" | "tiktok";
  externalId: string;

  authorName: string;
  authorHandle?: string;

  text?: string;

  mediaType: "image" | "video" | "carousel" | "reel" | "post";

  canonicalUrl: string;

  mediaUrl?: string;
  thumbnailUrl?: string;
  embedUrl?: string;

  publishedAt: Timestamp;

  syncedAt: Timestamp;
  updatedAt: Timestamp;

  status: "active" | "deleted" | "unavailable" | "hidden";

  metrics?: {
    likes?: number;
    comments?: number;
    shares?: number;
    views?: number;
  };

  source: {
    accountId: string;
    accountName: string;
  };
};
