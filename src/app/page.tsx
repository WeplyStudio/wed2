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
      <footer className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Solid Maroon Layer (The base color) */}
        <div className="absolute inset-0 bg-primary z-0" />

        {/* Background Image Layer with Gradient to Solid Maroon */}
        <div className="absolute inset-0 z-1 h-[70%]">
          <Image
            src={footerImg?.imageUrl || ""}
            alt="Footer Background"
            fill
            className="object-cover grayscale-[10%]"
            priority
          />
          {/* Efek Gradasi: Dari Foto Melebur ke Maroon */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-primary/40 to-primary" />
        </div>

        {/* Content Container - Exactly following the Screenshot layout */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center justify-center h-full pt-20">
          
          {/* Header Section */}
          <div className="space-y-6 mb-20 animate-reveal">
            <h2 className="font-headline text-4xl md:text-5xl text-white italic">
              Terima Kasih
            </h2>
            <div className="space-y-2">
              <p className="text-white/90 text-sm md:text-base leading-relaxed font-body italic">
                Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kami.
              </p>
              <p className="text-white/80 text-xs md:text-sm font-body italic">
                Wassalamu'alaikum warahmatullahi wabarakatuh
              </p>
            </div>
          </div>

          {/* Names Section - Adjusted sizes as requested */}
          <div className="space-y-4">
            <p className="text-white/70 text-[10px] uppercase tracking-[0.4em] font-medium">
              KAMI YANG BERBAHAGIA
            </p>
            <h3 className="font-headline text-4xl md:text-6xl text-white font-medium">
              Binsar & Indrawati
            </h3>
          </div>

          {/* Bottom Branding */}
          <div className="absolute bottom-12 w-full">
            <p className="text-white/40 text-[9px] uppercase tracking-[0.5em] font-medium">
              ADAT & CINTA • 2026
            </p>
          </div>
        </div>
      </footer>

      <Toaster />
    </main>
  );
}
