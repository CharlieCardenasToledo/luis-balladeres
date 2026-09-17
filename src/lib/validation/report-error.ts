import { z } from "zod";

/**
 * Formulario de corrección de errores (plan, sección 47).
 * Pide solo lo necesario para localizar y verificar el error; el correo
 * es opcional porque no se requiere para procesar la corrección.
 */
export const reportErrorSchema = z
  .object({
    page: z.string().trim().min(1, "Indica la página o sección con el error.").max(300),
    description: z.string().trim().min(10, "Describe el error con más detalle.").max(3000),
    alternativeSource: z.string().trim().max(500).optional().or(z.literal("")),
    email: z.string().trim().email("Correo inválido.").max(160).optional().or(z.literal("")),
    // Honeypot: campo invisible para personas, solo lo rellenan bots.
    website: z.string().max(0).optional().or(z.literal("")),
  })
  .transform(({ page, description, alternativeSource, email }) => ({
    page,
    description,
    alternativeSource: alternativeSource || undefined,
    email: email || undefined,
  }));

export type ReportErrorInput = z.infer<typeof reportErrorSchema>;
