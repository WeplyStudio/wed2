
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { BatakPattern } from "../ui/BatakPattern";

export const Hero = () => {
  const heroImg = PlaceHolderImages.find((img) => img.id === "hero-image");

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt={heroImg?.description || "Wedding Hero"}
          fill
          className="object-cover opacity-60 scale-110 animate-fade-in"
          priority
          data-ai-hint="batak wedding"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background z-10" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <BatakPattern className="w-24 h-24 mb-4" />
          <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-2">The Wedding Of</p>
        </div>
        
        <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <span className="gold-text-gradient">Raja</span>
          <span className="text-accent mx-4 md:mx-8">&</span>
          <span className="gold-text-gradient">Putri</span>
        </h1>
        
        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="w-16 h-px bg-accent/50 mx-auto mb-4" />
          <p className="font-headline text-2xl md:text-3xl text-foreground/90 italic tracking-widest mb-6">
            Saturday, 25 October 2025
          </p>
          <p className="text-accent/80 max-w-lg mx-auto leading-relaxed">
            "Ai songon i do molo mangula na denggan, na uli i do dapothononna."
            <br />
            <span className="text-xs uppercase tracking-tighter">(Traditional Batak Blessing)</span>
          </p>
        </div>

        <div className="mt-12 animate-bounce">
            <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </div>
    </section>
  );
};
