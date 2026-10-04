import { PHOTOS, type CampaignPhoto } from "@/lib/campaign-photos";

/**
 * Plan de Trabajo 2027–2031 presentado por la Alianza Fuerza Democrática
 * (2 de agosto de 2026), redactado en lenguaje ciudadano, más la matriz de
 * propuestas de la campaña. Nunca incluir datos personales del documento.
 */
export const VISION =
  "Al 2031, Zamora avanzará como un cantón ordenado, seguro, ambientalmente responsable, conectado y solidario, con servicios municipales confiables, espacios públicos accesibles, economía local y turismo fortalecidos, territorios urbanos y rurales articulados, y una administración abierta que planifica, ejecuta y rinde cuentas con resultados medibles.";

export const GENERAL_OBJECTIVE =
  "Una gestión municipal equilibrada en todo el territorio, eficiente, transparente y participativa: que mejore los servicios y la calidad de vida, proteja el patrimonio natural y cultural, genere oportunidades económicas y rinda cuentas de cada resultado.";

export const SPECIFIC_OBJECTIVES: { code: string; title: string; text: string }[] = [
  { code: "OE1", title: "Ambiente y prevención de riesgos", text: "Proteger el ambiente y prevenir riesgos con información actualizada, control del uso del suelo y trabajo coordinado con otras instituciones." },
  { code: "OE2", title: "Agua, saneamiento y residuos", text: "Mejorar paso a paso la cobertura, la calidad y la continuidad del agua potable, el alcantarillado, el tratamiento de aguas residuales y la gestión de residuos." },
  { code: "OE3", title: "Territorio ordenado", text: "Ordenar el crecimiento urbano y rural, mantener el catastro al día y regular el uso del suelo con seguridad jurídica e información accesible." },
  { code: "OE4", title: "Movilidad segura", text: "Mejorar las calles, el tránsito y la seguridad vial con planificación, mantenimiento y accesibilidad para todos." },
  { code: "OE5", title: "Espacios públicos", text: "Recuperar y mantener parques, áreas verdes y equipamientos municipales accesibles, seguros y priorizados según las necesidades de cada sector." },
  { code: "OE6", title: "Turismo y economía local", text: "Impulsar el turismo, el patrimonio y la economía local con promoción, facilidades y alianzas entre la ciudad y las parroquias." },
  { code: "OE7", title: "Inclusión y derechos", text: "Reducir brechas sociales y fortalecer la cultura, el deporte, la recreación y la protección de derechos, con enfoque intercultural, intergeneracional, de género y discapacidad." },
  { code: "OE8", title: "Municipio eficiente y abierto", text: "Una administración eficiente, digital, transparente y responsable con el dinero público, que planifica, ejecuta, informa y rinde cuentas." },
];

export const WORK_STEPS: { title: string; text: string }[] = [
  { title: "Conocer", text: "Levantar datos reales de cada barrio y parroquia." },
  { title: "Priorizar", text: "Decidir con la ciudadanía qué se atiende primero." },
  { title: "Diseñar", text: "Preparar estudios y proyectos con responsables claros." },
  { title: "Financiar", text: "Asignar recursos propios y gestionar aportes de otras instituciones." },
  { title: "Informar", text: "Publicar el avance de cada obra y cada meta." },
];

export const TIMELINE_YEARS = ["2027", "2028", "2029", "2030", "2031"];

export const TIMELINE: { line: string; steps: string[] }[] = [
  { line: "Planificación y seguimiento", steps: ["Actualizar", "Aplicar", "Evaluar", "Ajustar", "Evaluar"] },
  { line: "Riesgos y ambiente", steps: ["Diagnóstico", "Ejecutar", "Ejecutar", "Ejecutar", "Evaluar"] },
  { line: "Agua, saneamiento y residuos", steps: ["Estudios", "Priorizar y ejecutar", "Ejecutar", "Ejecutar", "Evaluar"] },
  { line: "Ordenamiento y catastro", steps: ["Actualizar", "Implementar", "Consolidar", "Mantener", "Evaluar"] },
  { line: "Movilidad y calles", steps: ["Plan e inventario", "Ejecutar", "Ejecutar", "Ejecutar", "Evaluar"] },
  { line: "Espacios y equipamientos", steps: ["Inventario y diseño", "Ejecutar", "Ejecutar", "Ejecutar", "Evaluar"] },
  { line: "Turismo, cultura y economía", steps: ["Plan", "Ejecutar", "Ejecutar", "Ejecutar", "Evaluar"] },
  { line: "Inclusión y derechos", steps: ["Articular", "Ejecutar", "Ejecutar", "Ejecutar", "Evaluar"] },
  { line: "Modernización y transparencia", steps: ["Diseñar", "Implementar", "Consolidar", "Mejorar", "Evaluar"] },
];

