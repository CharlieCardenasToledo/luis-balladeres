import type { Metadata } from "next";
import Link from "next/link";
import { NotFoundList } from "@/components/ui/SourceNote";

export const metadata: Metadata = {
  title: "Transparencia",
  description: "Identidad electoral y compromisos públicos de la candidatura de Luis Balladares.",
};

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Transparencia</h1>

      <h2 className="mt-8 font-display text-xl text-black">Identidad electoral</h2>
      <p className="mt-2 text-charcoal">
        Luis Fernando Balladares Villavicencio, candidato a la Alcaldía de Zamora por la alianza
        Fuerza Democrática, listas 2-4-12-21. La resolución de calificación fue reportada el 19 de
        agosto de 2026 y su notificación el 20 de agosto de 2026; el medio consultado señala
        ausencia de objeciones en el procedimiento correspondiente.
      </p>
      <h2 className="mt-8 font-display text-xl text-black">Trayectoria</h2>
      <p className="mt-2 text-charcoal">
        Conoce el detalle completo de la experiencia pública en{" "}
        <Link href="/trayectoria" className="underline">
          /trayectoria
        </Link>{" "}
        .
      </p>

      <NotFoundList
        title="No encontrado para transparencia"
        items={[
          "Plan de Trabajo oficial descargable",
          "resolución electoral original en PDF del CNE específica del candidato",
          "composición exacta de organizaciones de la alianza registrada",
          "responsable legal del sitio",
          "responsable financiero/electoral de la campaña",
          "reportes de ingresos/gastos de campaña",
          "contratos de pauta publicitaria",
          "registro de cambios del plan de trabajo",
        ]}
      />
    </div>
  );
}
