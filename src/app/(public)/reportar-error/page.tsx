import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  alternates: { canonical: "/reportar-error" },
  title: "Reportar un error",
  description: "Avísanos si encuentras un dato incorrecto o desactualizado en el sitio.",
};

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Reportar un error</h1>
      <p className="mt-4 text-lg leading-8 text-charcoal">
        Si encuentras un dato incorrecto o desactualizado, escríbenos en el grupo de WhatsApp de la
        campaña: cuéntanos en qué página está y qué debería decir.
      </p>
      <WhatsAppButton className="mt-8" label="Escribir en el grupo de WhatsApp" />
    </div>
  );
}
