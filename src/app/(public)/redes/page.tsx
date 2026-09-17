import type { Metadata } from "next";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = {
  title: "Redes",
  description: "[Contenido pendiente] Redes.",
};

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Redes</h1>
      <p className="mt-4">
        <PlaceholderNotice />
      </p>
    </div>
  );
}
