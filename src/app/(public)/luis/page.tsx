import type { Metadata } from "next";
import Image from "next/image";
import { SourceNote, NotFoundList } from "@/components/ui/SourceNote";
import luisRetrato from "../../../../public/media/luis-retrato.png";

export const metadata: Metadata = {
  title: "Luis",
  description:
    "Conoce a Luis Balladares, su experiencia pública y la forma de trabajar que propone para Zamora.",
};

const FUENTES_FORMACION = [{ label: "Directorio de graduados, Universidad Nacional de Loja", url: "https://alumni.unl.edu.ec/directorio/listar_carrera/2/B" }];

const FUENTES_TRAYECTORIA = [
  { label: "La Hora — Gobernación / Jefatura Política, 2006", url: "https://www.lahora.com.ec/archivo/Gobernador-posesiona-a-Intendente-y-Jefe-Politico-20060401-0112.html" },
  { label: "GAD Provincial de Zamora Chinchipe — ordenanzas 2017–2019", url: "https://zamora-chinchipe.gob.ec/wp-content/uploads/2018/01/65.-ORDENANZA-QUE-REGULA-LA-CONSULTA-PRELEGISLATIVA.pdf" },
  { label: "GAD Municipal de Zamora — documentación 2020–2023", url: "https://www.zamora.gob.ec/wp-content/uploads/2020/09/DOC.-1.b-MEMO-685-CONVOCATORIA-REUNION-GERENTES-Y-DIRECTORES.pdf" },
  { label: "InfoZamora — candidatura calificada, agosto 2026", url: "https://infozamoraec.com/index.php/2026/08/21/junta-provincial-electoral-califica-candidatura-de-luis-fernando-balladares-para-la-alcaldia-de-zamora/" },
];

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <Image
          src={luisRetrato}
          alt="Luis Fernando Balladares Villavicencio"
          className="h-32 w-32 rounded-full object-cover object-top sm:h-40 sm:w-40"
          priority
        />
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-magenta">El candidato</p>
          <h1 className="mt-2 font-display text-3xl text-black sm:text-4xl">Una experiencia al servicio de Zamora</h1>
        </div>
      </div>

      <p className="mt-6 text-lg leading-8 text-charcoal">
        Luis Fernando Balladares Villavicencio conoce la gestión pública desde dentro. Su propuesta
        es poner esa experiencia al servicio de una Zamora que cuide sus recursos, ordene sus
        prioridades y rinda cuentas de cada avance.
      </p>
      <p className="mt-4 text-charcoal">
        Cursó Derecho en la Universidad Nacional de Loja, cuyo directorio de graduados registra su
        nombre en esa carrera con el año 2007.
      </p>
      <SourceNote status="Verificado — fuente universitaria" sources={FUENTES_FORMACION} />

      <p className="mt-6 text-charcoal">
        Su trayectoria pública aparece documentada desde 2006 en Zamora Chinchipe: ese año medios
        de la época registraron que se desempeñó como Intendente y posteriormente asumió como Jefe
        Político del cantón Zamora, con actuaciones registradas también como gobernador encargado.
        Más adelante aparece en documentos oficiales como Secretario General del Gobierno
        Provincial de Zamora Chinchipe (con evidencia documental al menos en 2010, 2011, 2017,
        2018 y enero de 2019) y, entre 2020 y mayo de 2023, como Secretario General del GAD
        Municipal de Zamora. En junio de 2023 un directorio oficial de la Prefectura lo registra
        como Prosecretario; para diciembre de 2023 y en documentos de agosto de 2024 vuelve a
        constar como Secretario General del Consejo Provincial. En 2018 fue registrado entre los
        miembros fundadores de la Fundación para la Gestión Ambiental Yaku Ñan. En 2026 fue
        presentado primero como precandidato y luego como candidato a la Alcaldía de Zamora por la
        alianza Fuerza Democrática, listas 2-4-12-21.
      </p>
      <SourceNote
        status="Verificado — documentos oficiales y medios"
        sources={FUENTES_TRAYECTORIA}
        note="Ver la cronología completa, con cada fuente individual, en /trayectoria."
      />

      <NotFoundList
        title="Datos personales no encontrados públicamente"
        items={[
          "fecha de nacimiento",
          "edad",
          "lugar de nacimiento",
          "nombres de padres",
          "estado civil",
          "cónyuge / hijos",
          "educación primaria y secundaria",
          "relato autobiográfico o motivaciones personales",
        ]}
      />
    </div>
  );
}
