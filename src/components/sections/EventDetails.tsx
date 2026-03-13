"use client";

import { MapPin, Calendar, Clock, Info, ExternalLink, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CountdownSimple } from "../ui/CountdownSimple";

export const EventDetails = () => {
  const handleAddToCalendar = () => {
    const event = {
      title: "Wedding of Binsar & Indrawati",
      start: "20260321T100000Z",
      end: "20260321T210000Z",
      location: "Porsea, Toba, Indonesia",
      details: "Traditional Batak Wedding celebration for Binsar and Indrawati."
    };
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    window.open(googleCalendarUrl, '_blank');
  };

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
            <Leaf className="w-12 h-12 text-white opacity-80" />
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h3 className="text-white text-lg md:text-xl font-headline tracking-widest mb-2">Hitung Mundur</h3>
            <h2 className="text-[#bb4849] text-4xl md:text-6xl font-headline italic">Menuju Hari Bahagia</h2>
          </div>

          {/* Countdown */}
          <div className="mb-12">
            <CountdownSimple targetDate="2026-03-21T10:00:00" />
          </div>

          {/* Google Calendar Button */}
          <div className="mb-16">
            <Button 
              onClick={handleAddToCalendar}
              className="bg-[#bb4849] hover:bg-[#a33d3e] text-white rounded-lg px-8 py-6 h-auto transition-all shadow-xl flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              <span className="font-medium text-sm">Google Calendar</span>
            </Button>
          </div>

          {/* Verse Text */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-white/90 text-sm md:text-base leading-relaxed font-headline italic">
              "Dan firman-Nya: Sebab itu laki-laki akan meninggalkan ayah dan ibunya dan bersatu dengan isterinya, sehingga keduanya itu menjadi satu daging. Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."
            </p>
            <p className="text-white text-lg md:text-xl font-headline tracking-widest">
              - Matius 19 : 5-6 -
            </p>
          </div>
        </div>
      </div>

      {/* Location Details Section */}
      <div className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Ceremony */}
            <Card className="bg-card/50 border-[#bb4849]/20 hover:border-[#bb4849]/40 transition-all duration-300 group overflow-hidden">
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#bb4849]/10 flex items-center justify-center">
                    <Calendar className="text-[#bb4849] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl text-[#bb4849]">Pamasu-masuon</h3>
                    <p className="text-sm text-muted-foreground">Holy Matrimony</p>
                  </div>
                </div>
                
                <ul className="space-y-4 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#bb4849] shrink-0 mt-0.5" />
                    <span>10:00 AM - selesai</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#bb4849] shrink-0 mt-0.5" />
                    <span>Gpdi siraituruk kecamatan porsea kabupaten toba</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button 
                    variant="outline" 
                    className="w-full border-[#bb4849]/30 text-[#bb4849] hover:bg-[#bb4849]/10"
                    onClick={() => window.open('https://maps.google.com/?q=Gpdi+siraituruk+porsea', '_blank')}
                  >
                    <MapPin className="w-4 h-4 mr-2" /> View Location
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Reception */}
            <Card className="bg-card/50 border-[#bb4849]/20 hover:border-[#bb4849]/40 transition-all duration-300 group overflow-hidden">
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#bb4849]/10 flex items-center justify-center">
                    <Info className="text-[#bb4849] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl text-[#bb4849]">Ulaon Unjuk</h3>
                    <p className="text-sm text-muted-foreground">Traditional Celebration</p>
                  </div>
                </div>
                
                <ul className="space-y-4 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#bb4849] shrink-0 mt-0.5" />
                    <span>Setelah ibadah - selesai</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#bb4849] shrink-0 mt-0.5" />
                    <span>Amborgang kecamatan porsea</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button 
                    variant="outline" 
                    className="w-full border-[#bb4849]/30 text-[#bb4849] hover:bg-[#bb4849]/10"
                    onClick={() => window.open('https://maps.google.com/?q=Amborgang+porsea', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" /> Open Maps
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};