import type { Metadata } from "next";
import { ProposalDetail } from "@/components/proposals/ProposalDetail";

export const metadata: Metadata = {
  alternates: { canonical: "/propuestas/salud" },
  title: "Salud",
  description: "Articulación institucional y gestión de un nuevo hospital para Zamora.",
};

export default function Page() {
  return (
    <ProposalDetail
      slug="salud"
      content="La salud no es competencia directa del Municipio, pero sí su responsabilidad gestionar: promover el diálogo entre instituciones, buscar recursos para fortalecer el sistema local de salud e impulsar un nuevo hospital para Zamora."
      sources={[{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }]}
    />
  );
}
