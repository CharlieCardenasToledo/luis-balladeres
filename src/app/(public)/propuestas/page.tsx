import type { Metadata } from "next";
import Link from "next/link";
import { SourceNote } from "@/components/ui/SourceNote";

export const metadata: Metadata = {
  title: "Propuestas",
  description: "Áreas prioritarias declaradas públicamente por Luis Balladares, con fuente.",
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
      <h1 className="font-display text-3xl text-black sm:text-4xl">Propuestas</h1>

      <p className="mt-4 text-charcoal">
        Hasta la fecha, las propuestas verificables provienen de declaraciones públicas recogidas
        por medios el 28 de abril de 2026 y en la presentación de candidaturas del 18 de agosto de
        2026. <strong>No se localizó el Plan de Trabajo oficial presentado al CNE</strong>, por lo
        que estas declaraciones no sustituyen a ese documento.
      </p>
      <SourceNote
        status="Verificado — declaraciones recogidas por medios"
        sources={[
          { label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" },
          { label: "Alianza Fuerza — presentación de candidaturas, 19 de agosto de 2026", url: "https://infozamoraec.com/index.php/2026/08/19/alianza-fuerza-presento-a-sus-candidatos-para-las-elecciones-2027-en-zamora-chinchipe/" },
        ]}
      />

      <div className="mt-6 rounded-md border border-brand-magenta/30 bg-brand-magenta/5 p-5">
        <p className="font-medium text-black">Nueva matriz de trabajo 2027–2031</p>
        <p className="mt-1 text-sm leading-6 text-gray-700">
          El equipo entregó una matriz política y técnica con cinco ejes, propuestas priorizadas,
          criterios de viabilidad y mensajes de campaña. Está organizada por separado porque no
          sustituye el Plan de Trabajo oficial presentado al CNE.
        </p>
        <Link href="/plan-de-trabajo" className="mt-3 inline-block font-medium text-brand-magenta underline">
          Consultar la matriz completa →
        </Link>
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

      <p className="mt-8 text-sm text-gray-600">
        Otros temas frecuentes en campañas municipales (seguridad ciudadana, empleo, movilidad,
        vivienda, ambiente, cultura, entre otros) no cuentan todavía con una propuesta específica
        atribuible directamente al candidato en las fuentes revisadas, por lo que no se publican
        como propuestas propias.
      </p>
    </div>
  );
}
