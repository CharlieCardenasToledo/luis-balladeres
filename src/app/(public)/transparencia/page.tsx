import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transparencia",
  description: "Identidad electoral y compromisos públicos de la candidatura de Luis Balladares.",
};

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Transparencia</h1>

      <h2 className="mt-8 font-display text-xl text-black">Identidad electoral</h2>
      <p className="mt-2 text-charcoal">
        Luis Fernando Balladares Villavicencio es candidato a la Alcaldía de Zamora por Fuerza
        Democrática, listas 2-4-12-21. Su candidatura fue calificada por la Junta Provincial
        Electoral en agosto de 2026, sin objeciones.
      </p>

      <h2 className="mt-8 font-display text-xl text-black">Trayectoria y plan de trabajo</h2>
      <p className="mt-2 text-charcoal">
        Conoce su{" "}
        <Link href="/trayectoria" className="text-brand-magenta underline underline-offset-4">
          experiencia pública
        </Link>{" "}
        y el{" "}
        <Link href="/plan-de-trabajo" className="text-brand-magenta underline underline-offset-4">
          plan de trabajo 2027–2031
        </Link>
        .
      </p>
    </div>
  );
}
