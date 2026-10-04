import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SourceNote } from "@/components/ui/SourceNote";
import { TERRITORIES, getTerritory } from "@/lib/territories";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { CAMPAIGN_PHOTOS_SOURCE, TERRITORY_PHOTOS } from "@/lib/campaign-photos";
import { WHATSAPP_GROUP_URL } from "@/lib/site";

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
    alternates: { canonical: `/territorio/${parroquia}` },
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

  const photos = TERRITORY_PHOTOS[territory.slug];

  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">{territory.name}</h1>
      <p className="mt-1 text-sm uppercase tracking-wide text-gray-600">Parroquia {territory.type}</p>

      <p className="mt-6 text-charcoal">{territory.context}</p>
      <SourceNote sources={territory.sources} />

      {photos && (
        <section className="mt-8">
          <h2 className="font-display text-xl text-black">La campaña en {territory.name}</h2>
          <div className="mt-4">
            <PhotoGrid columns={photos.length > 1 ? 3 : 2} photos={photos} />
          </div>
          <SourceNote sources={[CAMPAIGN_PHOTOS_SOURCE]} />
        </section>
      )}

      <div className="mt-8 rounded-md border border-brand-magenta/30 bg-brand-magenta/5 p-5">
        <p className="font-medium text-black">Prioridades decididas con su gente</p>
        <p className="mt-1 text-sm leading-6 text-gray-700">
          Cada parroquia tiene una realidad distinta. Las prioridades para {territory.name} se
          definirán junto a sus habitantes, con presupuesto participativo y seguimiento público.
        </p>
        <div className="mt-3 flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/propuestas/parroquias" className="text-brand-magenta underline-offset-4 hover:underline">
            Ver la propuesta para las parroquias →
          </Link>
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-magenta underline-offset-4 hover:underline"
          >
            Cuéntanos qué necesita tu parroquia →
          </a>
        </div>
      </div>
    </div>
  );
}
