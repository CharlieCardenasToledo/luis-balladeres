/**
 * Aviso visible de contenido pendiente. Se usa en toda página o sección
 * cuyo contenido real (biografía, fechas, propuestas, cifras) todavía
 * no ha sido entregado ni validado por el candidato/campaña.
 *
 * Nunca reemplazar este aviso por datos inventados.
 */
export function PlaceholderNotice({ label = "Contenido pendiente" }: { label?: string }) {
  return (
    <p className="inline-block rounded-sm border border-dashed border-gray-300 bg-gray-100 px-3 py-1 text-sm text-gray-600">
      [{label}]
    </p>
  );
}
