import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Eye, Target, Heart } from "lucide-react";
import aboutImg from "@/assets/about-inspector.webp";
import heroImg from "@/assets/hero-inspector.webp";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* 1. Hero Section */}
      <section 
        className="relative min-h-[45vh] py-24 px-4 flex flex-col items-center justify-center text-center bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Solid Overlay */}
        <div className="absolute inset-0 bg-slate-950/80" />
        
        {/* Content */}
        <div className="relative z-10 mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">About Us</h1>
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-white font-medium">About Us</span>
          </nav>
        </div>
      </section>

      {/* 2. Introduction & Checklist */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img src={aboutImg} alt="Inspection Checklist" className="w-full h-auto object-cover aspect-[4/3]" />
          </div>
          
          {/* Right Column: Content */}
          <div className="flex flex-col gap-6">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-blue-600 uppercase">
              Statewide Home Inspection
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Each Assessment In Turn, Guaranteeing Quality!
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              At Lotus Home Inspection, we believe a home inspection should be genuinely useful — not a checklist. 
              We inspect every accessible system, explain what we find in plain language, and never sell you repairs. 
              We treat your home like it's our own, ensuring your investment is secure and safe.
            </p>
            
            <ul className="space-y-4 mt-2">
              {[
                "Certified & licensed inspectors",
                "Detailed reports with high-quality photos",
                "Same-day or next-day report delivery",
                "Complete assessment of all major property systems"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Why We Do This (Mission/Vision Grid) */}
      <section className="bg-slate-50 py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-600 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-600 rounded-full">
              Why We Do This
            </h2>
            <p className="mt-6 text-base text-slate-600 leading-relaxed">
              We honestly just want to help people move into homes with confidence. 
              Our goal is to eliminate the stress of the unknown by providing clear, unbiased insights.
            </p>
          </div>
          
          {/* Grid with borders */}
          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Vision */}
            <div className="flex items-start gap-4 p-6 md:first:pl-0">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To be the most trusted home inspection service statewide, setting the standard for quality and transparency in real estate.
                </p>
              </div>
            </div>
            
            {/* Mission */}
            <div className="flex items-start gap-4 p-6">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To empower homebuyers and homeowners with accurate, actionable information, safeguarding their biggest investments.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="flex items-start gap-4 p-6 md:last:pr-0">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Core Values</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Integrity, Thoroughness, and Clarity. We never compromise on our standards and always put our clients first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

