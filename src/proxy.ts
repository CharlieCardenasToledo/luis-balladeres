import { NextResponse, type NextRequest } from "next/server";

// La URL por defecto de App Hosting sirve el mismo contenido que el dominio
// propio; se redirige para que buscadores indexen una sola versión del sitio.
export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl && host.endsWith(".hosted.app")) {
    const target = new URL(request.nextUrl.pathname + request.nextUrl.search, siteUrl);
    return NextResponse.redirect(target, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/|api/|favicon.ico).*)"],
};
