import type { Metadata } from "next";
import { ProposalDetail } from "@/components/proposals/ProposalDetail";

export const metadata: Metadata = {
  title: "Educación",
  description: "Mejora de infraestructura educativa, declarada por Luis Balladares.",
};

export default function Page() {
  return (
    <ProposalDetail
      title="Educación"
      content="Balladares mencionó la infraestructura educativa entre las áreas prioritarias."
      sourceStatus="Verificado — declaración recogida por medio"
      sources={[{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }]}
      notFoundItems={[
        "establecimientos y obras específicas",
        "competencias municipales planteadas",
        "convenios con el Ministerio de Educación",
        "becas y tecnología",
        "transporte escolar",
        "programas, presupuesto y cronograma",
      ]}
    />
  );
}
