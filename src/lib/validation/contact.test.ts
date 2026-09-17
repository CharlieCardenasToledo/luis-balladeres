import { describe, expect, it } from "vitest";
import { contactFormSchema } from "./contact";

const validPayload = {
  name: "Ana Pérez",
  contact: "ana@example.com",
  message: "Quisiera más información sobre las propuestas de agua.",
  consent: true as const,
};

describe("contactFormSchema", () => {
  it("acepta un envío válido y elimina el honeypot", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, website: "" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toEqual({
        name: "Ana Pérez",
        contact: "ana@example.com",
        message: "Quisiera más información sobre las propuestas de agua.",
        consent: true,
      });
      expect(result.data).not.toHaveProperty("website");
    }
  });

  it("rechaza un nombre demasiado corto", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, name: "A" });
    expect(result.success).toBe(false);
  });

  it("rechaza un mensaje demasiado corto", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, message: "hola" });
    expect(result.success).toBe(false);
  });

  it("rechaza cuando no se acepta el consentimiento", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, consent: false });
    expect(result.success).toBe(false);
  });

  it("rechaza cuando el honeypot viene relleno (bot)", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, website: "http://spam.example" });
    expect(result.success).toBe(false);
  });

  it("rechaza un contacto demasiado corto", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, contact: "abc" });
    expect(result.success).toBe(false);
  });
});
