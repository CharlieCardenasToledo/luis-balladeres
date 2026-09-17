import type { Metadata } from "next";
import { ProposalDetail } from "@/components/proposals/ProposalDetail";

export const metadata: Metadata = {
  title: "Parroquias",
  description: "Atención diferenciada según las necesidades de cada parroquia, declarada por Luis Balladares.",
};

export default function Page() {
  return (
    <ProposalDetail
      title="Parroquias"
      content="Balladares declaró que cada parroquia tiene realidades distintas y que su gestión se enfocaría en atender necesidades específicas de cada sector."
      sourceStatus="Verificado — declaración recogida por medio"
      sources={[{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }]}
      notFoundItems={[
        "propuestas individualizadas para Zamora",
        "propuestas individualizadas para El Limón",
        "propuestas individualizadas para Cumbaratza",
        "propuestas individualizadas para Guadalupe",
        "propuestas individualizadas para Imbana / La Victoria de Imbana",
        "propuestas individualizadas para Sabanilla",
        "propuestas individualizadas para San Carlos de las Minas",
        "propuestas individualizadas para Timbara",
      ]}
    />
  );
}
