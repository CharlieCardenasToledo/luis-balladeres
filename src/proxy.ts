import { NextResponse, type NextRequest } from "next/server";

// La URL por defecto de App Hosting sirve el mismo contenido que el dominio
// propio; se redirige para que buscadores indexen una sola versión del sitio.
export function proxy(request: NextRequest) {
  const hosts = [request.headers.get("x-forwarded-host"), request.headers.get("host"), request.nextUrl.hostname];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl && hosts.some((h) => h?.split(",")[0].trim().endsWith(".hosted.app"))) {
    const target = new URL(request.nextUrl.pathname + request.nextUrl.search, siteUrl);
    return NextResponse.redirect(target, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/|api/|favicon.ico).*)"],
};
