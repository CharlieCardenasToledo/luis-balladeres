import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Accesibilidad",
  description: "Compromiso de accesibilidad del sitio de campaña.",
};

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Accesibilidad</h1>
      <p className="mt-4 text-charcoal">Trabajamos para que este sitio pueda ser utilizado por la mayor cantidad de personas posible.</p>
      <ul className="mt-6 list-inside list-disc space-y-2 text-charcoal">
        <li>La navegación principal funciona con teclado.</li>
        <li>Los botones y enlaces mantienen estados de foco visibles.</li>
        <li>El contenido se adapta a pantallas móviles.</li>
        <li>Las imágenes informativas incluyen texto alternativo.</li>
      </ul>
      <p className="mt-6 text-charcoal">Si encuentras una barrera de acceso, puedes reportarla desde el formulario de contacto.</p>
    </div>
  );
}
