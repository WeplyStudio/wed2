
"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play blocked", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[90]">
      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder romantic track
      />
      <Button
        size="icon"
        variant="outline"
        className={cn(
          "rounded-full w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-xl border-white/20 text-white hover:bg-white/20 transition-all duration-500 group shadow-2xl relative",
          isPlaying ? "animate-pulse" : ""
        )}
        onClick={togglePlay}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 fill-current" />
        ) : (
          <Play className="w-6 h-6 ml-1 fill-current" />
        )}
        
        {/* Animated Rings */}
        <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-20" />
        <div className={cn(
          "absolute inset-0 rounded-full border border-white/10 transition-transform duration-1000",
          isPlaying ? "scale-150 opacity-0" : "scale-100 opacity-0"
        )} />
      </Button>
      
      {/* Floating Tooltip/Label */}
      <div className="absolute -top-10 right-0 whitespace-nowrap bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white/80 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
        {isPlaying ? "Music On" : "Music Off"}
      </div>
    </div>
  );
};
