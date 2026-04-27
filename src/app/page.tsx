"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const programs = [
  {
    title: "SUMMER SCHOOL",
    desc: "Program intensiv de vară pentru copii activi, curioși și dornici să se dezvolte.",
    href: "/summer-school",
    img: "1513635625218-6956bc843133",
  },
  {
    title: "ACADEMY",
    desc: "Antrenamente constante pentru copii care vor să evolueze și să joace la nivelul următor.",
    href: "/academy",
    img: "1608245449230-4ac19066d2d0",
  },
  {
    title: "3X3 TOURNAMENT",
    desc: "Competiție, energie și spectacol în turneu 3x3 pentru toate categoriile de vârstă.",
    href: "/3x3-tournament",
    img: "1519684093736-61f49e250672",
  },
  {
    title: "MENTAL GAME",
    desc: "Dezvoltăm mintea de campion pentru performanță pe teren și în viață.",
    href: "/mental-game",
    img: "1541186856967-7b08c37577d6",
  },
];

const stats = [
  {
    icon: (
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    ),
    number: "500+",
    label: "COPII ANTRENAȚI",
  },
  {
    icon: (
      <path d="M8 21h8M12 17v4M5 3h14l-1 9H6L5 3zM9 12s1 2 3 2 3-2 3-2" />
    ),
    number: "20+",
    label: "TURNEE ORGANIZATE",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </>
    ),
    number: "7",
    label: "ANI DE EXPERIENȚĂ",
  },
  {
    icon: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    ),
    number: "1",
    label: "COMUNITATE UNITĂ",
  },
];

