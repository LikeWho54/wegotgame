import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summer School | We Got Game",
  description: "O vară activă, sănătoasă și memorabilă pentru copii.",
};

const I = ({ children }: { children: React.ReactNode }) => (
  <svg className="w-8 h-8 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);

const benefits = [
  {
    icon: <I><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M5.65 5.65l12.7 12.7" /><path d="M5.65 18.35l12.7 -12.7" /><path d="M12 3a9 9 0 0 0 9 9" /><path d="M3 12a9 9 0 0 1 9 9" /></I>,
    title: "Antrenamente de baschet", desc: "Adaptate nivelului fiecărui copil, de la începători la avansați.",
  },
  {
    icon: <I><path d="M8 21l8 0" /><path d="M12 17l0 4" /><path d="M7 4l10 0" /><path d="M17 4v8a5 5 0 0 1 -10 0v-8" /><path d="M3 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></I>,
    title: "Jocuri și competiții", desc: "Concursuri organizate care dezvoltă spiritul competitiv sănătos.",
  },
  {
    icon: <I><path d="M13 3l-7 9h6l-1 9l7-9h-6l1-9z" /></I>,
    title: "Coordonare și viteză", desc: "Exerciții pentru coordonare, echilibru, viteză și reacție.",
  },
  {
    icon: <I><path d="M15.5 13a3.5 3.5 0 0 0-3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" /><path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-7 0v-1.8" /><path d="M17.5 16a3.5 3.5 0 0 0 0-7h-.5" /><path d="M19 9.3v-2.8a3.5 3.5 0 0 0-7 0" /><path d="M6.5 16a3.5 3.5 0 0 1 0-7h.5" /><path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" /></I>,
    title: "Dezvoltare personală", desc: "Activități prin sport care formează caracter și încredere.",
  },
  {
    icon: <I><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1-8.5 15a12 12 0 0 1-8.5-15a12 12 0 0 0 8.5-3" /><path d="M12 11v5" /><path d="M12 8v.01" /></I>,
    title: "Mediu sigur și organizat", desc: "Supraveghere permanentă și o atmosferă pozitivă garantată.",
  },
  {
    icon: <I><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></I>,
    title: "Comunitate", desc: "Prieteni noi, echipă și amintiri care durează.",
  },
];

export default function SummerSchool() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative min-h-[580px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1513635625218-6956bc843133?q=80&w=3000&auto=format&fit=crop"
            alt="Summer School Basketball"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40 z-10" />
        </div>
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 lg:px-12 py-24">
          <p className="text-brand-yellow font-bold tracking-[0.3em] text-sm uppercase mb-4">We Got Game</p>
          <h1 className="font-barlow text-white text-[4rem] md:text-[6rem] lg:text-[8rem] italic leading-[0.88] text-grunge mb-6">
            SUMMER<br /><span className="text-brand-yellow">SCHOOL</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl italic font-semibold max-w-xl mb-10">
            O vară activă, sănătoasă și memorabilă pentru copii.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/40723123456" className="bg-brand-yellow text-black font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white transition-colors inline-block text-center">
              VREAU DETALII PE WHATSAPP
            </a>
            <Link href="/contact" className="border-2 border-white/50 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white hover:text-black transition-colors text-center">
              SOLICITĂ LOC DISPONIBIL
            </Link>
          </div>
        </div>
      </section>

      {/* About the program */}
      <section className="bg-[#0d0d0d] py-20 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-yellow font-bold tracking-[0.3em] text-xs uppercase mb-4">DESPRE PROGRAM</p>
            <h2 className="font-barlow text-white text-[3rem] md:text-[4.5rem] italic leading-[0.9] mb-6">
              CE ESTE<br /><span className="text-brand-yellow">SUMMER SCHOOL?</span>
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-4">
              We Got Game Summer School este programul nostru intensiv de vară pentru copii care vor să joace baschet, să se miște, să socializeze și să petreacă timpul într-un mediu sigur, organizat și pozitiv.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-4">
              Programul combină antrenamente de baschet, jocuri, concursuri, activități educative, pauze de relaxare și momente de comunitate.
            </p>
            <p className="text-brand-yellow font-bold text-base italic">
              Copiii învață să joace, dar mai ales învață să aibă curaj, să colaboreze și să se bucure de sport.
            </p>
          </div>
          <div className="bg-black border border-white/10 p-8 lg:p-10">
            <p className="text-brand-yellow font-bold tracking-[0.3em] text-xs uppercase mb-6">PENTRU CINE?</p>
            <div className="space-y-5">
              {[
                "Copiii care vor să descopere baschetul pentru prima dată.",
                "Cei care au deja experiență și vor să progreseze.",
                "Nu contează dacă vine pentru performanță sau pentru distracție.",
                "Important este să intre în joc, să se miște și să se simtă parte dintr-o echipă.",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white/75 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-black py-20 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-yellow font-bold tracking-[0.3em] text-xs uppercase mb-3">CE PRIMEȘTE COPILUL</p>
            <h2 className="font-barlow text-white text-[3rem] md:text-[4rem] italic leading-[0.9]">
              TOT CE ARE <span className="text-brand-yellow">NEVOIE</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-[#0d0d0d] border border-white/10 hover:border-brand-yellow/40 transition-colors p-8">
                <div className="mb-4">{b.icon}</div>
                <h3 className="text-white font-bold tracking-wide uppercase text-sm mb-2">{b.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{b.desc}</p>
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
              ÎNSCRIE COPILUL LA SUMMER SCHOOL
            </h2>
            <p className="text-black/60 text-base font-medium">Locurile sunt limitate. Rezervă acum.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="https://wa.me/40723123456" className="bg-black text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white hover:text-black transition-colors text-center">
              WHATSAPP
            </a>
            <Link href="/contact" className="border-2 border-black text-black font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-black hover:text-white transition-colors text-center">
              FORMULAR ÎNSCRIERE
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
