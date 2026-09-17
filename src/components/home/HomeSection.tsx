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
}: {
  title: string;
  cta?: ReactNode;
  children: ReactNode;
  /** Limita el ancho a 760px para contenido de lectura larga. */
  editorial?: boolean;
}) {
  return (
    <section className="border-t border-gray-100 py-16">
      <div className={editorial ? "container-editorial" : "container-max"}>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-2xl text-black sm:text-3xl">{title}</h2>
          <PlaceholderNotice />
        </div>
        {children}
        {cta}
      </div>
    </section>
  );
}
