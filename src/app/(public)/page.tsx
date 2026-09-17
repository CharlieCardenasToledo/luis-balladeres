import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { HomeSection } from "@/components/home/HomeSection";

const CANDIDATURA_FUENTE =
  "https://infozamoraec.com/index.php/2026/08/21/junta-provincial-electoral-califica-candidatura-de-luis-fernando-balladares-para-la-alcaldia-de-zamora/";
const PRIORIDADES_FUENTE =
  "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/";

const TRAYECTORIA_PREVIEW = [
  {
    date: "2006",
    role: "Gobernación / Intendencia / Jefatura Política de Zamora",
    source: "La Hora",
  },
  {
    date: "2010–2019",
    role: "Secretario General del Gobierno Provincial de Zamora Chinchipe",
    source: "Registro Oficial / ordenanzas provinciales",
  },
  {
    date: "2020–2023",
    role: "Secretario General del GAD Municipal de Zamora",
    source: "documentación municipal",
  },
  {
    date: "2023–2024",
    role: "Prosecretario y luego Secretario General del Consejo Provincial de Zamora Chinchipe",
    source: "directorio y ordenanzas provinciales",
  },
  {
    date: "2026",
    role: "Candidatura a la Alcaldía de Zamora — Fuerza Democrática, listas 2-4-12-21",
    source: "InfoZamora",
  },
];

const PROPUESTAS_PREVIEW = [
  { slug: "agua-y-saneamiento", title: "Agua y saneamiento", summary: "Fortalecimiento del sistema de agua potable y del alcantarillado." },
  { slug: "ciudad-y-urbanismo", title: "Ciudad y urbanismo", summary: "Regeneración urbana del cantón." },
  { slug: "turismo", title: "Turismo", summary: "Impulso al turismo de Zamora." },
  { slug: "deporte", title: "Deporte", summary: "Fortalecimiento de espacios deportivos." },
  { slug: "educacion", title: "Educación", summary: "Mejora de infraestructura educativa." },
  { slug: "salud", title: "Salud", summary: "Articulación institucional y gestión de un nuevo hospital para Zamora." },
  { slug: "parroquias", title: "Parroquias", summary: "Atención diferenciada según las necesidades de cada parroquia." },
  { slug: "gestion-municipal", title: "Gestión municipal", summary: "Coordinación entre Prefectura, Municipio y gobiernos parroquiales." },
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
        title="Quién es Luis"
        editorial
        pending={false}
        cta={
          <Link
            href="/luis"
            className="mt-4 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
          >
            Conocer trayectoria completa →
          </Link>
        }
      >
        <p className="text-charcoal">
          Luis Fernando Balladares Villavicencio es profesional del Derecho y candidato a la
          Alcaldía del cantón Zamora por la alianza Fuerza Democrática, listas 2-4-12-21.
          Registros públicos documentan su trabajo en la Gobernación de Zamora Chinchipe, el
          Gobierno Provincial y el GAD Municipal de Zamora.
        </p>
        <p className="mt-2 text-xs text-gray-600">
          Fuente:{" "}
          <a href={CANDIDATURA_FUENTE} target="_blank" rel="noopener noreferrer" className="underline">
            InfoZamora, 21 de agosto de 2026
          </a>
          . Datos biográficos personales (nacimiento, familia) no disponibles públicamente.
        </p>
      </HomeSection>

      <HomeSection
        title="Trayectoria verificable"
        pending={false}
        cta={
          <Link
            href="/trayectoria"
            className="mt-4 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
          >
            Ver trayectoria completa →
          </Link>
        }
      >
        <ol className="flex flex-col gap-4 border-l border-gray-300 pl-6">
          {TRAYECTORIA_PREVIEW.map((item) => (
            <li key={item.date}>
              <p className="text-sm font-medium text-gray-600">{item.date}</p>
              <p className="text-charcoal">{item.role}</p>
              <p className="text-xs text-gray-600">Fuente: {item.source}</p>
            </li>
          ))}
        </ol>
      </HomeSection>

      <HomeSection
        title="Propuestas por tema"
        pending={false}
        cta={
          <Link
            href="/propuestas"
            className="mt-4 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
          >
            Ver todas las propuestas →
          </Link>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROPUESTAS_PREVIEW.map((category) => (
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
        <p className="mt-4 text-xs text-gray-600">
          Declaraciones públicas recogidas por medios (
          <a href={PRIORIDADES_FUENTE} target="_blank" rel="noopener noreferrer" className="underline">
            InfoZamora, 28 de abril de 2026
          </a>
          ). El Plan de Trabajo oficial presentado al CNE no ha sido localizado públicamente
          todavía — ver{" "}
          <Link href="/plan-de-trabajo" className="underline">
            /plan-de-trabajo
          </Link>
          .
        </p>
      </HomeSection>

      <HomeSection
        title="Zamora / territorio"
        pending={false}
        cta={
          <Link
            href="/territorio"
            className="mt-4 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
          >
            Explorar el territorio →
          </Link>
        }
      >
        <p className="text-charcoal">
          El cantón Zamora tiene 30.186 habitantes (Censo 2022) y se organiza en las parroquias
          urbanas Zamora y El Limón, y las parroquias rurales Cumbaratza, Guadalupe, Imbana,
          Sabanilla, San Carlos de las Minas y Timbara.
        </p>
        <p className="mt-2 text-xs text-gray-600">Fuente: INEC / Censo Ecuador 2022; GAD Municipal de Zamora.</p>
      </HomeSection>

      <HomeSection title="Agenda" pending={false} pendingLabel="Sin agenda futura confirmada" cta={
        <Link
          href="/agenda"
          className="mt-4 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
        >
          Ver agenda completa →
        </Link>
      }>
        <p className="text-charcoal">
          No se encontró una agenda pública de próximos eventos verificable al 17 de septiembre de
          2026. El evento documentado más reciente es una entrevista programada para el 15 de
          septiembre de 2026 en RecTV Online.
        </p>
      </HomeSection>

      <HomeSection title="Últimas publicaciones oficiales" cta={
        <Link
          href="/redes"
          className="mt-4 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
        >
          Ver todas las publicaciones →
        </Link>
      }>
        <p className="text-charcoal">
          Sin sincronización automática todavía (Fase 4 del roadmap). El material de campaña
          suministrado muestra el identificador de Facebook <strong>LuchoBalladaresV</strong>; no
          se localizaron cuentas oficiales verificadas en Instagram, TikTok, X o YouTube.
        </p>
      </HomeSection>

      <HomeSection
        title="Noticias y documentos"
        pending={false}
        cta={
          <Link
            href="/noticias"
            className="mt-4 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
          >
            Ver noticias →
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

      <HomeSection title="Contacto" editorial pending={false} cta={
        <Link
          href="/contacto"
          className="mt-4 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
        >
          Ir al formulario de contacto →
        </Link>
      }>
        <p className="text-charcoal">
          Escríbenos por el formulario de contacto. No se verificó un correo, WhatsApp o teléfono
          oficial de campaña; el identificador de Facebook difundido en material de campaña es{" "}
          <strong>LuchoBalladaresV</strong>.
        </p>
      </HomeSection>
    </>
  );
}
