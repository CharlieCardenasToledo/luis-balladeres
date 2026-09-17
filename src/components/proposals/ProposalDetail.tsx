import type { ReactNode } from "react";
import { SourceNote, NotFoundList } from "@/components/ui/SourceNote";

type Source = { label: string; url?: string };

/**
 * Plantilla compartida para las páginas de detalle de propuesta
 * (plan, secciones 6-13). Cada categoría solo cuenta con una
 * declaración pública general; nunca se completan los detalles
 * faltantes con inferencias.
 */
export function ProposalDetail({
  title,
  content,
  sourceStatus,
  sources,
  notFoundItems,
  extra,
}: {
  title: string;
  content: string;
  sourceStatus: string;
  sources: Source[];
  notFoundItems: string[];
  extra?: ReactNode;
}) {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">{title}</h1>

      <p className="mt-4 text-charcoal">{content}</p>
      <SourceNote status={sourceStatus} sources={sources} />

      {extra}

      <NotFoundList items={notFoundItems} />
    </div>
  );
}
