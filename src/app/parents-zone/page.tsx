import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parents Zone | We Got Game",
  description: "Pentru părinții care vor mai mult decât o activitate sportivă.",
};

const I = ({ children }: { children: React.ReactNode }) => (
  <svg className="w-8 h-8 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);

const offerings = [
  {
    icon: <I><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="2" /><path d="M9 12h6" /><path d="M9 16h4" /></I>,
    title: "Comunicare clară", desc: "Știți mereu ce se întâmplă: program, ore, locații, modificări. Fără surprize.",
  },
  {
    icon: <I><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></I>,
    title: "Program organizat", desc: "Structură clară săptămânală. Copilul știe la ce să se aștepte, părintele la fel.",
  },
  {
    icon: <I><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></I>,
    title: "Feedback despre progres", desc: "Vă ținem la curent cu evoluția copilului. Ce lucrăm, ce îmbunătățim, ce urmează.",
  },
  {
    icon: <I><path d="M8 21l8 0" /><path d="M12 17l0 4" /><path d="M7 4l10 0" /><path d="M17 4v8a5 5 0 0 1-10 0v-8" /><path d="M3 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0" /><path d="M17 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0" /></I>,
    title: "Evenimente sportive", desc: "Turnee, festivități, momente speciale la care familia este binevenită și implicată.",
  },
  {
    icon: <I><path d="M19 5.5a4.5 4.5 0 0 0-7.47-3.37" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" /><path d="M3 10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1z" /><path d="M12 8v4" /></I>,
    title: "Wellbeing și socializare", desc: "Posibilitatea de a participa la activități de fitness, wellbeing sau socializare.",
  },
  {
    icon: <I><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></I>,
    title: "Comunitate", desc: "Familii cu valori comune. Un loc unde copiii și părinții se simt acasă.",
  },
];

export default function ParentsZone() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative min-h-[580px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=3000&auto=format&fit=crop"
            alt="Parents Zone"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40 z-10" />
        </div>
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 lg:px-12 py-24">
          <p className="text-brand-yellow font-bold tracking-[0.3em] text-sm uppercase mb-4">We Got Game</p>
          <h1 className="font-barlow text-white text-[4rem] md:text-[6rem] lg:text-[8rem] italic leading-[0.88] text-grunge mb-6">
            PARENTS<br /><span className="text-brand-yellow">ZONE</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl italic font-semibold max-w-xl mb-4">
            Pentru părinții care vor mai mult decât o activitate sportivă.
          </p>
          <p className="text-white/60 text-base max-w-lg leading-relaxed">
            We Got Game este construit și pentru voi. Știm că ați căutat un loc sigur, serios și bine organizat — și ceva mai mult decât atât.
          </p>
        </div>
      </section>

      {/* Message */}
      <section className="bg-brand-yellow py-14 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <h2 className="font-barlow text-black text-[2.5rem] md:text-[3.5rem] italic leading-[0.9]">
            LA WE GOT GAME, PĂRINTELE NU ESTE DOAR SPECTATOR. ESTE PARTE DIN COMUNITATE.
          </h2>
          <p className="text-black/70 text-base leading-relaxed">
            Căutați un loc în care copilul să fie văzut, încurajat și format corect. Un mediu în care valorile contează, unde coachii sunt modele și unde fiecare copil are locul lui pe teren.
          </p>
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-[#0d0d0d] py-20 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-14">
            <p className="text-brand-yellow font-bold tracking-[0.3em] text-xs uppercase mb-3">CE OFERIM</p>
            <h2 className="font-barlow text-white text-[3rem] md:text-[4.5rem] italic leading-[0.9]">
              CE OFERIM <span className="text-brand-yellow">PĂRINȚILOR?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o) => (
              <div key={o.title} className="bg-black border border-white/10 hover:border-brand-yellow/40 transition-colors p-8">
                <div className="mb-4">{o.icon}</div>
                <h3 className="text-white font-bold tracking-wide uppercase text-sm mb-2">{o.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family message */}
      <section className="bg-black py-20 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-brand-yellow font-bold tracking-[0.3em] text-xs uppercase mb-6">PENTRU NOI</p>
          <h2 className="font-barlow text-white text-[2.5rem] md:text-[4rem] italic leading-[0.9] mb-8">
            FAMILIA CONTEAZĂ.
          </h2>
          <p className="text-white/65 text-lg leading-relaxed mb-6">
            Un copil crește mai frumos când sportul devine parte din viața familiei, nu doar o activitate de weekend.
          </p>
          <p className="text-white/65 text-base leading-relaxed">
            La We Got Game, construim o comunitate în care toată familia se simte binevenită și valorificată.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-yellow py-16 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-barlow text-black text-[2.5rem] md:text-[3.5rem] italic leading-[0.9] mb-2">
              ÎNSCRIE COPILUL ÎN COMUNITATE
            </h2>
            <p className="text-black/60 text-base font-medium">Suntem aici pentru voi și pentru copiii voștri.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact" className="bg-black text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white hover:text-black transition-colors text-center">
              CONTACTEAZĂ-NE
            </Link>
            <a href="https://wa.me/40720530543" className="border-2 border-black text-black font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-black hover:text-white transition-colors text-center">
              WHATSAPP
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
