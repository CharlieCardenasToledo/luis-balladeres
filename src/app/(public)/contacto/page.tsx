import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escribe al equipo de campaña de Luis Balladares.",
};

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Contacto</h1>

      <p className="mt-4 text-charcoal">
        No se verificó un correo, WhatsApp, teléfono o dirección de sede oficiales de campaña. El
        identificador de Facebook difundido en material de campaña es{" "}
        <strong>LuchoBalladaresV</strong> (no se pudo confirmar de forma estable la URL exacta de
        la página). Mientras tanto, puedes escribir usando el formulario:
      </p>

      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
