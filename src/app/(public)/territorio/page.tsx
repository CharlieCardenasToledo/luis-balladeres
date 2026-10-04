import type { Metadata } from "next";
import Link from "next/link";
import { SourceNote } from "@/components/ui/SourceNote";
import { TERRITORIES } from "@/lib/territories";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { CAMPAIGN_PHOTOS_SOURCE, PHOTOS } from "@/lib/campaign-photos";

export const metadata: Metadata = {
  title: "Territorio",
  description: "El cantón Zamora: población, parroquias y contexto territorial oficial.",
};

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Territorio</h1>

      <p className="mt-4 text-charcoal">
        El cantón Zamora tiene 30.186 habitantes según el Censo 2022 (la provincia de Zamora
        Chinchipe, en conjunto, tiene 110.973 habitantes). Se organiza en dos parroquias urbanas
        y seis rurales.
      </p>
      <SourceNote
        status="Verificado — fuente oficial"
        sources={[{ label: "INEC / Censo Ecuador 2022", url: "https://www.censoecuador.gob.ec/wp-content/uploads/2024/01/Info_Zamora_Chinchipe.pdf" }]}
      />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {TERRITORIES.map((territory) => (
          <Link
            key={territory.slug}
            href={`/territorio/${territory.slug}`}
            className="rounded-md border border-gray-300 bg-white p-4 hover:border-brand-magenta"
          >
            <p className="font-medium text-black">{territory.name}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-gray-600">
              Parroquia {territory.type}
            </p>
          </Link>
        ))}
      </div>

      <h2 className="mt-12 font-display text-2xl text-black">Recorridos por el cantón</h2>
      <p className="mt-2 text-charcoal">
        Encuentros y visitas de la campaña en barrios, comunidades y parroquias de Zamora.
      </p>
      <div className="mt-6">
        <PhotoGrid
          columns={3}
          photos={[
            PHOTOS.recorrido19,
            PHOTOS.cuzuntza35,
            PHOTOS.recorrido54,
            PHOTOS.recorrido88,
            PHOTOS.recorrido03,
            PHOTOS.recorrido16,
            PHOTOS.dialogo28,
            PHOTOS.recorrido61,
            PHOTOS.recorrido89,
            PHOTOS.recorrido10,
            PHOTOS.recorrido52,
            PHOTOS.encuentro63,
          ]}
        />
      </div>
      <SourceNote status="Material de campaña" sources={[CAMPAIGN_PHOTOS_SOURCE]} />

      <p className="mt-8 text-sm text-gray-600">
        El contexto de ordenamiento territorial (PDOT) describe roles productivos y de servicios
        del cantón; es información oficial municipal, no propuestas del candidato. No se
        encontraron propuestas de Balladares específicas para cada parroquia — ver{" "}
        <Link href="/propuestas/parroquias" className="underline">
          /propuestas/parroquias
        </Link>
        .
      </p>
    </div>
  );
}
