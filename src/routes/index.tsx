import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ChevronDown, ChevronUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/site/Icon";
import {
  CheckItem,
  CtaBanner,
  PageHero as _PageHero,
  SectionHeading,
  ServiceCard,
  StatsBar,
  TestimonialCard,
} from "@/components/site/Bits";
import {
  coverage,
  faqs,
  posts,
  processSteps,
  serviceAreas,
  services,
  site,
  stats,
  testimonials,
  whyChooseUs,
} from "@/data/site";

import aboutImg from "@/assets/about-inspector.jpg";
import roofImg from "@/assets/blog-roof.jpg";
import constructionImg from "@/assets/blog-construction.jpg";

void _PageHero;

const postImages: Record<string, string> = {
  roof: roofImg,
  construction: constructionImg,
  inspector: aboutImg,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lotus Home Inspection | Statewide Home Inspection Services" },
      {
        name: "description",
        content:
          "Certified, unbiased home inspections statewide. Detailed photo reports delivered in 24 hours for buyers, sellers and new construction.",
      },
      { property: "og:title", content: "Lotus Home Inspection | Statewide Home Inspection Services" },
      {
        property: "og:description",
        content:
          "Certified, unbiased home inspections statewide with fast, photo-rich digital reports.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const [activeProcess, setActiveProcess] = useState<number | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden min-h-[100dvh] flex flex-col justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 -z-10 size-full object-cover"
        >
          <source src="/lotus-home-inspection.mp4" type="video/mp4" />
        </video>

        <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300 drop-shadow-md">
              Serving homeowners across {site.state}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              Statewide Home Inspection Services You Can Trust
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
              Thorough, certified and completely unbiased inspections before you buy, sell or
              build. Wherever you are in {site.state}, we give you the full picture — in writing,
              with photos, fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 drop-shadow-lg">
              <Button asChild variant="default" size="xl" className="bg-blue-600 hover:bg-blue-700 text-white border-0">
                <Link to="/book">Book an Inspection</Link>
              </Button>
              <Button asChild size="xl" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 border-0 font-bold">
                <a href={site.phoneHref}>
                  <Phone className="size-4" /> Call {site.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="pt-20 lg:pt-24 pb-8 lg:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] p-6 sm:p-12 lg:p-16 border border-border shadow-sm">
            <img
              src="/about-bg.jpeg"
              alt="About Lotus Background"
              className="absolute inset-0 size-full object-cover -z-20 object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-white/20 -z-10" />
            
            <div className="grid items-center gap-12 lg:grid-cols-2 relative z-10">
          <Reveal>
            <img
              src={aboutImg}
              alt="Certified inspector reviewing findings with a homeowner"
              width={1200}
              height={1000}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              align="left"
              eyebrow="About Lotus"
              title="Home Inspection Services You Can Rely On, Statewide"
              intro="Lotus Home Inspection is a team of licensed inspectors and engineers who believe a home inspection should be genuinely useful — not a checklist. We inspect every accessible system, explain what we find in plain language and never sell you repairs."
            />
            <ul className="mt-7 space-y-3">
              <CheckItem>Certified &amp; licensed inspectors</CheckItem>
              <CheckItem>Detailed reports with photos</CheckItem>
              <CheckItem>Same-day or next-day reports</CheckItem>
            </ul>
            <Button asChild variant="hero" size="xl" className="mt-8">
              <Link to="/about">More About Us</Link>
            </Button>
          </Reveal>
        </div>
        </div>
        </div>
      </section>



      {/* PROCESS */}
      <section className="pt-8 lg:pt-10 pb-8 lg:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] p-6 sm:p-12 lg:p-16 border border-border shadow-sm">
            <img
              src="/how-we-help-bg.jpg"
              alt="How We Help Background"
              className="absolute inset-0 size-full object-cover -z-20 object-center"
            />

            
            <div className="relative z-10 [&_h2]:text-white [&_h2]:drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] [&_p]:text-white/95 [&_p]:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [&_span]:drop-shadow-md">
              <SectionHeading
                eyebrow="How We Help"
                title="A Simple, Proven Four-Step Process"
                intro="From the first walkthrough to the final report, you always know where things stand."
              />
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((s, i) => {
                  const isOpen = activeProcess === i;
                  return (
                  <Reveal key={s.title} delay={i * 90}>
                    <div 
                      onClick={() => setActiveProcess(isOpen ? null : i)}
                      className="cursor-pointer sm:cursor-default h-full rounded-[2rem] sm:rounded-2xl border border-white/30 bg-black/40 backdrop-blur-md p-3 px-5 sm:p-7 text-center shadow-xl transition-all sm:hover:-translate-y-1 hover:bg-black/50 hover:border-white/50 group flex flex-col items-center"
                    >
                      <div className="flex w-full items-center justify-between sm:flex-col sm:justify-center">
                        <span className="shrink-0 inline-flex size-10 sm:size-14 items-center justify-center rounded-2xl sm:rounded-2xl bg-white/20 text-white shadow-inner border border-white/10 transition-colors sm:group-hover:bg-primary sm:group-hover:border-primary">
                          <Icon name={s.icon} className="size-4 sm:size-6" />
                        </span>
                        <h3 className="text-left sm:text-center ml-4 sm:ml-0 sm:mt-5 text-sm sm:text-lg font-bold text-white drop-shadow-md flex-1">{s.title}</h3>
                        
                        <span className="sm:hidden text-white/60 ml-2">
                          {isOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                        </span>
                      </div>
                      
                      <div className={`overflow-hidden transition-all duration-300 w-full ${isOpen ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0 sm:max-h-40 sm:mt-2 sm:opacity-100'}`}>
                        <p className="text-xs sm:text-sm leading-relaxed text-white/85 drop-shadow-sm text-left sm:text-center">{s.text}</p>
                      </div>
                    </div>
                  </Reveal>
                )})}
              </div>
          </div>
        </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white pt-8 lg:pt-10 pb-8 lg:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Inspection Services, Wherever You're Buying or Building"
          intro="Every inspection is performed by a certified member of our team and delivered as a photo-rich digital report."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}>
              <ServiceCard
                icon={s.icon}
                title={s.title}
                blurb={s.blurb}
                addOn={s.addOn}
                href={s.slug}
              />
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <CtaBanner
            title="Not sure which inspection you need?"
            text="Talk to our team — we'll point you to the right one in five minutes."
          >
            <Button asChild variant="accent" size="xl">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <Link to="/book">Book Now</Link>
            </Button>
          </CtaBanner>
        </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="pt-8 lg:pt-10 pb-8 lg:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] p-6 sm:p-12 lg:p-16 border border-border shadow-sm">
            <img
              src="/why-choose-us-bg.jpg"
              alt="Why Choose Us Background"
              className="absolute inset-0 size-full object-cover -z-20 object-center"
            />
            <div className="relative z-10 [&_h2]:text-white [&_h2]:drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] [&_p]:text-white/95 [&_p]:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [&_span]:drop-shadow-md">
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Built Around Trust, Clarity and Speed"
              />
              <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={(i % 2) * 90}>
                    <div className="flex h-full gap-5 rounded-2xl border border-white/30 bg-black/40 backdrop-blur-md p-7 shadow-xl transition-all hover:-translate-y-1 hover:bg-black/50 hover:border-white/50 group">
                      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white shadow-inner border border-white/10 transition-colors group-hover:bg-primary group-hover:border-primary">
                        <Icon name={w.icon} className="size-6" />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-white drop-shadow-md">{w.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/85 drop-shadow-sm">{w.text}</p>
                      </div>
                    </div>
              </Reveal>
            ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="bg-white pt-8 lg:pt-10 pb-8 lg:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
          eyebrow="What's Covered"
          title="What a Home Inspection Covers"
          intro="We evaluate every major system of the home, document our findings with photos and rate each issue by urgency so you know what matters most."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coverage.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 80}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon name={c.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-primary">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{c.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        </div>
      </section>



      {/* TESTIMONIALS */}
      <section className="bg-surface pt-8 lg:pt-10 pb-8 lg:pb-10 overflow-hidden">
        <style>{`
          @keyframes mobileMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-mobile-marquee {
            animation: mobileMarquee 30s linear infinite;
            width: max-content;
          }
          .animate-mobile-marquee:hover,
          .animate-mobile-marquee:active {
            animation-play-state: paused;
          }
        `}</style>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
          />
          
          {/* Desktop Grid */}
          <div className="mt-12 hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 4) * 80}>
                <TestimonialCard {...t} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile Scrolling Marquee */}
        <div className="mt-10 md:hidden w-full relative">
          <div className="flex animate-mobile-marquee gap-4 pl-4 cursor-pointer">
             {[...testimonials, ...testimonials].map((t, idx) => (
               <div key={`${t.name}-${idx}`} className="w-[75vw] max-w-[280px] shrink-0">
                 <TestimonialCard {...t} />
               </div>
             ))}
          </div>
        </div>
      </section>



      {/* FAQ */}
      <section className="bg-white pt-8 lg:pt-10 pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">FAQ</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
                Frequently Asked Questions
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Everything you need to know about our inspection process, scheduling, and what to expect from your final report.
              </p>
              <div className="p-6 bg-card border border-border flex flex-col items-start gap-4">
                <h4 className="font-bold text-foreground">Still have questions?</h4>
                <p className="text-sm text-muted-foreground">
                  Our team is available to help. Reach out directly and we'll get back to you right away.
                </p>
                <Button asChild variant="default" className="bg-primary text-white hover:bg-primary-deep rounded-none mt-2">
                  <Link to="/contact">Contact Support</Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-7 lg:pl-12">
              <Reveal>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((f, i) => (
                    <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border py-2">
                      <AccordionTrigger className="text-left text-base font-bold text-slate-900 hover:text-primary transition-colors hover:no-underline">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-slate-600 pb-6 pt-2">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
          <div>
            <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
              Ready to Schedule Your Inspection?
            </h2>
            <p className="mt-3 text-base text-primary-foreground/85">
              Statewide availability, flexible scheduling and reports in 24 hours. Call{" "}
              <a href={site.phoneHref} className="font-bold text-accent hover:underline">
                {site.phone}
              </a>
            </p>
          </div>
          <Button asChild variant="gold" size="xl">
            <Link to="/book">Book Now</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
