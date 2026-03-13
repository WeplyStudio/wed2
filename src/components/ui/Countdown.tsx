
"use client";

import { useState, useEffect } from "react";

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
    <div className="grid grid-cols-4 gap-2 md:gap-4 w-full max-w-xl mx-auto px-4">
      {items.map((item) => (
        <div 
          key={item.label}
          className="bg-background/20 backdrop-blur-md border border-accent/20 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center group hover:border-accent/50 transition-colors"
        >
          <span className="font-headline text-2xl md:text-3xl text-accent font-bold">
            {String(item.value).padStart(2, '0')}
          </span>
          <span className="text-[10px] md:text-xs text-accent/80 tracking-widest mt-1">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};
