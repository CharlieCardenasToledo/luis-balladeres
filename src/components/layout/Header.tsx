"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BrandMark } from "./BrandMark";
import { NavLinks } from "./NavLinks";
import { MobileNav } from "./MobileNav";

/**
 * Header fijo (position: fixed) que permanece oculto mientras el visitante
 * está en la parte superior del Hero de la homepage (donde ya existe la
 * navegación de HeroNav) y se revela cuando esa barra inferior alcanza
 * el borde superior del viewport.
 * En páginas sin Hero (sin `id="hero-bottom-sentinel"`) no hay barra
 * alternativa, así que el header queda visible desde el inicio
 * (comportamiento sticky normal).
 *
 * Se mide la posición real de la barra en cada scroll para que el relevo
 * funcione también cuando el contenido del Hero supera el alto de un
 * viewport pequeño. Mientras la barra sube con el Hero no hay duplicado;
 * al llegar a `top: 0`, la cabecera fija ocupa exactamente su lugar.
 *
 * `<main>` reserva `pt-16` globalmente para compensar este header fijo;
 * el Hero cancela ese espacio con un margen negativo para ocupar 100svh
 * reales (ver Hero.tsx).
 */
export function Header() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(pathname !== "/");

  useEffect(() => {
    const heroNav = document.getElementById("hero-bottom-sentinel");

    if (!heroNav) {
      const frameId = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(frameId);
    }

    const updateVisibility = () => {
      setVisible(heroNav.getBoundingClientRect().top <= 0);
    };

    const frameId = window.requestAnimationFrame(updateVisibility);
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-brand-magenta/95 text-white backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      inert={!visible}
    >
      <div className="container-max flex h-16 items-center justify-between">
        <BrandMark chip={false} />

        <nav aria-label="Navegación principal" className="hidden md:block">
          <NavLinks linkClassName="text-sm font-medium text-white underline-offset-4 hover:text-white hover:underline" />
        </nav>

        <MobileNav buttonClassName="border-white/40 text-white" />
      </div>
    </header>
  );
}
