import Link from "next/link";

const LEGAL_LINKS = [
  { href: "/privacidad", label: "Privacidad" },
  { href: "/accesibilidad", label: "Accesibilidad" },
  { href: "/transparencia", label: "Transparencia" },
  { href: "/reportar-error", label: "Reportar un error" },
];

/**
 * Footer legal. Server Component estático.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/15 bg-brand-wine text-white">
      <div className="container-max flex flex-col gap-6 py-12 text-sm text-white/70 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-base text-white">Luis Balladares</p>
          <p className="mt-2 max-w-sm">
            Candidato a la Alcaldía del cantón Zamora por la alianza Fuerza Democrática, listas
            2-4-12-21.
          </p>
        </div>

        <nav aria-label="Enlaces legales">
          <ul className="flex flex-col gap-2 md:flex-row md:gap-6">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="underline-offset-4 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/15">
        <div className="container-max flex flex-col gap-2 py-4 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Luis Balladares.
          </p>
          <p className="flex items-center gap-1">
            Desarrollado por
            <a
              href="https://nekateklabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- SVG pequeño de marca externa */}
              <img src="/brand/nekatek-isotipo-blanco.svg" alt="" width={22} height={22} className="h-[22px] w-[22px]" />
              Nekatek Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
