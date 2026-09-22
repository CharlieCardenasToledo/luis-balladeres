import type { Metadata } from "next";
import { SourceNote, NotFoundList } from "@/components/ui/SourceNote";

export const metadata: Metadata = {
  title: "Trayectoria",
  description: "La experiencia pública que Luis Balladares pone al servicio de Zamora.",
};

type TimelineItem = {
  date: string;
  role: string;
  detail?: string;
  status: string;
  sources: { label: string; url?: string }[];
};

const TIMELINE: TimelineItem[] = [
  {
    date: "Febrero de 2006",
    role: "Gobernador encargado",
    detail: "Mencionado en un acto de inauguración de instalaciones de Contraloría.",
    status: "Verificado — medio",
    sources: [{ label: "La Hora, 16 de febrero de 2006", url: "https://www.lahora.com.ec/archivo/Contraloria-de-Zamora-Chinchipe-con-instalaciones-propias-20060216-0100.html" }],
  },
  {
    date: "Abril de 2006",
    role: "Intendente y luego Jefe Político del cantón Zamora",
    detail: "El artículo lo describe también como \"cogobernador\" en esa función.",
    status: "Verificado — medio",
    sources: [{ label: "La Hora, 1 de abril de 2006", url: "https://www.lahora.com.ec/archivo/Gobernador-posesiona-a-Intendente-y-Jefe-Politico-20060401-0112.html" }],
  },
  {
    date: "Noviembre de 2006",
    role: "Gobernador (e)",
    detail: "Identificado en una gestión relacionada con una asociación de pequeños mineros.",
    status: "Verificado — medio",
    sources: [{ label: "La Hora, 22 de noviembre de 2006", url: "https://www.lahora.com.ec/archivo/Pequenos-mineros-piden-registro-de-directiva-20061122-0135.html" }],
  },
  {
    date: "2007",
    role: "Formación en Derecho",
    detail: "Registrado en el directorio de graduados de la Universidad Nacional de Loja, carrera de Derecho.",
    status: "Verificado — fuente universitaria",
    sources: [{ label: "Directorio UNL", url: "https://alumni.unl.edu.ec/directorio/listar_carrera/2/B" }],
  },
  {
    date: "2010",
    role: "Secretario General del Gobierno Provincial de Zamora Chinchipe",
    status: "Verificado — Registro Oficial",
    sources: [{ label: "Registro Oficial, octubre de 2010" }],
  },
  {
    date: "2011",
    role: "Secretario General del Gobierno Provincial de Zamora Chinchipe",
    status: "Verificado — Registro Oficial",
    sources: [{ label: "Registro Oficial, 2011" }],
  },
  {
    date: "2012–2016",
    role: "Sin cronología anual establecida con las fuentes revisadas",
    detail: "No se afirma continuidad ininterrumpida en el mismo cargo durante este período.",
    status: "No encontrado",
    sources: [],
  },
  {
    date: "13 de diciembre de 2017",
    role: "Secretario General del Gobierno Provincial de Zamora Chinchipe",
    sources: [{ label: "Ordenanza provincial, 13 de diciembre de 2017", url: "https://zamora-chinchipe.gob.ec/wp-content/uploads/2018/01/65.-ORDENANZA-QUE-REGULA-LA-CONSULTA-PRELEGISLATIVA.pdf" }],
    status: "Verificado — documento oficial",
  },
  {
    date: "2018",
    role: "Secretario General — Secretaría General del Gobierno Provincial",
    detail: "En el mismo año, registrado como miembro fundador de la Fundación para la Gestión Ambiental Yaku Ñan.",
    status: "Verificado — documentos oficiales",
    sources: [{ label: "Registro Fundación Yaku Ñan", url: "https://vlex.ec/vid/canton-quito-provincia-pichincha-743773129" }],
  },
  {
    date: "4 de enero de 2019 / febrero de 2019",
    role: "Secretario General del Gobierno Provincial de Zamora Chinchipe",
    status: "Verificado — documento oficial",
    sources: [
      { label: "Ordenanza provincial, enero de 2019", url: "https://zamora-chinchipe.gob.ec/wp-content/uploads/2019/03/71.-ORDENANZA-QUE-ESTABLECE-AREAS-DE-CONSERVACION-Y-USO.pdf" },
      { label: "Directorio institucional, febrero de 2019", url: "https://zamora-chinchipe.gob.ec/wp-content/uploads/2019/12/B1-FEBRERO-2019-DIRECTORIO-INSTITUCI%C3%93N.pdf" },
    ],
  },
  {
    date: "14 de septiembre de 2020",
    role: "Secretario General del GAD Municipal de Zamora",
    status: "Verificado — documento oficial",
    sources: [{ label: "Memorando municipal, septiembre de 2020", url: "https://www.zamora.gob.ec/wp-content/uploads/2020/09/DOC.-1.b-MEMO-685-CONVOCATORIA-REUNION-GERENTES-Y-DIRECTORES.pdf" }],
  },
  {
    date: "2021",
    role: "Secretaría General, GAD Municipal de Zamora",
    detail: "Verificado en documentación municipal, sin fecha exacta de inicio/fin establecida.",
    status: "Verificado — documentación municipal",
    sources: [],
  },
  {
    date: "28 de abril de 2022",
    role: "Secretario General del Concejo/GAD Municipal de Zamora",
    status: "Verificado — documento oficial",
    sources: [{ label: "Acta municipal, abril de 2022", url: "https://www.zamora.gob.ec/wp-content/uploads/2022/05/ACTA-FINAL-signed-signed-1.pdf" }],
  },
  {
    date: "12 de mayo de 2023",
    role: "Secretario General del Concejo Municipal de Zamora",
    status: "Verificado — Registro Oficial",
    sources: [{ label: "Registro Oficial, mayo de 2023" }],
  },
  {
    date: "Junio de 2023",
    role: "Prosecretario General, Prefectura de Zamora Chinchipe",
    status: "Verificado — documento oficial",
    sources: [{ label: "Directorio provincial, junio de 2023", url: "https://zamora-chinchipe.gob.ec/wp-content/uploads/2023/06/Literal-b1-Junio-2023-Directorio-Institucion.pdf" }],
  },
  {
    date: "Diciembre de 2023",
    role: "Secretario General del Consejo Provincial de Zamora Chinchipe",
    status: "Verificado — documento oficial",
    sources: [{ label: "Ordenanza de presupuesto provincial 2024", url: "https://zamora-chinchipe.gob.ec/website/wp-content/uploads/2025/04/2-PRESUPUESTO-2024-RC-2024.pdf" }],
  },
  {
    date: "Agosto de 2024",
    role: "Secretario General del Consejo Provincial de Zamora Chinchipe",
    status: "Verificado — Registro Oficial",
    sources: [{ label: "Registro Oficial, agosto de 2024" }],
  },
  {
    date: "2025",
    role: "Cargo exacto no establecido con las fuentes revisadas",
    status: "No encontrado",
    sources: [],
  },
  {
    date: "26 de abril de 2026",
    role: "Precandidatura a la Alcaldía de Zamora",
    detail: "Anunciada en una asamblea de la alianza Fuerza Zamora Chinchipe en Yantzaza.",
    status: "Verificado — medio",
    sources: [{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }],
  },
  {
    date: "18 de agosto de 2026",
    role: "Presentación como candidato",
    detail: "Acto de la Alianza Fuerza en Buenaventura, parroquia Timbara.",
    status: "Verificado — medio",
    sources: [{ label: "InfoZamora, 19 de agosto de 2026", url: "https://infozamoraec.com/index.php/2026/08/19/alianza-fuerza-presento-a-sus-candidatos-para-las-elecciones-2027-en-zamora-chinchipe/" }],
  },
  {
    date: "19–21 de agosto de 2026",
    role: "Candidatura calificada por la Junta Provincial Electoral",
    detail: "Alianza Fuerza Democrática, listas 2-4-12-21. Notificación reportada el 20 de agosto a las 16:45.",
    status: "Verificado — medio",
    sources: [{ label: "InfoZamora, 21 de agosto de 2026", url: "https://infozamoraec.com/index.php/2026/08/21/junta-provincial-electoral-califica-candidatura-de-luis-fernando-balladares-para-la-alcaldia-de-zamora/" }],
  },
];

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-magenta">Experiencia pública</p>
      <h1 className="mt-3 font-display text-3xl text-black sm:text-4xl">Una trayectoria para servir mejor</h1>
      <p className="mt-4 text-sm text-gray-600">
        Antes de pedir confianza, una campaña debe mostrar cómo se ha preparado para gobernar. Esta
        cronología reúne la experiencia pública documentada de Luis Balladares. Los períodos sin
        fuente suficiente se marcan como no encontrados en lugar de inferirse.
      </p>

      <ol className="mt-8 flex flex-col gap-8 border-l border-gray-300 pl-6">
        {TIMELINE.map((item) => (
          <li key={item.date}>
            <p className="text-sm font-medium text-gray-600">{item.date}</p>
            <p className="text-charcoal">{item.role}</p>
            {item.detail && <p className="mt-1 text-sm text-gray-600">{item.detail}</p>}
            {item.sources.length > 0 && <SourceNote status={item.status} sources={item.sources} />}
            {item.sources.length === 0 && item.status === "No encontrado" && (
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-600">No encontrado</p>
            )}
          </li>
        ))}
      </ol>

      <NotFoundList
        title="Vacíos conocidos en esta cronología"
        items={[
          "cargo y período exacto en el GAD de Yacuambi (mención parcial, sin institución/fechas confirmadas)",
          "continuidad exacta 2012–2016",
          "cargo exacto durante todo 2025",
          "fecha exacta de entrada/salida de cada institución",
        ]}
      />
    </div>
  );
}
