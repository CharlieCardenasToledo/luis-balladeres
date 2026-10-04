import type { Metadata } from "next";
import { ProposalDetail } from "@/components/proposals/ProposalDetail";

export const metadata: Metadata = {
  title: "Ciudad y urbanismo",
  description: "Regeneración urbana, espacios públicos y movilidad segura para Zamora.",
};

export default function Page() {
  return (
    <ProposalDetail
      title="Ciudad y urbanismo"
      content="Una ciudad que funciona: regeneración urbana por etapas, espacios públicos recuperados y calles más seguras para peatones y conductores."
      sources={[{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }]}
      related={["Programa Integral de Regeneración Urbana","Recuperación y activación de espacios públicos","Plan cantonal de movilidad y seguridad vial"]}
    />
  );
}
