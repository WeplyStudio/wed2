"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MailOpen } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { cn } from "@/lib/utils";

export const OpeningOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const heroImg = PlaceHolderImages.find((img) => img.id === "hero-image");

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "auto";
    setTimeout(() => setShouldRender(false), 1200);
  };

  useEffect(() => {
    if (shouldRender) {
      document.body.style.overflow = "hidden";
    }
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[100] transition-all duration-1000 ease-in-out flex items-end justify-center overflow-hidden bg-black",
        isOpen ? "scale-110 opacity-0 pointer-events-none" : "scale-100 opacity-100"
      )}
    >
      {/* Background with zoom effect */}
      <div className="absolute inset-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt="Wedding Cover"
          fill
          className="object-cover scale-110 opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-black/40 to-transparent" />
      </div>

      {/* Luxury Content - Pushed to the bottom */}
      <div className="relative z-10 text-center px-6 max-w-lg mb-24 md:mb-32">
        <div className="mb-8 animate-in fade-in slide-in-from-top-12 duration-1000">
          <p className="text-secondary uppercase tracking-[0.6em] text-[10px] font-bold mb-6">You are invited to</p>
          <h1 className="font-headline text-5xl md:text-7xl text-white mb-4 gold-shimmer">
            Binsar & Indrawati
          </h1>
          <div className="w-16 h-px bg-secondary/50 mx-auto my-6" />
          <p className="text-white/80 tracking-[0.3em] uppercase text-xs">21 . 03 . 2026</p>
        </div>

        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <p className="text-white/70 italic text-sm font-light max-w-xs mx-auto leading-relaxed">
            "TUHAN memberkati engkau dan melindungi engkau."
          </p>
          <Button 
            onClick={handleOpen}
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-12 py-7 group transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95"
          >
            <MailOpen className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
            <span className="uppercase tracking-[0.2em] font-bold text-sm">Open Invitation</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
