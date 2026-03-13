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
      
      {/* Updated Footer Section */}
      <footer className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={footerImg?.imageUrl || ""}
            alt="Footer Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* Elegant Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/20 to-background/90" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-16 py-24">
          <div className="space-y-6">
            <h2 className="font-headline text-4xl md:text-6xl text-white drop-shadow-md">
              Terima Kasih
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-xl mx-auto italic font-headline">
              Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kami.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-white/70 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">
              KAMI YANG BERBAHAGIA
            </p>
            <h3 className="font-headline text-6xl md:text-8xl lg:text-9xl text-primary drop-shadow-2xl animate-float">
              Binsar & Indrawati
            </h3>
          </div>

          <div className="pt-24">
            <p className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-medium">
              MADE WITH ♡ FOR BINSAR AND INDRAWATI
            </p>
          </div>
        </div>
      </footer>

      <Toaster />
    </main>
  );
}
