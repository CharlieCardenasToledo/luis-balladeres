import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noticias",
  description: "Hitos públicos de la candidatura de Luis Balladares.",
};

type NewsItem = {
  date: string;
  title: string;
  summary: string;
  note?: string;
  sources: { label: string; url?: string }[];
};

const NEWS: NewsItem[] = [
  {
    date: "21 de abril de 2026",
    title: "Se conforma una alianza provincial de organizaciones políticas",
    summary:
      "Un medio reportó la formación de una alianza provincial amplia y nombres considerados para candidaturas.",
    note: "La configuración inicial de esta alianza cambió posteriormente; no describe de forma definitiva la alianza bajo la que quedó registrada la candidatura de Balladares (ver más abajo).",
    sources: [{ label: "Chinchipe Hoy" }],
  },
  {
    date: "26–28 de abril de 2026",
    title: "Anuncia precandidatura y primeras prioridades para el cantón",
    summary:
      "En una asamblea provincial en Yantzaza, Balladares anunció su precandidatura a la Alcaldía. El medio lo identifica como abogado, con experiencia en Prefectura, GAD Municipal de Zamora y GAD de Yacuambi, y recoge sus prioridades: regeneración urbana, agua, alcantarillado, turismo, infraestructura educativa, espacios deportivos, articulación en salud (incluido un nuevo hospital) y atención diferenciada por parroquia.",
    sources: [{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }],
  },
  {
    date: "18–19 de agosto de 2026",
    title: "Presentación de candidaturas de Alianza Fuerza",
    summary:
      "En un acto en el sector Buenaventura, parroquia Timbara, Balladares fue presentado como candidato y planteó coordinación entre Prefectura, municipios y gobiernos parroquiales mediante convenios.",
    sources: [
      { label: "InfoZamora, 19 de agosto de 2026", url: "https://infozamoraec.com/index.php/2026/08/19/alianza-fuerza-presento-a-sus-candidatos-para-las-elecciones-2027-en-zamora-chinchipe/" },
      { label: "El Amazónico, 19 de agosto de 2026", url: "https://www.elamazonico.com/portal/alianza-fuerza-presenta-oficialmente-a-sus-candidaturas-y-plantea-una-agenda-de-unidad-y-desarrollo-para-zamora-chinchipe/" },
    ],
  },
  {
    date: "19–21 de agosto de 2026",
    title: "La Junta Provincial Electoral califica su candidatura",
    summary:
      "La candidatura de Balladares a la Alcaldía de Zamora fue calificada por la alianza Fuerza Democrática, listas 2-4-12-21, sin objeciones reportadas dentro del proceso.",
    sources: [{ label: "InfoZamora, 21 de agosto de 2026", url: "https://infozamoraec.com/index.php/2026/08/21/junta-provincial-electoral-califica-candidatura-de-luis-fernando-balladares-para-la-alcaldia-de-zamora/" }],
  },
];

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Noticias</h1>
      <p className="mt-4 text-sm text-gray-600">
        Resúmenes propios de hitos públicos de la campaña.
      </p>

      <ul className="mt-8 flex flex-col gap-8">
        {NEWS.map((item) => (
          <li key={item.title} className="border-t border-gray-100 pt-6 first:border-t-0 first:pt-0">
            <p className="text-sm font-medium text-gray-600">{item.date}</p>
            <h2 className="mt-1 font-display text-xl text-black">{item.title}</h2>
            <p className="mt-2 text-charcoal">{item.summary}</p>
            {item.note && <p className="mt-2 text-sm text-gray-600">{item.note}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
