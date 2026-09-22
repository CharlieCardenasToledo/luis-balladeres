import type { Metadata } from "next";
import Link from "next/link";
import { SourceNote } from "@/components/ui/SourceNote";
import { AXES } from "@/app/(public)/plan-de-trabajo/page";

export const metadata: Metadata = {
  title: "Propuestas",
  description: "El proyecto de Luis Balladares para una Zamora con servicios, oportunidades y participación.",
};

const CATEGORIES = [
  { slug: "agua-y-saneamiento", title: "Agua y saneamiento", summary: "Fortalecimiento del sistema de agua potable y del alcantarillado." },
  { slug: "ciudad-y-urbanismo", title: "Ciudad y urbanismo", summary: "Regeneración urbana." },
  { slug: "turismo", title: "Turismo", summary: "Impulso al turismo del cantón." },
  { slug: "deporte", title: "Deporte", summary: "Fortalecimiento de espacios deportivos." },
  { slug: "educacion", title: "Educación", summary: "Mejora de infraestructura educativa." },
  { slug: "salud", title: "Salud", summary: "Articulación institucional y gestión de un nuevo hospital para Zamora." },
  { slug: "parroquias", title: "Parroquias", summary: "Atención diferenciada según las necesidades de cada parroquia." },
  { slug: "gestion-municipal", title: "Gestión municipal", summary: "Coordinación entre Prefectura, Municipio y gobiernos parroquiales." },
];

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-magenta">El proyecto</p>
      <h1 className="mt-3 font-display text-3xl text-black sm:text-4xl">Una Zamora que avanza</h1>

      <p className="mt-4 text-charcoal">
        El proyecto de Luis Balladares parte de una idea sencilla: el Municipio debe cuidar lo que
        ya existe, ordenar el crecimiento y hacer visibles sus resultados. Aquí puedes conocer los
        temas que orientan la campaña y revisar, directamente en esta web, la matriz 2027–2031 con
        sus propuestas, viabilidad y formas de ejecución.
      </p>
      <SourceNote
        status="Fuentes públicas y matriz de trabajo suministrada por el equipo"
        sources={[
          { label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" },
          { label: "Alianza Fuerza — presentación de candidaturas, 19 de agosto de 2026", url: "https://infozamoraec.com/index.php/2026/08/19/alianza-fuerza-presento-a-sus-candidatos-para-las-elecciones-2027-en-zamora-chinchipe/" },
        ]}
      />

      <div className="mt-6 rounded-md border border-brand-magenta/30 bg-brand-magenta/5 p-5">
        <p className="font-medium text-black">El proyecto completo 2027–2031</p>
        <p className="mt-1 text-sm leading-6 text-gray-700">
          Cinco ejes para cuidar el territorio, mover la economía local, ampliar el bienestar,
          conectar ciudad y parroquias y construir un Municipio transparente.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {CATEGORIES.map((category) => (
          <Link
            key={category.slug}
            href={`/propuestas/${category.slug}`}
            className="rounded-md border border-gray-300 bg-white p-4 hover:border-brand-magenta"
          >
            <p className="font-medium text-black">{category.title}</p>
            <p className="mt-1 text-sm text-gray-600">{category.summary}</p>
          </Link>
        ))}
      </div>

      <section className="mt-10" aria-labelledby="matriz-propuestas">
        <h2 id="matriz-propuestas" className="font-display text-2xl text-black sm:text-3xl">Proyecto 2027–2031</h2>
        <p className="mt-3 text-sm leading-6 text-gray-700">
          Aquí está toda la matriz, organizada por ejes. Cada propuesta incluye su origen,
          viabilidad, forma de ejecución y mensaje.
        </p>
        <div className="mt-6 flex flex-col gap-4">
          {AXES.map((axis) => (
            <details key={axis.title} className="group rounded-lg border border-gray-300 bg-white p-5 open:border-brand-magenta">
              <summary className="cursor-pointer list-none pr-8 font-display text-xl text-black marker:hidden">
                <span className="group-open:text-brand-magenta">{axis.title}</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-gray-700">{axis.objective}</p>
              <div className="mt-5 grid gap-4">
                {axis.proposals.map((proposal) => (
                  <article key={proposal.title} className="rounded-md border border-gray-200 bg-off-white p-4">
                    <h3 className="font-medium text-black">{proposal.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      <span className="rounded-full bg-brand-wine/10 px-2 py-1 text-brand-wine">{proposal.origin}</span>
                      <span className="rounded-full bg-brand-magenta/10 px-2 py-1 text-brand-magenta">{proposal.viability}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-700"><strong className="text-black">Ejecución:</strong> {proposal.execution}</p>
                    <p className="mt-2 text-sm leading-6 text-gray-700"><strong className="text-black">Mensaje:</strong> “{proposal.message}”</p>
                  </article>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
