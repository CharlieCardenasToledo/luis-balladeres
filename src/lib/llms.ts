import { getSiteUrl } from "@/lib/site";
import { AXES, COMMITMENT, GENERAL_OBJECTIVE, PARTICIPATION, SPECIFIC_OBJECTIVES, VISION } from "@/lib/plan-trabajo";
import { PROPOSAL_TOPICS } from "@/lib/proposal-topics";
import { TERRITORIES } from "@/lib/territories";

const SUMMARY =
  "Sitio oficial de campaña de Luis Fernando Balladares Villavicencio (Lucho Balladares), candidato a la Alcaldía del cantón Zamora, provincia de Zamora Chinchipe, Ecuador, para el período 2027–2031, por Fuerza Democrática, listas 2-4-12-21 (Alianza Fuerza). Su candidatura fue calificada por la Junta Provincial Electoral en agosto de 2026.";

const PROFILE = [
  "Abogado graduado en la Universidad Nacional de Loja (2007).",
  "2006: Gobernador encargado, Intendente y Jefe Político del cantón Zamora.",
  "2010–2019: Secretario General del Gobierno Provincial de Zamora Chinchipe.",
  "2018: Miembro fundador de la Fundación para la Gestión Ambiental Yaku Ñan.",
  "2020–2023: Secretario General del GAD Municipal de Zamora.",
  "2023: Prosecretario General de la Prefectura de Zamora Chinchipe; 2023–2024: Secretario General del Consejo Provincial.",
  "26 de abril de 2026: anuncia su precandidatura en la asamblea provincial de Yantzaza.",
  "18 de agosto de 2026: presentado como candidato de Alianza Fuerza en Buenaventura, parroquia Timbara.",
];

export function buildLlmsTxt(): string {
  const url = getSiteUrl();
  return [
    "# Lucho Balladares — Alcaldía de Zamora 2027–2031",
    "",
    `> ${SUMMARY}`,
    "",
    "## Candidato",
    `- [Quién es Luis Balladares](${url}/luis): perfil y forma de trabajar.`,
    `- [Trayectoria](${url}/trayectoria): experiencia pública desde 2006.`,
    "",
    "## Propuestas y plan de trabajo",
    `- [Plan de trabajo 2027–2031](${url}/plan-de-trabajo): visión 2031, ocho objetivos, cinco ejes, cronograma y participación ciudadana.`,
    `- [Propuestas](${url}/propuestas): prioridades por tema.`,
    ...PROPOSAL_TOPICS.map((t) => `- [${t.title}](${url}/propuestas/${t.slug}): ${t.summary}`),
    "",
    "## Territorio",
    `- [El cantón Zamora](${url}/territorio): 30.186 habitantes (Censo 2022), dos parroquias urbanas y seis rurales.`,
    ...TERRITORIES.map((t) => `- [${t.name}](${url}/territorio/${t.slug}): parroquia ${t.type}.`),
    "",
    "## Campaña",
    `- [Noticias](${url}/noticias): momentos clave de la campaña.`,
    `- [Agenda](${url}/agenda): eventos y entrevistas.`,
    `- [Redes](${url}/redes): página oficial de Facebook (facebook.com/luchoballadaresv).`,
    `- [Transparencia](${url}/transparencia): identidad electoral.`,
    "",
    "## Opcional",
    `- [Versión completa para modelos de lenguaje](${url}/llms-full.txt): plan de trabajo y propuestas en texto plano.`,
    "",
  ].join("\n");
}

export function buildLlmsFullTxt(): string {
  const url = getSiteUrl();
  const lines: string[] = [
    "# Lucho Balladares — Alcaldía de Zamora 2027–2031",
    "",
    `> ${SUMMARY}`,
    "",
    `Fuente: ${url}`,
    "",
    "## Perfil y trayectoria",
    ...PROFILE.map((p) => `- ${p}`),
    "",
    "## Plan de trabajo 2027–2031",
    "",
    "### Visión 2031",
    VISION,
    "",
    "### Objetivo general",
    GENERAL_OBJECTIVE,
    "",
    "### Objetivos",
    ...SPECIFIC_OBJECTIVES.map((o, i) => `${i + 1}. ${o.title}: ${o.text}`),
    "",
  ];
  AXES.forEach((axis, i) => {
    lines.push(`### Eje ${i + 1}: ${axis.short}`, axis.approach, "", `Programas: ${axis.programs.join(", ")}.`, "");
    for (const p of axis.proposals) {
      lines.push(`- ${p.title}. ${p.message} Cómo se hará: ${p.execution}`);
    }
    lines.push("");
  });
  lines.push(
    "### Participación y rendición de cuentas",
    ...PARTICIPATION.map((m) => `- ${m.name} (${m.frequency.toLowerCase()}): ${m.commitment}`),
    "",
    "### Compromiso del candidato",
    `"${COMMITMENT}"`,
    "",
    "## Territorio",
    ...TERRITORIES.map((t) => `- ${t.name} (parroquia ${t.type}): ${t.context}`),
    ""
  );
  return lines.join("\n");
}
