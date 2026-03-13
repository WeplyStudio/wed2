"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CountdownProps {
  targetDate: string;
}

export const CountdownSimple = ({ targetDate }: CountdownProps) => {
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
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8">
      {items.map((item, idx) => (
        <div key={item.label} className="flex items-center">
          <div className="flex flex-col items-center">
            <span className="font-headline text-3xl md:text-5xl text-white font-medium">
              {item.value}
            </span>
            <span className="text-xs md:text-sm text-[#bb4849] font-medium mt-1">
              {item.label}
            </span>
          </div>
          {idx < items.length - 1 && (
            <span className="text-3xl md:text-5xl text-white font-light ml-4 md:ml-8">:</span>
          )}
        </div>
      ))}
    </div>
  );
};
