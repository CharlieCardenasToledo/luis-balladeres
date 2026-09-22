import type { Metadata } from "next";
import { ReportErrorForm } from "@/components/forms/ReportErrorForm";

export const metadata: Metadata = {
  title: "Reportar un error",
  description: "Ayúdanos a corregir un error o dato desactualizado en el sitio.",
};

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Reportar un error</h1>

      <p className="mt-4 text-charcoal">
        Si encuentras un dato incorrecto, desactualizado o mal atribuido, cuéntanos dónde está y
        qué debería decir.
      </p>

      <div className="mt-8">
        <ReportErrorForm />
      </div>
    </div>
  );
}
