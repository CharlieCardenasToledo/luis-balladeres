"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { getAppCheckToken } from "@/lib/firebase/app-check";

type Status = "idle" | "submitting" | "success" | "error";

export function HeroSignupForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const consentId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
    };

    try {
      const appCheckToken = await getAppCheckToken();
      const response = await fetch("/api/forms/signup", {
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
        setErrorMessage(data?.issues?.[0] ?? data?.error ?? "No se pudo completar el registro.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrorMessage("No se pudo completar el registro. Revisa tu conexión e intenta de nuevo.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="mt-6 bg-white px-5 py-4 text-center text-base font-semibold text-brand-wine">
        ¡Gracias por sumarte! Te escribiremos con novedades de la campaña.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-6 grid gap-3">
      <input name="name" aria-label="Nombre" placeholder="Nombre*" autoComplete="name" required maxLength={120} className="h-16 bg-white px-5 text-xl text-charcoal placeholder:text-gray-600" />
      <input name="phone" aria-label="Número de teléfono" placeholder="Número de teléfono*" type="tel" autoComplete="tel" required maxLength={20} className="h-16 bg-white px-5 text-xl text-charcoal placeholder:text-gray-600" />

      {/* Honeypot: oculto para personas, visible para bots simples. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-start gap-3">
        <input id={consentId} name="consent" type="checkbox" required className="mt-1 h-5 w-5 shrink-0" />
        <label htmlFor={consentId} className="text-sm leading-6 text-white/95">
          Acepto recibir información de la campaña y el tratamiento de mis datos según la{" "}
          <Link href="/privacidad" className="underline underline-offset-4">política de privacidad</Link>.
        </label>
      </div>

      {status === "error" && errorMessage && (
        <p role="alert" className="bg-white px-4 py-2 text-sm font-medium text-brand-wine">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex h-16 items-center justify-center bg-brand-wine px-3 text-center text-sm font-bold uppercase tracking-wide text-white disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando…" : "Únete a nosotros"}
      </button>
    </form>
  );
}
