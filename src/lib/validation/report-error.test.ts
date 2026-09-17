import { describe, expect, it } from "vitest";
import { reportErrorSchema } from "./report-error";

const validPayload = {
  page: "/trayectoria",
  description: "La fecha del cargo de 2017 no coincide con la fuente citada.",
};

describe("reportErrorSchema", () => {
  it("acepta un envío mínimo válido (sin campos opcionales)", () => {
    const result = reportErrorSchema.safeParse({ ...validPayload, website: "" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.page).toBe("/trayectoria");
      expect(result.data.alternativeSource).toBeUndefined();
      expect(result.data.email).toBeUndefined();
    }
  });

  it("acepta un envío con fuente alternativa y correo", () => {
    const result = reportErrorSchema.safeParse({
      ...validPayload,
      alternativeSource: "https://example.com/fuente",
      email: "persona@example.com",
      website: "",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.alternativeSource).toBe("https://example.com/fuente");
      expect(result.data.email).toBe("persona@example.com");
    }
  });

  it("rechaza sin página", () => {
    const result = reportErrorSchema.safeParse({ ...validPayload, page: "" });
    expect(result.success).toBe(false);
  });

  it("rechaza una descripción demasiado corta", () => {
    const result = reportErrorSchema.safeParse({ ...validPayload, description: "mal" });
    expect(result.success).toBe(false);
  });

  it("rechaza un correo con formato inválido", () => {
    const result = reportErrorSchema.safeParse({ ...validPayload, email: "no-es-un-correo" });
    expect(result.success).toBe(false);
  });

  it("rechaza cuando el honeypot viene relleno (bot)", () => {
    const result = reportErrorSchema.safeParse({ ...validPayload, website: "http://spam.example" });
    expect(result.success).toBe(false);
  });
});
