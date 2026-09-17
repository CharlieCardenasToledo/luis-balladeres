import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { SourceNote, NotFoundList } from "@/components/ui/SourceNote";

export const metadata: Metadata = {
  title: "Transparencia",
  description: "Identidad electoral verificable de la candidatura de Luis Balladares y fuentes de las propuestas.",
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
      <SourceNote
        status="Verificado — medio"
        sources={[{ label: "InfoZamora, 21 de agosto de 2026", url: "https://infozamoraec.com/index.php/2026/08/21/junta-provincial-electoral-califica-candidatura-de-luis-fernando-balladares-para-la-alcaldia-de-zamora/" }]}
      />

      <h2 className="mt-8 font-display text-xl text-black">Trayectoria documentada</h2>
      <p className="mt-2 text-charcoal">
        Cada cargo público mencionado en este sitio enlaza a un documento oficial o a una nota de
        prensa identificable. Ver el detalle completo en{" "}
        <Link href="/trayectoria" className="underline">
          /trayectoria
        </Link>{" "}
        y en{" "}
        <Link href="/documentos" className="underline">
          /documentos
        </Link>
        .
      </p>

      <h2 className="mt-8 font-display text-xl text-black">Fuentes de las propuestas</h2>
      <p className="mt-2 text-charcoal">
        Cada propuesta publicada en{" "}
        <Link href="/propuestas" className="underline">
          /propuestas
        </Link>{" "}
        indica si proviene de una declaración pública recogida por un medio o de un documento
        oficial, junto con su fecha.
      </p>

      <h2 className="mt-8 font-display text-xl text-black">Responsable del sitio</h2>
      <p className="mt-2">
        <PlaceholderNotice label="Responsable legal y financiero de campaña pendiente de confirmación" />
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
