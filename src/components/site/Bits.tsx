import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  inverted = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  inverted?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-bold uppercase tracking-[0.2em]",
            inverted ? "text-accent" : "text-accent-foreground/70",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-extrabold sm:text-4xl",
          inverted ? "text-primary-foreground" : "text-primary",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            inverted ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function ServiceCard({
  icon,
  image,
  title,
  blurb,
  addOn,
  href,
}: {
  icon: string;
  image?: string;
  title: string;
  blurb: string;
  addOn?: boolean;
  href: string;
}) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] overflow-hidden">
      {image && (
        <div className="h-48 w-full overflow-hidden border-b border-border">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
      )}
      <div className="flex h-full flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon name={icon} className="size-6" />
          </span>
          {addOn && (
            <span className="rounded-full bg-gold/25 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-deep">
              Available Add-On
            </span>
          )}
        </div>
        <h3 className="mt-5 text-lg font-bold text-primary">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{blurb}</p>
        <a
          href={`https://wa.me/+919908043567?text=${encodeURIComponent(`Hello! I'm interested in the ${title} service.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent-foreground"
        >
          Learn More <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

export function TestimonialCard({
  name,
  role,
  quote,
  rating,
}: {
  name: string;
  role: string;
  quote: string;
  rating: number;
}) {
  return (
    <figure className="flex h-full flex-col rounded-[2rem] sm:rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-[var(--shadow-card)]">
      <div className="flex gap-0.5 text-gold">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="size-3.5 sm:size-4 fill-current" aria-hidden="true" />
        ))}
        <span className="sr-only">{rating} out of 5 stars</span>
      </div>
      <blockquote className="mt-3 sm:mt-4 flex-1 text-xs sm:text-sm leading-relaxed text-foreground/85">
        “{quote}”
      </blockquote>
      <figcaption className="mt-4 sm:mt-6 flex items-center gap-3 border-t border-border pt-3 sm:pt-4">
        <span className="inline-flex size-8 sm:size-10 items-center justify-center rounded-full bg-primary text-xs sm:text-sm font-bold text-primary-foreground">
          {name.charAt(0)}
        </span>
        <span>
          <span className="block text-xs sm:text-sm font-semibold text-primary">{name}</span>
          <span className="block text-[10px] sm:text-xs text-muted-foreground">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function StatsBar({
  items,
  inverted = false,
}: {
  items: { value: string; label: string }[];
  inverted?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid gap-6 rounded-2xl border p-7 sm:grid-cols-2 lg:grid-cols-4",
        inverted
          ? "border-primary-foreground/20 bg-primary-foreground/10"
          : "border-border bg-surface shadow-[var(--shadow-card)]",
      )}
    >
      {items.map((s) => (
        <div key={s.label} className="text-center">
          <p
            className={cn(
              "text-3xl font-extrabold sm:text-4xl",
              inverted ? "text-accent" : "text-primary",
            )}
          >
            {s.value}
          </p>
          <p
            className={cn(
              "mt-1 text-xs font-semibold uppercase tracking-[0.14em]",
              inverted ? "text-primary-foreground/75" : "text-muted-foreground",
            )}
          >
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export function CtaBanner({
  title,
  text,
  children,
}: {
  title: string;
  text?: string;
  children?: ReactNode;
}) {
  return (
    <Reveal>
      <div className="flex flex-col items-center gap-5 rounded-2xl bg-primary px-8 py-9 text-center shadow-[var(--shadow-lift)] sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h3 className="text-xl font-bold text-primary-foreground sm:text-2xl">{title}</h3>
          {text && <p className="mt-1.5 text-sm text-primary-foreground/80">{text}</p>}
        </div>
        <div className="flex flex-wrap justify-center gap-3">{children}</div>
      </div>
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="bg-primary-deep">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold text-primary-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80">{text}</p>
      </div>
    </section>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-foreground/85">
      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/25 text-accent-foreground">
        <svg viewBox="0 0 20 20" className="size-3.5" fill="currentColor" aria-hidden="true">
          <path d="M7.6 13.6 4 10l1.4-1.4 2.2 2.2 6-6L15 6.2z" />
        </svg>
      </span>
      {children}
    </li>
  );
}

export { Button };