import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading, ServiceCard } from "@/components/site/Bits";
import { services } from "@/data/site";
import heroImg from "@/assets/hero-inspector.webp";

export const Route = createFileRoute("/services")({
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
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              icon={s.icon}
              title={s.title}
              blurb={s.blurb}
              addOn={s.addOn}
              href={`/services/${s.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
