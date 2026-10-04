import Image from "next/image";
import type { CampaignPhoto } from "@/lib/campaign-photos";

export function PhotoGrid({
  photos,
  columns = 3,
  aspect = "4/3",
}: {
  photos: CampaignPhoto[];
  columns?: 2 | 3 | 4;
  aspect?: "4/3" | "4/5";
}) {
  const cols = { 2: "grid-cols-1 sm:grid-cols-2", 3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", 4: "grid-cols-2 lg:grid-cols-4" }[columns];
  const sizes = { 2: "(min-width: 640px) 50vw, 100vw", 3: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw", 4: "(min-width: 1024px) 25vw, 50vw" }[columns];

  return (
    <ul className={`grid gap-3 ${cols}`}>
      {photos.map((photo) => (
        <li
          key={photo.src}
          className={`relative overflow-hidden rounded-md bg-gray-100 ${aspect === "4/5" ? "aspect-[4/5]" : "aspect-[4/3]"}`}
        >
          <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" />
        </li>
      ))}
    </ul>
  );
}
