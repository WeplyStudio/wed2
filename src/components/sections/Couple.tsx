
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { BatakPattern } from "../ui/BatakPattern";

export const Couple = () => {
  const groomImg = PlaceHolderImages.find((img) => img.id === "groom");
  const brideImg = PlaceHolderImages.find((img) => img.id === "bride");
  const coupleBg = PlaceHolderImages.find((img) => img.id === "couple-bg");

  return (
    <section id="couple" className="py-16 md:py-20 bg-[#fffafa] relative overflow-hidden min-h-[700px] flex items-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={coupleBg?.imageUrl || ""}
          alt="Section Background"
          fill
          className="object-cover opacity-30"
          data-ai-hint={coupleBg?.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffafa] via-transparent to-[#fffafa] opacity-80" />
      </div>

      {/* Background Pattern Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-1">
        <div className="grid grid-cols-6 gap-8 p-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <BatakPattern key={i} className="w-full h-auto" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Header Section - Scaled Down */}
        <div className="mb-10 max-w-lg mx-auto">
          <p className="font-headline text-base text-muted-foreground mb-1 uppercase tracking-widest">Pasangan</p>
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4 gold-shimmer">Pengantin</h2>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed italic px-4">
            "Tuhan membuat segala sesuatu indah pada waktunya. Indah saat Dia mempertemukan, 
            indah saat Dia menumbuhkan kasih, dan indah saat Dia mempersatukan kami 
            dalam suatu ikatan pernikahan Kudus."
          </p>
          <div className="w-10 h-px bg-primary/20 mx-auto mt-4" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 max-w-3xl mx-auto">
          {/* Groom */}
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-64 md:w-56 md:h-[360px] mb-4 group transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-0 rounded-t-full border-[6px] border-primary z-10 shadow-lg pointer-events-none" />
              <div className="absolute inset-[6px] rounded-t-full overflow-hidden">
                <Image
                  src={groomImg?.imageUrl || ""}
                  alt="Binsar Sitorus"
                  fill
                  className="object-cover"
                  data-ai-hint="groom portrait"
                />
              </div>
            </div>
            <h3 className="font-headline text-xl md:text-2xl text-primary mb-1">Binsar Sitorus</h3>
            <p className="text-muted-foreground text-[9px] uppercase tracking-widest mb-1">Putra Dari:</p>
            <p className="text-foreground text-xs font-medium">Bp. L. Sitorus & Ibu R. Marpaung</p>
          </div>

          {/* Divider */}
          <div className="hidden md:flex flex-col items-center justify-center h-full pt-10">
            <span className="font-headline text-4xl text-primary/20 italic">&</span>
          </div>

          {/* Bride */}
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-64 md:w-56 md:h-[360px] mb-4 group transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-0 rounded-t-full border-[6px] border-primary z-10 shadow-lg pointer-events-none" />
              <div className="absolute inset-[6px] rounded-t-full overflow-hidden">
                <Image
                  src={brideImg?.imageUrl || ""}
                  alt="Indrawati Siburian"
                  fill
                  className="object-cover"
                  data-ai-hint="bride portrait"
                />
              </div>
            </div>
            <h3 className="font-headline text-xl md:text-2xl text-primary mb-1">Indrawati Siburian</h3>
            <p className="text-muted-foreground text-[9px] uppercase tracking-widest mb-1">Putri Dari:</p>
            <p className="text-foreground text-xs font-medium">Bp. F. Siburian (+) & Ibu S. Sianturi</p>
          </div>
        </div>
      </div>
    </section>
  );
};
