import type { Metadata } from "next";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = {
  title: "Plan de trabajo",
  description: "[Contenido pendiente] Plan de trabajo.",
};

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Plan de trabajo</h1>
      <p className="mt-4">
        <PlaceholderNotice />
      </p>
      <p className="mt-2 text-sm text-gray-600">
        Pendiente: Plan de Trabajo presentado al CNE en PDF (ver sección 64 del plan).
      </p>
    </div>
  );
}
