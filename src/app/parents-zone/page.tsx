import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parents Zone | We Got Game",
  description: "Pentru părinții care vor mai mult decât o activitate sportivă.",
};

const offerings = [
  { icon: "📋", title: "Comunicare clară", desc: "Știți mereu ce se întâmplă: program, ore, locații, modificări. Fără surprize." },
  { icon: "🗓️", title: "Program organizat", desc: "Structură clară săptămânală. Copilul știe la ce să se aștepte, părintele la fel." },
  { icon: "📈", title: "Feedback despre progres", desc: "Vă ținem la curent cu evoluția copilului. Ce lucrăm, ce îmbunătățim, ce urmează." },
  { icon: "🏅", title: "Evenimente sportive", desc: "Turnee, festivități, momente speciale la care familia este binevenită și implicată." },
  { icon: "💪", title: "Wellbeing și socializare", desc: "Posibilitatea de a participa la activități de fitness, wellbeing sau socializare." },
  { icon: "❤️", title: "Comunitate", desc: "Familii cu valori comune. Un loc unde copiii și părinții se simt acasă." },
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
                <div className="text-3xl mb-4">{o.icon}</div>
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
            <a href="https://wa.me/40723123456" className="border-2 border-black text-black font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-black hover:text-white transition-colors text-center">
              WHATSAPP
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
