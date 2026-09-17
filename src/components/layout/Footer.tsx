import Link from "next/link";

const LEGAL_LINKS = [
  { href: "/privacidad", label: "Privacidad" },
  { href: "/accesibilidad", label: "Accesibilidad" },
  { href: "/transparencia", label: "Transparencia" },
];

/**
 * Footer legal. Server Component estático.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-300 bg-white">
      <div className="container-max flex flex-col gap-6 py-12 text-sm text-gray-600 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-base text-black">Luis Balladares</p>
          <p className="mt-2 max-w-sm">
            Candidato a la Alcaldía del cantón Zamora por la alianza Fuerza Democrática, listas
            2-4-12-21. Responsable legal y financiero del sitio: pendiente de confirmación — ver
            /transparencia.
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

      <div className="border-t border-gray-100">
        <div className="container-max flex flex-col gap-2 py-4 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Luis Balladares. [Contenido pendiente: aviso legal electoral y datos de
            contacto autorizados].
          </p>
          <p>
            Desarrollado por{" "}
            <a
              href="https://charliecardenastoledo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              Charlie Cárdenas Toledo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
