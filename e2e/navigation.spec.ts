import { test, expect } from "@playwright/test";

test.describe("Navegación pública", () => {
  test("homepage muestra el hero y el header aparece al hacer scroll", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1, name: /yo lucho/i })).toBeVisible();

    // Chromium no resuelve `transform: translateY(-100%)` a una matriz en
    // getComputedStyle (queda como "none" aunque sí se aplique visualmente),
    // así que se verifica la posición real en pantalla, no el CSS.
    const header = page.locator("header");
    await expect(async () => {
      const box = await header.boundingBox();
      expect(box?.y).toBeLessThan(0);
    }).toPass();

    await page.mouse.wheel(0, 900);

    await expect(async () => {
      const box = await header.boundingBox();
      expect(box?.y).toBe(0);
    }).toPass();
  });

  test("header queda visible desde el inicio en páginas sin Hero", async ({ page }) => {
    await page.goto("/trayectoria");

    await expect(page.getByRole("heading", { level: 1, name: "Trayectoria" })).toBeVisible();
    const box = await page.locator("header").boundingBox();
    expect(box?.y).toBe(0);
  });

  test.describe("enlaces principales", () => {
    for (const [label, path, headingText] of [
      ["Luis", "/luis", "Luis"],
      ["Propuestas", "/propuestas", "Propuestas"],
      ["Zamora", "/territorio", "Territorio"],
      ["Noticias", "/noticias", "Noticias"],
      ["Contacto", "/contacto", "Contacto"],
    ] as const) {
      test(`navega a ${path} desde el menú`, async ({ page }) => {
        await page.goto("/trayectoria"); // página con header siempre visible, sin ambigüedad de duplicados
        await page.getByRole("link", { name: label, exact: true }).first().click();
        await expect(page).toHaveURL(new RegExp(`${path}$`));
        await expect(page.getByRole("heading", { level: 1, name: headingText })).toBeVisible();
      });
    }
  });

  test("una parroquia inexistente devuelve 404", async ({ page }) => {
    const response = await page.goto("/territorio/no-existe");
    expect(response?.status()).toBe(404);
  });

  test("una parroquia real muestra su contexto y fuente", async ({ page }) => {
    await page.goto("/territorio/timbara");
    await expect(page.getByRole("heading", { level: 1, name: "Timbara" })).toBeVisible();
    await expect(page.getByText(/No encontradas/i)).toBeVisible();
  });
});
