/**
 * Fotografías de campaña publicadas en la página oficial de Facebook
 * (facebook.com/luchoballadaresv). Solo se nombra un lugar cuando la propia
 * publicación lo indica; el resto se describe sin fecha ni sitio.
 */
export type CampaignPhoto = {
  src: string;
  alt: string;
};

export const CAMPAIGN_PHOTOS_SOURCE = {
  label: "Página oficial de Facebook — Lucho Balladares",
  url: "https://www.facebook.com/luchoballadaresv",
};

const p = (file: string, alt: string): CampaignPhoto => ({ src: `/media/campana/${file}.webp`, alt });

export const PHOTOS = {
  recorrido06: p("recorrido-06", "Luis Balladares junto a un adulto mayor durante un recorrido de campaña"),
  recorrido12: p("recorrido-12", "Luis Balladares conversa con una vecina durante un encuentro comunitario"),
  recorrido17: p("recorrido-17", "Luis Balladares saluda a un grupo de adultas mayores"),
  recorrido19: p("recorrido-19", "Luis Balladares camina con vecinos en una zona rural"),
  recorrido21: p("recorrido-21", "Luis Balladares con dos adultos mayores en una comunidad"),
  recorrido23: p("recorrido-23", "Luis Balladares junto a un agricultor, con las montañas de Zamora al fondo"),
  equipo24: p("equipo-24", "Equipo de campaña reunido en un encuentro nocturno"),
  dialogo30: p("dialogo-30", "Luis Balladares escucha a vecinos en una reunión"),
  recorrido51: p("recorrido-51", "Luis Balladares con un grupo de agricultores"),
  recorrido53: p("recorrido-53", "Luis Balladares abraza a una vecina durante un recorrido"),
  recorrido54: p("recorrido-54", "Luis Balladares saluda a vecinos de una comunidad rural"),
  asamblea69: p("asamblea-69", "Asistentes a una asamblea de Alianza Fuerza en un coliseo"),
  recorrido88: p("recorrido-88", "Luis Balladares conversa con agricultores en una comunidad"),
  recorrido03: p("recorrido-03", "Luis Balladares acompaña a una adulta mayor en un evento comunitario"),
  recorrido10: p("recorrido-10", "Luis Balladares en un encuentro con vecinos"),
  recorrido11: p("recorrido-11", "Luis Balladares con participantes de una actividad comunitaria"),
  recorrido16: p("recorrido-16", "Luis Balladares junto a vecinos durante una entrega comunitaria"),
  recorrido20: p("recorrido-20", "Luis Balladares saluda a una vecina"),
  dialogo28: p("dialogo-28", "Reunión de diálogo con vecinos"),
  dialogo29: p("dialogo-29", "Vecinos toman la palabra en una reunión de campaña"),
  recorrido52: p("recorrido-52", "Luis Balladares conversa con vecinas en un recorrido"),
  recorrido61: p("recorrido-61", "Luis Balladares con habitantes de una comunidad rural"),
  encuentro62: p("encuentro-62", "Encuentro con simpatizantes de la campaña"),
  encuentro63: p("encuentro-63", "Encuentro con simpatizantes de la campaña"),
  encuentro64: p("encuentro-64", "Simpatizantes de la campaña reunidos"),
  recorrido89: p("recorrido-89", "Luis Balladares con habitantes de una comunidad"),
  recorrido43: p("recorrido-43", "Luis Balladares saluda a una vecina durante un recorrido"),
  cuzuntza35: p("cuzuntza-35", "Encuentro con vecinos en Cuzuntza"),
  cumbaratza56: p("cumbaratza-56", "Encuentro con vecinos en Cumbaratza"),
  timbara57: p("timbara-57", "Encuentro con vecinos en Timbara"),
  imbana34: p("imbana-34", "Luis Balladares abraza a una vecina en Imbana"),
  imbana36: p("imbana-36", "Luis Balladares conversa con un vecino en Imbana"),
  imbana37: p("imbana-37", "Luis Balladares durante un recorrido en Imbana"),
  alianza38: p("alianza-38", "Evento de Alianza Fuerza"),
  alianza40: p("alianza-40", "Luis Balladares con integrantes de Alianza Fuerza"),
  alianza41: p("alianza-41", "Luis Balladares con simpatizantes de Alianza Fuerza"),
  alianza67: p("alianza-67", "Caminata de Alianza Fuerza"),
  alianza68: p("alianza-68", "Candidatos de Alianza Fuerza en un coliseo"),
  asamblea70: p("asamblea-70", "Luis Balladares saluda a los asistentes de una asamblea"),
  entrevistaMasQuePolitica: p("entrevista-mas-que-politica-01", "Anuncio de la entrevista en el programa + que política"),
  entrevistaRectv: p("entrevista-rectv-33", "Anuncio de la entrevista en RecTV Online"),
  candidaturaCalificada: p("candidatura-calificada-39", "Anuncio de la calificación de la candidatura"),
  agendaLaZeta: p("agenda-la-zeta-42", "Anuncio de la entrevista en La Zeta"),
  agendaZetaRadio: p("agenda-zeta-radio-55", "Anuncio de la entrevista en Zeta Radio"),
} satisfies Record<string, CampaignPhoto>;

export const TERRITORY_PHOTOS: Record<string, CampaignPhoto[]> = {
  cumbaratza: [PHOTOS.cumbaratza56],
  imbana: [PHOTOS.imbana34, PHOTOS.imbana36, PHOTOS.imbana37],
  timbara: [PHOTOS.timbara57],
};
