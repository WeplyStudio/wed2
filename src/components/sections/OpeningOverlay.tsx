
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MailOpen, Heart } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { BatakPattern } from "../ui/BatakPattern";
import { cn } from "@/lib/utils";

export const OpeningOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const heroImg = PlaceHolderImages.find((img) => img.id === "hero-image");

  const handleOpen = () => {
    setIsOpen(true);
    // Allow body to scroll
    document.body.style.overflow = "auto";
    setTimeout(() => setShouldRender(false), 1000);
  };

  useEffect(() => {
    // Prevent body from scrolling while overlay is active
    if (shouldRender) {
      document.body.style.overflow = "hidden";
    }
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[100] transition-all duration-1000 ease-in-out flex items-center justify-center overflow-hidden",
        isOpen ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt="Wedding Cover"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-md animate-in fade-in zoom-in duration-700">
        <div className="mb-8">
          <BatakPattern className="w-16 h-16 mx-auto mb-6 opacity-80 text-accent" />
          <p className="text-accent uppercase tracking-[0.4em] text-xs font-semibold mb-4">You are invited to</p>
          <h1 className="font-headline text-5xl md:text-6xl text-white mb-2 gold-text-gradient">
            Raja & Putri
          </h1>
          <p className="text-accent/80 tracking-widest uppercase text-sm">25 . 10 . 2025</p>
        </div>

        <div className="space-y-6">
          <div className="w-12 h-px bg-accent/50 mx-auto" />
          <p className="text-foreground/80 italic text-sm">
            We would be honored to have you join us on our special day.
          </p>
          <Button 
            onClick={handleOpen}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 group transition-all"
          >
            <MailOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Open Invitation
          </Button>
        </div>

        <div className="mt-12">
          <Heart className="w-6 h-6 text-accent/40 mx-auto animate-pulse" />
        </div>
      </div>
    </div>
  );
};
