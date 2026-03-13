"use client";

import { ScrollReveal } from "./ScrollReveal";

export const InitialsBadge = () => {
  return (
    <div className="relative z-40 -mt-12 md:-mt-16 flex justify-center pointer-events-none">
      <ScrollReveal>
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-muted/10 pointer-events-auto">
          <span className="font-headline text-2xl md:text-3xl text-primary italic tracking-tighter">
            B&I
          </span>
        </div>
      </ScrollReveal>
    </div>
  );
};
