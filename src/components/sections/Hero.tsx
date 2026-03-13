"use client";

import { useState } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Countdown } from "../ui/Countdown";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
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

      {/* Main Content */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center px-4 pt-20">
        
        {/* Header Label */}
        <div className="overflow-hidden mb-6">
          <p className="text-white/90 uppercase tracking-[0.5em] text-[10px] md:text-xs font-semibold animate-reveal" style={{ animationDelay: '0.2s' }}>
            The Wedding Of
          </p>
        </div>
        
        {/* Couple Names */}
        <div className="text-center mb-12">
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl text-white mb-4 animate-reveal" style={{ animationDelay: '0.4s' }}>
            Raja & Putri
          </h1>
          <div className="overflow-hidden">
            <p className="font-headline text-xl md:text-3xl text-white/90 tracking-[0.1em] animate-reveal" style={{ animationDelay: '0.6s' }}>
              25 . 10 . 2025
            </p>
          </div>
        </div>

        {/* Countdown Section */}
        <div className="w-full max-w-3xl mt-8">
          <Countdown targetDate="2025-10-25T10:00:00" />
        </div>

        {/* Decorative Quote */}
        <div className="mt-16 text-center animate-in fade-in duration-1000" style={{ animationDelay: '1.2s' }}>
          <p className="text-white/60 text-[10px] uppercase tracking-[0.3em] italic max-w-xs mx-auto">
            "Bersatu dalam adat, dikuatkan oleh cinta."
          </p>
        </div>

        {/* Music Control - Circular Play Button matching screenshot style */}
        <div className="absolute bottom-12 right-6 md:right-12 z-50">
          <Button
            size="icon"
            variant="outline"
            className="rounded-full w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-xl border-white/20 text-white hover:bg-white/20 transition-all duration-500 group shadow-2xl"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 ml-1 fill-current" />
            )}
            <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-20" />
          </Button>
        </div>
      </div>
    </section>
  );
};