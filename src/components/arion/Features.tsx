import swords from "@/assets/icon-swords.png";
import map from "@/assets/icon-map.png";
import character from "@/assets/icon-character.png";
import spellbook from "@/assets/icon-spellbook.png";
import star from "@/assets/lumina-star.png";

const items = [
  { icon: swords, title: "Missões Épicas", desc: "Enfrente desafios e descubra os segredos de Elyndra." },
  { icon: map, title: "Mundo Aberto", desc: "Explore vilas, florestas, masmorras e muito mais." },
  { icon: character, title: "Evolução", desc: "Aprimore suas habilidades, equipamentos e magias ao longo da jornada." },
  { icon: spellbook, title: "Magia e Mistério", desc: "Domine magias antigas e descubra artefatos poderosos." },
  { icon: star, title: "Lumina", desc: "Uma IA avançada que guia suas escolhas e reage ao seu caminho." },
];

export function Features() {
  return (
    <section id="recursos" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl gold-text font-bold mb-2">Recursos</h2>
        <div className="gold-divider max-w-md mx-auto mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {items.map((it) => (
            <div key={it.title} className="feature-card group">
              <div className="h-24 flex items-center justify-center mb-4">
                <img src={it.icon} alt="" className="max-h-24 pixel group-hover:scale-110 transition-transform duration-500" width={256} height={256} loading="lazy" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-[var(--gold-bright)] uppercase tracking-widest text-sm mb-2">{it.title}</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
