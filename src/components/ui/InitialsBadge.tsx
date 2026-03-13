"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Komponen Lencana Inisial yang diletakkan tepat di tengah garis pemisah antar section.
 * Menggunakan posisi absolut dan animasi scale agar titik pusatnya tetap stabil di tengah.
 */
export const InitialsBadge = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Memicu animasi saat elemen masuk ke viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="relative z-50 h-0 w-full flex justify-center pointer-events-none">
      {/* 
        - top-0 dan -translate-y-1/2 memastikan elemen berada tepat 50% di atas 
        dan 50% di bawah garis pemisah section.
      */}
      <div 
        ref={ref}
        className={cn(
          "absolute top-0 -translate-y-1/2 pointer-events-auto transition-all duration-1000 ease-out transform",
          isVisible 
            ? "opacity-100 scale-100" 
            : "opacity-0 scale-75"
        )}
      >
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-muted/20">
          <span className="font-headline text-2xl md:text-3xl text-primary italic tracking-tighter">
            B&I
          </span>
        </div>
      </div>
    </div>
  );
};
