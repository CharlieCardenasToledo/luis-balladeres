import type { Metadata } from "next";
import { ProposalDetail } from "@/components/proposals/ProposalDetail";

export const metadata: Metadata = {
  title: "Agua y saneamiento",
  description: "Fortalecimiento del sistema de agua potable y del alcantarillado, declarado por Luis Balladares.",
};

export default function Page() {
  return (
    <ProposalDetail
      title="Agua y saneamiento"
      content="Balladares mencionó entre las áreas prioritarias el fortalecimiento del sistema de agua potable y del alcantarillado."
      sourceStatus="Verificado — declaración recogida por medio"
      sources={[{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }]}
      notFoundItems={[
        "obras concretas",
        "barrios beneficiarios",
        "parroquias priorizadas",
        "porcentaje de cobertura objetivo",
        "fuentes de agua / sistemas o planta específicos",
        "monto presupuestado y fuente de financiamiento",
        "cronograma, metas anuales, indicadores",
        "estudios técnicos",
      ]}
    />
  );
}
