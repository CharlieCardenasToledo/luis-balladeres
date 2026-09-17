import { defineConfig, devices } from "@playwright/test";

/**
 * Smoke tests E2E (plan, sección 30 — Definition of Done, "navegación
 * completa"). Arranca su propio servidor de dev contra el que corre las
 * pruebas, para no depender de que ya haya uno activo.
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    // Reutiliza el servidor de dev si ya está corriendo (evita el conflicto
    // de lock de Next.js al intentar levantar una segunda instancia del
    // mismo proyecto). En CI, siempre arranca uno propio.
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
