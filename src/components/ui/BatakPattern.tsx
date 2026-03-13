
import { cn } from "@/lib/utils";

export const BatakPattern = ({ className }: { className?: string }) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-accent opacity-20", className)}
    >
      <path
        d="M50 5L95 50L50 95L5 50L50 5Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M50 15L85 50L50 85L15 50L50 15Z"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" />
      <path d="M0 50H100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
      <path d="M50 0V100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
    </svg>
  );
};
