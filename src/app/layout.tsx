import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getSiteUrl } from "@/lib/site";
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
 * Resumen público de campaña y candidatura.
 */
const siteName = "Luis Balladares — Alcaldía de Zamora";
const siteDescription =
  "Luis Fernando Balladares Villavicencio, candidato a la Alcaldía del cantón Zamora por la alianza Fuerza Democrática. Conoce su trayectoria y el proyecto para Zamora.";
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s · ${siteName}`,
  },
  description: siteDescription,
  applicationName: "Lucho Balladares",
  authors: [{ name: "Luis Fernando Balladares Villavicencio" }],
  keywords: [
    "Lucho Balladares",
    "Luis Fernando Balladares Villavicencio",
    "Alcaldía de Zamora",
    "Zamora Chinchipe",
    "elecciones seccionales 2027",
    "Fuerza Democrática",
    "Alianza Fuerza",
    "plan de trabajo Zamora",
  ],
  category: "politics",
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "es-EC",
      about: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Luis Fernando Balladares Villavicencio",
      alternateName: "Lucho Balladares",
      jobTitle: "Candidato a la Alcaldía del cantón Zamora",
      description:
        "Abogado, doctor en Jurisprudencia y servidor público de Zamora Chinchipe, candidato a la Alcaldía de Zamora 2027–2031 por Fuerza Democrática, listas 2-4-12-21.",
      url: `${siteUrl}/luis`,
      image: `${siteUrl}/media/luis-retrato.png`,
      alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad Nacional de Loja" },
      memberOf: { "@type": "PoliticalParty", name: "Alianza Fuerza Democrática" },
      homeLocation: {
        "@type": "Place",
        name: "Zamora, Zamora Chinchipe, Ecuador",
      },
      sameAs: ["https://www.facebook.com/luchoballadaresv"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-EC">
      <body className={`${inter.variable} ${archivoBlack.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
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
