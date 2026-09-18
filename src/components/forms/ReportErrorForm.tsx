"use client";

import { useId, useState, type FormEvent } from "react";
import { getAppCheckToken } from "@/lib/firebase/app-check";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Formulario de corrección de errores (plan, sección 47).
 * Campos: página, error detectado, fuente alternativa (opcional) y
 * correo (opcional, no se exige porque no hace falta para procesar
 * la corrección).
 */
export function ReportErrorForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const pageId = useId();
  const descriptionId = useId();
  const sourceId = useId();
  const emailId = useId();
  const websiteId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      page: String(formData.get("page") ?? ""),
      description: String(formData.get("description") ?? ""),
      alternativeSource: String(formData.get("alternativeSource") ?? ""),
      email: String(formData.get("email") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const appCheckToken = await getAppCheckToken();
      const response = await fetch("/api/forms/report-error", {
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
        setErrorMessage(data?.issues?.[0] ?? data?.error ?? "No se pudo enviar el reporte.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrorMessage("No se pudo enviar el reporte. Revisa tu conexión e intenta de nuevo.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="rounded-md border border-brand-green/40 bg-brand-green/10 px-4 py-3 text-sm text-black">
        Reporte enviado. Gracias por ayudar a mantener la información del sitio correcta.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <label htmlFor={pageId} className="text-sm font-medium text-black">
          Página
        </label>
        <input
          id={pageId}
          name="page"
          type="text"
          required
          maxLength={300}
          placeholder="Ej: /trayectoria"
          className="min-h-11 rounded-md border border-gray-300 px-3 py-2 text-base text-black"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor={descriptionId} className="text-sm font-medium text-black">
          Error detectado
        </label>
        <textarea
          id={descriptionId}
          name="description"
          required
          minLength={10}
          maxLength={3000}
          rows={5}
          className="rounded-md border border-gray-300 px-3 py-2 text-base text-black"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor={sourceId} className="text-sm font-medium text-black">
          Fuente alternativa <span className="font-normal text-gray-600">(opcional)</span>
        </label>
        <input
          id={sourceId}
          name="alternativeSource"
          type="text"
          maxLength={500}
          className="min-h-11 rounded-md border border-gray-300 px-3 py-2 text-base text-black"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor={emailId} className="text-sm font-medium text-black">
          Correo <span className="font-normal text-gray-600">(opcional, por si necesitamos más detalle)</span>
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          maxLength={160}
          autoComplete="email"
          className="min-h-11 rounded-md border border-gray-300 px-3 py-2 text-base text-black"
        />
      </div>

      {/* Honeypot: oculto para personas, visible para bots simples. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor={websiteId}>No completar este campo</label>
        <input id={websiteId} name="website" type="text" tabIndex={-1} autoComplete="off" />
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
        {status === "submitting" ? "Enviando…" : "Enviar reporte"}
      </button>
    </form>
  );
}
