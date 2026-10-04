import type { Axis } from "@/app/(public)/plan-de-trabajo/page";

export function ProposalMatrix({ axes, twoColumns = false }: { axes: Axis[]; twoColumns?: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      {axes.map((axis) => (
        <details key={axis.title} className="group rounded-lg border border-gray-300 bg-white p-5 open:border-brand-magenta">
          <summary className="cursor-pointer list-none pr-8 font-display text-xl text-black marker:hidden">
            <span className="group-open:text-brand-magenta">{axis.title}</span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-700">{axis.objective}</p>
          <div className={`mt-5 grid gap-4 ${twoColumns ? "lg:grid-cols-2" : ""}`}>
            {axis.proposals.map((proposal) => (
              <article key={proposal.title} className="rounded-md border border-gray-200 bg-off-white p-4">
                <h3 className="font-medium text-black">{proposal.title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-wine">{proposal.message}</p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  <strong className="text-black">Cómo lo haremos:</strong> {proposal.execution}
                </p>
              </article>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
