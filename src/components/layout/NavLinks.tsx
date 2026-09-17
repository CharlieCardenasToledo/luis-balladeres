import Link from "next/link";
import { NAV_ITEMS } from "@/lib/nav";

export function NavLinks({ linkClassName }: { linkClassName: string }) {
  return (
    <ul className="flex items-center gap-6">
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={linkClassName}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
