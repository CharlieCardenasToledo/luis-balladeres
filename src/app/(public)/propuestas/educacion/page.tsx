import type { Metadata } from "next";
import { ProposalDetail } from "@/components/proposals/ProposalDetail";

export const metadata: Metadata = {
  title: "Educación",
  description: "Infraestructura educativa y apoyos focalizados para estudiantes.",
};

export default function Page() {
  return (
    <ProposalDetail
      slug="educacion"
      content="Mejorar la infraestructura educativa en coordinación con las instituciones responsables y apoyar a los estudiantes con ayudas transparentes y focalizadas."
      sources={[{ label: "InfoZamora, 28 de abril de 2026", url: "https://infozamoraec.com/index.php/2026/04/28/luis-balladarez-oficializa-su-candidatura-a-la-alcaldia-de-zamora-y-plantea-prioridades-para-el-canton/" }]}
      related={["Becas, ayudas e incentivos educativos focalizados","Internet gratuito y seguro en espacios públicos"]}
    />
  );
}
