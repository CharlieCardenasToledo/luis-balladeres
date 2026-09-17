/**
 * Datos de las parroquias del cantón Zamora.
 * Fuente: inventario_contenidos_web_luis_balladares_17sep2026.md, secciones 15-23.
 * El contexto de ordenamiento territorial (PDOT) describe al cantón, NO son
 * propuestas del candidato — se etiqueta así explícitamente en cada página.
 */

const PDOT_URL = "https://zamora.gob.ec/wp-content/uploads/2024/05/Propuesta-abril-2021-1.pdf";
const PARROQUIAS_URL = "https://zamora.gob.ec/ciudad/parroquias-de-zamora/";

export type Territory = {
  slug: string;
  name: string;
  type: "urbana" | "rural";
  context: string;
  sources: { label: string; url: string }[];
};

export const TERRITORIES: Territory[] = [
  {
    slug: "zamora",
    name: "Zamora",
    type: "urbana",
    context:
      "Cabecera cantonal. El documento de ordenamiento territorial la describe como nodo de administración, gestión e intercambio, y como centro de servicios y comercialización.",
    sources: [
      { label: "GAD Municipal de Zamora — parroquias", url: PARROQUIAS_URL },
      { label: "PDOT — GAD Municipal de Zamora", url: PDOT_URL },
    ],
  },
  {
    slug: "el-limon",
    name: "El Limón",
    type: "urbana",
    context:
      "El GAD Municipal la clasifica como parroquia urbana. No se recopiló información oficial adicional suficiente en esta investigación para un perfil más extenso.",
    sources: [{ label: "GAD Municipal de Zamora — parroquias", url: PARROQUIAS_URL }],
  },
  {
    slug: "cumbaratza",
    name: "Cumbaratza",
    type: "rural",
    context:
      "El PDOT la agrupa junto con Guadalupe y Timbara en un rol de producción sostenible y turismo cultural. El mismo documento indica que el aeropuerto del cantón se emplaza en esta parroquia.",
    sources: [
      { label: "GAD Municipal de Zamora — parroquias", url: PARROQUIAS_URL },
      { label: "PDOT — GAD Municipal de Zamora", url: PDOT_URL },
    ],
  },
  {
    slug: "guadalupe",
    name: "Guadalupe",
    type: "rural",
    context:
      "El PDOT la agrupa con Cumbaratza y Timbara en producción sostenible y turismo cultural, y menciona el río Yacuambi en relación con zonas de protección/riesgo hídrico en esta parroquia.",
    sources: [{ label: "PDOT — GAD Municipal de Zamora", url: PDOT_URL }],
  },
  {
    slug: "imbana",
    name: "Imbana",
    type: "rural",
    context:
      "En documentación municipal aparece también como La Victoria de Imbana. El PDOT la agrupa con Sabanilla y San Carlos de las Minas en producción pecuaria, piscícola y turismo comunitario.",
    sources: [
      { label: "GAD Municipal de Zamora — parroquias", url: PARROQUIAS_URL },
      { label: "PDOT — GAD Municipal de Zamora", url: PDOT_URL },
    ],
  },
  {
    slug: "sabanilla",
    name: "Sabanilla",
    type: "rural",
    context:
      "El PDOT la agrupa junto con Imbana y San Carlos de las Minas para producción pecuaria, piscícola y turismo comunitario.",
    sources: [{ label: "PDOT — GAD Municipal de Zamora", url: PDOT_URL }],
  },
  {
    slug: "san-carlos-de-las-minas",
    name: "San Carlos de las Minas",
    type: "rural",
    context:
      "El GAD Municipal simplifica el nombre a \"San Carlos\" en su página de parroquias; el PDOT usa \"San Carlos de las Minas\". Agrupada con Sabanilla e Imbana en producción pecuaria, piscícola y turismo comunitario.",
    sources: [
      { label: "GAD Municipal de Zamora — parroquias", url: PARROQUIAS_URL },
      { label: "PDOT — GAD Municipal de Zamora", url: PDOT_URL },
    ],
  },
  {
    slug: "timbara",
    name: "Timbara",
    type: "rural",
    context:
      "El PDOT la agrupa con Guadalupe y Cumbaratza en producción sostenible y turismo cultural. El 18 de agosto de 2026, en el sector Buenaventura de esta parroquia, se realizó el acto de presentación de candidaturas de Alianza Fuerza.",
    sources: [
      { label: "GAD Municipal de Zamora — parroquias", url: PARROQUIAS_URL },
      { label: "PDOT — GAD Municipal de Zamora", url: PDOT_URL },
      { label: "InfoZamora, 19 de agosto de 2026", url: "https://infozamoraec.com/index.php/2026/08/19/alianza-fuerza-presento-a-sus-candidatos-para-las-elecciones-2027-en-zamora-chinchipe/" },
    ],
  },
];

export function getTerritory(slug: string): Territory | undefined {
  return TERRITORIES.find((t) => t.slug === slug);
}
