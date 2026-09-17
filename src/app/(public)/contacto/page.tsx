import type { Metadata } from "next";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escribe al equipo de campaña de Luis Balladares.",
};

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Contacto</h1>
      <p className="mt-4">
        <PlaceholderNotice label="Datos de contacto directo pendientes" />
      </p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
