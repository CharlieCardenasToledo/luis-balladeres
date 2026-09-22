import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { HomeSection } from "@/components/home/HomeSection";


const TRAYECTORIA_PREVIEW = [
  {
    date: "2006",
    role: "Gobernación / Intendencia / Jefatura Política de Zamora",
  },
  {
    date: "2010–2019",
    role: "Secretario General del Gobierno Provincial de Zamora Chinchipe",
  },
  {
    date: "2020–2023",
    role: "Secretario General del GAD Municipal de Zamora",
  },
  {
    date: "2023–2024",
    role: "Prosecretario y luego Secretario General del Consejo Provincial de Zamora Chinchipe",
  },
  {
    date: "2026",
    role: "Candidatura a la Alcaldía de Zamora — Fuerza Democrática, listas 2-4-12-21",
  },
];

const PROPUESTAS_PREVIEW = [
  { slug: "agua-y-saneamiento", title: "Agua para vivir mejor", summary: "Agua potable, alcantarillado y saneamiento por etapas." },
  { slug: "ciudad-y-urbanismo", title: "Una ciudad que funciona", summary: "Regeneración urbana, movilidad segura y espacios públicos activos." },
  { slug: "turismo", title: "Zamora que se mueve", summary: "Turismo, mercados y oportunidades para emprender." },
  { slug: "deporte", title: "Barrios con vida", summary: "Deporte, cultura, inclusión y escenarios que se mantengan." },
];

const EJES_PREVIEW = [
  { title: "Cuidar", text: "Agua, fuentes, riberas y residuos con responsabilidad." },
  { title: "Conectar", text: "Movilidad, internet y servicios para ciudad y parroquias." },
  { title: "Cumplir", text: "Metas públicas, presupuesto participativo y seguimiento." },
];

const NOTICIAS_PREVIEW = [
  { date: "28 abr 2026", title: "Oficializa precandidatura y plantea prioridades para el cantón" },
  { date: "19 ago 2026", title: "Alianza Fuerza presenta candidaturas para las elecciones 2027" },
  { date: "21 ago 2026", title: "Junta Provincial Electoral califica su candidatura a la Alcaldía" },
];

/**
 * Homepage. Orden según plan (sección 66, efecto de posición serial):
 * Hero -> Quién es Luis -> Trayectoria -> Propuestas -> Zamora/territorio
 * -> Agenda -> Publicaciones oficiales -> Noticias/documentos -> Contacto.
 * Server Component por defecto: sin interacción propia.
 *
 * Contenido con fuente pública, según
 * inventario_contenidos_web_luis_balladares_17sep2026.md. Los datos
 * biográficos personales (nacimiento, familia, etc.) no están
 * disponibles públicamente y no se incluyen aquí.
 */
