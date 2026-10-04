import type { Metadata } from "next";
import Image from "next/image";
import { SourceNote } from "@/components/ui/SourceNote";
import { CAMPAIGN_PHOTOS_SOURCE, PHOTOS, type CampaignPhoto } from "@/lib/campaign-photos";

export const metadata: Metadata = {
  title: "Agenda",
  description: "Eventos públicos de la campaña de Luis Balladares.",
};

type AgendaEvent = {
  date: string;
  title: string;
  detail?: string;
  image?: CampaignPhoto;
  sources: { label: string; url?: string }[];
};

const PAST_EVENTS: AgendaEvent[] = [
  {
    date: "26 de abril de 2026",
    title: "Asamblea provincial — Yantzaza",
    detail: "Anuncio de precandidatura.",
    sources: [{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }],
  },
  {
    date: "20 de mayo de 2026, 07:10",
    title: "Entrevista — Zeta Radio 106.9 FM",
    image: PHOTOS.agendaZetaRadio,
    sources: [CAMPAIGN_PHOTOS_SOURCE],
  },
  {
    date: "18 de agosto de 2026",
    title: "Presentación de candidaturas — sector Buenaventura, parroquia Timbara",
    sources: [{ label: "InfoZamora, 19 de agosto de 2026", url: "https://infozamoraec.com/index.php/2026/08/19/alianza-fuerza-presento-a-sus-candidatos-para-las-elecciones-2027-en-zamora-chinchipe/" }],
  },
  {
    date: "19 de agosto de 2026, 07:00",
    title: "Entrevista — La Zeta",
    image: PHOTOS.agendaLaZeta,
    sources: [CAMPAIGN_PHOTOS_SOURCE],
  },
  {
    date: "15 de septiembre de 2026, 18:00",
    title: "Entrevista — RecTV Online",
    image: PHOTOS.entrevistaRectv,
    sources: [{ label: "Material de campaña + video público de RecTV Online", url: "https://www.facebook.com/RecTVonline/videos/1563347308253031/" }],
  },
  {
    date: "4 de octubre de 2026, 19:00",
    title: "Entrevista — programa + que política",
    detail: "Retransmisión de una entrevista de archivo, en vivo por Facebook.",
    image: PHOTOS.entrevistaMasQuePolitica,
    sources: [CAMPAIGN_PHOTOS_SOURCE],
  },
];

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Agenda</h1>

      <h2 className="mt-8 font-display text-xl text-black">Eventos de campaña</h2>
      <ul className="mt-4 flex flex-col gap-6 border-l border-gray-300 pl-6">
        {PAST_EVENTS.map((event) => (
          <li key={event.title} className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-gray-600">{event.date}</p>
              <p className="text-charcoal">{event.title}</p>
              {event.detail && <p className="text-sm text-gray-600">{event.detail}</p>}
              <SourceNote sources={event.sources} />
            </div>
            {event.image && (
              <div className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-md bg-gray-100 sm:w-28">
                <Image src={event.image.src} alt={event.image.alt} fill sizes="112px" className="object-cover" />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
