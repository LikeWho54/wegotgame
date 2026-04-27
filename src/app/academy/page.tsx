import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academy | We Got Game",
  description: "Program constant pentru copii care vor să crească prin baschet.",
};

const trainPillars = [
  { title: "Corp", items: ["Forță și condiție fizică", "Viteză și agilitate", "Coordonare și echilibru"] },
  { title: "Tehnică", items: ["Dribling și mișcare cu mingea", "Aruncare și finisare la coș", "Apărare și poziționare"] },
  { title: "Minte", items: ["Luarea deciziilor în joc", "Concentrare și calm sub presiune", "Mentalitate de campion"] },
];

const levels = [
  {
    label: "ÎNCEPĂTORI",
    age: "8 – 12 ani",
    desc: "Descoperim baschetul împreună. Fundamente, mișcare, distracție și primele contacte cu jocul de echipă.",
    color: "border-white/20",
  },
  {
    label: "INTERMEDIARI",
    age: "11 – 15 ani",
    desc: "Consolidăm tehnica, creștem intensitatea și introducem concepte tactice reale de joc.",
    color: "border-brand-yellow",
    highlight: true,
  },
  {
    label: "AVANSAȚI",
    age: "14 – 18 ani",
    desc: "Pregătire serioasă, ritm de performanță, antrenament complet fizic, tehnic și mental.",
    color: "border-white/20",
  },
];

export default function Academy() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative min-h-[580px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=3000&auto=format&fit=crop"
            alt="Basketball Academy"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40 z-10" />
        </div>
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 lg:px-12 py-24">
          <p className="text-brand-yellow font-bold tracking-[0.3em] text-sm uppercase mb-4">We Got Game</p>
          <h1 className="font-barlow text-white text-[4rem] md:text-[6rem] lg:text-[8rem] italic leading-[0.88] text-grunge mb-6">
            BASKETBALL<br /><span className="text-brand-yellow">ACADEMY</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl italic font-semibold max-w-xl mb-10">
            Program constant pentru copii care vor să crească prin baschet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact?program=academy" className="bg-brand-yellow text-black font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white transition-colors text-center">
              PROGRAMEAZĂ O EVALUARE
            </Link>
            <Link href="/contact" className="border-2 border-white/50 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white hover:text-black transition-colors text-center">
              ÎNSCRIE COPILUL ÎN ACADEMIE
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-brand-yellow py-14 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="font-barlow text-black text-[2rem] md:text-[3rem] italic leading-tight">
            Scopul nostru este simplu:
          </p>
          <p className="font-barlow text-black text-[2.5rem] md:text-[4rem] italic leading-tight font-black">
            fiecare copil să devină mai bun decât era ieri.
          </p>
        </div>
      </section>

      {/* What we train */}
      <section className="bg-[#0d0d0d] py-20 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-14">
            <p className="text-brand-yellow font-bold tracking-[0.3em] text-xs uppercase mb-3">PROGRAM DE ANTRENAMENT</p>
            <h2 className="font-barlow text-white text-[3rem] md:text-[4.5rem] italic leading-[0.9]">
              CE <span className="text-brand-yellow">ANTRENĂM?</span>
            </h2>
            <p className="text-white/60 text-base mt-4 max-w-2xl leading-relaxed">
              Un copil bun nu este doar copilul care aruncă bine. Este copilul care înțelege jocul, ia decizii, are curaj, muncește, respectă echipa și rămâne concentrat când jocul devine greu.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainPillars.map((p) => (
              <div key={p.title} className="bg-black border-t-2 border-brand-yellow p-8">
                <h3 className="font-barlow text-brand-yellow text-[2.5rem] italic mb-6">{p.title}</h3>
                <ul className="space-y-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="bg-black py-20 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-yellow font-bold tracking-[0.3em] text-xs uppercase mb-3">GRUPE DE PREGĂTIRE</p>
            <h2 className="font-barlow text-white text-[3rem] md:text-[4rem] italic leading-[0.9]">
              NIVELURI DE <span className="text-brand-yellow">PREGĂTIRE</span>
            </h2>
            <p className="text-white/55 text-sm mt-4">Fiecare copil primește atenție în funcție de nivelul său real, nu doar în funcție de vârstă.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {levels.map((l) => (
              <div key={l.label} className={`border-2 ${l.color} p-8 ${l.highlight ? "bg-[#0d0d0d]" : ""}`}>
                {l.highlight && (
                  <span className="inline-block bg-brand-yellow text-black font-bold text-xs tracking-widest uppercase px-3 py-1 mb-4">
                    RECOMANDAT
                  </span>
                )}
                <h3 className="font-barlow text-brand-yellow text-[2rem] italic mb-1">{l.label}</h3>
                <p className="text-white/40 text-xs tracking-widest uppercase mb-4">{l.age}</p>
                <p className="text-white/65 text-sm leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-yellow py-16 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-barlow text-black text-[2.5rem] md:text-[3.5rem] italic leading-[0.9] mb-2">
              VINO LA PRIMUL ANTRENAMENT
            </h2>
            <p className="text-black/60 text-base font-medium">Primul pas este o evaluare gratuită.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact?program=academy" className="bg-black text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white hover:text-black transition-colors text-center">
              PROGRAMEAZĂ EVALUARE
            </Link>
            <a href="https://wa.me/40723123456" className="border-2 border-black text-black font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-black hover:text-white transition-colors text-center">
              WHATSAPP
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
