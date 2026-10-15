"use client";

import { useEffect, useState } from "react";
import { isFirebaseConfigured } from "@/lib/firebase";
import { listMedia, type MediaItem } from "@/lib/media";

/** Public gallery of photos and videos uploaded from /admin. */
export default function MediaGallery() {
  // null = loading. Without Firebase config there is nothing to load.
  const [items, setItems] = useState<MediaItem[] | null>(isFirebaseConfigured ? null : []);
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState<MediaItem | null>(null);

  useEffect(() => {
    if (!isFirebaseConfigured) return undefined;
    let active = true;
    listMedia()
      .then((list) => { if (active) setItems(list); })
      .catch(() => {
        if (!active) return;
        setFailed(true);
        setItems([]);
      });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const grid = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4";

  if (items === null) {
    return (
      <div className={grid} aria-busy="true">
        {Array.from({ length: 6 }, (_, i) => <div key={i} className="aspect-[4/3] bg-white/5 animate-pulse" />)}
      </div>
    );
  }

  if (failed) {
    return <p className="text-center text-white/60 py-8">Galeria nu a putut fi încărcată. Încearcă din nou mai târziu.</p>;
  }
  if (!items.length) {
    return <p className="text-center text-white/60 py-8">În curând vom adăuga poze și videoclipuri.</p>;
  }

  return (
    <>
      <ul className={grid}>
        {items.map((item) => (
          <li key={item.id} className="aspect-[4/3] bg-[#0d0d0d] overflow-hidden">
            {item.type === "video" ? (
              <video src={item.url} controls preload="metadata" playsInline className="w-full h-full object-cover" />
            ) : (
              <button
                onClick={() => setOpen(item)}
                aria-label={`Mărește: ${item.title}`}
                className="group block w-full h-full cursor-zoom-in focus-visible:outline focus-visible:outline-3 focus-visible:outline-brand-yellow focus-visible:-outline-offset-3"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            )}
          </li>
        ))}
      </ul>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-8"
        >
          <button
            onClick={() => setOpen(null)}
            aria-label="Închide"
            className="absolute top-4 right-5 text-white text-4xl leading-none hover:text-brand-yellow"
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={open.url}
            alt={open.title}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
}
