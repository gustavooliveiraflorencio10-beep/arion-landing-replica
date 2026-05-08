import bg from "@/assets/cta-background.jpg";
import mage from "@/assets/mage.png";

export function CTA() {
  return (
    <section id="download" className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto rounded-lg overflow-hidden border-2 border-[var(--gold)] shadow-[var(--shadow-panel)] relative">
        <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={768} loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/30" />
        <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-8 p-10 md:p-16 min-h-[320px]">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl gold-text font-bold mb-3">Pronto para sua aventura?</h2>
            <p className="text-[var(--muted-foreground)] mb-8 text-lg">Baixe agora e embarque nessa jornada inesquecível!</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="btn-gold">▶ Google Play</button>
              <button className="btn-gold">  App Store</button>
            </div>
          </div>
          <div className="relative justify-self-center md:justify-self-end">
            <img src={mage} alt="Mago" className="w-40 md:w-56 pixel float-slow drop-shadow-2xl" width={640} height={896} loading="lazy" />
            <span className="absolute top-6 -left-4 text-3xl text-[var(--magic-glow)] pulse-glow">✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}
