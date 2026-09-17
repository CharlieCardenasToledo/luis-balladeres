import { z } from "zod";

/**
 * Formulario de contacto (plan, sección 36).
 * Pide solo lo necesario: nombre, un medio de contacto, mensaje y
 * consentimiento explícito. Nunca cédula, fecha de nacimiento, dirección
 * exacta ni preferencia política.
 */
export const CONSENT_VERSION = "2026-09-17";

export const contactFormSchema = z
  .object({
    name: z.string().trim().min(2, "Ingresa tu nombre.").max(120),
    contact: z
      .string()
      .trim()
      .min(5, "Ingresa un correo o teléfono válido.")
      .max(160),
    message: z
      .string()
      .trim()
      .min(10, "El mensaje debe tener al menos 10 caracteres.")
      .max(5000),
    consent: z.literal(true, {
      error: "Debes leer y aceptar el tratamiento de datos.",
    }),
    // Honeypot: campo invisible para personas, solo lo rellenan bots.
    website: z.string().max(0).optional().or(z.literal("")),
  })
  .transform(({ name, contact, message, consent }) => ({ name, contact, message, consent }));

export type ContactFormInput = z.infer<typeof contactFormSchema>;
