import Image from "next/image";
import Link from "next/link";
import logoLuchoBalladares from "../../../public/brand/logo-lucho-balladares.png";

/**
 * Logotipo de campaña como enlace a inicio. El PNG tiene transparencia real
 * (fondo negro solo del visor de edición, no del archivo) — ver
 * linea_grafica_lucho_balladares.md. El texto del logo es blanco: sobre
 * fondos oscuros/saturados (magenta, negro) se usa directo; sobre fondos
 * claros (header) necesita un chip oscuro detrás para no perderse.
 */
export function BrandMark({
  className = "",
  imageClassName = "h-8 w-auto sm:h-9",
  chip = true,
  priority = false,
}: {
  className?: string;
  imageClassName?: string;
  chip?: boolean;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`flex items-center ${chip ? "rounded-md bg-black px-2 py-1.5" : ""} ${className}`}
    >
      <Image
        src={logoLuchoBalladares}
        alt="Lucho Balladares — Alcaldía de Zamora"
        className={imageClassName}
        priority={priority}
      />
    </Link>
  );
}
