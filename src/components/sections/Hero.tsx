"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Countdown } from "../ui/Countdown";
import { ScrollReveal } from "../ui/ScrollReveal";

export const Hero = () => {
  const heroImg = PlaceHolderImages.find((img) => img.id === "hero-image");

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt="Wedding Background"
          fill
          className="object-cover opacity-90 scale-105 animate-fade-in"
          priority
          data-ai-hint="elegant couple"
        />
        <div className="absolute inset-0 hero-gradient z-10" />
      </div>

      {/* Main Content - Pushed to the bottom */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-end px-4 pb-24 md:pb-32">
        
        {/* Header Label */}
        <ScrollReveal className="mb-4">
          <p className="text-white/90 uppercase tracking-[0.5em] text-[10px] md:text-xs font-semibold">
            The Wedding Of
          </p>
        </ScrollReveal>
        
        {/* Couple Names */}
        <div className="text-center mb-8">
          <ScrollReveal delay={200}>
            <h1 className="font-headline text-5xl md:text-8xl lg:text-9xl text-white mb-2">
              Binsar & Indrawati
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="font-headline text-xl md:text-2xl text-white/90 tracking-[0.1em]">
              21 . 03 . 2026
            </p>
          </ScrollReveal>
        </div>

        {/* Countdown Section */}
        <ScrollReveal className="w-full max-w-3xl mt-4" delay={600}>
          <Countdown targetDate="2026-03-21T10:00:00" />
        </ScrollReveal>
      </div>
    </section>
  );
};
