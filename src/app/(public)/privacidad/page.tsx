import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/privacidad" },
  title: "Privacidad",
  description: "Información sobre privacidad del sitio de campaña de Lucho Balladares.",
};

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Privacidad</h1>
      <p className="mt-4 text-charcoal">Este sitio no solicita ni almacena datos personales de sus visitantes.</p>
      <p className="mt-4 text-charcoal">
        La comunicación con la campaña se realiza a través del grupo de WhatsApp y de la página
        oficial de Facebook; en esos canales se aplican las políticas de privacidad de cada plataforma.
      </p>
      <p className="mt-4 text-charcoal">No compartas información sensible que no sea necesaria para tu consulta.</p>
    </div>
  );
}
