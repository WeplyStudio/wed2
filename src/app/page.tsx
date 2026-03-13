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
      
      {/* Footer yang 1000x Lebih Mirip dengan Screenshot */}
      <footer className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-primary">
        {/* Background Image Layer with Gradient to Solid Maroon */}
        <div className="absolute inset-0 z-0">
          <Image
            src={footerImg?.imageUrl || ""}
            alt="Footer Background"
            fill
            className="object-cover grayscale-[20%]"
            priority
          />
          {/* Efek Gradasi: Dari Foto ke Maroon Solid */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-primary/60 to-primary" />
        </div>

        {/* Content Container - Identical to Screenshot Layout */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center h-full pt-20">
          <div className="space-y-6 mb-16 animate-reveal">
            <h2 className="font-headline text-5xl md:text-6xl text-white drop-shadow-sm italic">
              Terima Kasih
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-lg mx-auto font-body italic">
              Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kami.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-white/70 text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold">
              KAMI YANG BERBAHAGIA
            </p>
            <h3 className="font-headline text-6xl md:text-8xl text-white drop-shadow-lg font-medium">
              Binsar & Indrawati
            </h3>
          </div>

          <div className="absolute bottom-12 w-full">
            <p className="text-white/40 text-[9px] uppercase tracking-[0.6em] font-medium">
              ADAT & CINTA • 2026
            </p>
          </div>
        </div>
      </footer>

      <Toaster />
    </main>
  );
}
