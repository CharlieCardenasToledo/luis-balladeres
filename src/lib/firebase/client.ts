/**
 * Inicialización estándar del SDK cliente de Firebase.
 *
 * Todas las claves provienen de variables de entorno públicas
 * (NEXT_PUBLIC_FIREBASE_*). Ninguna se hardcodea aquí.
 *
 * Este archivo es seguro de importar desde Client Components.
 * Nunca importar `admin.ts` desde el navegador.
 */
import { getApp, getApps, initializeApp, type FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/**
 * Evita reinicializar la app en cada hot-reload / render en Next.js.
 */
export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp);
