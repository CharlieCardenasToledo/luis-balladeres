import { describe, expect, it } from "vitest";
import { signupSchema } from "./signup";

const validPayload = { name: "Ana Torres", phone: "+593 99 123 4567", consent: true, website: "" };

describe("signupSchema", () => {
  it("acepta un registro válido y descarta el honeypot", () => {
    const result = signupSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toEqual({ name: "Ana Torres", phone: "+593 99 123 4567", consent: true });
    }
  });

  it("rechaza un teléfono con letras", () => {
    expect(signupSchema.safeParse({ ...validPayload, phone: "llámame" }).success).toBe(false);
  });

  it("rechaza sin consentimiento", () => {
    expect(signupSchema.safeParse({ ...validPayload, consent: false }).success).toBe(false);
  });

  it("rechaza si el honeypot viene lleno", () => {
    expect(signupSchema.safeParse({ ...validPayload, website: "http://spam.example" }).success).toBe(false);
  });
});
