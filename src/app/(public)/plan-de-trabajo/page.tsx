import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plan de trabajo",
  description: "Estado de disponibilidad del Plan de Trabajo presentado por Luis Balladares ante el CNE.",
};

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Plan de trabajo</h1>

      <p className="mt-4 text-charcoal">
        El Plan de Trabajo oficial presentado ante el CNE no se encuentra incorporado en este
        sitio porque no se localizó una copia pública verificable en la búsqueda realizada al 17
        de septiembre de 2026.
      </p>

      <p className="mt-4 text-sm text-gray-600">
        Páginas generales del CNE consultadas:{" "}
        <a href="https://www.cne.gob.ec/candidatos/" target="_blank" rel="noopener noreferrer" className="underline">
          cne.gob.ec/candidatos
        </a>{" "}
        y{" "}
        <a href="https://www.cne.gob.ec/elecciones-seccionales-3/" target="_blank" rel="noopener noreferrer" className="underline">
          Elecciones Seccionales 2027
        </a>
        .
      </p>

      <p className="mt-4 text-sm text-gray-600">
        Las declaraciones de prensa recogidas en abril y agosto de 2026 no se presentan como
        sustituto del Plan de Trabajo oficial — pueden consultarse en{" "}
        <Link href="/propuestas" className="underline">
          /propuestas
        </Link>
        , claramente identificadas como declaraciones públicas.
      </p>
    </div>
  );
}
