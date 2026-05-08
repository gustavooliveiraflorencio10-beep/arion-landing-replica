import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/gallery-1.png";
import g2 from "@/assets/gallery-2.png";
import g3 from "@/assets/gallery-3.png";
import g4 from "@/assets/gallery-4.png";
import g5 from "@/assets/gallery-5.png";

const shots = [g1, g2, g3, g4, g5, g1, g2];

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };
  return (
    <section id="galeria" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl gold-text font-bold mb-2">Galeria</h2>
        <div className="gold-divider max-w-md mx-auto mb-12" />
        <div className="relative">
          <button onClick={() => scroll(-1)} aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-12 h-12 rounded-full bg-background/80 border border-[var(--gold)] text-[var(--gold-bright)] hover:bg-[var(--gold)]/20 transition flex items-center justify-center shadow-[var(--shadow-gold)]">
            <ChevronLeft />
          </button>
          <div ref={ref} className="flex gap-5 overflow-x-auto scroll-smooth pb-4 px-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {shots.map((src, i) => (
              <div key={i} className="gallery-frame shrink-0 w-[320px] h-[200px] snap-start">
                <img src={src} alt={`Screenshot ${i + 1}`} width={768} height={512} loading="lazy" />
              </div>
            ))}
          </div>
          <button onClick={() => scroll(1)} aria-label="Próximo"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-12 h-12 rounded-full bg-background/80 border border-[var(--gold)] text-[var(--gold-bright)] hover:bg-[var(--gold)]/20 transition flex items-center justify-center shadow-[var(--shadow-gold)]">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
