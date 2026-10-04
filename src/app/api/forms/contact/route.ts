import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { getAdminFirestore, verifyAppCheckToken } from "@/lib/firebase/admin";
import { clientIp, createRateLimiter } from "@/lib/rate-limit";
import { contactFormSchema, CONSENT_VERSION } from "@/lib/validation/contact";

const isRateLimited = createRateLimiter(10 * 60 * 1000, 5);

export async function POST(request: Request) {
  // Modo monitoreo: se registra la señal de App Check, pero no bloquea
  // todavía (ver verifyAppCheckToken en src/lib/firebase/admin.ts).
  const appCheck = await verifyAppCheckToken(request);
  if (!appCheck.verified) {
    console.warn(`App Check (contacto) no verificado: ${appCheck.reason}`);
  }

  if (isRateLimited(clientIp(request))) {
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
