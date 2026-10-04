import type { Metadata } from "next";
import Image from "next/image";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { PHOTOS, type CampaignPhoto } from "@/lib/campaign-photos";

export const metadata: Metadata = {
  alternates: { canonical: "/noticias" },
  title: "Noticias",
  description: "Hitos públicos de la candidatura de Luis Balladares.",
};

type NewsItem = {
  date: string;
  title: string;
  summary: string;
  image?: CampaignPhoto;
  sources: { label: string; url?: string }[];
};

const NEWS: NewsItem[] = [
  {
    date: "26 de abril de 2026",
    title: "Lucho Balladares anuncia su precandidatura y sus prioridades para el cantón",
    summary:
      "En la asamblea provincial de Yantzaza, Lucho Balladares anunció su precandidatura a la Alcaldía de Zamora y presentó sus prioridades: regeneración urbana, agua potable y alcantarillado, turismo, infraestructura educativa, espacios deportivos, gestión de un nuevo hospital y atención diferenciada para cada parroquia.",
    sources: [{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }],
  },
  {
    date: "18 de agosto de 2026",
    title: "Presentación de candidaturas de Alianza Fuerza",
    summary:
      "En el sector Buenaventura, parroquia Timbara, Alianza Fuerza presentó a sus candidatos. Lucho Balladares planteó trabajar de forma coordinada entre Prefectura, municipios y gobiernos parroquiales, mediante convenios para ejecutar proyectos.",
    sources: [
      { label: "InfoZamora, 19 de agosto de 2026", url: "https://infozamoraec.com/index.php/2026/08/19/alianza-fuerza-presento-a-sus-candidatos-para-las-elecciones-2027-en-zamora-chinchipe/" },
      { label: "El Amazónico, 19 de agosto de 2026", url: "https://www.elamazonico.com/portal/alianza-fuerza-presenta-oficialmente-a-sus-candidaturas-y-plantea-una-agenda-de-unidad-y-desarrollo-para-zamora-chinchipe/" },
    ],
  },
  {
    date: "Agosto de 2026",
    title: "La Junta Provincial Electoral califica la candidatura",
    summary:
      "La candidatura de Lucho Balladares a la Alcaldía de Zamora, por Fuerza Democrática, listas 2-4-12-21, fue calificada sin objeciones.",
    image: PHOTOS.candidaturaCalificada,
    sources: [{ label: "InfoZamora, 21 de agosto de 2026", url: "https://infozamoraec.com/index.php/2026/08/21/junta-provincial-electoral-califica-candidatura-de-luis-fernando-balladares-para-la-alcaldia-de-zamora/" }],
  },
];

const ALIANZA_PHOTOS = [
  PHOTOS.alianza40,
  PHOTOS.alianza68,
  PHOTOS.asamblea70,
  PHOTOS.alianza41,
  PHOTOS.alianza67,
  PHOTOS.alianza38,
];

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Noticias</h1>
      <p className="mt-4 text-sm text-gray-600">
        Los momentos clave de la campaña.
      </p>

      <ul className="mt-8 flex flex-col gap-8">
        {NEWS.map((item) => (
          <li key={item.title} className="border-t border-gray-100 pt-6 first:border-t-0 first:pt-0">
            <p className="text-sm font-medium text-gray-600">{item.date}</p>
            <h2 className="mt-1 font-display text-xl text-black">{item.title}</h2>
            <p className="mt-2 text-charcoal">{item.summary}</p>
            {item.image && (
              <div className="relative mt-4 aspect-[4/5] w-full max-w-xs overflow-hidden rounded-md bg-gray-100">
                <Image src={item.image.src} alt={item.image.alt} fill sizes="320px" className="object-cover" />
              </div>
            )}
          </li>
        ))}
      </ul>

      <h2 className="mt-14 font-display text-2xl text-black">Alianza Fuerza en campaña</h2>
      <div className="mt-6">
        <PhotoGrid columns={3} photos={ALIANZA_PHOTOS} />
      </div>
    </div>
  );
}
