"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { BatakPattern } from "../ui/BatakPattern";

export const Couple = () => {
  const groomImg = PlaceHolderImages.find((img) => img.id === "groom");
  const brideImg = PlaceHolderImages.find((img) => img.id === "bride");

  return (
    <section id="couple" className="py-24 bg-[#fffafa] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="grid grid-cols-6 gap-8 p-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <BatakPattern key={i} className="w-full h-auto" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Header Section */}
        <div className="mb-16 max-w-2xl mx-auto">
          <p className="font-headline text-xl text-muted-foreground mb-1">Pasangan</p>
          <h2 className="font-headline text-6xl md:text-7xl text-primary mb-8">Pengantin</h2>
          <p className="text-muted-foreground leading-relaxed italic px-4">
            "Tuhan membuat segala sesuatu indah pada waktunya. Indah saat Dia mempertemukan, 
            indah saat Dia menumbuhkan kasih, dan indah saat Dia mempersatukan kami 
            dalam suatu ikatan pernikahan Kudus."
          </p>
          <div className="w-16 h-px bg-primary/20 mx-auto mt-8" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 max-w-5xl mx-auto">
          {/* Groom */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-96 md:w-72 md:h-[450px] mb-8">
              <div className="absolute inset-0 rounded-t-full border-[12px] border-primary z-10 shadow-2xl pointer-events-none" />
              <div className="absolute inset-[10px] rounded-t-full overflow-hidden">
                <Image
                  src={groomImg?.imageUrl || ""}
                  alt="Binsar Sitorus"
                  fill
                  className="object-cover"
                  data-ai-hint="groom portrait"
                />
              </div>
            </div>
            <h3 className="font-headline text-3xl text-primary mb-2">Binsar Sitorus</h3>
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-1">Putra Dari:</p>
            <p className="text-foreground font-medium">Bp. L. Sitorus & Ibu R. Marpaung</p>
          </div>

          {/* Divider */}
          <div className="hidden md:flex flex-col items-center justify-center h-full pt-12">
            <span className="font-headline text-6xl text-primary/30">&</span>
          </div>

          {/* Bride */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-96 md:w-72 md:h-[450px] mb-8">
              <div className="absolute inset-0 rounded-t-full border-[12px] border-primary z-10 shadow-2xl pointer-events-none" />
              <div className="absolute inset-[10px] rounded-t-full overflow-hidden">
                <Image
                  src={brideImg?.imageUrl || ""}
                  alt="Indrawati Siburian"
                  fill
                  className="object-cover"
                  data-ai-hint="bride portrait"
                />
              </div>
            </div>
            <h3 className="font-headline text-3xl text-primary mb-2">Indrawati Siburian</h3>
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-1">Putri Dari:</p>
            <p className="text-foreground font-medium">Bp. F. Siburian (+) & Ibu S. Sianturi</p>
          </div>
        </div>
      </div>
    </section>
  );
};
