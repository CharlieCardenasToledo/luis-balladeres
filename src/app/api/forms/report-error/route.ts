import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { getAdminFirestore, verifyAppCheckToken } from "@/lib/firebase/admin";
import { reportErrorSchema } from "@/lib/validation/report-error";

/**
 * Rate limit en memoria (por instancia) — misma limitación que
 * /api/forms/contact: no es distribuido, protección mínima (plan,
 * secciones 40 y 56). App Check corre en modo monitoreo (ver
 * verifyAppCheckToken): todavía no bloquea, solo registra la señal.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  requestLog.set(key, timestamps);
  return timestamps.length > MAX_REQUESTS_PER_WINDOW;
}

export async function POST(request: Request) {
  const appCheck = await verifyAppCheckToken(request);
  if (!appCheck.verified) {
    console.warn(`App Check (reportar-error) no verificado: ${appCheck.reason}`);
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta de nuevo en unos minutos." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo de solicitud inválido." }, { status: 400 });
  }

  const parsed = reportErrorSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos.", issues: parsed.error.issues.map((i) => i.message) },
      { status: 400 }
    );
  }

  const { page, description, alternativeSource, email } = parsed.data;

  try {
    const db = getAdminFirestore();
    await db.collection("formSubmissions").add({
      sourceForm: "reportar-error",
      page,
      description,
      alternativeSource: alternativeSource ?? null,
      email: email ?? null,
      createdAt: FieldValue.serverTimestamp(),
      status: "new",
    });
  } catch (error) {
    console.error("Error al guardar reporte de error:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el reporte. Intenta de nuevo más tarde." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
