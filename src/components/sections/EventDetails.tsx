"use client";

import { MapPin, Clock, ExternalLink, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CountdownSimple } from "../ui/CountdownSimple";

export const EventDetails = () => {
  return (
    <section id="details" className="relative">
      {/* Verse & Countdown Hero Section */}
      <div className="relative min-h-screen w-full flex items-center justify-center py-24 overflow-hidden">
        <Image
          src="https://picsum.photos/seed/verse/1200/800"
          alt="Background"
          fill
          className="object-cover opacity-60"
          data-ai-hint="wedding couple"
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          {/* Icon */}
          <div className="mb-6">
            <div className="animate-float">
              <Leaf className="w-12 h-12 text-white opacity-80" />
            </div>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h3 className="text-white text-lg md:text-xl font-headline tracking-widest mb-2 uppercase animate-reveal" style={{ animationDelay: '0.2s' }}>Hitung Mundur</h3>
            <h2 className="text-[#bb4849] text-4xl md:text-6xl font-headline italic animate-reveal" style={{ animationDelay: '0.4s' }}>Menuju Hari Bahagia</h2>
          </div>

          {/* Countdown */}
          <div className="mb-12">
            <CountdownSimple targetDate="2026-03-21T10:00:00" />
          </div>

          {/* Verse Text */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-white/90 text-sm md:text-base leading-relaxed font-headline italic whitespace-pre-line animate-in fade-in duration-1000" style={{ animationDelay: '0.8s' }}>
              "TUHAN memberkati engkau dan melindungi engkau;{"\n"}
              TUHAN menyinari engkau dengan wajah-Nya dan memberi engkau kasih karunia;{"\n"}
              TUHAN menghadapkan wajah-Nya kepadamu{"\n"}
              dan memberi engkau damai sejahtera"
            </p>
            <p className="text-white text-lg md:text-xl font-headline tracking-widest animate-in fade-in duration-1000" style={{ animationDelay: '1s' }}>
              - Bilangan 6 : 24-26 -
            </p>
          </div>
        </div>
      </div>

      {/* Location Details Section */}
      <div className="py-24 relative z-10 overflow-hidden min-h-[800px] flex items-center">
        {/* Background Image - Updated to the correct URL and optimized scaling/transparency */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.ibb.co.com/s933d4fP/Desain-tanpa-judul-20260313-163535-0000.png"
            alt="Section Background"
            fill
            className="object-cover object-center opacity-100"
            priority
          />
          {/* Minimal overlay to keep background clear but text readable */}
          <div className="absolute inset-0 bg-white/5" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Ceremony Card */}
            <div className="bg-white/95 backdrop-blur-sm shadow-2xl overflow-hidden rounded-sm flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-700">
              {/* Image Header */}
              <div className="relative h-64 w-full">
                <Image
                  src="https://picsum.photos/seed/ceremony/800/600"
                  alt="Holy Matrimony"
                  fill
                  className="object-cover"
                  data-ai-hint="church wedding"
                />
              </div>
              
              <div className="flex flex-1">
                {/* Vertical Sidebar - Maroon */}
                <div className="bg-[#bb4849] w-16 md:w-20 flex items-center justify-center py-8">
                  <span className="[writing-mode:vertical-rl] rotate-180 font-headline text-lg md:text-xl text-white tracking-[0.3em] uppercase whitespace-nowrap">
                    Pamasu-masuon
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6 md:p-10 space-y-8">
                  {/* Date Display */}
                  <div className="flex items-center gap-6">
                    <span className="font-headline text-5xl md:text-6xl text-[#bb4849]">21</span>
                    <div className="flex flex-col text-sm md:text-base uppercase tracking-widest font-bold text-foreground/70">
                      <span>Maret</span>
                      <span>2026</span>
                    </div>
                  </div>
                  
                  <div className="w-full h-px bg-muted/60" />
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-sm md:text-base text-muted-foreground">
                      <Clock className="w-5 h-5 text-[#bb4849]" />
                      <span>10:00 AM - Selesai</span>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#bb4849] font-bold">LOKASI ACARA</p>
                      <p className="text-sm md:text-base font-medium leading-relaxed text-foreground/80">
                        Gpdi siraituruk kecamatan porsea kabupaten toba
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full rounded-none border-[#bb4849] text-[#bb4849] hover:bg-[#bb4849] hover:text-white h-12 uppercase text-xs tracking-widest transition-all"
                    onClick={() => window.open('https://maps.google.com/?q=Gpdi+siraituruk+porsea', '_blank')}
                  >
                    <MapPin className="w-4 h-4 mr-2" /> Google Maps
                  </Button>
                </div>
              </div>
            </div>

            {/* Reception Card */}
            <div className="bg-white/95 backdrop-blur-sm shadow-2xl overflow-hidden rounded-sm flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
              {/* Image Header */}
              <div className="relative h-64 w-full">
                <Image
                  src="https://picsum.photos/seed/reception/800/600"
                  alt="Traditional Celebration"
                  fill
                  className="object-cover"
                  data-ai-hint="wedding reception"
                />
              </div>
              
              <div className="flex flex-1 flex-row-reverse">
                {/* Vertical Sidebar - Maroon (Right side) */}
                <div className="bg-[#bb4849] w-16 md:w-20 flex items-center justify-center py-8">
                  <span className="[writing-mode:vertical-rl] rotate-180 font-headline text-lg md:text-xl text-white tracking-[0.3em] uppercase whitespace-nowrap">
                    Ulaon Unjuk
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6 md:p-10 space-y-8 text-right">
                  {/* Date Display */}
                  <div className="flex items-center justify-end gap-6">
                    <div className="flex flex-col text-sm md:text-base uppercase tracking-widest font-bold text-foreground/70">
                      <span>Maret</span>
                      <span>2026</span>
                    </div>
                    <span className="font-headline text-5xl md:text-6xl text-[#bb4849]">21</span>
                  </div>
                  
                  <div className="w-full h-px bg-muted/60" />
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-end gap-3 text-sm md:text-base text-muted-foreground">
                      <span>Setelah ibadah - Selesai</span>
                      <Clock className="w-5 h-5 text-[#bb4849]" />
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#bb4849] font-bold">LOKASI ACARA</p>
                      <p className="text-sm md:text-base font-medium leading-relaxed text-foreground/80">
                        Amborgang kecamatan porsea
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full rounded-none border-[#bb4849] text-[#bb4849] hover:bg-[#bb4849] hover:text-white h-12 uppercase text-xs tracking-widest transition-all"
                    onClick={() => window.open('https://maps.google.com/?q=Amborgang+porsea', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" /> Google Maps
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