export const PARTICIPATION: { name: string; commitment: string; frequency: string }[] = [
  { name: "Rendición de cuentas", commitment: "Informe público que compara lo prometido con lo cumplido.", frequency: "Cada año" },
  { name: "Cabildo popular", commitment: "Encuentro cantonal con agenda pública y seguimiento de lo resuelto.", frequency: "Al menos una vez al año" },
  { name: "Presupuesto participativo", commitment: "Los barrios y parroquias deciden prioridades de inversión.", frequency: "Cada año" },
  { name: "Asambleas territoriales", commitment: "Seguimiento en la ciudad y en cada parroquia.", frequency: "Cada seis meses" },
  { name: "Audiencias públicas", commitment: "Atender pedidos ciudadanos con respuestas por escrito.", frequency: "Permanente" },
  { name: "Silla vacía", commitment: "Un lugar para la ciudadanía en las sesiones del Concejo.", frequency: "En cada sesión pertinente" },
  { name: "Tablero público", commitment: "Avance de obras, metas, contratos y presupuesto en línea.", frequency: "Cada tres meses" },
  { name: "Datos abiertos", commitment: "Información y convocatorias municipales publicadas.", frequency: "Permanente" },
];

export const COMMITMENT =
  "De resultar electo, incorporaré este Plan de Trabajo a la planificación del cantón, respetando las competencias, la participación ciudadana y la programación presupuestaria. La gestión se conducirá con prioridades públicas, estudios suficientes, seguimiento permanente y rendición de cuentas sobre resultados y recursos.";

export type Proposal = {
  title: string;
  origin: "Idea del candidato" | "Derivada del PDOT/PUGS";
  viability: string;
  execution: string;
  message: string;
};

export type Axis = {
  slug: string;
  title: string;
  /** Nombre corto y cercano del eje. */
  short: string;
  objective: string;
  programs: string[];
  approach: string;
  objectives: string[];
  photo: CampaignPhoto;
  proposals: Proposal[];
};

