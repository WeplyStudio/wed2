import { Hero } from "@/components/sections/Hero";
import { Couple } from "@/components/sections/Couple";
import { EventDetails } from "@/components/sections/EventDetails";
import { Gallery } from "@/components/sections/Gallery";
import { Guestbook } from "@/components/sections/Guestbook";
import { Gift } from "@/components/sections/Gift";
import { Toaster } from "@/components/ui/toaster";
import { BatakPattern } from "@/components/ui/BatakPattern";
import { OpeningOverlay } from "@/components/sections/OpeningOverlay";
import { MusicPlayer } from "@/components/ui/MusicPlayer";

export default function Home() {
  return (
    <main className="min-h-screen relative batak-pattern">
      <OpeningOverlay />
      <MusicPlayer />
      
      <Hero />
      <Couple />
      <EventDetails />
      <Gallery />
      <Gift />
      <Guestbook />
      
      {/* Footer */}
      <footer className="py-12 bg-card/80 border-t border-accent/10 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <BatakPattern className="w-16 h-16 mx-auto mb-6 opacity-30" />
          <h2 className="font-headline text-3xl gold-text-gradient mb-2">Binsar & Indrawati</h2>
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-8">21.03.2026</p>
          <p className="text-xs text-muted-foreground/50">
            © 2026 Adat & Cinta. Porsea, Toba.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </footer>

      <Toaster />
    </main>
  );
}
