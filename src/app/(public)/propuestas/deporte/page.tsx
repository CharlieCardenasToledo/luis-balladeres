import type { Metadata } from "next";
import { ProposalDetail } from "@/components/proposals/ProposalDetail";

export const metadata: Metadata = {
  alternates: { canonical: "/propuestas/deporte" },
  title: "Deporte",
  description: "Escenarios deportivos seguros y espacios para jóvenes y familias.",
};

export default function Page() {
  return (
    <ProposalDetail
      slug="deporte"
      content="Barrios con vida: recuperar y mantener los escenarios deportivos existentes y crear nuevos espacios para jóvenes y familias."
      sources={[{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }]}
      related={["Plan de mantenimiento de escenarios deportivos","Parque de Deportes Extremos","Cancha reglamentaria de futsal"]}
    />
  );
}
