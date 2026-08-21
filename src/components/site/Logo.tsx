import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function LotusMark({ className }: { className?: string }) {
  return (
    <div className="bg-white rounded-full p-1.5 shadow-sm inline-flex items-center justify-center border border-slate-200/60">
      <img
        src="/logo.png"
        alt="Lotus Home Inspection"
        className={cn("h-10 w-auto object-contain", className)}
      />
    </div>
  );
}

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center group shrink-0", className)} aria-label="Lotus Home Inspection home">
      <div className="bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-md border border-slate-200/80 transition-transform duration-200 group-hover:scale-105">
        <img
          src="/logo.png"
          alt="Lotus Home Inspection Logo"
          className="h-8 sm:h-9 md:h-10 w-auto object-contain"
        />
      </div>
    </Link>
  );
}