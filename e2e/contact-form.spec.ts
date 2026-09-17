import { test, expect } from "@playwright/test";

/**
 * El envío real escribe en Firestore vía Admin SDK. Para no ensuciar la
 * base de datos real en cada corrida de CI, se intercepta la ruta y se
 * verifica solo el contrato cliente↔API (payload enviado, manejo de
 * éxito/error), no la escritura en Firestore en sí.
 */
test.describe("Formulario de contacto", () => {
  test("envía el payload esperado y muestra confirmación", async ({ page }) => {
    let requestBody: unknown;

    await page.route("**/api/forms/contact", async (route) => {
      requestBody = route.request().postDataJSON();
      await route.fulfill({ status: 200, json: { ok: true } });
    });

    await page.goto("/contacto");

    await page.getByLabel("Nombre").fill("Prueba E2E");
    await page.getByLabel("Correo o teléfono").fill("prueba@example.com");
    await page.getByLabel("Mensaje", { exact: true }).fill("Este es un mensaje de prueba automatizada end-to-end.");
    await page.getByLabel(/he leído la información/i).check();
    await page.getByRole("button", { name: "Enviar mensaje" }).click();

    await expect(page.getByRole("status")).toContainText("Mensaje enviado");
    expect(requestBody).toMatchObject({
      name: "Prueba E2E",
      contact: "prueba@example.com",
      consent: true,
    });
  });

  test("muestra el error que devuelve el servidor", async ({ page }) => {
    await page.route("**/api/forms/contact", async (route) => {
      await route.fulfill({ status: 429, json: { error: "Demasiadas solicitudes." } });
    });

    await page.goto("/contacto");

    await page.getByLabel("Nombre").fill("Prueba E2E");
    await page.getByLabel("Correo o teléfono").fill("prueba@example.com");
    await page.getByLabel("Mensaje", { exact: true }).fill("Este es un mensaje de prueba automatizada end-to-end.");
    await page.getByLabel(/he leído la información/i).check();
    await page.getByRole("button", { name: "Enviar mensaje" }).click();

    // El formulario usa `noValidate` (el error final lo decide Zod en el
    // servidor, no el navegador), así que se busca el texto directamente:
    // `getByRole("alert")` también matchea el route-announcer de Next.js.
    await expect(page.getByText("Demasiadas solicitudes.")).toBeVisible();
  });

  test("muestra el error de validación cuando falta el consentimiento", async ({ page }) => {
    // El checkbox es `required`, pero el formulario tiene `noValidate`:
    // la validación final la hace Zod en el servidor y el cliente muestra
    // el mensaje que este devuelva.
    await page.route("**/api/forms/contact", async (route) => {
      await route.fulfill({
        status: 400,
        json: {
          error: "Datos inválidos.",
          issues: ["Debes leer y aceptar el tratamiento de datos."],
        },
      });
    });

    await page.goto("/contacto");
    await page.getByLabel("Nombre").fill("Prueba E2E");
    await page.getByLabel("Correo o teléfono").fill("prueba@example.com");
    await page.getByLabel("Mensaje", { exact: true }).fill("Este es un mensaje de prueba automatizada end-to-end.");
    // No se marca el checkbox de consentimiento.
    await page.getByRole("button", { name: "Enviar mensaje" }).click();

    await expect(page.getByText("Debes leer y aceptar el tratamiento de datos.")).toBeVisible();
  });
});
