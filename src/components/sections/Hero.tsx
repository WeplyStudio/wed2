
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { BatakPattern } from "../ui/BatakPattern";
import { Countdown } from "../ui/Countdown";
import { Music, Music2, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [isMuted, setIsMuted] = useState(false);
  const heroImg = PlaceHolderImages.find((img) => img.id === "hero-image");

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt={heroImg?.description || "Wedding Hero"}
          fill
          className="object-cover opacity-70 scale-105 animate-fade-in"
          priority
          data-ai-hint="batak wedding"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background z-10" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-between py-12 px-4 max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <BatakPattern className="w-16 h-16 mx-auto mb-4 opacity-80" />
          <p className="text-accent uppercase tracking-[0.4em] text-xs font-bold mb-8">The Wedding Of</p>
          
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl mb-4 leading-tight">
            <span className="block gold-text-gradient">Raja &</span>
            <span className="block gold-text-gradient">Putri</span>
          </h1>
          
          <div className="w-16 h-px bg-accent/50 mx-auto mb-6" />
          <p className="font-headline text-2xl md:text-4xl text-foreground font-light tracking-[0.2em]">
            25 . 10 . 2025
          </p>
        </div>

        {/* Footer Section with Countdown */}
        <div className="w-full text-center animate-slide-up space-y-8" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-accent/30" />
            <span className="text-accent text-[10px] uppercase tracking-widest">Our Journey Towards Forever</span>
            <div className="h-px w-8 bg-accent/30" />
          </div>
          
          <Countdown targetDate="2025-10-25T10:00:00" />
          
          <p className="text-accent/80 text-xs uppercase tracking-tighter italic max-w-xs mx-auto">
            "Ai songon i do molo mangula na denggan, na uli i do dapothononna."
          </p>
        </div>

        {/* Floating Music Toggle */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            size="icon"
            variant="outline"
            className="rounded-full w-12 h-12 bg-background/20 backdrop-blur-md border-accent/20 text-accent hover:bg-accent/10 animate-pulse"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </Button>
        </div>
      </div>
    </section>
  );
};
