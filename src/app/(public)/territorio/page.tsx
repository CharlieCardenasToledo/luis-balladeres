import type { Metadata } from "next";
import Link from "next/link";
import { SourceNote } from "@/components/ui/SourceNote";
import { TERRITORIES } from "@/lib/territories";

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
