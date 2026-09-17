/**
 * Tipos de contenido editorial.
 * Definiciones tomadas literalmente del plan maestro
 * (plan_web_luis_balladares_ux_ui_firebase.md, secciones 8.5 y 49).
 */
import type { Timestamp } from "firebase/firestore";

/** Sección 8.5 — Propuestas */
export type Proposal = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  problem?: string;
  actions: string[];
  territory?: string[];
  timeline?: string;
  financing?: string;
  sourceUrl?: string;
  sourceDocument?: string;
  status: "draft" | "reviewed" | "published";
};

/** Sección 49 — Agenda */
export type Event = {
  title: string;
  description: string;
  dateStart: Timestamp;
  dateEnd?: Timestamp;
  locationName?: string;
  publicAddress?: string;
  territory?: string;
  image?: string;
  status: "draft" | "published" | "cancelled";
};
