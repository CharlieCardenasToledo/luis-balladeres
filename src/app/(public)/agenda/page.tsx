import type { Metadata } from "next";
import { SourceNote } from "@/components/ui/SourceNote";

export const metadata: Metadata = {
  title: "Agenda",
  description: "Eventos públicos documentados de la campaña de Luis Balladares.",
};

const PAST_EVENTS = [
  {
    date: "26 de abril de 2026",
    title: "Asamblea provincial — Yantzaza",
    detail: "Anuncio de precandidatura.",
    sources: [{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }],
  },
  {
    date: "18 de agosto de 2026",
    title: "Presentación de candidaturas — sector Buenaventura, parroquia Timbara",
    sources: [{ label: "InfoZamora, 19 de agosto de 2026", url: "https://infozamoraec.com/index.php/2026/08/19/alianza-fuerza-presento-a-sus-candidatos-para-las-elecciones-2027-en-zamora-chinchipe/" }],
  },
  {
    date: "15 de septiembre de 2026, 18:00",
    title: "Entrevista — RecTV Online",
    sources: [{ label: "Material de campaña + video público de RecTV Online", url: "https://www.facebook.com/RecTVonline/videos/1563347308253031/" }],
  },
];

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Agenda</h1>

      <h2 className="mt-8 font-display text-xl text-black">Eventos pasados documentados</h2>
      <ul className="mt-4 flex flex-col gap-6 border-l border-gray-300 pl-6">
        {PAST_EVENTS.map((event) => (
          <li key={event.title}>
            <p className="text-sm font-medium text-gray-600">{event.date}</p>
            <p className="text-charcoal">{event.title}</p>
            {event.detail && <p className="text-sm text-gray-600">{event.detail}</p>}
            <SourceNote sources={event.sources} />
          </li>
        ))}
      </ul>
    </div>
  );
}
