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

/** Lista compacta de datos no encontrados/no verificados, tal como los marca el inventario. */
export function NotFoundList({ title = "No encontrado / no verificado", items }: { title?: string; items: string[] }) {
  return (
    <div className="mt-6 rounded-md border border-dashed border-gray-300 bg-gray-100 px-4 py-3 text-sm text-gray-600">
      <p className="font-medium text-black">{title}</p>
      <ul className="mt-2 list-inside list-disc columns-1 gap-x-6 sm:columns-2">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
