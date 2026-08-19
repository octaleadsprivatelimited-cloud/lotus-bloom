import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
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
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 -z-10 size-full object-cover"
        >
          <source src="/lotus-home-inspection.mp4" type="video/mp4" />
        </video>

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
              Serving homeowners across {site.state}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Statewide Home Inspection Services You Can Trust
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              Thorough, certified and completely unbiased inspections before you buy, sell or
              build. Wherever you are in {site.state}, we give you the full picture — in writing,
              with photos, fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
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
      </section>

      {/* PROFESSIONAL STATS BANNER */}
      <section className="relative py-24 overflow-hidden">
        <img
          src={constructionImg}
          alt="Home Inspection Under Construction"
          className="absolute inset-0 size-full object-cover -z-20 object-center"
        />
        <div className="absolute inset-0 bg-slate-900/85 -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="flex flex-col items-center justify-center">
                <span className="text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-lg">
                  {s.value}
                </span>
                <span className="text-sm font-bold text-blue-300 uppercase tracking-widest drop-shadow-sm">
                  {s.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Help"
            title="A Simple, Proven Four-Step Process"
            intro="From the first walkthrough to the final report, you always know where things stand."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 text-center shadow-[var(--shadow-card)]">
                  <span className="mx-auto inline-flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon name={s.icon} className="size-6" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
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
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built Around Trust, Clarity and Speed"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={(i % 2) * 90}>
                <div className="flex h-full gap-5 rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent-foreground">
                    <Icon name={w.icon} className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-primary">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* COVERAGE */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
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
      </section>



      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 80}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </section>



      {/* FAQ */}
      <section className="bg-surface py-20 lg:py-32 border-t border-border">
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
