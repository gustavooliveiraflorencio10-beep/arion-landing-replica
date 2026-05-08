import { Disc as Discord, Instagram, Youtube } from "lucide-react";

const links = ["Início", "Sobre", "Gameplay", "Recursos", "Galeria", "Download"];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-[var(--gold)]/40">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
        <a href="#inicio" className="flex flex-col leading-none">
          <span className="font-[family-name:var(--font-display)] text-2xl gold-text font-bold tracking-widest">ARION</span>
          <span className="text-[0.55rem] tracking-[0.3em] text-[var(--gold)]/70 uppercase">A jornada começa</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <a key={l} href={`#${l.toLowerCase()}`} className={`nav-link ${i === 0 ? "active" : ""}`}>{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-[var(--gold)]">
          <a href="#" aria-label="Discord" className="hover:text-[var(--gold-bright)] transition"><Discord size={18} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-[var(--gold-bright)] transition"><Instagram size={18} /></a>
          <a href="#" aria-label="YouTube" className="hover:text-[var(--gold-bright)] transition"><Youtube size={18} /></a>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
    </header>
  );
}
