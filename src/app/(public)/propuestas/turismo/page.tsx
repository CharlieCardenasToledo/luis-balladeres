import type { Metadata } from "next";
import { ProposalDetail } from "@/components/proposals/ProposalDetail";

export const metadata: Metadata = {
  title: "Turismo",
  description: "Turismo, mercados y oportunidades para emprender en Zamora.",
};

export default function Page() {
  return (
    <ProposalDetail
      slug="turismo"
      content="Zamora tiene naturaleza, cultura e identidad para convertirse en destino. Impulsar el turismo significa más oportunidades para emprendedores, comerciantes y parroquias."
      sources={[{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }]}
      related={["Plan cantonal de turismo y cartera de productos","Parque Turístico Temático de naturaleza e identidad","Mercados, ferias y espacios de comercialización"]}
      extra={
        <p className="mt-4 text-charcoal">
          Guadalupe, Cumbaratza y Timbara tienen vocación de producción sostenible y turismo
          cultural; Sabanilla, Imbana y San Carlos de las Minas, de turismo comunitario.
        </p>
      }
    />
  );
}
