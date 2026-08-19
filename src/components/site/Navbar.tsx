import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Resources", to: "/resources" },
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
        "fixed top-4 z-50 w-full transition-all duration-300 px-4 sm:px-6 lg:px-8",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4">
        {/* Left Side Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-8" />
        </Link>

        {/* Center Menu Pill */}
        <nav className="hidden items-center gap-2 lg:flex bg-[#0076CE] rounded-full px-6 h-12 shadow-md border border-blue-500/30">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="rounded-full px-3 py-1.5 text-sm font-bold text-white transition-colors hover:text-white/80 [&.active]:underline [&.active]:underline-offset-4"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center justify-center gap-2 h-12 px-6 rounded-full bg-yellow-400 text-slate-900 font-bold hover:bg-yellow-500 md:flex transition-colors shadow-sm"
          >
            <Phone className="size-5" />
            <span>{site.phone}</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex size-12 items-center justify-center rounded-full bg-[#1c1917]/40 backdrop-blur-md border border-white/10 text-white lg:hidden hover:bg-[#1c1917]/60 transition-colors"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-border bg-background lg:hidden overflow-hidden"
          >
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
              <Button asChild variant="default" size="lg" className="mt-2 mb-2 bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/book" onClick={() => setOpen(false)}>
                  Book Inspection
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}