import type { Metadata } from "next";
import { ProposalDetail } from "@/components/proposals/ProposalDetail";

export const metadata: Metadata = {
  title: "Gestión municipal",
  description: "Coordinación entre Prefectura, Municipio y gobiernos parroquiales, declarada por Luis Balladares.",
};

export default function Page() {
  return (
    <ProposalDetail
      title="Gestión municipal"
      content="En el acto del 18 de agosto de 2026, Balladares planteó un modelo de trabajo conjunto entre Prefectura, municipios y gobiernos parroquiales, utilizando coordinación y convenios para ejecutar proyectos."
      sourceStatus="Verificado — declaración recogida por medios"
      sources={[
        { label: "InfoZamora, 19 de agosto de 2026", url: "https://infozamoraec.com/index.php/2026/08/19/alianza-fuerza-presento-a-sus-candidatos-para-las-elecciones-2027-en-zamora-chinchipe/" },
        { label: "El Amazónico, 19 de agosto de 2026", url: "https://www.elamazonico.com/portal/alianza-fuerza-presenta-oficialmente-a-sus-candidaturas-y-plantea-una-agenda-de-unidad-y-desarrollo-para-zamora-chinchipe/" },
      ]}
      notFoundItems={[
        "estructura administrativa propuesta",
        "digitalización de trámites / gobierno abierto",
        "presupuesto participativo",
        "sistema de indicadores y compras públicas",
        "plan anticorrupción",
        "reorganización de empresas municipales",
      ]}
    />
  );
}
