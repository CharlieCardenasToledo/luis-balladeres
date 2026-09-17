import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { HomeSection } from "@/components/home/HomeSection";

/**
 * Homepage. Orden según plan (sección 66, efecto de posición serial):
 * Hero -> Quién es Luis -> Trayectoria -> Propuestas -> Zamora/territorio
 * -> Agenda -> Publicaciones oficiales -> Noticias/documentos -> Contacto.
 * Server Component por defecto: sin interacción propia.
 */
export default function HomePage() {
  return (
    <>
      <Hero />

      <HomeSection title="Quién es Luis" editorial cta={
        <Link
          href="/luis"
          className="mt-4 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
        >
          Conocer trayectoria completa →
        </Link>
      }>
        <p className="text-charcoal">
          [Contenido pendiente] Breve introducción biográfica (máximo 2–3 párrafos), pendiente de
          CV validado y autorización del candidato.
        </p>
      </HomeSection>

      <HomeSection title="Trayectoria verificable" cta={
        <Link
          href="/trayectoria"
          className="mt-4 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
        >
          Ver trayectoria completa →
        </Link>
      }>
        <ol className="flex flex-col gap-4 border-l border-gray-300 pl-6">
          {["[Fecha pendiente]", "[Fecha pendiente]", "[Fecha pendiente]"].map((date, i) => (
            <li key={i}>
              <p className="text-sm font-medium text-gray-600">{date}</p>
              <p className="text-charcoal">
                [Cargo e institución pendientes — requiere confirmación de fechas exactas]
              </p>
            </li>
          ))}
        </ol>
      </HomeSection>

      <HomeSection title="Propuestas por tema" cta={
        <Link
          href="/propuestas"
          className="mt-4 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
        >
          Ver todas las propuestas →
        </Link>
      }>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Agua y saneamiento",
            "Ciudad y urbanismo",
            "Turismo",
            "Deporte",
            "Educación",
            "Salud",
            "Parroquias",
            "Gestión municipal",
          ].map((category) => (
            <div
              key={category}
              className="rounded-md border border-gray-300 bg-white p-4"
            >
              <p className="font-medium text-black">{category}</p>
              <p className="mt-1 text-sm text-gray-600">[Contenido pendiente]</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection title="Zamora / territorio" cta={
        <Link
          href="/territorio"
          className="mt-4 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
        >
          Explorar el territorio →
        </Link>
      }>
        <p className="text-charcoal">
          [Contenido pendiente] Mapa editorial del cantón: Zamora, Cumbaratza, Guadalupe, Imbana,
          Sabanilla, San Carlos de las Minas, Timbara y otras parroquias aplicables.
        </p>
      </HomeSection>

      <HomeSection title="Agenda" cta={
        <Link
          href="/agenda"
          className="mt-4 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
        >
          Ver agenda completa →
        </Link>
      }>
        <p className="text-charcoal">[Contenido pendiente] Próximos eventos públicos.</p>
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
          [Contenido pendiente] Publicaciones normalizadas desde Facebook, Instagram y TikTok.
          Sin integraciones activas todavía (Fase 4 del roadmap).
        </p>
      </HomeSection>

      <HomeSection title="Noticias y documentos" cta={
        <Link
          href="/noticias"
          className="mt-4 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
        >
          Ver noticias →
        </Link>
      }>
        <p className="text-charcoal">[Contenido pendiente]</p>
      </HomeSection>

      <HomeSection title="Contacto" editorial cta={
        <Link
          href="/contacto"
          className="mt-4 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
        >
          Ir al formulario de contacto →
        </Link>
      }>
        <p className="text-charcoal">[Contenido pendiente] Datos de contacto autorizados.</p>
      </HomeSection>
    </>
  );
}
