
"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useFirebase, initiateAnonymousSignIn } from "@/firebase";

const OverlayContent = ({ onOpen }: { onOpen: () => void }) => {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "Nama Tamu";
  const heroImg = PlaceHolderImages.find((img) => img.id === "hero-image");
  const { auth } = useFirebase();

  const handleOpenClick = () => {
    // Initiate anonymous sign-in when the invitation is opened
    if (auth) {
      initiateAnonymousSignIn(auth);
    }
    onOpen();
  };

  return (
    <>
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt="Wedding Cover"
          fill
          className="object-cover opacity-60 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content Layer - Positioned at bottom with tight spacing */}
      <div className="relative z-10 flex flex-col items-center justify-end text-center px-6 h-full w-full max-w-lg mx-auto pb-16 md:pb-24">
        
        {/* Wedding Invitation Label */}
        <div className="space-y-0.5 mb-2 animate-in fade-in slide-in-from-top-10 duration-1000">
          <h2 className="font-headline text-2xl md:text-3xl text-primary font-medium italic leading-none">
            Wedding Invitation
          </h2>
          <p className="text-white text-[10px] md:text-xs tracking-[0.3em] font-medium uppercase opacity-80">
            21 MARET 2026
          </p>
        </div>

        {/* Main Names */}
        <div className="mb-6 animate-in fade-in zoom-in duration-1000 delay-300">
          <h1 className="font-headline text-5xl md:text-7xl text-primary leading-[1] drop-shadow-lg">
            Binsar &<br />Indrawati
          </h1>
        </div>

        {/* Special Invite Section */}
        <div className="space-y-4 mb-2 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          <div className="space-y-0.5">
            <p className="text-white/80 font-serif italic text-sm md:text-base leading-tight">
              Special Invite To :
            </p>
            <h3 className="text-primary font-headline text-2xl md:text-3xl leading-tight">
              {guestName}
            </h3>
            <p className="text-white/60 font-serif italic text-[10px] md:text-xs uppercase tracking-widest">
              Di Tempat
            </p>
          </div>

          <Button 
            onClick={handleOpenClick}
            className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 py-2 h-auto group transition-all duration-500 shadow-lg border border-primary/20 scale-90 md:scale-100"
          >
            <Mail className="w-3.5 h-3.5 mr-2 group-hover:animate-bounce" />
            <span className="font-medium text-xs tracking-wide">Buka Undangan</span>
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
