import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t-2 border-brand-yellow py-14 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-brand-yellow flex items-center justify-center">
              <svg className="w-7 h-7 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-anton text-white text-xl italic tracking-wide leading-tight">WE GOT GAME</span>
              <span className="text-brand-yellow font-bold text-[11px] tracking-[0.18em]">BASKETBALL</span>
            </div>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Un ecosistem sportiv pentru copii și familii, construit în jurul baschetului.
          </p>
          <div className="flex gap-3 mt-1">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-brand-yellow hover:border-brand-yellow transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-brand-yellow hover:border-brand-yellow transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-brand-yellow hover:border-brand-yellow transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a0a0a" /></svg>
            </a>
          </div>
        </div>

        <div>
          <p className="text-brand-yellow font-bold tracking-widest text-xs uppercase mb-5">PROGRAME</p>
          <div className="flex flex-col gap-2">
            {[
              { href: "/summer-school", label: "Summer School" },
              { href: "/academy", label: "Academy" },
              { href: "/3x3-tournament", label: "3x3 Tournament" },
              { href: "/mental-game", label: "Mental Game" },
              { href: "/parents-zone", label: "Parents Zone" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-white/55 hover:text-brand-yellow text-sm transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-brand-yellow font-bold tracking-widest text-xs uppercase mb-5">CONTACT</p>
          <div className="flex flex-col gap-3 text-sm text-white/55">
            <a href="https://wa.me/40723123456" className="hover:text-brand-yellow transition-colors flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp
            </a>
            <a href="tel:+40723123456" className="hover:text-brand-yellow transition-colors">0723 123 456</a>
            <Link href="/contact" className="hover:text-brand-yellow transition-colors">Înscrie copilul →</Link>
          </div>
        </div>

      </div>

      <div className="max-w-[1440px] mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/25 text-xs">© 2024 We Got Game. Toate drepturile rezervate.</p>
        <div className="flex gap-6 text-xs text-white/25">
          <Link href="/about" className="hover:text-white/50 transition-colors">Despre noi</Link>
          <Link href="/contact" className="hover:text-white/50 transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
