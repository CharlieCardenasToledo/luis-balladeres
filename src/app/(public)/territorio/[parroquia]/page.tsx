import type { Metadata } from "next";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ parroquia: string }>;
}): Promise<Metadata> {
  const { parroquia } = await params;
  return {
    title: parroquia,
    description: `[Contenido pendiente] Página de la parroquia ${parroquia}.`,
  };
}

export default async function ParroquiaPage({
  params,
}: {
  params: Promise<{ parroquia: string }>;
}) {
  const { parroquia } = await params;

  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">{parroquia}</h1>
      <p className="mt-4">
        <PlaceholderNotice />
      </p>
      <p className="mt-2 text-sm text-gray-600">
        Descripción, fotografías, necesidades documentadas, propuestas relacionadas, agenda y
        publicaciones relacionadas — pendientes.
      </p>
    </div>
  );
}
