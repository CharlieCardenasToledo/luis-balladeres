import Image from "next/image";
import Link from "next/link";
import { HeroNav } from "./HeroNav";
import { MobileNav } from "../layout/MobileNav";
import logoLuchoBalladares from "../../../public/brand/logo-lucho-balladares.png";
import luisPlanomedio from "../../../public/media/luis-planomedio.png";
import luisRetrato from "../../../public/media/luis-retrato.png";

/**
 * Lenguaje gráfico inspirado en curvas de nivel y cauces de Zamora.
 * Es decorativo: aporta profundidad sin añadir información ni interacción.
 */
function HeroTerrainLines() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <g fill="none" stroke="white" strokeLinecap="round" vectorEffect="non-scaling-stroke">
        <path
          d="M-100 650C112 570 160 390 368 300C554 220 610 82 810 18C1024-52 1194 30 1510-92"
          strokeWidth="2"
          opacity="0.16"
        />
        <path
          d="M-84 700C136 622 218 456 404 376C610 288 686 140 858 82C1082 6 1236 88 1516-22"
          strokeWidth="1.5"
          opacity="0.11"
        />

        <g className="hidden sm:block">
          <path
            d="M720 742C812 636 778 520 896 442C1014 364 1160 420 1264 326C1362 238 1326 126 1488 52"
            strokeWidth="2"
            opacity="0.18"
          />
          <path
            d="M786 776C874 664 842 566 944 500C1064 422 1202 478 1312 382C1416 292 1380 184 1508 122"
            strokeWidth="1.5"
            opacity="0.11"
          />
          <path
            d="M852 796C932 704 912 622 998 564C1110 488 1244 542 1360 446C1450 372 1444 278 1522 230"
            strokeWidth="1"
            opacity="0.09"
          />

          <ellipse cx="315" cy="358" rx="262" ry="310" strokeWidth="1.5" opacity="0.1" />
          <ellipse cx="315" cy="358" rx="220" ry="268" strokeWidth="1" opacity="0.08" />
        </g>
      </g>

    </svg>
  );
}

/**
 * Hero de homepage (plan, sección 8.1; referencia visual sección 3).
 * - min-height 100svh real: `-mt-16` cancela el `pt-16` que `<main>`
 *   reserva globalmente para el header fijo (ver layout.tsx y Header.tsx).
 * - headline en HTML real (no imagen rasterizada); el logotipo es
 *   decorativo y complementario (aria-hidden), no lo sustituye.
 * - retrato de cuerpo/plano medio con fondo transparente, anclado al
 *   borde inferior (roza la barra de navegación), a la izquierda en
 *   desktop y arriba en móvil; logo + titular + CTA a la derecha.
 * - barra de navegación al pie (HeroNav) que se convierte en header fijo
 *   al hacer scroll.
 * - sin autoplay, sin animación permanente.
 */
