import { PHOTOS, type CampaignPhoto } from "@/lib/campaign-photos";

export type ProposalTopic = { slug: string; title: string; summary: string; photo: CampaignPhoto };

export const PROPOSAL_TOPICS: ProposalTopic[] = [
  { slug: "agua-y-saneamiento", title: "Agua y saneamiento", summary: "Agua potable, alcantarillado y saneamiento por etapas.", photo: PHOTOS.recorrido19 },
  { slug: "ciudad-y-urbanismo", title: "Ciudad y urbanismo", summary: "Regeneración urbana, espacios públicos y movilidad segura.", photo: PHOTOS.recorrido11 },
  { slug: "turismo", title: "Turismo", summary: "Zamora como destino: promoción, mercados y emprendimiento.", photo: PHOTOS.recorrido23 },
  { slug: "deporte", title: "Deporte", summary: "Escenarios deportivos seguros y con mantenimiento.", photo: PHOTOS.recorrido16 },
  { slug: "educacion", title: "Educación", summary: "Infraestructura educativa y apoyos focalizados.", photo: PHOTOS.dialogo29 },
  { slug: "salud", title: "Salud", summary: "Articulación institucional y un nuevo hospital para Zamora.", photo: PHOTOS.recorrido17 },
  { slug: "parroquias", title: "Parroquias", summary: "Prioridades decididas con cada parroquia.", photo: PHOTOS.recorrido88 },
  { slug: "gestion-municipal", title: "Gestión municipal", summary: "Un Municipio coordinado, digital y que rinde cuentas.", photo: PHOTOS.dialogo30 },
];

export function getProposalTopic(slug: string): ProposalTopic {
  const topic = PROPOSAL_TOPICS.find((t) => t.slug === slug);
  if (!topic) throw new Error(`Tema de propuesta desconocido: ${slug}`);
  return topic;
}
