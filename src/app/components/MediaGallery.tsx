"use client";

import { useEffect, useState } from "react";
import { isFirebaseConfigured } from "@/lib/firebase";
import { listMedia, type MediaItem } from "@/lib/media";

const gridCls = "grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4";

/**
 * Loads this site's media (newest first). `items` is null while loading.
 * `limit` keeps only the newest N items.
 */
export function useMedia(limit?: number): { items: MediaItem[] | null; failed: boolean } {
  const [state, setState] = useState<{ items: MediaItem[] | null; failed: boolean }>(
    isFirebaseConfigured ? { items: null, failed: false } : { items: [], failed: false }
  );

  useEffect(() => {
    if (!isFirebaseConfigured) return undefined;
    let active = true;
    listMedia()
      .then((list) => { if (active) setState({ items: limit ? list.slice(0, limit) : list, failed: false }); })
      .catch(() => { if (active) setState({ items: [], failed: true }); });
    return () => { active = false; };
  }, [limit]);

  return state;
}

export function GallerySkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className={gridCls} aria-busy="true">
      {Array.from({ length: count }, (_, i) => <div key={i} className="aspect-[4/3] bg-white/5 animate-pulse" />)}
    </div>
  );
}

/** Grid of photos and videos; photos open in a lightbox. */
export function MediaGrid({ items }: { items: MediaItem[] }) {
  const [open, setOpen] = useState<MediaItem | null>(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <ul className={gridCls}>
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

/** Full public gallery (used on /gallery). */
export default function MediaGallery() {
  const { items, failed } = useMedia();

  if (items === null) return <GallerySkeleton />;
  if (failed) {
    return <p className="text-center text-white/60 py-8">Galeria nu a putut fi încărcată. Încearcă din nou mai târziu.</p>;
  }
  if (!items.length) {
    return <p className="text-center text-white/60 py-8">În curând vom adăuga poze și videoclipuri.</p>;
  }
  return <MediaGrid items={items} />;
}
