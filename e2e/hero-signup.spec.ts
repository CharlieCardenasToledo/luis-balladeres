import { test, expect } from "@playwright/test";

// El formulario de registro solo se muestra en el Hero móvil.
test.use({ viewport: { width: 390, height: 844 } });

test.describe("Registro del Hero (móvil)", () => {
  test("envía nombre, teléfono y consentimiento a /api/forms/signup", async ({ page }) => {
    let requestBody: unknown;
    await page.route("**/api/forms/signup", async (route) => {
      requestBody = route.request().postDataJSON();
      await route.fulfill({ status: 200, json: { ok: true } });
    });

    await page.goto("/");
    await page.getByLabel("Nombre").fill("Prueba E2E");
    await page.getByLabel("Número de teléfono").fill("0991234567");
    await page.getByLabel(/acepto recibir información/i).check();
    await page.getByRole("button", { name: "Únete a nosotros" }).click();

    await expect(page.getByRole("status")).toContainText("Gracias por sumarte");
    expect(requestBody).toMatchObject({ name: "Prueba E2E", phone: "0991234567", consent: true });
  });

  test("muestra el error que devuelve el servidor", async ({ page }) => {
    await page.route("**/api/forms/signup", async (route) => {
      await route.fulfill({
        status: 400,
        json: { error: "Datos inválidos.", issues: ["Debes aceptar el tratamiento de datos."] },
      });
    });

    await page.goto("/");
    await page.getByLabel("Nombre").fill("Prueba E2E");
    await page.getByLabel("Número de teléfono").fill("0991234567");
    await page.getByRole("button", { name: "Únete a nosotros" }).click();

    await expect(page.getByText("Debes aceptar el tratamiento de datos.")).toBeVisible();
  });
});
