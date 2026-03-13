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
      
      {/* Footer yang Mengikuti Screenshot Secara Presisi */}
      <footer className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Solid Maroon Layer (Warna Dasar) */}
        <div className="absolute inset-0 bg-primary z-0" />

        {/* Background Image Layer dengan Gradasi Tebal ke Maroon */}
        <div className="absolute inset-0 z-1 h-3/4">
          <Image
            src={footerImg?.imageUrl || ""}
            alt="Footer Background"
            fill
            className="object-cover opacity-90"
            priority
          />
          {/* Efek Gradasi: Dari Foto Melebur ke Warna Primary (Maroon) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-primary/50 to-primary" />
        </div>

        {/* Konten Footer */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center h-full pt-32 pb-24">
          
          {/* Bagian Atas: Ucapan Terima Kasih */}
          <div className="space-y-6 mb-40 animate-reveal">
            <h2 className="font-headline text-4xl md:text-5xl text-white italic">
              Terima Kasih
            </h2>
            <div className="space-y-3 max-w-lg mx-auto">
              <p className="text-white/90 text-sm md:text-base leading-relaxed font-body italic">
                Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kami.
              </p>
              <p className="text-white/70 text-[10px] md:text-xs font-body italic uppercase tracking-widest">
                Wassalamu'alaikum warahmatullahi wabarakatuh
              </p>
            </div>
          </div>

          {/* Bagian Bawah: Nama & Branding (Sesuai Screenshot) */}
          <div className="flex flex-col items-center">
            {/* Label Branding */}
            <div className="mb-6 space-y-1">
              <p className="text-white/80 text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold">
                KAMI YANG BERBAHAGIA
              </p>
              <p className="text-white/50 text-[8px] md:text-[10px] uppercase tracking-[0.6em] font-medium">
                ADAT & CINTA • 2026
              </p>
            </div>

            {/* Nama Utama */}
            <h3 className="font-headline text-5xl md:text-8xl text-white font-medium drop-shadow-2xl animate-reveal" style={{ animationDelay: '0.4s' }}>
              Binsar & Indrawati
            </h3>
          </div>
        </div>
      </footer>

      <Toaster />
    </main>
  );
}