export function Hero() {
  return (
    <section
      aria-label="Presentación"
      className="relative -mt-16 flex min-h-[100svh] flex-col overflow-hidden bg-brand-magenta text-white"
    >
      <HeroTerrainLines />

      <div className="relative z-30 flex items-center justify-between bg-white px-5 py-4 md:hidden">
        <div className="flex items-center gap-3 text-brand-wine" aria-label="Redes sociales">
          <Link href="/redes" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-brand-wine text-2xl font-bold">f</Link>
          <Link href="/redes" aria-label="Twitter" className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-brand-wine text-xl font-bold">♥</Link>
          <Link href="/redes" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-brand-wine text-xl font-bold">◎</Link>
        </div>
        <MobileNav buttonClassName="border-transparent text-brand-wine" />
      </div>

      <div className="relative z-10 min-h-[calc(100svh-76px)] px-5 pb-12 pt-8 md:hidden">
        <Image
          src={luisRetrato}
          alt="Luis Fernando Balladares Villavicencio"
          priority
          className="absolute inset-x-0 bottom-0 h-[78%] w-full object-contain object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-wine/10 via-brand-magenta/20 to-brand-wine/45" />
        <div className="relative z-10 flex h-full flex-col">
          <Image src={logoLuchoBalladares} alt="Lucho Balladares" className="h-auto w-64" priority />
          <div className="mt-auto pt-40">
            <h1 className="text-center font-display text-4xl leading-[0.98] text-white">Yo lucho por Zamora</h1>
            <p className="mt-3 text-center text-lg font-semibold leading-6 text-white">Únete a nuestra campaña</p>
            <p className="text-center text-base font-semibold leading-6 text-white">para recibir información y actualizaciones</p>
            <div className="mt-6 grid gap-3">
              <input aria-label="Nombre" placeholder="Nombre*" className="h-16 bg-white px-5 text-xl text-charcoal placeholder:text-gray-600" />
              <input aria-label="Correo electrónico" placeholder="Correo electrónico*" className="h-16 bg-white px-5 text-xl text-charcoal placeholder:text-gray-600" />
              <input aria-label="Número" placeholder="Número" className="h-16 bg-white px-5 text-xl text-charcoal placeholder:text-gray-600" />
              <div className="grid grid-cols-[1fr_1.2fr] gap-3">
                <input aria-label="Código postal" placeholder="Código postal*" className="h-16 min-w-0 bg-white px-5 text-xl text-charcoal placeholder:text-gray-600" />
                <Link href="/contacto" className="flex h-16 items-center justify-center bg-brand-wine px-3 text-center text-sm font-bold uppercase tracking-wide text-white">Únete a nosotros</Link>
              </div>
            </div>
            <p className="mt-4 text-sm italic leading-6 text-white/95">Comparte tus prioridades y recibe información de la campaña. Al continuar aceptas nuestra política de privacidad.</p>
          </div>
        </div>
      </div>

      <div className="container-max relative z-10 hidden flex-1 grid-cols-1 lg:grid lg:grid-cols-2">
        <div className="relative order-1 flex items-end justify-center pt-12 lg:h-full lg:items-end lg:justify-start lg:pt-0">
          <div className="relative h-72 w-56 sm:h-96 sm:w-72 lg:h-full lg:w-full lg:max-h-[720px]">
            <Image
              src={luisPlanomedio}
              alt="Luis Fernando Balladares Villavicencio, candidato a la Alcaldía de Zamora"
              fill
              sizes="(min-width: 1024px) 45vw, 60vw"
              className="object-contain object-bottom lg:object-left-bottom"
              priority
            />
          </div>
        </div>

        <div className="order-2 flex flex-col items-start justify-center gap-6 py-12 lg:py-16">
          <Image src={logoLuchoBalladares} alt="" aria-hidden="true" className="h-auto w-48 sm:w-64" />

          <h1 className="font-display text-5xl uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
            Yo lucho
            <br />
            por Zamora
          </h1>

          <p className="max-w-xl text-lg leading-7 text-white/90 sm:text-xl">
            Una gestión cercana, ordenada y con proyectos que se puedan ver en cada barrio y
            parroquia.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/propuestas"
              className="flex min-h-11 items-center justify-center rounded-md bg-white px-6 text-base font-medium text-brand-wine hover:bg-off-white"
            >
              Conoce el proyecto
            </Link>
            <Link
              href="/contacto"
              className="flex min-h-11 items-center justify-center rounded-md border border-white/50 px-6 text-base font-medium text-white hover:border-white"
            >
              Súmate a la campaña
            </Link>
          </div>

          <p className="max-w-lg text-xs leading-5 text-white/65">
            Luis Fernando Balladares · candidato a la Alcaldía del cantón Zamora · Fuerza
            Democrática, listas 2-4-12-21.
          </p>
        </div>
      </div>

      <div className="relative z-20">
        <HeroNav />
      </div>
    </section>
  );
}
