import { BrandMark } from "@/components/layout/BrandMark";
import { NavLinks } from "@/components/layout/NavLinks";
import { MobileNav } from "@/components/layout/MobileNav";

/**
 * Barra de navegación al pie del Hero. Vive en el flujo normal del
 * documento (no fija): al hacer scroll desaparece con el resto del Hero.
 * `id="hero-bottom-sentinel"` es lo que observa Header.tsx para decidir
 * cuándo revelarse como header fijo arriba.
 */
export function HeroNav() {
  return (
    <div id="hero-bottom-sentinel" className="border-t border-white/20 bg-brand-magenta">
      <div className="container-max flex h-16 items-center justify-between">
        <BrandMark chip={false} imageClassName="h-7 w-auto sm:h-8" />

        <nav aria-label="Navegación principal" className="hidden md:block">
          <NavLinks linkClassName="text-sm font-medium text-white underline-offset-4 hover:text-white hover:underline" />
        </nav>

        <MobileNav buttonClassName="border-white/40 text-white" />
      </div>
    </div>
  );
}
