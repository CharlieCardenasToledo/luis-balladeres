"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { getAppCheckToken } from "@/lib/firebase/app-check";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Formulario de contacto (plan, secciones 36-37).
 * Pide solo nombre, un medio de contacto, mensaje y consentimiento
 * explícito (checkbox nunca preseleccionado). Incluye aviso de
 * privacidad visible antes de enviar.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const nameId = useId();
  const contactId = useId();
  const messageId = useId();
  const consentId = useId();
  const websiteId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      contact: String(formData.get("contact") ?? ""),
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
    };

    try {
      const appCheckToken = await getAppCheckToken();
      const response = await fetch("/api/forms/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(appCheckToken ? { "X-Firebase-AppCheck": appCheckToken } : {}),
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string; issues?: string[] }
          | null;
        setErrorMessage(data?.issues?.[0] ?? data?.error ?? "No se pudo enviar el mensaje.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrorMessage("No se pudo enviar el mensaje. Revisa tu conexión e intenta de nuevo.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="rounded-md border border-brand-green/40 bg-brand-green/10 px-4 py-3 text-sm text-black">
        Mensaje enviado. Gracias por escribir — responderemos por el medio de contacto indicado.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <label htmlFor={nameId} className="text-sm font-medium text-black">
          Nombre
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={120}
          autoComplete="name"
          className="min-h-11 rounded-md border border-gray-300 px-3 py-2 text-base text-black"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor={contactId} className="text-sm font-medium text-black">
          Correo o teléfono
        </label>
        <input
          id={contactId}
          name="contact"
          type="text"
          required
          minLength={5}
          maxLength={160}
          autoComplete="email"
          className="min-h-11 rounded-md border border-gray-300 px-3 py-2 text-base text-black"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor={messageId} className="text-sm font-medium text-black">
          Mensaje
        </label>
        <textarea
          id={messageId}
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          className="rounded-md border border-gray-300 px-3 py-2 text-base text-black"
        />
      </div>

      {/* Honeypot: oculto para personas, visible para bots simples. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor={websiteId}>No completar este campo</label>
        <input id={websiteId} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-xs text-gray-600">
        <p>
          Este formulario lo recibe el equipo de campaña de Luis Balladares para responder tu
          mensaje. No se usa para fines distintos ni se comparte con terceros. Puedes ejercer tus
          derechos sobre estos datos según se describe en{" "}
          <Link href="/privacidad" className="underline underline-offset-4">
            la política de privacidad
          </Link>
          .
        </p>
      </div>

      <div className="flex items-start gap-3">
        <input
          id={consentId}
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-5 w-5 shrink-0"
        />
        <label htmlFor={consentId} className="text-sm text-black">
          He leído la información sobre tratamiento de datos y acepto que mi mensaje sea
          procesado para recibir una respuesta.
        </label>
      </div>

      {status === "error" && errorMessage && (
        <p role="alert" className="text-sm text-brand-wine">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex min-h-11 items-center justify-center rounded-md bg-brand-magenta px-6 text-base font-medium text-white hover:bg-brand-wine disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
