import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/arion/Navbar";
import { Hero } from "@/components/arion/Hero";
import { Story } from "@/components/arion/Story";
import { Features } from "@/components/arion/Features";
import { Gallery } from "@/components/arion/Gallery";
import { CTA } from "@/components/arion/CTA";
import { Footer } from "@/components/arion/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arion — A Jornada Começa | RPG Pixel Art" },
      { name: "description", content: "Explore Elyndra, um mundo de magia, mistério e missões épicas. Baixe Arion e comece sua jornada." },
      { property: "og:title", content: "Arion — A Jornada Começa" },
      { property: "og:description", content: "RPG indie pixel art com mundo aberto, magia e Lumina, uma IA que guia suas escolhas." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Features />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
