import type { Metadata } from "next";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CAMPAIGN_PHOTOS_SOURCE, PHOTOS } from "@/lib/campaign-photos";

export const metadata: Metadata = {
  alternates: { canonical: "/contacto" },
  title: "Contacto",
  description: "Únete al grupo de WhatsApp de la campaña de Lucho Balladares y comparte lo que necesita tu barrio o parroquia.",
};

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Súmate a la campaña</h1>

      <p className="mt-4 text-lg leading-8 text-charcoal">
        Únete al grupo de WhatsApp de la campaña para recibir información, conocer las actividades
        y contarnos qué necesita tu barrio o parroquia.
      </p>

      <WhatsAppButton className="mt-8" />

      <p className="mt-6 text-charcoal">
        También puedes seguir la campaña en{" "}
        <a
          href={CAMPAIGN_PHOTOS_SOURCE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-magenta underline underline-offset-4"
        >
          Facebook
        </a>
        .
      </p>

      <div className="mt-12">
        <PhotoGrid columns={3} photos={[PHOTOS.encuentro63, PHOTOS.recorrido12, PHOTOS.alianza41]} />
      </div>
    </div>
  );
}
