import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

/**
 * Metadata SEO básica a nivel de sitio (plan, sección 22).
 * Resumen factual con fuente pública — ver
 * inventario_contenidos_web_luis_balladares_17sep2026.md, sección 2.
 */
const siteName = "Luis Balladares — Alcaldía de Zamora";
const siteDescription =
  "Luis Fernando Balladares Villavicencio, candidato a la Alcaldía del cantón Zamora por la alianza Fuerza Democrática. Trayectoria, propuestas y fuentes verificables.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s · ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-EC">
      <body className={`${inter.variable} ${archivoBlack.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-magenta focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido principal
        </a>
        <Header />
        {/*
          pt-16 reserva el alto del header fijo (ver Header.tsx). El Hero
          de la homepage cancela este padding con -mt-16 para ocupar
          100svh reales; el resto de páginas lo necesita para que el
          header fijo no tape el contenido.
        */}
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
