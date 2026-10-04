/**
 * Nota de fuente/verificabilidad (plan, sección 46).
 * Toda afirmación factual sobre el candidato debe poder rastrearse
 * a una fuente pública. `status` refleja las convenciones del
 * inventario de contenidos (inventario_contenidos_web_luis_balladares_17sep2026.md):
 * VERIFICADO — FUENTE OFICIAL, VERIFICADO — MEDIO, MATERIAL DE CAMPAÑA
 * SUMINISTRADO, PARCIAL, etc.
 */
type Source = {
  label: string;
  url?: string;
};

export function SourceNote({
  status,
  sources,
  note,
}: {
  status?: string;
  sources: Source[];
  note?: string;
}) {
  // Las fuentes se conservan en los datos editoriales, pero no se muestran
  // en la experiencia pública de campaña.
  void status;
  void sources;
  void note;
  return null;
}
