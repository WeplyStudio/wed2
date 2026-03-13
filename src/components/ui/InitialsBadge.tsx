"use client";

import { ScrollReveal } from "./ScrollReveal";

export const InitialsBadge = () => {
  return (
    <div className="relative z-50 h-0 w-full flex justify-center pointer-events-none">
      {/* 
        Menggunakan h-0 agar container tidak memakan ruang vertikal.
        -translate-y-1/2 akan membuat elemen tepat berada di tengah-tengah garis pemisah section.
      */}
      <div className="-translate-y-1/2 pointer-events-auto">
        <ScrollReveal>
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-muted/20">
            <span className="font-headline text-2xl md:text-3xl text-primary italic tracking-tighter">
              B&I
            </span>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
