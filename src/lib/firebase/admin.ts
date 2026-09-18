/**
 * Inicialización estándar del SDK admin de Firebase (solo servidor).
 *
 * IMPORTANTE: nunca importar este archivo desde un Client Component
 * ni exponer estas credenciales al navegador. Las variables de entorno
 * correspondientes NO deben tener el prefijo NEXT_PUBLIC_.
 *
 * En producción, estos valores deben provenir de Secret Manager
 * (ver plan_web_luis_balladares_ux_ui_firebase.md, sección 41),
 * nunca commitearse en texto plano.
 */
import { cert, getApps, initializeApp, type App } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import { getAuth } from "firebase-admin/auth";

function getAdminApp(): App {
  if (getApps().length) {
    return getApps()[0];
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  // Las claves privadas suelen llegar con \n escapados desde el entorno.
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      "Faltan variables de entorno de Firebase Admin (FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY). " +
        "Revisa .env.example y configura Secret Manager en producción."
    );
  }

  return initializeApp({
    credential: cert({ projectId, clientEmail, privateKey }),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  });
}

/**
 * Acceso perezoso: solo inicializa cuando algo realmente lo usa,
 * para no romper `next build` en entornos sin variables configuradas.
 */
export function getAdminFirestore() {
  return getFirestore(getAdminApp());
}

export function getAdminStorage() {
  return getStorage(getAdminApp());
}

export function getAdminAuth() {
  return getAuth(getAdminApp());
}

/**
 * Verifica el header `X-Firebase-AppCheck` de una API route.
 *
 * Modo monitoreo (plan, sección 40 y 30 del plan de implementación):
 * NUNCA lanza ni bloquea la solicitud — solo informa si el token es
 * válido, ausente o inválido, para que las API routes registren la señal
 * sin arriesgarse a bloquear tráfico legítimo mientras no se hayan
 * observado unos días de métricas. Activar el bloqueo real es un cambio
 * explícito posterior en cada route.ts, no aquí.
 */
export async function verifyAppCheckToken(
  request: Request
): Promise<{ verified: boolean; reason: "missing" | "invalid" | "ok" }> {
  const token = request.headers.get("X-Firebase-AppCheck");
  if (!token) return { verified: false, reason: "missing" };

  try {
    const { getAppCheck } = await import("firebase-admin/app-check");
    await getAppCheck(getAdminApp()).verifyToken(token);
    return { verified: true, reason: "ok" };
  } catch (error) {
    console.warn("App Check: token inválido (modo monitoreo, no se bloquea):", error);
    return { verified: false, reason: "invalid" };
  }
}