export default function Home() {
  const heroTextRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroTextRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden selection:bg-brand-yellow selection:text-black">

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[680px] flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1572454181157-0b40dd7667fe?q=80&w=3000&auto=format&fit=crop"
            alt="Indoor Basketball Court"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30 z-10" />
          <div className="absolute inset-0 bg-black/20 z-10" />
        </div>

        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
          <div ref={heroTextRef} className="flex flex-col max-w-2xl">
            <div className="flex flex-col leading-[0.85] mb-5">
              <h1 className="font-barlow text-white text-[6rem] md:text-[8rem] lg:text-[10rem] italic tracking-tight drop-shadow-2xl text-grunge">
                WE GOT
              </h1>
              <h1 className="font-barlow text-brand-yellow text-[6rem] md:text-[8rem] lg:text-[10rem] italic tracking-tight drop-shadow-2xl text-grunge">
                GAME
              </h1>
            </div>

            <p className="text-brand-yellow font-bold text-xl md:text-2xl italic tracking-wide mb-6">
              Baschet. Încredere. Caracter. Comunitate.
            </p>

            <p className="text-white/80 text-base leading-relaxed max-w-lg mb-3">
              We Got Game este un ecosistem sportiv pentru copii și familii, construit în jurul <span className="font-bold text-white">baschetului</span>.
            </p>
            <p className="text-white/80 text-base leading-relaxed max-w-lg mb-6">
              Aici, copiii nu vin doar să învețe să arunce la coș. Vin să capete curaj, disciplină, prieteni, spirit de echipă și încrederea că pot deveni mai buni în fiecare zi.
            </p>

            <p className="text-brand-yellow font-bold text-base md:text-lg mb-10">
              Baschetul este jocul. Dezvoltarea copilului este scopul.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-start">
              <Link href="/contact" className="bg-brand-yellow text-black font-bold uppercase tracking-wider text-sm px-6 py-4 flex items-center gap-2 hover:bg-white transition-colors">
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
                ÎNSCRIE COPILUL LA PROGRAM
              </Link>
              <Link href="/summer-school" className="border-2 border-white/50 text-white font-bold uppercase tracking-wider text-sm px-6 py-4 flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
                </svg>
                VEZI SUMMER SCHOOL
              </Link>
              <Link href="/3x3-tournament" className="border-2 border-white/50 text-white font-bold uppercase tracking-wider text-sm px-6 py-4 flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path d="M8 21h8M12 17v4M5 3h14l-1 9H6L5 3z" />
                  <path d="M9 12s1 2 3 2 3-2 3-2" />
                </svg>
                PARTICIPĂ LA TURNEUL 3X3
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 PILLARS ── */}
      <div className="w-full bg-[#111111] py-10 border-t-2 border-brand-yellow">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/10">
          {[
            {
              icon: <><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></>,
              title: "ANTRENAMENTE",
              desc: "Antrenamente moderne adaptate nivelului fiecărui copil.",
            },
            {
              icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
              title: "DEZVOLTARE",
              desc: "Tehnică, mișcare, inteligența jocului și dezvoltare personală.",
            },
            {
              icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
              title: "CARACTER",
              desc: "Încredere, disciplină, respectul jocului și spirit de echipă.",
            },
            {
              icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
              title: "COMUNITATE",
              desc: "Un mediu pozitiv în care copiii cresc împreună.",
            },
          ].map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center gap-3 lg:px-8">
              <svg className="w-14 h-14 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {p.icon}
              </svg>
              <p className="text-white font-bold tracking-wider text-sm uppercase">{p.title}</p>
              <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROGRAM CARDS ── */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((prog) => (
          <Link key={prog.title} href={prog.href} className="group relative h-[420px] flex flex-col justify-end overflow-hidden">
            <Image
              src={`https://images.unsplash.com/photo-${prog.img}?q=80&w=800&auto=format&fit=crop`}
              alt={prog.title}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10 z-10" />
            <div className="relative z-20 p-6">
              <h3 className="font-barlow text-white text-[1.8rem] italic leading-tight mb-2 text-grunge">
                {prog.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed mb-5">{prog.desc}</p>
              <span className="inline-flex items-center gap-2 border border-brand-yellow text-brand-yellow font-bold uppercase tracking-widest text-xs px-4 py-2 group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                VEZI DETALII
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* ── STATS ── */}
      <section className="w-full bg-black py-16 px-6 lg:px-12 relative overflow-hidden border-t border-white/10">
        {/* Yellow paint splash bg */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-yellow/10 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-3">
              <svg className="w-10 h-10 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {s.icon}
              </svg>
              <p className="font-barlow text-brand-yellow text-[3.5rem] md:text-[4.5rem] italic leading-none">
                {s.number}
              </p>
              <p className="text-white/60 font-bold tracking-widest text-xs uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="w-full bg-[#0a0a0a] py-20 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-12">
            <h2 className="font-barlow text-white text-[4rem] md:text-[6rem] lg:text-[8rem] italic leading-[0.85] text-grunge">
              EȘTI GATA SĂ INTRI
            </h2>
            <h2 className="font-barlow text-brand-yellow text-[4rem] md:text-[6rem] lg:text-[8rem] italic leading-[0.85] text-grunge">
              ÎN JOC?
            </h2>
            <p className="text-white/55 text-base mt-6 max-w-lg leading-relaxed">
              Alege programul potrivit și hai să construim împreună viitorul copilului tău.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/40723123456"
              className="bg-[#111] border border-white/10 hover:border-brand-yellow/50 transition-colors p-8 flex flex-col items-center text-center gap-4 group"
            >
              <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold uppercase tracking-wider text-sm">SCRIE-NE PE WHATSAPP</p>
                <p className="text-white/40 text-xs mt-1 tracking-widest uppercase">Răspundem rapid</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+40723123456"
              className="bg-[#111] border border-white/10 hover:border-brand-yellow/50 transition-colors p-8 flex flex-col items-center text-center gap-4 group"
            >
              <div className="w-14 h-14 bg-brand-yellow rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold uppercase tracking-wider text-sm">SUNĂ ACUM</p>
                <p className="text-brand-yellow font-bold text-lg mt-1">0723 123 456</p>
              </div>
            </a>

            {/* Evaluation */}
            <Link
              href="/contact"
              className="bg-[#111] border border-white/10 hover:border-brand-yellow/50 transition-colors p-8 flex flex-col items-center text-center gap-4 group"
            >
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold uppercase tracking-wider text-sm">PROGRAMEAZĂ O EVALUARE</p>
                <p className="text-white/40 text-xs mt-1 tracking-widest uppercase">Primul pas spre performanță</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
