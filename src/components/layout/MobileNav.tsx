"use client";

import { useState, useId } from "react";
import Link from "next/link";

type NavItem = { href: string; label: string };

/**
 * Menú hamburguesa móvil. Client Component: requiere estado e interacción.
 * Accesible: botón con aria-expanded/aria-controls, cierre con Escape,
 * foco visible heredado de globals.css, altura de control >= 44px (Ley de Fitts).
 */
export function MobileNav({ items }: { items: readonly NavItem[] }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
        className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 text-black"
      >
        <span aria-hidden="true" className="text-xl leading-none">
          {open ? "✕" : "☰"}
        </span>
      </button>

      {open && (
        <nav
          id={menuId}
          aria-label="Navegación móvil"
          className="absolute inset-x-0 top-16 border-b border-gray-300 bg-off-white shadow-sm"
        >
          <ul className="container-max flex flex-col py-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center text-base font-medium text-charcoal hover:text-brand-magenta"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
