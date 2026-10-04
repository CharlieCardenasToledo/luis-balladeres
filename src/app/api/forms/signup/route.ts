import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { getAdminFirestore, verifyAppCheckToken } from "@/lib/firebase/admin";
import { clientIp, createRateLimiter } from "@/lib/rate-limit";
import { CONSENT_VERSION } from "@/lib/validation/contact";
import { signupSchema } from "@/lib/validation/signup";

const isRateLimited = createRateLimiter(10 * 60 * 1000, 5);

export async function POST(request: Request) {
  const appCheck = await verifyAppCheckToken(request);
  if (!appCheck.verified) {
    console.warn(`App Check (registro) no verificado: ${appCheck.reason}`);
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

  const parsed = signupSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos.", issues: parsed.error.issues.map((i) => i.message) },
      { status: 400 }
    );
  }

  const { name, phone } = parsed.data;

  try {
    await getAdminFirestore().collection("formSubmissions").add({
      sourceForm: "registro-home",
      name,
      phone,
      consentVersion: CONSENT_VERSION,
      consentAt: FieldValue.serverTimestamp(),
      createdAt: FieldValue.serverTimestamp(),
      status: "new",
    });
  } catch (error) {
    console.error("Error al guardar registro:", error);
    return NextResponse.json(
      { error: "No se pudo completar el registro. Intenta de nuevo más tarde." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
