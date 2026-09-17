import type { Metadata } from "next";
import { ProposalDetail } from "@/components/proposals/ProposalDetail";

export const metadata: Metadata = {
  title: "Turismo",
  description: "Impulso al turismo, declarado por Luis Balladares entre sus prioridades.",
};

export default function Page() {
  return (
    <ProposalDetail
      title="Turismo"
      content="Balladares incluyó el impulso al turismo entre sus prioridades públicas."
      sourceStatus="Verificado — declaración recogida por medio"
      sources={[{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }]}
      notFoundItems={[
        "rutas turísticas concretas",
        "sitios/cascadas priorizados",
        "marca turística y plan de promoción",
        "presupuesto y capacitación",
        "infraestructura específica",
        "metas de visitantes",
        "convenios y cronograma",
      ]}
      extra={
        <div className="mt-6 rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-sm text-gray-600">
          <p className="font-medium text-black">Contexto territorial (no es una propuesta del candidato)</p>
          <p className="mt-2">
            El Plan de Desarrollo y Ordenamiento Territorial municipal identifica a Guadalupe,
            Cumbaratza y Timbara con un rol asociado a producción sostenible y turismo cultural, y
            a Sabanilla, Imbana y San Carlos de las Minas con producción pecuaria/piscícola y
            turismo comunitario. Este es contexto oficial del cantón, no una propuesta atribuible a
            Balladares.
          </p>
          <p className="mt-2 text-xs">
            Fuente:{" "}
            <a
              href="https://zamora.gob.ec/wp-content/uploads/2024/05/Propuesta-abril-2021-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              PDOT — GAD Municipal de Zamora
            </a>
          </p>
        </div>
      }
    />
  );
}
