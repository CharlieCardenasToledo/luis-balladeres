import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Matriz de propuestas 2027–2031",
  description: "Matriz política y técnica de propuestas para la Alcaldía de Zamora 2027–2031.",
};

type Proposal = {
  title: string;
  origin: "Idea del candidato" | "Derivada del PDOT/PUGS";
  viability: string;
  execution: string;
  message: string;
};

type Axis = { title: string; objective: string; proposals: Proposal[] };

const AXES: Axis[] = [
  {
    title: "Eje 1 · Biofísico y resiliencia territorial",
    objective: "Proteger agua, suelo, paisaje y población frente a riesgos, y mejorar progresivamente el saneamiento y la gestión de residuos.",
    proposals: [
      { title: "Plan Maestro Integral de Agua Potable, Alcantarillado y Saneamiento", origin: "Idea del candidato", viability: "Alta · directa", execution: "Actualizar la línea base y priorizar captación, tratamiento, redes, alcantarillado y depuración por fases con EMAPAZ E.P.", message: "Agua segura y saneamiento sostenible con estudios y prioridades públicas." },
      { title: "Protección de fuentes de agua y microcuencas", origin: "Derivada del PDOT/PUGS", viability: "Alta · directa/articulada", execution: "Gestionar protección ambiental, control de usos y restauración de fuentes priorizadas.", message: "Proteger las fuentes que abastecen al cantón con participación comunitaria." },
      { title: "Sistema cantonal de información y prevención de riesgos", origin: "Derivada del PDOT/PUGS", viability: "Alta · directa/articulada", execution: "Actualizar mapas y puntos críticos, regular ocupación y preparar alertas, rutas y protocolos municipales.", message: "Prevenir con información antes que responder a la emergencia." },
      { title: "Recuperación de riberas, quebradas y corredores verdes", origin: "Derivada del PDOT/PUGS", viability: "Media-alta · condicionada", execution: "Verificar franjas de protección y propiedad; recuperar paisaje, drenaje, vegetación y uso público compatible con la norma.", message: "Riberas y quebradas seguras, verdes y recuperadas progresivamente." },
      { title: "Gestión integral de residuos y economía circular", origin: "Derivada del PDOT/PUGS", viability: "Alta · directa", execution: "Optimizar rutas, separación, reciclaje, aprovechamiento, educación y disposición final, midiendo costos y resultados.", message: "Más reciclaje, limpieza y corresponsabilidad ciudadana." },
    ],
  },
  {
    title: "Eje 2 · Económico-productivo",
    objective: "Fortalecer turismo, patrimonio y economía local mediante promoción cantonal, mercados, cooperación y articulación urbano-rural.",
    proposals: [
      { title: "Parque Turístico Temático de naturaleza e identidad", origin: "Idea del candidato", viability: "Media-alta · requiere estudios", execution: "Definir concepto, demanda, terreno compatible, accesibilidad, ambiente, fases, operación y vínculo con emprendimientos.", message: "Naturaleza, cultura e identidad convertidas en oportunidades por etapas." },
      { title: "Plan cantonal de turismo y cartera de productos", origin: "Derivada del PDOT/PUGS", viability: "Alta · directa/articulada", execution: "Aprobar inventario, productos, promoción, calendario y prioridades del destino Zamora.", message: "Rutas, promoción y servicios que beneficien a ciudad y parroquias." },
      { title: "Mercados, ferias y espacios de comercialización", origin: "Derivada del PDOT/PUGS", viability: "Alta · directa", execution: "Evaluar infraestructura y demanda; ordenar, mantener y activar espacios con higiene, accesibilidad y promoción.", message: "Espacios dignos para vender mejor, con orden y calidad." },
      { title: "Facilitación municipal para emprendimientos", origin: "Derivada del PDOT/PUGS", viability: "Media-alta · función/articulación", execution: "Simplificar trámites y conectar información, formación, turismo, comercio y economía popular sin prometer créditos no habilitados.", message: "Un Municipio que facilite, conecte y promueva con reglas claras." },
    ],
  },
  {
    title: "Eje 3 · Social-cultural",
    objective: "Recuperar espacios públicos y equipamientos, y fortalecer deporte, recreación, cultura, inclusión y accesibilidad.",
    proposals: [
      { title: "Recuperación y activación de espacios públicos", origin: "Idea del candidato", viability: "Alta · directa", execution: "Intervenir parques, plazas y áreas verdes con accesibilidad, mobiliario, arborización, iluminación funcional y mantenimiento.", message: "Espacios públicos con accesibilidad, iluminación, cultura y deporte." },
      { title: "Plan de mantenimiento de escenarios deportivos", origin: "Idea del candidato", viability: "Alta · directa", execution: "Inventariar canchas y coliseos, calificar su estado y programar mantenimiento, iluminación, baños, accesibilidad y seguridad.", message: "Primero recuperar y mantener lo existente para escenarios seguros." },
      { title: "Parque de Deportes Extremos", origin: "Idea del candidato", viability: "Media-alta · requiere estudios", execution: "Validar demanda, disciplinas y terreno; diseñar con normas de seguridad, accesibilidad, seguros y mantenimiento.", message: "Un parque seguro para jóvenes y familias, construido por etapas." },
      { title: "Cancha reglamentaria de futsal", origin: "Idea del candidato", viability: "Media-alta · requiere estudios", execution: "Confirmar demanda y predio, diseñar conforme a norma y prever servicios, accesibilidad, uso y mantenimiento.", message: "Formación y competencia con una cancha reglamentaria sostenible." },
      { title: "Agenda cantonal de cultura e identidad", origin: "Derivada del PDOT/PUGS", viability: "Alta · directa/articulada", execution: "Mapear gestores y manifestaciones; programar espacios, circulación urbano-rural, formación, memoria y promoción.", message: "Cultura permanente en barrios y parroquias, con respaldo a gestores." },
      { title: "Becas, ayudas e incentivos educativos focalizados", origin: "Idea del candidato", viability: "Condicionada · no sustituye educación", execution: "Crear el programa con diagnóstico, informe jurídico, ordenanza, presupuesto y convocatoria transparente.", message: "Ayudas educativas transparentes y focalizadas, no promesas indiscriminadas." },
      { title: "Programa cantonal de accesibilidad e inclusión", origin: "Derivada del PDOT/PUGS", viability: "Alta · función municipal", execution: "Auditar barreras en espacios y trámites municipales y ejecutar ajustes razonables con rutas de protección.", message: "Servicios y espacios municipales más accesibles e inclusivos." },
    ],
  },
  {
    title: "Eje 4 · Asentamientos humanos, energía, conectividad y movilidad",
    objective: "Ordenar el crecimiento urbano y rural, aplicar PDOT, PUGS y catastro, y mejorar movilidad, conectividad y equipamientos.",
    proposals: [
      { title: "Programa Integral de Regeneración Urbana", origin: "Idea del candidato", viability: "Alta · directa", execution: "Planificar intervenciones por sectores y corredores: imagen urbana, aceras, calles municipales, drenaje, arborización, mobiliario y accesibilidad.", message: "Regenerar Zamora por etapas, con identidad, accesibilidad y mantenimiento." },
      { title: "Nuevo Cementerio Municipal", origin: "Idea del candidato", viability: "Media-alta · requiere estudios", execution: "Evaluar capacidad y demanda, seleccionar terreno compatible y elaborar estudios geotécnicos, sanitarios y ambientales.", message: "Un cementerio digno y ambientalmente responsable, implementado progresivamente." },
      { title: "Plan cantonal de movilidad y seguridad vial", origin: "Derivada del PDOT/PUGS", viability: "Alta · directa/articulada", execution: "Ordenar jerarquía vial, transporte, peatón, bicicleta, estacionamiento y seguridad vial antes de programar obras.", message: "Seguridad para peatones, estudiantes, ciclistas y conductores." },
      { title: "Regularización y mejoramiento de asentamientos viables", origin: "Derivada del PDOT/PUGS", viability: "Media · jurídica/técnica", execution: "Identificar casos, excluir riesgo no mitigable y aplicar instrumentos de suelo y servicios cuando legalmente proceda.", message: "Soluciones legales y técnicas sin regularizar zonas de riesgo no mitigable." },
      { title: "Catastro multipropósito y control PDOT–PUGS", origin: "Derivada del PDOT/PUGS", viability: "Alta · directa", execution: "Integrar catastro, permisos, riesgos, suelo y servicios, protegiendo datos personales y mejorando la transparencia.", message: "Territorio ordenado con información actualizada y trámites claros." },
      { title: "Internet gratuito y seguro en espacios públicos", origin: "Idea del candidato", viability: "Media-alta · contratación", execution: "Priorizar sitios, contratar operador autorizado y definir cobertura, filtros, ciberseguridad, mantenimiento y presupuesto recurrente.", message: "Conectividad pública progresiva, segura y con operadores autorizados." },
    ],
  },
  {
    title: "Eje 5 · Político-institucional",
    objective: "Consolidar un Municipio eficiente, coordinado, digital, transparente y fiscalmente responsable.",
    proposals: [
      { title: "Centro Municipal de Videovigilancia", origin: "Idea del candidato", viability: "Media-alta · prevención/coordinación", execution: "Diagnosticar puntos, definir protocolos, evaluar impacto de datos y asegurar accesos, conservación y mantenimiento.", message: "Prevención y respuesta coordinada; no reemplaza a la Policía ni promete eliminar el delito." },
      { title: "Consejo Cantonal de Seguridad con plan y metas", origin: "Derivada del PDOT/PUGS", viability: "Alta · coordinación", execution: "Coordinar prevención, responsabilidades, metas y seguimiento entre instituciones y comunidad.", message: "Prevención con metas públicas y responsabilidades claras." },
      { title: "Gobierno digital y simplificación de trámites", origin: "Derivada del PDOT/PUGS", viability: "Alta · directa", execution: "Inventariar trámites, eliminar pasos innecesarios, digitalizar gradualmente y medir tiempos, satisfacción y seguridad.", message: "Menos filas y papeles, más trazabilidad, sin abandonar la atención presencial." },
      { title: "Tablero público del Plan de Trabajo y del PDOT", origin: "Derivada del PDOT/PUGS", viability: "Alta · directa", execution: "Publicar responsable, meta, avance físico-financiero, contrato, alertas y ajustes motivados por compromiso.", message: "Cada compromiso tendrá responsable, presupuesto, avance e informe público." },
      { title: "Presupuesto participativo territorial", origin: "Derivada del PDOT/PUGS", viability: "Alta · directa", execution: "Definir metodología y techos, realizar asambleas urbanas y rurales y publicar la ejecución y seguimiento.", message: "Las prioridades de inversión se decidirán con participación ciudadana." },
    ],
  },
];

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-magenta">Documento de trabajo</p>
      <h1 className="mt-3 font-display text-3xl text-black sm:text-4xl">Matriz de propuestas 2027–2031</h1>
      <p className="mt-4 text-charcoal">
        Esta matriz organiza la información entregada para la formulación política y técnica de una
        eventual administración municipal. Distingue ideas del candidato de propuestas derivadas
        del PDOT/PUGS y muestra la viabilidad, la forma de ejecución y un mensaje comprensible.
      </p>
      <div className="mt-6 border-l-4 border-brand-magenta pl-4 text-sm text-gray-700">
        <p className="font-medium text-black">Alcance y cautela editorial</p>
        <p className="mt-1">
          Esta matriz presenta prioridades y una ruta de trabajo. Costos, metas físicas, ubicaciones
          y cronogramas se definirán con estudios, presupuesto y validación jurídica antes de cada
          ejecución.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        {AXES.map((axis) => (
          <details key={axis.title} className="group rounded-lg border border-gray-300 bg-white p-5 open:border-brand-magenta">
            <summary className="cursor-pointer list-none pr-8 font-display text-xl text-black marker:hidden">
              <span className="group-open:text-brand-magenta">{axis.title}</span>
            </summary>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-700">{axis.objective}</p>
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              {axis.proposals.map((proposal) => (
                <article key={proposal.title} className="rounded-md border border-gray-200 bg-off-white p-4">
                  <h2 className="font-medium text-black">{proposal.title}</h2>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-brand-wine/10 px-2 py-1 text-brand-wine">{proposal.origin}</span>
                    <span className="rounded-full bg-brand-magenta/10 px-2 py-1 text-brand-magenta">{proposal.viability}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-700"><strong className="text-black">Ejecución:</strong> {proposal.execution}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-700"><strong className="text-black">Mensaje:</strong> “{proposal.message}”</p>
                </article>
              ))}
            </div>
          </details>
        ))}
      </div>

      <p className="mt-10 text-sm text-gray-600">
        Para consultar el contenido público previamente documentado por medios, visita la sección de{" "}
        <Link href="/propuestas" className="font-medium text-brand-magenta underline">propuestas por tema</Link>.
      </p>
    </div>
  );
}