export const AXES: Axis[] = [
  {
    slug: "cuidado-del-territorio",
    title: "Eje 1 · Cuidado del territorio",
    short: "Cuidar el agua y el territorio",
    programs: ["Zamora resiliente y ambiental","Servicios públicos confiables"],
    objectives: ["OE1","OE2"],
    approach: "Prevenir antes que lamentar: conocer dónde están los riesgos, evitar construir en zonas peligrosas, proteger y recuperar el ambiente, y mejorar paso a paso el agua, el alcantarillado y la recolección de basura.",
    photo: PHOTOS.recorrido19,
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
    slug: "economia-local",
    title: "Eje 2 · Economía local",
    short: "Más turismo y trabajo",
    programs: ["Zamora destino y patrimonio","Zamora produce y emprende"],
    objectives: ["OE6"],
    approach: "Que sea más fácil producir, vender y visitar Zamora: mercados y ferias ordenados, trámites simples, promoción turística, cuidado del patrimonio y trabajo conjunto con parroquias, comunidades, emprendedores y otras instituciones.",
    photo: PHOTOS.recorrido23,
    objective: "Fortalecer turismo, patrimonio y economía local mediante promoción cantonal, mercados, cooperación y articulación urbano-rural.",
    proposals: [
      { title: "Parque Turístico Temático de naturaleza e identidad", origin: "Idea del candidato", viability: "Media-alta · requiere estudios", execution: "Definir concepto, demanda, terreno compatible, accesibilidad, ambiente, fases, operación y vínculo con emprendimientos.", message: "Naturaleza, cultura e identidad convertidas en oportunidades por etapas." },
      { title: "Plan cantonal de turismo y cartera de productos", origin: "Derivada del PDOT/PUGS", viability: "Alta · directa/articulada", execution: "Aprobar inventario, productos, promoción, calendario y prioridades del destino Zamora.", message: "Rutas, promoción y servicios que beneficien a ciudad y parroquias." },
      { title: "Mercados, ferias y espacios de comercialización", origin: "Derivada del PDOT/PUGS", viability: "Alta · directa", execution: "Evaluar infraestructura y demanda; ordenar, mantener y activar espacios con higiene, accesibilidad y promoción.", message: "Espacios dignos para vender mejor, con orden y calidad." },
      { title: "Facilitación municipal para emprendimientos", origin: "Derivada del PDOT/PUGS", viability: "Media-alta · función/articulación", execution: "Simplificar trámites y conectar información, formación, turismo, comercio y economía popular sin prometer créditos no habilitados.", message: "Un Municipio que facilite, conecte y promueva con reglas claras." },
    ],
  },
  {
    slug: "bienestar",
    title: "Eje 3 · Bienestar, cultura y deporte",
    short: "Espacios para vivir mejor",
    programs: ["Espacio público vivo","Zamora inclusiva"],
    objectives: ["OE5","OE7"],
    approach: "Parques, canchas y espacios públicos cuidados, accesibles para todos y con mantenimiento; más cultura, deporte y recreación; y una red que proteja los derechos de quienes más lo necesitan.",
    photo: PHOTOS.recorrido21,
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
    slug: "ciudad-y-movilidad",
    title: "Eje 4 · Ciudad, conectividad y movilidad",
    short: "Una ciudad ordenada y segura",
    programs: ["Territorio ordenado","Movilidad segura","Servicios públicos confiables"],
    objectives: ["OE2","OE3","OE4"],
    approach: "Crecer con orden: calles mantenidas, movilidad segura para peatones y conductores, catastro al día y obras elegidas por riesgo, demanda y sostenibilidad. Las vías de otros niveles de gobierno se gestionarán con convenios.",
    photo: PHOTOS.recorrido11,
    objective: "Ordenar el crecimiento urbano y rural, aplicar los planes de ordenamiento y el catastro, y mejorar movilidad, conectividad y equipamientos.",
    proposals: [
      { title: "Programa Integral de Regeneración Urbana", origin: "Idea del candidato", viability: "Alta · directa", execution: "Planificar intervenciones por sectores y corredores: imagen urbana, aceras, calles municipales, drenaje, arborización, mobiliario y accesibilidad.", message: "Regenerar Zamora por etapas, con identidad, accesibilidad y mantenimiento." },
      { title: "Nuevo Cementerio Municipal", origin: "Idea del candidato", viability: "Media-alta · requiere estudios", execution: "Evaluar capacidad y demanda, seleccionar terreno compatible y elaborar estudios geotécnicos, sanitarios y ambientales.", message: "Un cementerio digno y ambientalmente responsable, implementado progresivamente." },
      { title: "Plan cantonal de movilidad y seguridad vial", origin: "Derivada del PDOT/PUGS", viability: "Alta · directa/articulada", execution: "Ordenar jerarquía vial, transporte, peatón, bicicleta, estacionamiento y seguridad vial antes de programar obras.", message: "Seguridad para peatones, estudiantes, ciclistas y conductores." },
      { title: "Regularización y mejoramiento de asentamientos viables", origin: "Derivada del PDOT/PUGS", viability: "Media · jurídica/técnica", execution: "Identificar casos, excluir riesgo no mitigable y aplicar instrumentos de suelo y servicios cuando legalmente proceda.", message: "Soluciones legales y técnicas sin regularizar zonas de riesgo no mitigable." },
      { title: "Catastro multipropósito y control del uso del suelo", origin: "Derivada del PDOT/PUGS", viability: "Alta · directa", execution: "Integrar catastro, permisos, riesgos, suelo y servicios, protegiendo datos personales y mejorando la transparencia.", message: "Territorio ordenado con información actualizada y trámites claros." },
      { title: "Internet gratuito y seguro en espacios públicos", origin: "Idea del candidato", viability: "Media-alta · contratación", execution: "Priorizar sitios, contratar operador autorizado y definir cobertura, filtros, ciberseguridad, mantenimiento y presupuesto recurrente.", message: "Conectividad pública progresiva, segura y con operadores autorizados." },
    ],
  },
  {
    slug: "municipio-transparente",
    title: "Eje 5 · Municipio transparente",
    short: "Un Municipio que rinde cuentas",
    programs: ["Municipio abierto y eficaz"],
    objectives: ["OE8"],
    approach: "Cada compromiso con responsable, presupuesto y avance público: trámites más simples y digitales, datos abiertos, un tablero de metas que cualquiera pueda revisar y rendición de cuentas cada año.",
    photo: PHOTOS.dialogo30,
    objective: "Consolidar un Municipio eficiente, coordinado, digital, transparente y fiscalmente responsable.",
    proposals: [
      { title: "Centro Municipal de Videovigilancia", origin: "Idea del candidato", viability: "Media-alta · prevención/coordinación", execution: "Diagnosticar puntos, definir protocolos, evaluar impacto de datos y asegurar accesos, conservación y mantenimiento.", message: "Prevención y respuesta coordinada; no reemplaza a la Policía ni promete eliminar el delito." },
      { title: "Consejo Cantonal de Seguridad con plan y metas", origin: "Derivada del PDOT/PUGS", viability: "Alta · coordinación", execution: "Coordinar prevención, responsabilidades, metas y seguimiento entre instituciones y comunidad.", message: "Prevención con metas públicas y responsabilidades claras." },
      { title: "Gobierno digital y simplificación de trámites", origin: "Derivada del PDOT/PUGS", viability: "Alta · directa", execution: "Inventariar trámites, eliminar pasos innecesarios, digitalizar gradualmente y medir tiempos, satisfacción y seguridad.", message: "Menos filas y papeles, más trazabilidad, sin abandonar la atención presencial." },
      { title: "Tablero público de avance del Plan de Trabajo", origin: "Derivada del PDOT/PUGS", viability: "Alta · directa", execution: "Publicar responsable, meta, avance físico-financiero, contrato, alertas y ajustes motivados por compromiso.", message: "Cada compromiso tendrá responsable, presupuesto, avance e informe público." },
      { title: "Presupuesto participativo territorial", origin: "Derivada del PDOT/PUGS", viability: "Alta · directa", execution: "Definir metodología y techos, realizar asambleas urbanas y rurales y publicar la ejecución y seguimiento.", message: "Las prioridades de inversión se decidirán con participación ciudadana." },
    ],
  },
];

export const ALL_PROPOSALS = AXES.flatMap((axis) => axis.proposals);
