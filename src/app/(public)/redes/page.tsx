import type { Metadata } from "next";

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

      <p className="mt-8 text-sm text-gray-600">
        Hashtags de campaña:{" "}
        #YoLuchoPorZamora, #LuchoBalladares, #Zamora, #AlianzaFuerza.
      </p>
    </div>
  );
}
