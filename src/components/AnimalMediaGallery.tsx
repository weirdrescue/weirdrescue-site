"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Props = {
  images?: string[];
  videos?: string[];
  name: string;
};

type MediaItem =
  | { kind: "image"; src: string }
  | { kind: "video"; src: string };

export default function AnimalMediaGallery({ images, videos, name }: Props) {
  const items: MediaItem[] = useMemo(() => {
    const imgs = (images || []).map((src) => ({ kind: "image" as const, src }));
    const vids = (videos || []).map((src) => ({ kind: "video" as const, src }));
    return [...imgs, ...vids];
  }, [images, videos]);

  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  if (!items.length) {
    return (
      <div className="rounded-2xl border bg-gray-50 p-10 text-gray-600">
        No media uploaded yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border">
        {active.kind === "image" ? (
          <Image
            src={active.src}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        ) : (
          <video
            className="h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
          >
            <source src={active.src} />
            Sorry, your browser can’t play this video.
          </video>
        )}
      </div>

      {items.length > 1 ? (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
          {items.map((item, idx) => (
            <button
              key={`${item.kind}:${item.src}`}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={[
                "relative aspect-square rounded-xl overflow-hidden border bg-gray-100",
                idx === activeIndex ? "ring-2 ring-black" : "hover:bg-gray-50",
              ].join(" ")}
              aria-label={`View ${item.kind} ${idx + 1}`}
            >
              {item.kind === "image" ? (
                <Image
                  src={item.src}
                  alt={`${name} thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-xs font-semibold text-gray-700">
                  VIDEO
                </div>
              )}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
