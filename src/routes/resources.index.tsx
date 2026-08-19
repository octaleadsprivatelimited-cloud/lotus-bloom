import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { posts } from "@/data/site";

import roofImg from "@/assets/blog-roof.webp";
import constructionImg from "@/assets/blog-construction.webp";
import aboutImg from "@/assets/about-inspector.webp";

const postImages: Record<string, string> = {
  roof: roofImg,
  construction: constructionImg,
  inspector: aboutImg,
};

import heroImg from "@/assets/hero-inspector.webp";

export const Route = createFileRoute("/resources/")({
  component: Resources,
});

function Resources() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-[45vh] py-24 px-4 flex flex-col items-center justify-center text-center bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="relative z-10 mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">Resources</h1>
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-white font-medium">Resources</span>
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">Home Inspection Resources</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Practical guidance, maintenance tips, and expert advice for buyers, sellers, and homeowners.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden bg-card border border-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <img
                  src={postImages[p.image]}
                  alt={p.title}
                  width={900}
                  height={600}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs mb-3">
                    <span className="bg-secondary px-3 py-1 font-semibold text-primary">
                      {p.category}
                    </span>
                    <span className="text-muted-foreground">{p.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{p.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground mb-6">
                    {p.excerpt}
                  </p>
                  <Link to={`/resources/${p.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline cursor-pointer mt-auto">
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
