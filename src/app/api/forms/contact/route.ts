import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { getAdminFirestore } from "@/lib/firebase/admin";
import { contactFormSchema, CONSENT_VERSION } from "@/lib/validation/contact";

/**
 * Rate limit en memoria (por instancia): protección mínima contra
 * envíos automatizados mientras no exista Firebase App Check
 * (plan, sección 40 y 56). No es distribuido: en un despliegue con
 * varias instancias cada una lleva su propio conteo. Suficiente para
 * frenar spam simple, no sustituye App Check + rate limit real.
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

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos.", issues: parsed.error.issues.map((i) => i.message) },
      { status: 400 }
    );
  }

  const { name, contact, message } = parsed.data;

  try {
    const db = getAdminFirestore();
    await db.collection("formSubmissions").add({
      sourceForm: "contacto",
      name,
      contact,
      message,
      consentVersion: CONSENT_VERSION,
      consentAt: FieldValue.serverTimestamp(),
      createdAt: FieldValue.serverTimestamp(),
      status: "new",
    });
  } catch (error) {
    console.error("Error al guardar formSubmissions:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intenta de nuevo más tarde." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
