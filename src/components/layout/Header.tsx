import Link from "next/link";
import { MobileNav } from "./MobileNav";

export const NAV_ITEMS = [
  { href: "/", label: "Inicio" },
  { href: "/luis", label: "Luis" },
  { href: "/propuestas", label: "Propuestas" },
  { href: "/territorio", label: "Zamora" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contacto", label: "Contacto" },
] as const;

/**
 * Header público. Server Component: la navegación es estática,
 * solo el menú móvil necesita interacción (ver MobileNav).
 * Máximo 6 ítems en el menú principal (Ley de Hick, sección 6 del plan).
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-300 bg-off-white/95 backdrop-blur">
      <div className="container-max flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg tracking-tight text-black"
        >
          {/* Logo placeholder: pendiente logo oficial en SVG (sección 64 del plan) */}
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-sm bg-brand-orange text-white"
          >
            LB
          </span>
          <span className="sr-only">Luis Balladares — Alcaldía de Zamora</span>
          <span aria-hidden="true">Luis Balladares</span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-charcoal underline-offset-4 hover:text-brand-orange hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav items={NAV_ITEMS} />
      </div>
    </header>
  );
}
