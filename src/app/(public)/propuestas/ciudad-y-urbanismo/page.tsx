import type { Metadata } from "next";
import { ProposalDetail } from "@/components/proposals/ProposalDetail";

export const metadata: Metadata = {
  title: "Ciudad y urbanismo",
  description: "Regeneración urbana, declarada por Luis Balladares entre sus prioridades.",
};

export default function Page() {
  return (
    <ProposalDetail
      title="Ciudad y urbanismo"
      content="Balladares señaló la regeneración urbana como una de las áreas que requieren atención prioritaria."
      sourceStatus="Verificado — declaración recogida por medio"
      sources={[{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }]}
      notFoundItems={[
        "calles, barrios o parques específicos",
        "veredas / aceras",
        "soterramiento de cableado",
        "iluminación y mobiliario urbano",
        "ciclovías y estacionamientos",
        "presupuesto y fases",
        "metas cuantitativas",
      ]}
    />
  );
}
