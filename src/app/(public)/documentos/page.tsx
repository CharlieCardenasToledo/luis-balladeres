import type { Metadata } from "next";
import { NotFoundList } from "@/components/ui/SourceNote";

export const metadata: Metadata = {
  title: "Documentos",
  description: "Documentos públicos que respaldan la trayectoria de Luis Balladares.",
};

const DOCUMENTS = [
  { title: "Directorio de graduados en Derecho, Universidad Nacional de Loja", detail: "Registro del nombre, carrera (Derecho) y año (2007).", url: "https://alumni.unl.edu.ec/directorio/listar_carrera/2/B" },
  { title: "Ordenanza provincial, diciembre de 2017", detail: "Lo identifica como Secretario General del Gobierno Provincial de Zamora Chinchipe.", url: "https://zamora-chinchipe.gob.ec/wp-content/uploads/2018/01/65.-ORDENANZA-QUE-REGULA-LA-CONSULTA-PRELEGISLATIVA.pdf" },
  { title: "Registro de miembros fundadores, Fundación para la Gestión Ambiental Yaku Ñan (2018)", detail: "Lo registra como miembro fundador.", url: "https://vlex.ec/vid/canton-quito-provincia-pichincha-743773129" },
  { title: "Ordenanza provincial, enero de 2019", detail: "Secretario General del Gobierno Provincial.", url: "https://zamora-chinchipe.gob.ec/wp-content/uploads/2019/03/71.-ORDENANZA-QUE-ESTABLECE-AREAS-DE-CONSERVACION-Y-USO.pdf" },
  { title: "Directorio institucional provincial, febrero de 2019", detail: "Secretario General.", url: "https://zamora-chinchipe.gob.ec/wp-content/uploads/2019/12/B1-FEBRERO-2019-DIRECTORIO-INSTITUCI%C3%93N.pdf" },
  { title: "Memorando municipal, septiembre de 2020", detail: "Secretario General del GAD Municipal de Zamora.", url: "https://www.zamora.gob.ec/wp-content/uploads/2020/09/DOC.-1.b-MEMO-685-CONVOCATORIA-REUNION-GERENTES-Y-DIRECTORES.pdf" },
  { title: "Acta municipal, abril de 2022", detail: "Secretario General.", url: "https://www.zamora.gob.ec/wp-content/uploads/2022/05/ACTA-FINAL-signed-signed-1.pdf" },
  { title: "Directorio provincial, junio de 2023", detail: "Prosecretario de la Prefectura.", url: "https://zamora-chinchipe.gob.ec/wp-content/uploads/2023/06/Literal-b1-Junio-2023-Directorio-Institucion.pdf" },
  { title: "Ordenanza de presupuesto provincial, diciembre de 2023", detail: "Secretario General del Consejo Provincial.", url: "https://zamora-chinchipe.gob.ec/website/wp-content/uploads/2025/04/2-PRESUPUESTO-2024-RC-2024.pdf" },
  { title: "Nota sobre calificación electoral, agosto de 2026", detail: "No es el PDF original del CNE, pero reporta los datos de la resolución.", url: "https://infozamoraec.com/index.php/2026/08/21/junta-provincial-electoral-califica-candidatura-de-luis-fernando-balladares-para-la-alcaldia-de-zamora/" },
];

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Documentos</h1>
      <p className="mt-4 text-charcoal">
        Documentos públicos (Registro Oficial, ordenanzas, directorios institucionales,
        universidad) que respaldan la trayectoria descrita en{" "}
        <a href="/trayectoria" className="underline">
          /trayectoria
        </a>
        .
      </p>

      <ul className="mt-8 flex flex-col divide-y divide-gray-100">
        {DOCUMENTS.map((doc) => (
          <li key={doc.title} className="py-4">
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-black underline underline-offset-2"
            >
              {doc.title}
            </a>
            <p className="mt-1 text-sm text-gray-600">{doc.detail}</p>
          </li>
        ))}
      </ul>

      <NotFoundList
        title="Documentos importantes no localizados"
        items={[
          "CV oficial del candidato",
          "hoja de vida presentada al CNE",
          "Plan de Trabajo del CNE",
          "resolución original del CNE/Junta Provincial en PDF",
          "título universitario escaneado / registros de posgrado",
          "certificado de cargo/período en GAD Yacuambi",
          "declaración patrimonial",
          "documentos de financiamiento de campaña",
        ]}
      />
    </div>
  );
}
