
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { BatakPattern } from "../ui/BatakPattern";

export const Couple = () => {
  const groomImg = PlaceHolderImages.find((img) => img.id === "groom");
  const brideImg = PlaceHolderImages.find((img) => img.id === "bride");

  return (
    <section id="couple" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 max-w-6xl mx-auto">
          {/* Groom */}
          <div className="text-center group flex flex-col items-center">
            <div className="relative w-64 h-80 md:w-72 md:h-96 mb-8">
              <div className="absolute -inset-4 border border-accent/20 rounded-lg -z-10 group-hover:scale-105 transition-transform" />
              <Image
                src={groomImg?.imageUrl || ""}
                alt="The Groom"
                fill
                className="object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                data-ai-hint="groom portrait"
              />
            </div>
            <h3 className="font-headline text-3xl text-accent mb-2">Raja Nainggolan, S.T.</h3>
            <p className="text-muted-foreground italic mb-4">First son of Mr. Togar Nainggolan & Mrs. Berliana Panjaitan</p>
            <div className="w-12 h-px bg-accent/30 mx-auto" />
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <BatakPattern className="w-12 h-12" />
            <span className="font-headline text-5xl md:text-7xl gold-text-gradient">&</span>
            <BatakPattern className="w-12 h-12" />
          </div>

          {/* Bride */}
          <div className="text-center group flex flex-col items-center">
            <div className="relative w-64 h-80 md:w-72 md:h-96 mb-8">
              <div className="absolute -inset-4 border border-accent/20 rounded-lg -z-10 group-hover:scale-105 transition-transform" />
              <Image
                src={brideImg?.imageUrl || ""}
                alt="The Bride"
                fill
                className="object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                data-ai-hint="bride portrait"
              />
            </div>
            <h3 className="font-headline text-3xl text-accent mb-2">Putri Siahaan, S.H.</h3>
            <p className="text-muted-foreground italic mb-4">Second daughter of Mr. Maruli Siahaan & Mrs. Roma Silalahi</p>
            <div className="w-12 h-px bg-accent/30 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
