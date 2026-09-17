import type { ReactNode } from "react";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

/**
 * Envoltorio genérico para secciones de homepage con encabezado consistente
 * (principio Gestalt de similitud) y aviso de contenido pendiente.
 */
export function HomeSection({
  title,
  cta,
  children,
  editorial = false,
  pending = true,
  pendingLabel,
  surface = "light",
}: {
  title: string;
  cta?: ReactNode;
  children: ReactNode;
  /** Limita el ancho a 760px para contenido de lectura larga. */
  editorial?: boolean;
  /** Muestra el aviso de contenido pendiente. Desactivar cuando la sección ya tiene datos verificados con fuente. */
  pending?: boolean;
  pendingLabel?: string;
  /** El color responde a la función narrativa de la sección, no a una alternancia automática. */
  surface?: "light" | "magenta" | "wine";
}) {
  const surfaceClass = {
    light: "border-gray-300/60 bg-off-white text-charcoal",
    magenta: "border-white/15 bg-brand-magenta text-white",
    wine: "border-white/15 bg-brand-wine text-white",
  }[surface];

  return (
    <section className={`border-t py-16 sm:py-20 ${surfaceClass}`}>
      <div className={editorial ? "container-editorial" : "container-max"}>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className={`font-display text-2xl sm:text-3xl ${surface === "light" ? "text-black" : "text-white"}`}>
            {title}
          </h2>
          {pending && <PlaceholderNotice label={pendingLabel} />}
        </div>
        {children}
        {cta}
      </div>
    </section>
  );
}
