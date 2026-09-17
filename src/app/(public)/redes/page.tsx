import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redes",
  description: "Cuentas oficiales de la campaña de Luis Balladares, con estado de verificación.",
};

const ACCOUNTS = [
  {
    platform: "Facebook",
    handle: "LuchoBalladaresV",
    status: "Material de campaña suministrado",
    note: "La búsqueda pública no permitió verificar de forma estable la página exacta debido a restricciones de acceso de Facebook a búsquedas externas.",
  },
  { platform: "Instagram", handle: null, status: "No verificado", note: "No se localizó una cuenta oficial inequívoca del candidato." },
  { platform: "TikTok", handle: null, status: "No verificado", note: "No se localizó una cuenta oficial inequívoca del candidato." },
  { platform: "X", handle: null, status: "No verificado", note: "No se localizó una cuenta oficial inequívoca del candidato." },
  { platform: "YouTube", handle: null, status: "No verificado", note: "No se localizó un canal oficial inequívoco del candidato." },
];

export default function Page() {
  return (
    <div className="container-editorial py-16">
      <h1 className="font-display text-3xl text-black sm:text-4xl">Redes</h1>

      <p className="mt-4 text-charcoal">
        Este sitio aún no sincroniza publicaciones automáticamente (Fase 4 del roadmap técnico).
        Mientras tanto, este es el estado de verificación de cada plataforma, para que no se
        confundan cuentas de terceros con canales oficiales de campaña.
      </p>

      <ul className="mt-8 flex flex-col divide-y divide-gray-100">
        {ACCOUNTS.map((account) => (
          <li key={account.platform} className="flex flex-col gap-1 py-4">
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium text-black">{account.platform}</p>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-600">{account.status}</p>
            </div>
            {account.handle && <p className="text-charcoal">{account.handle}</p>}
            <p className="text-sm text-gray-600">{account.note}</p>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-gray-600">
        Hashtags observados en material de campaña y publicaciones públicas relacionadas:{" "}
        #YoLuchoPorZamora, #LuchoBalladares, #Zamora, #AlianzaFuerza.
      </p>
    </div>
  );
}
