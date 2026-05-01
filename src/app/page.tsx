"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
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
      <>
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M9 10l.01 0" />
        <path d="M15 10l.01 0" />
        <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
        <path d="M12 3a2 2 0 0 0 0 4" />
      </>
    ),
    number: "500+",
    label: "COPII ANTRENAȚI",
  },
  {
    icon: (
      <>
        <path d="M8 21l8 0" />
        <path d="M12 17l0 4" />
        <path d="M7 4l10 0" />
        <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
        <path d="M3 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      </>
    ),
    number: "20+",
    label: "TURNEE ORGANIZATE",
  },
  {
    icon: (
      <>
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M5.65 5.65l12.7 12.7" />
        <path d="M5.65 18.35l12.7 -12.7" />
        <path d="M12 3a9 9 0 0 0 9 9" />
        <path d="M3 12a9 9 0 0 1 9 9" />
      </>
    ),
    number: "7",
    label: "ANI DE EXPERIENȚĂ",
  },
  {
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
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
      <section className="relative w-full min-h-[520px] lg:min-h-[680px] flex flex-col justify-center">
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

        <div className="relative z-20 w-full pl-6 lg:pl-16 pr-6 lg:pr-0 py-14 lg:py-24 flex items-center justify-between gap-8">
          <div ref={heroTextRef} className="flex flex-col w-full lg:max-w-xl lg:shrink-0">
            <div className="flex flex-col leading-[0.85] mb-5">
              <h1 className="font-barlow text-white italic tracking-tight drop-shadow-2xl text-grunge text-[clamp(5rem,14vw,10rem)]">
                WE GOT
              </h1>
              <h1 className="font-barlow text-brand-yellow italic tracking-tight drop-shadow-2xl text-grunge text-[clamp(5rem,14vw,10rem)]">
                GAME
              </h1>
            </div>

            <p className="text-brand-yellow font-bold text-base md:text-xl italic tracking-wide mb-4">
              Baschet. Încredere. Caracter. Comunitate.
            </p>

            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-3">
              We Got Game este un ecosistem sportiv pentru copii și familii, construit în jurul <span className="font-bold text-white">baschetului</span>.
            </p>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
              Aici, copiii nu vin doar să învețe să arunce la coș. Vin să capete curaj, disciplină, prieteni, spirit de echipă și încrederea că pot deveni mai buni în fiecare zi.
            </p>

            <p className="text-brand-yellow font-bold text-sm md:text-base mb-8">
              Baschetul este jocul. Dezvoltarea copilului este scopul.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-stretch">
              <Link href="/contact" className="sm:w-52 bg-brand-yellow text-black font-bold uppercase tracking-wider text-sm px-4 py-4 flex items-center justify-center gap-2 text-center leading-tight hover:bg-white transition-colors">
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
                ÎNSCRIE COPILUL LA PROGRAM
              </Link>
              <Link href="/summer-school" className="sm:w-52 border-2 border-white/50 text-white font-bold uppercase tracking-wider text-sm px-4 py-4 flex items-center justify-center gap-2 text-center leading-tight hover:bg-white hover:text-black transition-colors">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
                </svg>
                VEZI SUMMER SCHOOL
              </Link>
              <Link href="/3x3-tournament" className="sm:w-52 border-2 border-white/50 text-white font-bold uppercase tracking-wider text-sm px-4 py-4 flex items-center justify-center gap-2 text-center leading-tight hover:bg-white hover:text-black transition-colors">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path d="M8 21h8M12 17v4M5 3h14l-1 9H6L5 3z" />
                  <path d="M9 12s1 2 3 2 3-2 3-2" />
                </svg>
                PARTICIPĂ LA TURNEUL 3X3
              </Link>
            </div>
          </div>

          {/* ── HERO VIDEO ── */}
          <div className="hidden lg:flex flex-col gap-3 flex-1">
            <div className="w-full max-w-[620px] mx-auto aspect-video rounded-sm overflow-hidden border border-white/20 shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/sYDGrRoPRs4?autoplay=0&rel=0"
                title="We Got Game"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-white/40 text-xs tracking-widest uppercase text-center">We Got Game — Highlight</p>
          </div>

        </div>
      </section>

      {/* ── 4 PILLARS ── */}
      <div className="relative w-full py-10 border-t-2 border-brand-yellow overflow-hidden">
        <Image src="/bg.png" alt="" fill className="object-cover object-center" aria-hidden="true" />
        <div className="relative z-10 w-full px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/20">
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
      <section className="w-full px-4 lg:px-8 py-8 bg-black border-t border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {programs.map((prog) => (
          <Link key={prog.title} href={prog.href} className="group flex flex-col overflow-hidden border border-white/10 hover:border-white/25 transition-colors">
            <div className="shrink-0 p-3 bg-[#0d0d0d]">
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${prog.img}?q=80&w=800&auto=format&fit=crop`}
                  alt={prog.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1 p-6 bg-[#0d0d0d] items-center text-center">
              <h3 className="font-barlow text-brand-yellow text-[2rem] italic leading-tight mb-2 text-grunge">
                {prog.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">{prog.desc}</p>
              <span className="inline-flex items-center gap-2 border border-brand-yellow text-brand-yellow font-bold uppercase tracking-widest text-xs px-4 py-2 group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                VEZI DETALII
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="w-full border-t-[3px] border-b-[3px] border-white/30">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="relative flex flex-col items-center gap-2 py-8 px-6 text-center">
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/4 h-1/2 w-[3px] bg-white/30" />
              )}
              <svg className="w-9 h-9 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {s.icon}
              </svg>
              <p className="font-barlow text-brand-yellow text-[2.8rem] italic leading-none">{s.number}</p>
              <p className="text-white/60 font-bold tracking-widest text-[11px] uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="w-full bg-black py-20 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-12">
            <div className="flex flex-col leading-[0.85] mb-4">
              <h2 className="font-barlow text-white text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] italic text-grunge">
                EȘTI GATA SĂ INTRI
              </h2>
              <h2 className="font-barlow text-brand-yellow text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] italic text-grunge">
                ÎN JOC?
              </h2>
            </div>
            <p className="text-white/55 text-base mt-6 max-w-lg leading-relaxed">
              Alege programul potrivit și hai să construim împreună viitorul copilului tău.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/40723123456"
              className="group border-t-2 border-[#25D366] bg-white/5 hover:bg-white/10 transition-colors p-6 flex items-center gap-5"
            >
              <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shrink-0">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold uppercase tracking-wider text-sm">SCRIE-NE PE WHATSAPP</p>
                <p className="text-white/45 text-xs mt-1 tracking-widest uppercase">Răspundem rapid</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+40723123456"
              className="group border-t-2 border-brand-yellow bg-white/5 hover:bg-white/10 transition-colors p-6 flex items-center gap-5"
            >
              <div className="w-14 h-14 bg-brand-yellow rounded-full flex items-center justify-center shrink-0">
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
              className="group border-t-2 border-white/30 bg-white/5 hover:bg-white/10 transition-colors p-6 flex items-center gap-5"
            >
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center shrink-0">
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
                <p className="text-white/45 text-xs mt-1 tracking-widest uppercase">Primul pas spre performanță</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
