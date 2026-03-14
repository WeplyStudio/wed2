
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Countdown } from "../ui/Countdown";
import { ScrollReveal } from "../ui/ScrollReveal";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const images = [
    "https://i.ibb.co.com/YKSVKK9/Pict-1.png",
    "https://i.ibb.co.com/mr1jLN1v/Pict-4.png",
    "https://i.ibb.co.com/F4gygw5V/Pict-2.png",
    "https://i.ibb.co.com/S4nCM11q/Pict-3.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500); // Diubah menjadi 3,5 detik
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        {images.map((src, idx) => (
          <div
            key={src}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              idx === currentIndex ? "opacity-90" : "opacity-0"
            )}
          >
            <Image
              src={src}
              alt={`Wedding Background ${idx + 1}`}
              fill
              className="object-cover"
              priority={idx === 0}
              data-ai-hint="wedding couple"
            />
          </div>
        ))}
        <div className="absolute inset-0 hero-gradient z-10" />
      </div>

      {/* Main Content */}
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
