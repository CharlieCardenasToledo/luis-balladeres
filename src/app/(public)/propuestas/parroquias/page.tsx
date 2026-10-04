import type { Metadata } from "next";
import { ProposalDetail } from "@/components/proposals/ProposalDetail";

export const metadata: Metadata = {
  title: "Parroquias",
  description: "Atención diferenciada para cada parroquia del cantón Zamora.",
};

export default function Page() {
  return (
    <ProposalDetail
      title="Parroquias"
      content="Cada parroquia tiene una realidad distinta. La gestión se enfocará en atender las necesidades específicas de cada una, con prioridades decididas junto a su gente."
      sources={[{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }]}
      related={["Presupuesto participativo territorial","Agenda cantonal de cultura e identidad"]}
    />
  );
}
