import type { Metadata } from "next";
import { ProposalDetail } from "@/components/proposals/ProposalDetail";

export const metadata: Metadata = {
  title: "Agua y saneamiento",
  description: "Agua potable, alcantarillado y saneamiento para Zamora y sus parroquias.",
};

export default function Page() {
  return (
    <ProposalDetail
      title="Agua y saneamiento"
      content="El agua es la primera prioridad: fortalecer el sistema de agua potable y el alcantarillado del cantón, con estudios, etapas claras y prioridades públicas."
      sources={[{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }]}
      related={["Plan Maestro Integral de Agua Potable, Alcantarillado y Saneamiento","Protección de fuentes de agua y microcuencas","Gestión integral de residuos y economía circular"]}
    />
  );
}
