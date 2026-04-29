"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/summer-school", label: "SUMMER SCHOOL" },
  { href: "/academy", label: "ACADEMY" },
  { href: "/3x3-tournament", label: "3X3 TOURNAMENT" },
  { href: "/mental-game", label: "MENTAL GAME" },
  { href: "/parents-zone", label: "PARENTS ZONE" },
  { href: "/about", label: "ABOUT" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full bg-[#0d0d0d] flex items-center justify-between px-6 lg:px-12 py-6 border-b border-white/10">

      <Link href="/" className="flex items-center gap-2 lg:gap-3 shrink-0">
        <img src="/logo.png" alt="We Got Game" className="h-12 sm:h-14 lg:h-20 w-auto" />
        <div className="flex flex-col leading-none">
          <span className="font-anton text-white text-xl sm:text-2xl lg:text-3xl italic tracking-wide leading-tight">WE GOT GAME</span>
          <span className="text-brand-yellow font-bold text-[10px] lg:text-[13px] tracking-[0.18em]">BASKETBALL</span>
        </div>
      </Link>

      <div className="hidden lg:flex items-center space-x-8 text-[18px] font-semibold tracking-widest uppercase">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "text-brand-yellow" : "text-white hover:text-brand-yellow transition-colors"}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/contact"
          className="hidden md:inline-block bg-brand-yellow text-black font-bold uppercase tracking-wider text-[17px] px-8 py-4 hover:bg-white transition-colors"
        >
          CONTACT / ÎNSCRIERE
        </Link>
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-0 w-full bg-[#0d0d0d] border-t border-white/10 flex flex-col py-4 lg:hidden z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-6 py-3 text-sm font-semibold tracking-widest uppercase ${pathname === link.href ? "text-brand-yellow" : "text-white"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mx-6 mt-4 bg-brand-yellow text-black font-bold uppercase tracking-wider text-sm px-6 py-3 text-center"
          >
            CONTACT / ÎNSCRIERE
          </Link>
        </div>
      )}
    </nav>
  );
}
