"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Komponen pembungkus untuk memberikan animasi Fade In Up
 * yang dipicu saat elemen masuk ke viewport.
 * Animasi akan diulang setiap kali elemen muncul kembali.
 */
export const ScrollReveal = ({ children, className, delay = 0 }: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jika elemen masuk viewport, tampilkan.
        // Jika elemen keluar viewport, sembunyikan (agar bisa animasi lagi saat di-scroll balik).
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.1, // Trigger saat 10% elemen terlihat
        rootMargin: "0px 0px -50px 0px" // Trigger sedikit sebelum elemen muncul penuh
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
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out transform",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
