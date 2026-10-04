import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SourceNote } from "@/components/ui/SourceNote";
import { ALL_PROPOSALS } from "@/lib/plan-trabajo";
import { getProposalTopic } from "@/lib/proposal-topics";

type Source = { label: string; url?: string };

export function ProposalDetail({
  slug,
  content,
  sources,
  related = [],
  extra,
}: {
  slug: string;
  content: string;
  sources: Source[];
  /** Títulos exactos de propuestas del plan de trabajo relacionadas con este tema. */
  related?: string[];
  extra?: ReactNode;
}) {
  const topic = getProposalTopic(slug);
  const relatedProposals = related.map((t) => {
    const proposal = ALL_PROPOSALS.find((p) => p.title === t);
    if (!proposal) throw new Error(`Propuesta no encontrada en el plan de trabajo: ${t}`);
    return proposal;
  });

  return (
    <>
      <section className="relative overflow-hidden bg-brand-wine text-white">
        <Image src={topic.photo.src} alt="" fill priority sizes="100vw" className="object-cover opacity-35" />
        <div className="container-editorial relative py-16 sm:py-20">
          <Link href="/propuestas" className="text-sm font-medium uppercase tracking-[0.18em] text-white/80 hover:text-white">
            ← Propuestas
          </Link>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl">{topic.title}</h1>
        </div>
      </section>

      <div className="container-editorial py-12">
        <p className="text-lg leading-8 text-charcoal">{content}</p>
        <SourceNote sources={sources} />

        {extra}

        {relatedProposals.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display text-2xl text-black">Qué haremos</h2>
            <ol className="mt-5 flex flex-col gap-4">
              {relatedProposals.map((proposal, i) => (
                <li key={proposal.title} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-magenta font-display text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-medium text-black">{proposal.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-brand-wine">{proposal.message}</p>
                    <p className="mt-2 text-sm leading-6 text-gray-700">
                      <strong className="text-black">Cómo lo haremos:</strong> {proposal.execution}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/plan-de-trabajo"
            className="inline-flex min-h-11 items-center rounded-md bg-brand-magenta px-5 font-medium text-white hover:bg-brand-wine"
          >
            Ver el plan de trabajo completo
          </Link>
          <Link
            href="/propuestas"
            className="inline-flex min-h-11 items-center rounded-md border border-gray-300 px-5 font-medium text-black hover:border-brand-magenta"
          >
            Otras propuestas
          </Link>
        </div>
      </div>
    </>
  );
}
