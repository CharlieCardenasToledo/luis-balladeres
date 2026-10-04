import type { Metadata } from "next";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { CAMPAIGN_PHOTOS_SOURCE, PHOTOS } from "@/lib/campaign-photos";

export const metadata: Metadata = {
  title: "Redes",
  description: "Canales de campaña de Luis Balladares.",
};

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Redes</h1>

      <p className="mt-4 text-lg leading-8 text-charcoal">
        Sigue la conversación de campaña en Facebook como <strong>LuchoBalladaresV</strong> y
        comparte el proyecto con tu comunidad.
      </p>

      <a
        href={CAMPAIGN_PHOTOS_SOURCE.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex min-h-11 items-center rounded-md bg-brand-magenta px-5 font-medium text-white hover:bg-brand-wine"
      >
        Ir a Facebook →
      </a>

      <h2 className="mt-12 font-display text-2xl text-black">Lo último de la campaña</h2>
      <div className="mt-6">
        <PhotoGrid
          columns={3}
          photos={[
            PHOTOS.recorrido20,
            PHOTOS.dialogo29,
            PHOTOS.encuentro62,
            PHOTOS.recorrido11,
            PHOTOS.recorrido43,
            PHOTOS.encuentro64,
          ]}
        />
      </div>

      <p className="mt-8 text-sm text-gray-600">
        Hashtags de campaña:{" "}
        #YoLuchoPorZamora, #LuchoBalladares, #Zamora, #AlianzaFuerza.
      </p>
    </div>
  );
}
