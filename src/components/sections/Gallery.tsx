
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollReveal } from "../ui/ScrollReveal";

export const Gallery = () => {
  const allGalleryImages = PlaceHolderImages.filter((img) => img.id.startsWith("gallery-"));
  
  // Use the available images for both slider and grid
  const sliderImages = allGalleryImages;
  const gridImages = allGalleryImages;

  return (
    <section id="gallery" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl text-foreground/80 mb-2">
            A Glimpse of Our Journey
          </h2>
          <div className="w-12 h-px bg-primary/20 mx-auto mt-4" />
        </ScrollReveal>

        {/* Top Slider Section */}
        <ScrollReveal className="max-w-4xl mx-auto relative px-4 md:px-0 mb-8" delay={200}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {sliderImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md bg-muted">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/50 border-none text-foreground hover:bg-white/80 transition-all" />
            <CarouselNext className="right-2 bg-white/50 border-none text-foreground hover:bg-white/80 transition-all" />
          </Carousel>
        </ScrollReveal>

        {/* Bottom Grid Section */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {gridImages.map((image, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-sm bg-muted group">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
