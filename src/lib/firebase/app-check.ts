/**
 * Firebase App Check (cliente) — protección anti-abuso de los endpoints
 * /api/forms/* (plan, sección 40; ver también apphosting.yaml).
 *
 * Provider: reCAPTCHA Enterprise (el clásico está marcado como obsoleto
 * en la consola de Firebase). Registrado en modo "monitoreo": el
 * servidor (`src/lib/firebase/admin.ts` → `verifyAppCheckToken`) todavía
 * NO bloquea solicitudes sin token válido, solo lo registra — activar el
 * bloqueo (enforcement) es una decisión explícita posterior, tras
 * observar métricas unos días (sección 30 del plan de implementación).
 *
 * Solo debe importarse desde Client Components.
 */
import type { AppCheck } from "firebase/app-check";

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

let appCheckInstance: AppCheck | null = null;

async function getOrInitAppCheck(): Promise<AppCheck | null> {
  if (appCheckInstance) return appCheckInstance;
  if (typeof window === "undefined" || !siteKey) return null;

  // Static exports prerender Client Components on the server. Defer all
  // Firebase imports until a real browser session has the public config.
  const [{ initializeAppCheck, ReCaptchaEnterpriseProvider }, { firebaseApp }] = await Promise.all([
    import("firebase/app-check"),
    import("./client"),
  ]);

  // Token de depuración para localhost: se genera solo, hay que
  // registrarlo manualmente en la consola de Firebase la primera vez.
  // Nunca se activa en producción.
  if (process.env.NODE_ENV !== "production") {
    (self as typeof self & { FIREBASE_APPCHECK_DEBUG_TOKEN?: boolean | string }).FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  }

  appCheckInstance = initializeAppCheck(firebaseApp, {
    provider: new ReCaptchaEnterpriseProvider(siteKey),
    isTokenAutoRefreshEnabled: true,
  });
  return appCheckInstance;
}

/**
 * Token de App Check para el header `X-Firebase-AppCheck` en llamadas a
 * /api/forms/*. Si no está disponible (clave sin configurar, error de
 * red), devuelve `null` y el formulario sigue funcionando igual — el
 * servidor está en modo monitoreo, no exige el token todavía.
 */
export async function getAppCheckToken(): Promise<string | null> {
  const instance = await getOrInitAppCheck();
  if (!instance) return null;

  try {
    const { getToken } = await import("firebase/app-check");
    const result = await getToken(instance, false);
    return result.token;
  } catch (error) {
    console.warn("No se pudo obtener el token de App Check:", error);
    return null;
  }
}
