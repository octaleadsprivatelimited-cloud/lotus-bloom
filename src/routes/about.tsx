import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Eye, Target, Heart } from "lucide-react";
import aboutImg from "@/assets/about-inspector.webp";
import heroImg from "@/assets/hero-inspector.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Lotus Home Inspection | Certified Civil Engineers in Vizag" },
      { name: "description", content: "Learn about Lotus Home Inspection — Visakhapatnam's trusted team of certified civil engineers providing thorough, unbiased property inspections for homebuyers across Vizag and Andhra Pradesh." },
      { name: "keywords", content: "about Lotus Home Inspection, certified home inspectors Vizag, civil engineers Visakhapatnam, property inspection team Vizag, trusted home inspection Andhra Pradesh" },
      { property: "og:title", content: "About Lotus Home Inspection | Vizag's Trusted Inspectors" },
      { property: "og:description", content: "Certified civil engineers providing thorough, unbiased home inspections across Visakhapatnam." },
    ],
    links: [{ rel: "canonical", href: "https://lotushomeinspection.com/about" }],
  }),
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
      <section className="relative py-24 bg-gradient-to-br from-slate-50 to-blue-50/50 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-[20%] right-[-5%] w-72 h-72 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3 block">
              Our Purpose
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Why We Do This
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              We honestly just want to help people move into homes with confidence. 
              Our goal is to eliminate the stress of the unknown by providing clear, unbiased insights.
            </p>
          </div>
          
          {/* Grid with Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted home inspection service statewide, setting the standard for quality and transparency in real estate.
              </p>
            </div>
            
            {/* Mission */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 group delay-100">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/30">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower homebuyers and homeowners with accurate, actionable information, safeguarding their biggest investments.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 group delay-200">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Core Values</h3>
              <p className="text-slate-600 leading-relaxed">
                Integrity, Thoroughness, and Clarity. We never compromise on our standards and always put our clients first.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