export default function HomePage() {
  return (
    <>
      <Hero />

      <HomeSection
        title="Una experiencia al servicio de Zamora"
        editorial
        pending={false}
        surface="magenta"
        cta={
          <Link
            href="/luis"
            className="mt-5 inline-flex min-h-11 items-center rounded-md bg-white px-5 font-medium text-brand-wine hover:bg-off-white"
          >
            Conocer a Luis →
          </Link>
        }
      >
        <p className="text-lg leading-8 text-white">
          Luis Fernando Balladares Villavicencio es profesional del Derecho y candidato a la
          Alcaldía del cantón Zamora. Su experiencia en la Gobernación, el Gobierno Provincial y
          el GAD Municipal le permite conocer cómo se coordinan las instituciones y qué hace falta
          para convertir una decisión en una obra y un servicio.
        </p>
        <p className="mt-3 text-xs leading-5 text-white/70">
          La candidatura está registrada por Fuerza Democrática, listas 2-4-12-21. La información
          personal no documentada no se presenta como hecho.
        </p>
      </HomeSection>

      <HomeSection
        title="Experiencia para hacer que las cosas pasen"
        pending={false}
        cta={
          <Link
            href="/trayectoria"
            className="mt-4 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
          >
            Ver experiencia →
          </Link>
        }
      >
        <ol className="flex flex-col gap-4 border-l border-gray-300 pl-6">
          {TRAYECTORIA_PREVIEW.map((item) => (
            <li key={item.date}>
              <p className="text-sm font-medium text-gray-600">{item.date}</p>
              <p className="text-charcoal">{item.role}</p>
            </li>
          ))}
        </ol>
      </HomeSection>

      <HomeSection
        title="Un proyecto para vivir mejor en Zamora"
        pending={false}
        surface="wine"
        cta={
          <Link
            href="/propuestas"
            className="mt-5 inline-flex min-h-11 items-center rounded-md bg-white px-5 font-medium text-brand-wine hover:bg-off-white"
          >
            Explorar el proyecto →
          </Link>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROPUESTAS_PREVIEW.map((category) => (
            <Link
              key={category.slug}
              href={`/propuestas/${category.slug}`}
              className="rounded-md border border-white/20 bg-off-white p-5 transition-transform hover:-translate-y-1 hover:border-brand-accent"
            >
              <p className="font-medium text-black">{category.title}</p>
              <p className="mt-1 text-sm text-gray-600">{category.summary}</p>
            </Link>
          ))}
        </div>
        <p className="mt-5 max-w-4xl text-xs leading-5 text-white/70">
          La matriz 2027–2031 organiza cinco ejes de trabajo: cuidado del territorio, economía
          local, bienestar, conectividad y un Municipio transparente. Las propuestas se presentan
          con su viabilidad y forma de ejecución. Toda la información está organizada en la sección
          de propuestas.
        </p>
      </HomeSection>

      <HomeSection
        title="Una mirada común, barrio por barrio"
        pending={false}
        cta={
          <Link
            href="/territorio"
            className="mt-4 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
          >
            Conocer Zamora →
          </Link>
        }
      >
        <p className="text-charcoal">
          Zamora no es una sola realidad. La ciudad y sus parroquias necesitan prioridades distintas,
          pero una misma forma de trabajar: escuchar, ordenar y volver público el avance.
        </p>
      </HomeSection>

      <HomeSection title="Tres compromisos para empezar" surface="wine" pending={false}>
        <div className="grid gap-4 sm:grid-cols-3">
          {EJES_PREVIEW.map((item) => (
            <div key={item.title} className="border-l-2 border-brand-accent pl-4">
              <p className="font-display text-xl text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-white/80">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-6 text-white/80">
          No se trata solo de anunciar obras: se trata de definir prioridades, explicar cómo se
          ejecutan y permitir que la ciudadanía las supervise.
        </p>
      </HomeSection>

      <HomeSection title="Participa en la campaña" surface="magenta" pending={false} cta={
        <Link
          href="/contacto"
          className="mt-5 inline-flex min-h-11 items-center rounded-md border border-white/50 px-5 font-medium text-white hover:border-white hover:bg-white hover:text-brand-wine"
        >
          Quiero participar →
        </Link>
      }>
        <p className="max-w-3xl text-lg leading-8 text-white">
          La campaña se construye conversando con la gente de Zamora. Comparte tus prioridades,
          conoce las propuestas y ayúdanos a llevarlas a cada barrio y parroquia.
        </p>
      </HomeSection>

      <HomeSection title="Información para decidir" surface="wine" pending={false} cta={
        <Link
          href="/redes"
          className="mt-5 inline-flex min-h-11 items-center rounded-md bg-white px-5 font-medium text-brand-wine hover:bg-off-white"
        >
          Ver novedades →
        </Link>
      }>
        <p className="max-w-3xl text-lg leading-8 text-white">
          Una decisión informada necesita propuestas claras, experiencia comprobable y novedades
          verificables. Aquí puedes revisar la trayectoria, la matriz de propuestas y la actualidad
          de la campaña.
        </p>
      </HomeSection>

      <HomeSection
        title="Conoce. Participa. Decide."
        pending={false}
        cta={
          <Link
            href="/noticias"
            className="mt-4 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
          >
            Ver novedades →
          </Link>
        }
      >
        <ul className="flex flex-col gap-2">
          {NOTICIAS_PREVIEW.map((item) => (
            <li key={item.title} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
              <span className="text-sm font-medium text-gray-600">{item.date}</span>
              <span className="text-charcoal">{item.title}</span>
            </li>
          ))}
        </ul>
      </HomeSection>

      <HomeSection title="Da el siguiente paso" editorial surface="magenta" pending={false} cta={
        <Link
          href="/contacto"
          className="mt-5 inline-flex min-h-11 items-center rounded-md bg-white px-5 font-medium text-brand-wine hover:bg-off-white"
        >
          Súmate a la campaña →
        </Link>
      }>
        <p className="text-lg leading-8 text-white">
          Comparte qué necesita tu barrio o parroquia. El formulario es el canal para escuchar
          prioridades y mantener abierta la conversación con la campaña.
        </p>
      </HomeSection>
    </>
  );
}
