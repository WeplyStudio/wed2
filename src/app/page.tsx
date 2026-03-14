import { Hero } from "@/components/sections/Hero";
import { Couple } from "@/components/sections/Couple";
import { EventDetails } from "@/components/sections/EventDetails";
import { Guestbook } from "@/components/sections/Guestbook";
import { Gift } from "@/components/sections/Gift";
import { Toaster } from "@/components/ui/toaster";
import { OpeningOverlay } from "@/components/sections/OpeningOverlay";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { InitialsBadge } from "@/components/ui/InitialsBadge";
import Image from "next/image";

export default function Home() {
  const footerBgUrl = "https://weplystudio.github.io/audiomd/Pict%204.png";

  return (
    <main className="min-h-screen relative batak-pattern">
      <OpeningOverlay />
      <MusicPlayer />
      
      <Hero />
      <InitialsBadge />
      <Couple />
      <EventDetails />
      <Gift />
      <Guestbook />
      
      {/* Footer yang Elegan */}
      <footer className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0" />

        <div className="absolute inset-0 z-1 h-3/4">
          <Image
            src={footerBgUrl}
            alt="Footer Background"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-primary/40 to-primary" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center h-full pt-40 pb-16">
          <div className="space-y-6 mb-24">
            <ScrollReveal>
              <h2 className="font-headline text-3xl md:text-4xl text-white italic">
                Terima Kasih
              </h2>
            </ScrollReveal>
            <ScrollReveal className="space-y-3 max-w-md mx-auto" delay={200}>
              <p className="text-white/90 text-xs md:text-sm leading-relaxed font-body italic">
                Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kami.
              </p>
            </ScrollReveal>
          </div>

          <div className="flex flex-col items-center">
            <ScrollReveal className="mb-4 space-y-1" delay={400}>
              <p className="text-white/70 text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold">
                KAMI YANG BERBAHAGIA
              </p>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <h3 className="font-headline text-2xl md:text-4xl text-white font-medium">
                Binsar & Indrawati
              </h3>
            </ScrollReveal>
          </div>
        </div>
      </footer>

      <Toaster />
    </main>
  );
}
