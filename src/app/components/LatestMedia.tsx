"use client";

import Link from "next/link";
import { useMedia, MediaGrid, GallerySkeleton } from "./MediaGallery";

const LATEST_COUNT = 6;

/**
 * Homepage section with the newest gallery uploads.
 * Hidden when there is nothing to show yet (or the gallery fails to load).
 */
export default function LatestMedia() {
  const { items } = useMedia(LATEST_COUNT);

  if (items !== null && items.length === 0) return null;

  return (
    <section
      aria-labelledby="latest-media-title"
      className="w-full bg-[#0d0d0d] py-16 lg:py-20 px-4 lg:px-8 border-t border-white/10"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-brand-yellow font-bold tracking-[0.3em] text-xs uppercase mb-3">Galerie</p>
            <h2
              id="latest-media-title"
              className="font-barlow text-white text-[2.75rem] sm:text-[3.5rem] lg:text-[4.5rem] italic leading-[0.9] text-grunge"
            >
              ULTIMELE <span className="text-brand-yellow">MOMENTE</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="self-start md:self-auto inline-flex items-center gap-2 border border-brand-yellow text-brand-yellow font-bold uppercase tracking-widest text-xs px-5 py-3 hover:bg-brand-yellow hover:text-black transition-colors"
          >
            VEZI TOATĂ GALERIA
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        {items === null ? <GallerySkeleton count={LATEST_COUNT} /> : <MediaGrid items={items} />}
      </div>
    </section>
  );
}
