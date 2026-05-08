import { Disc as Discord, Instagram, Youtube } from "lucide-react";

const links = ["Início", "Sobre", "Gameplay", "Recursos", "Galeria", "Download"];

export function Footer() {
  return (
    <footer className="border-t border-[var(--gold)]/40 bg-[oklch(0.12_0.03_260)]">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-6 items-center justify-between">
        <a href="#inicio" className="flex flex-col leading-none">
          <span className="font-[family-name:var(--font-display)] text-2xl gold-text font-bold tracking-widest">ARION</span>
          <span className="text-[0.55rem] tracking-[0.3em] text-[var(--gold)]/70 uppercase">A jornada começa</span>
        </a>
        <nav className="flex flex-wrap items-center gap-6">
          {links.map((l) => <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>)}
        </nav>
        <div className="flex items-center gap-4 text-[var(--gold)]">
          <a href="#" aria-label="Discord"><Discord size={18} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
          <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
        </div>
      </div>
      <div className="text-center text-xs text-[var(--muted-foreground)] pb-6">© 2026 Arion — Todos os direitos reservados.</div>
    </footer>
  );
}
