import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre We Got Game | Basketball",
  description: "Baschetul poate schimba viața unui copil.",
};

const values = [
  { title: "Antrenament", desc: "Muncim. Fiecare zi de antrenament contează. Fiecare repetare construiește ceva." },
  { title: "Competiție", desc: "Competiția scoate ce-i mai bun din noi. Câștigăm cu respect, pierdem cu demnitate." },
  { title: "Educație", desc: "Baschetul predă lecții pe care școala nu le poate preda. Le integrăm în tot ce facem." },
  { title: "Caracter", desc: "Formăm oameni. Sportivii pe care îi vedeți pe teren sunt oamenii de mâine." },
];

export default function About() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative min-h-[580px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1550171362-62bca9e5ad4e?q=80&w=3000&auto=format&fit=crop"
            alt="About We Got Game"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40 z-10" />
        </div>
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 lg:px-12 py-24">
          <p className="text-brand-yellow font-bold tracking-[0.3em] text-sm uppercase mb-4">Povestea noastră</p>
          <h1 className="font-barlow text-white text-[4rem] md:text-[6rem] lg:text-[8rem] italic leading-[0.88] text-grunge mb-6">
            DESPRE<br /><span className="text-brand-yellow">WE GOT GAME</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl italic font-semibold max-w-xl">
            We Got Game s-a născut dintr-o idee simplă: baschetul poate schimba viața unui copil.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#0d0d0d] py-20 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-yellow font-bold tracking-[0.3em] text-xs uppercase mb-6">POVESTEA</p>
            <div className="space-y-5 text-white/70 text-base leading-relaxed">
              <p>
                We Got Game s-a născut dintr-o idee simplă: <span className="text-white font-semibold">baschetul poate schimba viața unui copil.</span>
              </p>
              <p>
                Nu pentru că toți copiii vor ajunge profesioniști.
              </p>
              <p>
                Ci pentru că baschetul îi învață să muncească, să piardă, să câștige, să colaboreze, să aibă curaj și să continue.
              </p>
              <p>
                We Got Game este un proiect construit în jurul copiilor, al familiilor și al comunității.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            {["Este despre antrenament.", "Este despre competiție.", "Este despre educație și caracter.", "Este despre joc.", "Este despre încredere."].map((line, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-[2px] bg-brand-yellow shrink-0" />
                <p className="font-barlow text-white text-[1.8rem] italic leading-tight">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The message */}
      <section className="bg-brand-yellow py-20 px-6 lg:px-12">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-barlow text-black text-[3rem] md:text-[5rem] italic leading-[0.88]">
            AI LOCUL TĂU PE TEREN.
          </h2>
          <p className="text-black/60 text-lg mt-6 leading-relaxed">
            Asta spunem fiecărui copil care intră pentru prima dată în sală.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-black py-20 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-yellow font-bold tracking-[0.3em] text-xs uppercase mb-3">CE NE DEFINEȘTE</p>
            <h2 className="font-barlow text-white text-[3rem] md:text-[4rem] italic leading-[0.9]">
              VALORILE <span className="text-brand-yellow">NOASTRE</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="border-t-2 border-brand-yellow pt-6">
                <p className="font-barlow text-brand-yellow text-[2rem] italic mb-3">0{i + 1}</p>
                <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-3">{v.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d0d0d] py-16 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-barlow text-white text-[2.5rem] md:text-[3.5rem] italic leading-[0.9] mb-2">
              INTRAȚI ÎN JOC
            </h2>
            <p className="text-white/50 text-base">Faceți primul pas. Restul vine singur.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact" className="bg-brand-yellow text-black font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white transition-colors text-center">
              ÎNSCRIE COPILUL
            </Link>
            <Link href="/summer-school" className="border-2 border-white/30 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white hover:text-black transition-colors text-center">
              DESCOPERĂ PROGRAMELE
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
