"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CountdownProps {
  targetDate: string;
}

export const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  const items = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 w-full max-w-2xl mx-auto">
      {items.map((item, idx) => (
        <div 
          key={item.label}
          className={cn(
            "glass-card rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center transition-all duration-500 hover:scale-105 hover:bg-white/20",
            "animate-in fade-in slide-in-from-bottom-8"
          )}
          style={{ animationDelay: `${0.8 + idx * 0.1}s` }}
        >
          <span className="font-headline text-2xl md:text-4xl text-white font-medium tracking-tighter">
            {String(item.value).padStart(2, '0')}
          </span>
          <span className="text-[9px] md:text-[10px] text-white/70 tracking-[0.2em] mt-2 font-bold uppercase">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};