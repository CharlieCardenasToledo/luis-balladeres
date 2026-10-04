import { WHATSAPP_GROUP_URL } from "@/lib/site";

export function WhatsAppButton({
  label = "Únete al grupo de WhatsApp",
  variant = "solid",
  className = "",
}: {
  label?: string;
  variant?: "solid" | "light" | "outline";
  className?: string;
}) {
  const styles = {
    solid: "bg-brand-green text-white hover:bg-brand-wine",
    light: "bg-white text-brand-wine hover:bg-off-white",
    outline: "border border-white/50 text-white hover:border-white hover:bg-white hover:text-brand-wine",
  }[variant];

  return (
    <a
      href={WHATSAPP_GROUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center gap-2 rounded-md px-5 font-medium ${styles} ${className}`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.84 9.84 0 0 0 12.04 2Zm5.8 14.16c-.24.68-1.42 1.3-1.95 1.34-.5.05-.97.23-3.27-.68-2.77-1.09-4.52-3.92-4.66-4.1-.13-.18-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.27.24-.27.53-.34.71-.34h.51c.16 0 .38-.06.6.46.23.54.77 1.88.84 2.01.07.14.11.3.02.48-.09.18-.14.29-.27.45-.14.16-.28.35-.41.47-.14.14-.28.28-.12.55.16.27.7 1.16 1.51 1.88 1.04.93 1.92 1.21 2.19 1.35.27.14.43.11.59-.07.16-.18.68-.8.86-1.07.18-.27.36-.23.61-.14.25.09 1.57.74 1.84.88.27.14.45.2.52.32.07.11.07.66-.17 1.34Z" />
      </svg>
      {label}
    </a>
  );
}
