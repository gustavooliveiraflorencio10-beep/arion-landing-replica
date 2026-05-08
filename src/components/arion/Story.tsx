import portrait from "@/assets/arion-portrait.png";
import star from "@/assets/lumina-star.png";

export function Story() {
  return (
    <section id="sobre" className="py-20 px-6">
      <div className="max-w-6xl mx-auto ornate-panel parchment p-8 md:p-12 grid md:grid-cols-[1fr_2fr] gap-8 items-center">
        <div className="relative flex justify-center">
          <img src={portrait} alt="Retrato de Arion" className="w-56 md:w-64 pixel drop-shadow-xl" width={512} height={512} loading="lazy" />
          <img src={star} alt="" className="absolute -right-2 top-4 w-20 pulse-glow" width={256} height={256} loading="lazy" />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[var(--parchment-ink)]/50">❦</span>
            <h2 className="text-3xl md:text-4xl text-[var(--parchment-ink)] font-bold">A História</h2>
            <span className="text-[var(--parchment-ink)]/50">❦</span>
          </div>
          <div className="space-y-3 text-[var(--parchment-ink)]/90 text-lg leading-relaxed font-[family-name:var(--font-body)]">
            <p>Há muito tempo, o mundo de Elyndra vivia em equilíbrio graças à presença de Lumina, uma consciência antiga que guiava e protegia todas as coisas.</p>
            <p>Mas algo mudou. Criaturas se tornaram hostis, pessoas desapareceram e a escuridão voltou a se espalhar.</p>
            <p>Você é Arion, um jovem aventureiro escolhido para descobrir a verdade e restaurar a esperança em Elyndra.</p>
            <p className="font-semibold text-[oklch(0.35_0.15_250)] pt-2 italic">Sua jornada começa agora.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
