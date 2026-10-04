import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SourceNote } from "@/components/ui/SourceNote";
import { AXES, VISION } from "@/lib/plan-trabajo";
import { PROPOSAL_TOPICS } from "@/lib/proposal-topics";

export const metadata: Metadata = {
  title: "Propuestas",
  description: "El proyecto de Luis Balladares para una Zamora con servicios, oportunidades y participación.",
};

export default function Page() {
  return (
    <div className="container-max py-16">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-magenta">El proyecto</p>
      <h1 className="mt-3 font-display text-3xl text-black sm:text-4xl">Una Zamora que avanza</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-charcoal">
        El Municipio debe cuidar lo que ya existe, ordenar el crecimiento y hacer visibles sus
        resultados. Estas son las prioridades de Lucho Balladares para Zamora.
      </p>
      <SourceNote
        sources={[
          { label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" },
          { label: "Plan de Trabajo 2027–2031, Alianza Fuerza Democrática" },
        ]}
      />

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PROPOSAL_TOPICS.map((topic) => (
          <li key={topic.slug}>
            <Link
              href={`/propuestas/${topic.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={topic.photo.src}
                  alt={topic.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="font-display text-lg text-black">{topic.title}</p>
                <p className="mt-1 flex-1 text-sm leading-6 text-gray-600">{topic.summary}</p>
                <p className="mt-3 text-sm font-medium text-brand-magenta">Ver propuesta →</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <section className="mt-16 rounded-lg bg-brand-wine p-6 text-white sm:p-10">
        <h2 className="font-display text-2xl sm:text-3xl">Plan de trabajo 2027–2031</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-white/90">{VISION}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {AXES.map((axis, i) => (
            <li key={axis.slug}>
              <Link
                href={`/plan-de-trabajo#${axis.slug}`}
                className="flex h-full flex-col rounded-md bg-white/10 p-4 hover:bg-white/20"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-white/70">Eje {i + 1}</span>
                <span className="mt-1 font-medium">{axis.short}</span>
                <span className="mt-2 text-xs text-white/70">{axis.proposals.length} propuestas</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/plan-de-trabajo"
          className="mt-8 inline-flex min-h-11 items-center rounded-md bg-white px-5 font-medium text-brand-wine hover:bg-off-white"
        >
          Ver el plan completo →
        </Link>
      </section>
    </div>
  );
}
