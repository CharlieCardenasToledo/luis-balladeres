import type { Metadata } from "next";
import { ProposalDetail } from "@/components/proposals/ProposalDetail";

export const metadata: Metadata = {
  title: "Gestión municipal",
  description: "Un Municipio coordinado, digital y transparente.",
};

export default function Page() {
  return (
    <ProposalDetail
      title="Gestión municipal"
      content="Trabajo conjunto entre Prefectura, Municipio y gobiernos parroquiales, con convenios para ejecutar proyectos, y un Municipio que rinda cuentas de cada compromiso."
      sources={[{ label: "InfoZamora, 19 de agosto de 2026", url: "https://infozamoraec.com/index.php/2026/08/19/alianza-fuerza-presento-a-sus-candidatos-para-las-elecciones-2027-en-zamora-chinchipe/" }]}
      related={["Gobierno digital y simplificación de trámites","Tablero público de avance del Plan de Trabajo","Consejo Cantonal de Seguridad con plan y metas"]}
    />
  );
}
