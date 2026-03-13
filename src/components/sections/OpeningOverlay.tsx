"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

const OverlayContent = ({ onOpen }: { onOpen: () => void }) => {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "Nama Tamu";
  const heroImg = PlaceHolderImages.find((img) => img.id === "hero-image");

  return (
    <>
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt="Wedding Cover"
          fill
          className="object-cover opacity-50 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-full w-full max-w-lg mx-auto">
        <div className="space-y-4 mb-12 animate-in fade-in slide-in-from-top-10 duration-1000">
          <h2 className="font-headline text-2xl md:text-3xl text-primary font-medium italic">
            Wedding Invitation
          </h2>
          <p className="text-white text-sm md:text-base tracking-[0.2em] font-medium uppercase">
            21 JULI 2026
          </p>
        </div>

        <div className="mb-16 animate-in fade-in zoom-in duration-1000 delay-300">
          <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight">
            Binsar &<br />Indrawati
          </h1>
        </div>

        <div className="space-y-6 mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          <div className="space-y-2">
            <p className="text-white/90 font-serif italic text-base md:text-lg">
              Special Invite To :
            </p>
            <h3 className="text-primary font-headline text-2xl md:text-3xl">
              {guestName}
            </h3>
            <p className="text-white font-serif italic text-base">
              Di Tempat
            </p>
          </div>

          <Button 
            onClick={onOpen}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 h-auto group transition-all duration-500 shadow-xl"
          >
            <Mail className="w-5 h-5 mr-2" />
            <span className="font-medium text-base">Buka Undangan</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export const OpeningOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

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
        "fixed inset-0 z-[100] transition-all duration-1000 ease-in-out bg-black overflow-hidden",
        isOpen ? "translate-y-[-100%] opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      )}
    >
      <Suspense fallback={<div className="bg-black w-full h-full" />}>
        <OverlayContent onOpen={handleOpen} />
      </Suspense>
    </div>
  );
};
