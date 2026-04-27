import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3x3 Tournament | We Got Game",
  description: "Competiție, energie și spectacol pentru copii.",
};

const reasons = [
  { num: "01", title: "Jocul este intens", desc: "Fiecare posesie contează. Fiecare decizie se simte. Adrenalina este reală." },
  { num: "02", title: "Fiecare copil contează", desc: "Fără loc de ascuns. Fiecare jucător este implicat constant în atac și apărare." },
  { num: "03", title: "Nu te poți ascunde pe teren", desc: "Caracterul iese la suprafață. Curajul se vede imediat." },
  { num: "04", title: "Rapid și curajos", desc: "Decizii mai rapide, mai multă minge atinsă, mai mult baschet în mai puțin timp." },
];

const includes = [
  "Meciuri 3x3 pe categorii de vârstă",
  "Fază de grupe și fază eliminatorie",
  "Concursuri de aruncări la coș",
  "Concursuri de skills individuale",
  "Premii și diplome pentru toți participanții",
  "Conținut foto și video al evenimentului",
];

export default function Tournament() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative min-h-[580px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519684093736-61f49e250672?q=80&w=3000&auto=format&fit=crop"
            alt="3x3 Basketball Tournament"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40 z-10" />
        </div>
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 lg:px-12 py-24">
          <p className="text-brand-yellow font-bold tracking-[0.3em] text-sm uppercase mb-4">We Got Game</p>
          <h1 className="font-barlow text-white text-[4rem] md:text-[6rem] lg:text-[8rem] italic leading-[0.88] text-grunge mb-6">
            3x3<br /><span className="text-brand-yellow">TOURNAMENT</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl italic font-semibold max-w-xl mb-10">
            Competiție, energie și spectacol pentru copii.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact?program=3x3" className="bg-brand-yellow text-black font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white transition-colors text-center">
              ÎNSCRIE ECHIPA
            </Link>
            <a href="https://wa.me/40723123456" className="border-2 border-white/50 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white hover:text-black transition-colors text-center">
              SOLICITĂ REGULAMENTUL
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#0d0d0d] py-20 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-yellow font-bold tracking-[0.3em] text-xs uppercase mb-4">DESPRE TURNEU</p>
            <h2 className="font-barlow text-white text-[3rem] md:text-[4.5rem] italic leading-[0.9] mb-6">
              DE CE <span className="text-brand-yellow">3x3?</span>
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-4">
              Turneul We Got Game 3x3 este creat pentru copii care vor să joace, să concureze și să simtă emoția baschetului real.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              Formatul 3x3 este rapid, spectaculos și perfect pentru dezvoltarea deciziei. Copiii ating mingea mai des, iau mai multe decizii și sunt implicați constant în joc.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r) => (
              <div key={r.num} className="bg-black border border-white/10 hover:border-brand-yellow/40 transition-colors p-6">
                <p className="font-barlow text-brand-yellow text-[2.5rem] italic leading-none mb-3">{r.num}</p>
                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-2">{r.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-yellow font-bold tracking-[0.3em] text-xs uppercase mb-4">STRUCTURA TURNEULUI</p>
            <h2 className="font-barlow text-white text-[3rem] md:text-[4.5rem] italic leading-[0.9] mb-8">
              CE <span className="text-brand-yellow">INCLUDE?</span>
            </h2>
            <ul className="space-y-4">
              {includes.map((item) => (
                <li key={item} className="flex items-center gap-4 text-white/70 text-base">
                  <div className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-yellow p-10">
            <h3 className="font-barlow text-black text-[2.5rem] italic leading-tight mb-6">ÎNSCRIE ECHIPA TA</h3>
            <p className="text-black/70 text-base leading-relaxed mb-8">
              Formează o echipă de 3 jucători, alegeți un nume și intrați în joc. Turneele sunt organizate pe categorii de vârstă.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/contact?program=3x3" className="bg-black text-white font-bold uppercase tracking-wider text-sm px-6 py-4 text-center hover:bg-white hover:text-black transition-colors">
                ÎNSCRIE ECHIPA
              </Link>
              <a href="https://wa.me/40723123456" className="border-2 border-black text-black font-bold uppercase tracking-wider text-sm px-6 py-4 text-center hover:bg-black hover:text-white transition-colors">
                SOLICITĂ REGULAMENTUL
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
