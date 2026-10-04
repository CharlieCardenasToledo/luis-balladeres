import { z } from "zod";

/**
 * Registro rápido de la homepage: nombre, teléfono y consentimiento explícito.
 */
export const signupSchema = z
  .object({
    name: z.string().trim().min(2, "Ingresa tu nombre.").max(120),
    phone: z
      .string()
      .trim()
      .regex(/^\+?[\d\s-]{7,20}$/, "Ingresa un número de teléfono válido."),
    consent: z.literal(true, {
      error: "Debes aceptar el tratamiento de datos.",
    }),
    // Honeypot: campo invisible para personas, solo lo rellenan bots.
    website: z.string().max(0).optional().or(z.literal("")),
  })
  .transform(({ name, phone, consent }) => ({ name, phone, consent }));

export type SignupInput = z.infer<typeof signupSchema>;
