import type { Metadata } from "next";
import { ProposalDetail } from "@/components/proposals/ProposalDetail";

export const metadata: Metadata = {
  title: "Salud",
  description: "Articulación institucional y gestión de un nuevo hospital para Zamora, declarada por Luis Balladares.",
};

export default function Page() {
  return (
    <ProposalDetail
      title="Salud"
      content="Balladares manifestó que la salud no es competencia directa del municipio, pero planteó promover el diálogo interinstitucional, gestionar recursos para fortalecer el sistema local de salud y dar atención particular al tema de un nuevo hospital para Zamora."
      sourceStatus="Verificado — declaración recogida por medio"
      sources={[{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }]}
      notFoundItems={[
        "ubicación del hospital",
        "monto y responsable de construcción",
        "cronograma",
        "cartera de servicios y número de camas",
        "financiamiento",
        "programa municipal de salud específico",
      ]}
    />
  );
}
