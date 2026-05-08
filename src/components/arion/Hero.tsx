import heroScene from "@/assets/hero-scene.png";
import { Play, Download } from "lucide-react";

function Particles() {
  const items = Array.from({ length: 18 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${(i * 53) % 100}%`,
            bottom: `${(i * 17) % 60}%`,
            animationDelay: `${(i * 0.4) % 6}s`,
            animationDuration: `${5 + (i % 5)}s`,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-20 grid lg:grid-cols-2 gap-10 items-center relative">
        <Particles />
        <div className="relative z-10">
          <h1 className="text-7xl md:text-8xl font-bold gold-text tracking-[0.08em] leading-none">
            ARION
          </h1>
          <div className="mt-3 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--gold)]" />
            <span className="font-[family-name:var(--font-display)] text-sm tracking-[0.4em] text-[var(--gold-bright)] uppercase">A Jornada Começa</span>
            <span className="h-px w-10 bg-[var(--gold)]" />
          </div>
          <p className="mt-8 text-lg text-[var(--muted-foreground)] max-w-md leading-relaxed">
            Explore um mundo repleto de mistérios, missões e magia.
            O destino de Elyndra está em suas mãos.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="btn-gold"><Play size={16} /> Jogar Agora</button>
            <button className="btn-magic"><Download size={16} /> Download</button>
          </div>
          <div className="mt-12 flex items-center justify-start">
            <span className="text-3xl text-[var(--magic-glow)] pulse-glow">✦</span>
          </div>
        </div>
        <div className="relative z-10">
          <div className="relative rounded-lg overflow-hidden border-2 border-[var(--gold)] shadow-[var(--shadow-panel)] float-slow">
            <img
              src={heroScene}
              alt="Cenário pixel art de Elyndra com vila, castelo e protagonista"
              className="w-full h-auto pixel"
              width={1280}
              height={896}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
      <div className="gold-divider mx-auto max-w-5xl" />
    </section>
  );
}
