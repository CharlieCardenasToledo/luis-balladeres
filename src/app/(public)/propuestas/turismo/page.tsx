import type { Metadata } from "next";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = {
  title: "Turismo",
  description: "[Contenido pendiente] Turismo.",
};

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Turismo</h1>
      <p className="mt-4">
        <PlaceholderNotice />
      </p>
    </div>
  );
}
