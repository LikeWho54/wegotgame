import type { Metadata } from "next";
import MediaGallery from "../components/MediaGallery";

export const metadata: Metadata = {
  title: "Galerie | We Got Game",
  description: "Poze și videoclipuri de la antrenamente, turnee și tabere We Got Game.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-black px-6 lg:px-12 pt-20 pb-12">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-brand-yellow font-bold tracking-[0.3em] text-sm uppercase mb-4">Momente</p>
          <h1 className="font-barlow text-white text-[4rem] md:text-[6rem] italic leading-[0.88] text-grunge">
            GALERIE
          </h1>
          <p className="text-white/70 text-lg italic font-semibold max-w-xl mt-6">
            Poze și videoclipuri de la antrenamente, turnee și tabere.
          </p>
        </div>
      </section>
      <section className="bg-[#0d0d0d] px-6 lg:px-12 py-16">
        <div className="max-w-[1440px] mx-auto">
          <MediaGallery />
        </div>
      </section>
    </div>
  );
}
