import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SourceNote } from "@/components/ui/SourceNote";
import { TERRITORIES, getTerritory } from "@/lib/territories";

export function generateStaticParams() {
  return TERRITORIES.map((t) => ({ parroquia: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ parroquia: string }>;
}): Promise<Metadata> {
  const { parroquia } = await params;
  const territory = getTerritory(parroquia);
  return {
    title: territory?.name ?? parroquia,
    description: territory
      ? `Parroquia ${territory.type} de Zamora: ${territory.name}.`
      : "Parroquia no encontrada.",
  };
}

export default async function ParroquiaPage({
  params,
}: {
  params: Promise<{ parroquia: string }>;
}) {
  const { parroquia } = await params;
  const territory = getTerritory(parroquia);

  if (!territory) {
    notFound();
  }

  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">{territory.name}</h1>
      <p className="mt-1 text-sm uppercase tracking-wide text-gray-600">Parroquia {territory.type}</p>

      <p className="mt-6 text-charcoal">{territory.context}</p>
      <SourceNote status="Contexto oficial — no es propuesta del candidato" sources={territory.sources} />

      <div className="mt-6 rounded-md border border-dashed border-gray-300 bg-gray-100 px-4 py-3 text-sm text-gray-600">
        <p className="font-medium text-black">Propuestas específicas de Balladares para {territory.name}</p>
        <p className="mt-1">
          No encontradas. Ver la declaración general sobre atención diferenciada por parroquia en{" "}
          <Link href="/propuestas/parroquias" className="underline">
            /propuestas/parroquias
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
