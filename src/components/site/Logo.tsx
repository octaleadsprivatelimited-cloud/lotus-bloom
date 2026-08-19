import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function LotusMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={cn("h-9 w-9", className)}>
      <path
        d="M24 6c4.2 4.6 6.3 9.6 6.3 15S28.2 31.4 24 36c-4.2-4.6-6.3-9.6-6.3-15S19.8 10.6 24 6Z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M24 36c-6 2.6-12 1.6-17-3 3.2-4.6 7.4-7 12.4-7.2 1 3.9 2.6 7.3 4.6 10.2Z"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M24 36c6 2.6 12 1.6 17-3-3.2-4.6-7.4-7-12.4-7.2-1 3.9-2.6 7.3-4.6 10.2Z"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M24 37.5c-3.9 3-8.4 4.5-13.5 4.5 2.2-3.6 5.4-6 9.6-7.3 1.2 1 2.5 1.9 3.9 2.8Zm0 0c3.9 3 8.4 4.5 13.5 4.5-2.2-3.6-5.4-6-9.6-7.3-1.2 1-2.5 1.9-3.9 2.8Z"
        fill="currentColor"
        opacity="0.35"
      />
    </svg>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Lotus Home Inspection home">
      <LotusMark className={inverted ? "h-9 w-9 text-accent" : "h-9 w-9 text-primary"} />
      <span className="leading-tight">
        <span
          className={cn(
            "block text-[15px] font-extrabold tracking-tight sm:text-base",
            inverted ? "text-primary-foreground" : "text-primary",
          )}
        >
          Lotus Home Inspection
        </span>
        <span
          className={cn(
            "hidden text-[11px] font-medium uppercase tracking-[0.18em] sm:block",
            inverted ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          Statewide Service
        </span>
      </span>
    </Link>
  );
}