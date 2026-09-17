"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/nav";

/**
 * Menú hamburguesa móvil. Client Component: requiere estado e interacción.
 * Accesible: botón con aria-expanded/aria-controls, cierre con Escape,
 * foco visible heredado de globals.css, altura de control >= 44px (Ley de Fitts).
 *
 * El wrapper es `relative` y el panel usa `top-full`, así funciona igual
 * dentro del header fijo (fondo claro) o dentro de la barra inferior del
 * Hero (fondo oscuro) sin depender de una posición fija en píxeles.
 */
export function MobileNav({ buttonClassName = "border-gray-300 text-black" }: { buttonClassName?: string }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
        className={`flex h-11 w-11 items-center justify-center rounded-md border ${buttonClassName}`}
      >
        <span aria-hidden="true" className="text-xl leading-none">
          {open ? "✕" : "☰"}
        </span>
      </button>

      {open && (
        <nav
          id={menuId}
          aria-label="Navegación móvil"
          className="absolute right-0 top-full z-10 mt-2 w-56 rounded-md border border-gray-300 bg-off-white shadow-md"
        >
          <ul className="flex flex-col p-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center px-2 text-base font-medium text-charcoal hover:text-brand-magenta"
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
