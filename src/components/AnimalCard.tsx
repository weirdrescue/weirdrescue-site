import Image from "next/image";
import { Animal } from "@/lib/animals";

export default function AnimalCard({ animal }: { animal: Animal }) {
  return (
    <a
      href={`/adopt/${animal.slug}`}
      className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition"
    >
      <div className="relative aspect-[4/3] bg-black/10">
        {animal.image ? (
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            className="object-cover group-hover:scale-[1.02] transition"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : null}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold">{animal.name}</h3>
          {animal.status ? (
            <span className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1 text-white/75">
              {animal.status}
            </span>
          ) : null}
        </div>

        <p className="mt-2 text-sm text-white/75">
          {[animal.species, animal.age, animal.sex].filter(Boolean).join(" • ")}
        </p>
      </div>
    </a>
  );
}
