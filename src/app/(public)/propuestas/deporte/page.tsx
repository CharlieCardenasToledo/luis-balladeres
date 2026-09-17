import type { Metadata } from "next";
import { ProposalDetail } from "@/components/proposals/ProposalDetail";

export const metadata: Metadata = {
  title: "Deporte",
  description: "Fortalecimiento de espacios deportivos, declarado por Luis Balladares.",
};

export default function Page() {
  return (
    <ProposalDetail
      title="Deporte"
      content="Balladares mencionó los espacios deportivos entre las áreas que requieren impulso y atención."
      sourceStatus="Verificado — declaración recogida por medio"
      sources={[{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }]}
      notFoundItems={[
        "canchas o coliseos específicos",
        "escuelas deportivas y disciplinas",
        "programas infantiles/juveniles",
        "mantenimiento y presupuesto",
        "calendario y cobertura parroquial",
      ]}
    />
  );
}
