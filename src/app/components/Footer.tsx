import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/10 py-5 px-6 lg:px-12">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">

        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img src="/logo.png" alt="We Got Game" className="h-10 w-auto" />
          <div className="flex flex-col leading-none">
            <span className="font-anton text-white text-lg italic tracking-wide">WE GOT GAME</span>
            <span className="text-brand-yellow font-bold text-[10px] tracking-[0.18em]">BASKETBALL</span>
          </div>
        </Link>

        <div className="flex items-center gap-5">
          <a href="#" aria-label="Facebook" className="text-white/40 hover:text-brand-yellow transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="text-white/40 hover:text-brand-yellow transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="#" aria-label="YouTube" className="text-white/40 hover:text-brand-yellow transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a0a0a" />
            </svg>
          </a>
        </div>

        <p className="text-white/25 text-xs">© 2026 We Got Game. Toate drepturile rezervate.</p>

      </div>
    </footer>
  );
}
