import type { Metadata } from "next";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug,
    description: `[Contenido pendiente] Evento ${slug}.`,
  };
}

export default async function EventoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <article className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">{slug}</h1>
      <p className="mt-4">
        <PlaceholderNotice />
      </p>
    </article>
  );
}
