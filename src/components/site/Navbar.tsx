import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Service Areas", to: "/#service-areas" },
  { label: "Resources", to: "/#resources" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur shadow-[var(--shadow-card)]"
          : "bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-secondary md:flex"
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
          <Button asChild variant="accent" size="lg" className="hidden sm:inline-flex">
            <Link to="/book">Book Inspection</Link>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex size-10 items-center justify-center rounded-md text-primary lg:hidden"
          >
            {open ? <Menu className="size-5 hidden" /> : null}
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 px-3 py-3 text-sm font-semibold text-primary"
            >
              <Phone className="size-4" /> {site.phone}
            </a>
            <Button asChild variant="accent" size="lg" className="mt-2 mb-2">
              <Link to="/book" onClick={() => setOpen(false)}>
                Book Inspection
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}