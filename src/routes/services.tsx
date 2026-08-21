import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading, ServiceCard } from "@/components/site/Bits";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { services } from "@/data/site";
import heroImg from "@/assets/hero-inspector.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Home Inspection Services in Vizag | Snagging, Seepage, Structural Checks" },
      { name: "description", content: "Professional home inspection services in Visakhapatnam — new flat snagging, old property check, seepage & dampness detection, post-repair verification, and structural integrity inspection by certified civil engineers." },
      { name: "keywords", content: "home inspection services Vizag, snagging inspection Visakhapatnam, flat handover inspection Vizag, seepage check Vizag, property inspection services Andhra Pradesh, structural check Vizag, building inspection Visakhapatnam" },
      { property: "og:title", content: "Home Inspection Services | Lotus Home Inspection Vizag" },
      { property: "og:description", content: "Snagging, seepage detection, structural checks by certified civil engineers in Visakhapatnam." },
    ],
    links: [{ rel: "canonical", href: "https://lotushomeinspection.com/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-[45vh] py-24 px-4 flex flex-col items-center justify-center text-center bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="relative z-10 mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">Our Services</h1>
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-white font-medium">Services</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading eyebrow="What We Offer" title="Comprehensive Inspection Services" />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              icon={s.icon}
              image={s.image}
              title={s.title}
              blurb={s.blurb}
              addOn={s.addOn}
              href={`/services/${s.slug}`}
            />
          ))}
          <article className="group flex h-full flex-col rounded-2xl border-2 border-dashed border-yellow-400 bg-yellow-50/50 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] items-center justify-center text-center p-6 sm:p-10">
            <Phone className="size-10 sm:size-14 text-yellow-500 mb-3 sm:mb-5" />
            <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight">Need a Custom Inspection?</h3>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600 mb-4 sm:mb-6">
              Not sure which service you need? Talk to our civil engineers directly for expert advice.
            </p>
            <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold w-full">
              <Link to="/contact">Contact Us Now</Link>
            </Button>
          </article>
        </div>
      </div>
    </div>
  );
}
