import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacidad",
  description: "Información sobre privacidad de los formularios del sitio.",
};

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Privacidad</h1>
      <p className="mt-4 text-charcoal">El formulario de contacto solicita únicamente los datos necesarios para responder a tu mensaje.</p>
      <p className="mt-4 text-charcoal">El registro de la página principal solicita tu nombre y número de teléfono, solo con tu consentimiento, para enviarte información y actualizaciones de la campaña.</p>
      <p className="mt-4 text-charcoal">La información se utiliza para gestionar la comunicación con la campaña y no se publica en este sitio.</p>
      <p className="mt-4 text-charcoal">No envíes información sensible que no sea necesaria para tu consulta.</p>
    </div>
  );
}
