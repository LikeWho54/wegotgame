import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mental Game | We Got Game",
  description: "Partea invizibilă a baschetului.",
};

const skills = [
  { title: "Încredere", desc: "Să crezi în tine chiar și când nu merge bine." },
  { title: "Curaj", desc: "Să arunci când ești liber, să joci fără teamă de greșeală." },
  { title: "Concentrare", desc: "Să rămâi prezent indiferent de ce se întâmplă în jur." },
  { title: "Calm sub presiune", desc: "Să iei decizii bune când miza este maximă." },
  { title: "Atitudine pozitivă", desc: "Să nu te lași dărâmat de un coș ratat sau un meci pierdut." },
  { title: "Reziliență", desc: "Capacitatea de a greși, de a te ridica și de a continua." },
  { title: "Bucuria de a juca", desc: "Să rămâi conectat la motivul pentru care ai început." },
];

const chain = [
  { step: "01", text: "Copilul care își controlează emoțiile joacă mai liber." },
  { step: "02", text: "Copilul care joacă mai liber învață mai repede." },
  { step: "03", text: "Copilul care învață mai repede iubește jocul mai mult." },
];

export default function MentalGame() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative min-h-[580px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541186856967-7b08c37577d6?q=80&w=3000&auto=format&fit=crop"
            alt="Mental Game Basketball"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60 z-10" />
        </div>
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 lg:px-12 py-24">
          <p className="text-brand-yellow font-bold tracking-[0.3em] text-sm uppercase mb-4">We Got Game</p>
          <h1 className="font-barlow text-white text-[4rem] md:text-[6rem] lg:text-[8rem] italic leading-[0.88] text-grunge mb-6">
            MENTAL<br /><span className="text-brand-yellow">GAME</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl italic font-semibold max-w-xl mb-4">
            Partea invizibilă a baschetului.
          </p>
          <p className="text-white/60 text-base max-w-lg leading-relaxed mb-10">
            Baschetul nu se joacă doar cu mâinile și picioarele. Se joacă și cu mintea.
          </p>
          <Link href="/contact?program=mental" className="bg-brand-yellow text-black font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white transition-colors inline-block">
            AFLĂ MAI MULTE
          </Link>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-brand-yellow py-16 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-barlow text-black text-[3rem] md:text-[4rem] italic leading-[0.9] mb-6">
              CUM ARATĂ PROBLEMA?
            </h2>
            <p className="text-black/70 text-base leading-relaxed">
              Mulți copii știu ce au de făcut la antrenament, dar se blochează în meci. Se tem să greșească. Nu aruncă atunci când sunt liberi. Devin timizi. Pierd concentrarea. Se compară cu alții.
            </p>
            <p className="text-black font-bold text-base mt-4">Noi lucrăm și cu această parte a jocului.</p>
          </div>
          <div className="flex flex-col gap-3">
            {["Se blochează în meci din teama de a greși.", "Nu aruncă atunci când sunt liberi.", "Pierd concentrarea în momentele decisive.", "Se compară constant cu colegii mai buni."].map((p, i) => (
              <div key={i} className="flex items-center gap-4 bg-black/10 px-5 py-4">
                <div className="w-2 h-2 rounded-full bg-black shrink-0" />
                <p className="text-black/75 text-sm">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-[#0d0d0d] py-20 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-14">
            <p className="text-brand-yellow font-bold tracking-[0.3em] text-xs uppercase mb-3">PROGRAM</p>
            <h2 className="font-barlow text-white text-[3rem] md:text-[4.5rem] italic leading-[0.9]">
              CE <span className="text-brand-yellow">DEZVOLTĂM?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skills.map((s, i) => (
              <div key={s.title} className="bg-black border border-white/10 hover:border-brand-yellow/40 transition-colors p-6">
                <p className="font-barlow text-brand-yellow text-[2rem] italic leading-none mb-3">0{i + 1}</p>
                <h3 className="text-white font-bold tracking-wide uppercase text-sm mb-2">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chain */}
      <section className="bg-black py-20 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-yellow font-bold tracking-[0.3em] text-xs uppercase mb-3">IDEEA CENTRALĂ</p>
            <h2 className="font-barlow text-white text-[3rem] md:text-[4rem] italic leading-[0.9]">
              LANȚUL <span className="text-brand-yellow">SUCCESULUI</span>
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch gap-0">
            {chain.map((c, i) => (
              <div key={c.step} className="flex-1 flex flex-col items-center text-center p-10 border border-white/10 relative">
                <p className="font-barlow text-brand-yellow text-[4rem] italic leading-none mb-4">{c.step}</p>
                <p className="text-white text-lg font-semibold leading-relaxed">{c.text}</p>
                {i < chain.length - 1 && (
                  <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-8 h-8 bg-brand-yellow rounded-full items-center justify-center">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
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
              AJUTĂ-ȚI COPILUL SĂ JOACE LIBER
            </h2>
            <p className="text-black/60 text-base font-medium">Intră în contact cu echipa noastră.</p>
          </div>
          <Link href="/contact?program=mental" className="bg-black text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white hover:text-black transition-colors shrink-0 text-center">
            CONTACTEAZĂ-NE
          </Link>
        </div>
      </section>

    </div>
  );
}
