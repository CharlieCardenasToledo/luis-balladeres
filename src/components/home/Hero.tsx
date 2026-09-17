import Link from "next/link";

/**
 * Hero de homepage (plan, sección 8.1).
 * - min-height 100svh
 * - headline en HTML real (no imagen rasterizada)
 * - dos CTAs, sin autoplay, sin animación permanente
 */
export function Hero() {
  return (
    <section
      aria-label="Presentación"
      className="flex min-h-[100svh] flex-col justify-end bg-black text-white"
    >
      <div className="container-max flex flex-col gap-8 py-16 md:py-24">
        <div>
          {/* Retrato de Luis: placeholder. Pendiente retrato original en alta resolución
              con fondo transparente (sección 32 del plan). */}
          <div
            aria-hidden="true"
            className="mb-8 flex h-40 w-40 items-center justify-center rounded-full border border-white/30 text-xs text-white/60"
          >
            Retrato
            <br />
            pendiente
          </div>

          <h1 className="font-display text-5xl uppercase leading-[0.95] tracking-tight text-brand-magenta sm:text-7xl md:text-8xl">
            Yo lucho
            <br />
            por Zamora
          </h1>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/trayectoria"
            className="flex min-h-11 items-center justify-center rounded-md bg-brand-magenta px-6 text-base font-medium text-white hover:bg-brand-wine"
          >
            Conocer trayectoria
          </Link>
          <Link
            href="/propuestas"
            className="flex min-h-11 items-center justify-center rounded-md border border-white/40 px-6 text-base font-medium text-white hover:border-white"
          >
            Ver propuestas
          </Link>
        </div>

        <p aria-hidden="true" className="text-sm text-white/60">
          ↓ Explorar
        </p>
      </div>
    </section>
  );
}
