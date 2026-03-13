import { Hero } from "@/components/sections/Hero";
import { Couple } from "@/components/sections/Couple";
import { EventDetails } from "@/components/sections/EventDetails";
import { Gallery } from "@/components/sections/Gallery";
import { Guestbook } from "@/components/sections/Guestbook";
import { Gift } from "@/components/sections/Gift";
import { Toaster } from "@/components/ui/toaster";
import { OpeningOverlay } from "@/components/sections/OpeningOverlay";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function Home() {
  const footerImg = PlaceHolderImages.find((img) => img.id === "hero-image");

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
      
      {/* Dramatic High-Contrast Footer */}
      <footer className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-black">
        {/* Background Image Layer with Heavy Dark Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src={footerImg?.imageUrl || ""}
            alt="Footer Background"
            fill
            className="object-cover opacity-40 grayscale-[20%]"
            priority
          />
          {/* Intense Radial and Linear Gradients for Depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-20 py-24">
          <div className="space-y-8 animate-reveal">
            <h2 className="font-headline text-5xl md:text-7xl text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] italic">
              Terima Kasih
            </h2>
            <div className="w-24 h-px bg-primary mx-auto" />
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-headline italic">
              Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kami.
            </p>
          </div>

          <div className="space-y-10">
            <p className="text-primary text-xs md:text-sm uppercase tracking-[0.6em] font-bold drop-shadow-sm">
              KAMI YANG BERBAHAGIA
            </p>
            <h3 className="font-headline text-7xl md:text-9xl text-primary drop-shadow-[0_10px_20px_rgba(187,72,73,0.3)] animate-float font-bold">
              Binsar & Indrawati
            </h3>
          </div>

          <div className="pt-32">
            <p className="text-white/30 text-[10px] uppercase tracking-[0.8em] font-medium">
              ADAT & CINTA • 2026
            </p>
          </div>
        </div>
      </footer>

      <Toaster />
    </main>
  );
}
