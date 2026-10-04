import type { ReactNode } from "react";
import Link from "next/link";
import { SourceNote } from "@/components/ui/SourceNote";
import { AXES } from "@/app/(public)/plan-de-trabajo/page";

type Source = { label: string; url?: string };

const ALL_PROPOSALS = AXES.flatMap((axis) => axis.proposals);

export function ProposalDetail({
  title,
  content,
  sources,
  related = [],
  extra,
}: {
  title: string;
  content: string;
  sources: Source[];
  /** Títulos exactos de propuestas del plan de trabajo relacionadas con este tema. */
  related?: string[];
  extra?: ReactNode;
}) {
  const relatedProposals = related.map((t) => {
    const proposal = ALL_PROPOSALS.find((p) => p.title === t);
    if (!proposal) throw new Error(`Propuesta no encontrada en el plan de trabajo: ${t}`);
    return proposal;
  });

  return (
    <div className="container-editorial py-16">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-magenta">Propuestas</p>
      <h1 className="mt-3 font-display text-3xl text-black sm:text-4xl">{title}</h1>

      <p className="mt-4 text-lg leading-8 text-charcoal">{content}</p>
      <SourceNote sources={sources} />

      {extra}

      {relatedProposals.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-2xl text-black">En el plan de trabajo</h2>
          <div className="mt-4 grid gap-4">
            {relatedProposals.map((proposal) => (
              <article key={proposal.title} className="rounded-md border border-gray-200 bg-off-white p-4">
                <h3 className="font-medium text-black">{proposal.title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-wine">{proposal.message}</p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  <strong className="text-black">Cómo lo haremos:</strong> {proposal.execution}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      <Link
        href="/propuestas"
        className="mt-10 inline-block font-medium text-brand-magenta underline-offset-4 hover:underline"
      >
        ← Ver todas las propuestas
      </Link>
    </div>
  );
}
