/** Parroquias del cantón Zamora; las fuentes se conservan en `sources`. */

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
      "Cabecera cantonal y principal centro de administración, servicios y comercio del cantón.",
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
      "Parroquia urbana del cantón Zamora, parte de una ciudad que crece y necesita servicios, movilidad y espacios públicos de calidad.",
    sources: [{ label: "GAD Municipal de Zamora — parroquias", url: PARROQUIAS_URL }],
  },
  {
    slug: "cumbaratza",
    name: "Cumbaratza",
    type: "rural",
    context:
      "Parroquia rural con vocación de producción sostenible y turismo cultural. En su territorio se encuentra el aeropuerto del cantón.",
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
      "Parroquia rural con vocación de producción sostenible y turismo cultural, junto al río Yacuambi, cuyas riberas requieren protección.",
    sources: [{ label: "PDOT — GAD Municipal de Zamora", url: PDOT_URL }],
  },
  {
    slug: "imbana",
    name: "Imbana",
    type: "rural",
    context:
      "Parroquia rural, también conocida como La Victoria de Imbana, con vocación pecuaria, piscícola y de turismo comunitario.",
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
      "Parroquia rural con vocación pecuaria, piscícola y de turismo comunitario.",
    sources: [{ label: "PDOT — GAD Municipal de Zamora", url: PDOT_URL }],
  },
  {
    slug: "san-carlos-de-las-minas",
    name: "San Carlos de las Minas",
    type: "rural",
    context:
      "Parroquia rural, conocida también como San Carlos, con vocación pecuaria, piscícola y de turismo comunitario.",
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
      "Parroquia rural con vocación de producción sostenible y turismo cultural. En su sector Buenaventura, el 18 de agosto de 2026, se presentaron las candidaturas de Alianza Fuerza.",
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
