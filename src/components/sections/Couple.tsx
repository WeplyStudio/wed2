"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { BatakPattern } from "../ui/BatakPattern";
import { ScrollReveal } from "../ui/ScrollReveal";

export const Couple = () => {
  const groomImg = PlaceHolderImages.find((img) => img.id === "groom");
  const brideImg = PlaceHolderImages.find((img) => img.id === "bride");
  const coupleBgUrl = "https://i.ibb.co.com/6013P5SJ/Desain-tanpa-judul-20260313-163359-0000.png";

  return (
    <section id="couple" className="py-20 md:py-32 bg-white relative overflow-hidden min-h-[1000px] flex items-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={coupleBgUrl}
          alt="Section Background"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        {/* Transparent overlay for better text contrast */}
        <div className="absolute inset-0 bg-white/10" />
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
        {/* Header Section */}
        <ScrollReveal className="mb-16 md:mb-24 max-w-xl mx-auto">
          <p className="font-headline text-base text-muted-foreground mb-1 uppercase tracking-[0.3em]">Pasangan</p>
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6">Pengantin</h2>
          <div className="w-12 h-px bg-primary/20 mx-auto mt-8" />
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center justify-center gap-32 md:gap-64 max-w-7xl mx-auto">
          {/* Groom */}
          <ScrollReveal className="flex flex-col items-center" delay={200}>
            <div className="relative w-72 h-[480px] md:w-80 md:h-[620px] mb-8 group transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-0 rounded-[30px_150px_30px_30px] overflow-hidden shadow-2xl">
                <Image
                  src={groomImg?.imageUrl || ""}
                  alt="Binsar Sitorus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-headline text-2xl md:text-3xl text-primary">Binsar Sitorus</h3>
              <div>
                <p className="text-muted-foreground text-[10px] uppercase tracking-widest mb-1">Putra Dari:</p>
                <p className="text-foreground text-sm font-medium">Bp. L. Sitorus & Ibu R. Marpaung</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Divider */}
          <ScrollReveal className="hidden md:flex flex-col items-center justify-center h-full pt-20" delay={400}>
            <span className="font-headline text-6xl text-primary/10 italic">&</span>
          </ScrollReveal>

          {/* Bride */}
          <ScrollReveal className="flex flex-col items-center" delay={600}>
            <div className="relative w-72 h-[480px] md:w-80 md:h-[620px] mb-8 group transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-0 rounded-[150px_30px_30px_30px] overflow-hidden shadow-2xl">
                <Image
                  src={brideImg?.imageUrl || ""}
                  alt="Indrawati Siburian"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-headline text-2xl md:text-3xl text-primary">Indrawati Siburian</h3>
              <div>
                <p className="text-muted-foreground text-[10px] uppercase tracking-widest mb-1">Putri Dari:</p>
                <p className="text-foreground text-sm font-medium">Bp. F. Siburian (+) & Ibu S. Sianturi</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
