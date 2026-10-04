import type { Metadata } from "next";
import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PHOTOS } from "@/lib/campaign-photos";
import {
  AXES,
  COMMITMENT,
  GENERAL_OBJECTIVE,
  PARTICIPATION,
  SPECIFIC_OBJECTIVES,
  TIMELINE,
  TIMELINE_YEARS,
  VISION,
  WORK_STEPS,
} from "@/lib/plan-trabajo";

export const metadata: Metadata = {
  alternates: { canonical: "/plan-de-trabajo" },
  title: "Plan de trabajo 2027–2031",
  description:
    "El plan de Luis Balladares para la Alcaldía de Zamora 2027–2031: visión, cinco ejes, propuestas, cronograma y participación ciudadana.",
};

const SECTIONS = [
  { id: "vision", label: "Visión" },
  { id: "ejes", label: "Cinco ejes" },
  { id: "como", label: "Cómo trabajaremos" },
  { id: "cronograma", label: "Cronograma" },
  { id: "participacion", label: "Participación" },
];

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-wine text-white">
        <Image src={PHOTOS.asamblea69.src} alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
        <div className="container-max relative py-16 sm:py-24">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/80">Plan de trabajo</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
            Zamora 2027–2031: un plan para cumplir
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">{GENERAL_OBJECTIVE}</p>
          <nav aria-label="Secciones del plan" className="mt-8 flex flex-wrap gap-2">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-white/40 px-4 py-2 text-sm font-medium hover:bg-white hover:text-brand-wine"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section id="vision" className="scroll-mt-20 bg-off-white py-16">
        <div className="container-editorial">
          <h2 className="font-display text-2xl text-black sm:text-3xl">La Zamora que queremos al 2031</h2>
          <blockquote className="mt-6 border-l-4 border-brand-magenta pl-5 text-xl leading-9 text-charcoal">
            {VISION}
          </blockquote>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <h2 className="font-display text-2xl text-black sm:text-3xl">Ocho objetivos</h2>
          <p className="mt-2 max-w-2xl text-charcoal">Lo que el plan busca lograr en estos cuatro años.</p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SPECIFIC_OBJECTIVES.map((o, i) => (
              <li key={o.code} className="rounded-lg border border-gray-200 bg-white p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-magenta font-display text-white">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-medium text-black">{o.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">{o.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="ejes" className="scroll-mt-20 border-t border-gray-200 bg-off-white py-16">
        <div className="container-max">
          <h2 className="font-display text-2xl text-black sm:text-3xl">Cinco ejes de trabajo</h2>
          <p className="mt-2 max-w-2xl text-charcoal">
            Cada eje agrupa programas y propuestas concretas. Toca &quot;Ver propuestas&quot; para conocer
            qué se hará y cómo.
          </p>

          <div className="mt-10 flex flex-col gap-14">
            {AXES.map((axis, i) => (
              <article key={axis.slug} id={axis.slug} className="scroll-mt-20 grid items-start gap-8 lg:grid-cols-2">
                <div className={`relative aspect-[4/3] overflow-hidden rounded-lg ${i % 2 ? "lg:order-2" : ""}`}>
                  <Image src={axis.photo.src} alt={axis.photo.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-magenta">Eje {i + 1}</p>
                  <h3 className="mt-1 font-display text-2xl text-black sm:text-3xl">{axis.short}</h3>
                  <p className="mt-3 text-lg leading-8 text-charcoal">{axis.approach}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {axis.programs.map((p) => (
                      <li key={p} className="rounded-full bg-brand-magenta/10 px-3 py-1 text-sm font-medium text-brand-wine">
                        {p}
                      </li>
                    ))}
                  </ul>
                  <details className="group mt-5 rounded-lg border border-gray-300 bg-white open:border-brand-magenta">
                    <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium text-black">
                      Ver propuestas ({axis.proposals.length})
                      <span aria-hidden="true" className="text-brand-magenta transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <ul className="flex flex-col gap-4 border-t border-gray-200 px-4 py-4">
                      {axis.proposals.map((p) => (
                        <li key={p.title}>
                          <p className="font-medium text-black">{p.title}</p>
                          <p className="mt-1 text-sm leading-6 text-brand-wine">{p.message}</p>
                          <p className="mt-1 text-sm leading-6 text-gray-700">
                            <strong className="text-black">Cómo lo haremos:</strong> {p.execution}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como" className="scroll-mt-20 bg-brand-magenta py-16 text-white">
        <div className="container-max">
          <h2 className="font-display text-2xl sm:text-3xl">Cómo trabajaremos</h2>
          <p className="mt-2 max-w-2xl text-white/85">
            Cada obra y programa sigue los mismos cinco pasos, para que nada se improvise.
          </p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {WORK_STEPS.map((step, i) => (
              <li key={step.title} className="rounded-lg bg-white/10 p-5">
                <span className="font-display text-3xl text-white/70">{i + 1}</span>
                <p className="mt-2 font-display text-xl">{step.title}</p>
                <p className="mt-1 text-sm leading-6 text-white/85">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-white/80">
            Costos, metas, ubicaciones y plazos de cada obra se definirán con estudios técnicos,
            presupuesto y validación jurídica. Ninguna cifra se anunciará sin respaldo.
          </p>
        </div>
      </section>

      <section id="cronograma" className="scroll-mt-20 py-16">
        <div className="container-max">
          <h2 className="font-display text-2xl text-black sm:text-3xl">Cronograma 2027–2031</h2>
          <p className="mt-2 max-w-2xl text-charcoal">
            El primer año se dedica a planificar y a ejecutar los proyectos listos; los siguientes, a
            ejecutar y mantener lo aprobado.
          </p>
          <div className="mt-8 overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-brand-wine text-left text-white">
                  <th scope="col" className="px-4 py-3 font-medium">Línea de trabajo</th>
                  {TIMELINE_YEARS.map((y) => (
                    <th key={y} scope="col" className="px-3 py-3 text-center font-medium">{y}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TIMELINE.map((row) => (
                  <tr key={row.line} className="border-t border-gray-200 odd:bg-off-white">
                    <th scope="row" className="px-4 py-3 text-left font-medium text-black">{row.line}</th>
                    {row.steps.map((step, i) => (
                      <td key={i} className="px-3 py-3 text-center">
                        <span
                          className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${
                            step.startsWith("Ejecutar") || step.startsWith("Priorizar")
                              ? "bg-brand-magenta text-white"
                              : step === "Evaluar"
                                ? "bg-brand-green/15 text-black"
                                : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {step}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="participacion" className="scroll-mt-20 border-t border-gray-200 bg-off-white py-16">
        <div className="container-max">
          <h2 className="font-display text-2xl text-black sm:text-3xl">Tú decides y tú vigilas</h2>
          <p className="mt-2 max-w-2xl text-charcoal">
            Mecanismos de participación y control ciudadano con fecha fija, para que el plan se cumpla.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PARTICIPATION.map((m) => (
              <li key={m.name} className="rounded-lg border border-gray-200 bg-white p-5">
                <p className="font-medium text-black">{m.name}</p>
                <p className="mt-2 text-sm leading-6 text-gray-700">{m.commitment}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-brand-magenta">{m.frequency}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-wine py-16 text-white">
        <div className="container-editorial">
          <h2 className="font-display text-2xl sm:text-3xl">Mi compromiso</h2>
          <blockquote className="mt-6 text-xl leading-9 text-white/95">“{COMMITMENT}”</blockquote>
          <p className="mt-4 font-medium">Luis Fernando Balladares Villavicencio</p>
          <p className="text-sm text-white/75">Candidato a la Alcaldía de Zamora · Fuerza Democrática, listas 2-4-12-21</p>
          <WhatsAppButton variant="light" label="Comparte tus prioridades" className="mt-8" />
        </div>
      </section>
    </>
  );
}
