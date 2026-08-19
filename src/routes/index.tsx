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
import heroImg from "@/assets/hero-inspector.jpg";
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
        <img
          src={heroImg}
          alt="Home inspector reviewing a house exterior"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
              Serving homeowners across {site.state}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Statewide Home Inspection Services You Can Trust
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Thorough, certified and completely unbiased inspections before you buy, sell or
              build. Wherever you are in {site.state}, we give you the full picture — in writing,
              with photos, fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="accent" size="xl">
                <Link to="/book">Book an Inspection</Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <a href={site.phoneHref}>
                  <Phone className="size-4" /> Call {site.phone}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150} className="mt-14">
            <div className="grid gap-6 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-7 backdrop-blur-sm sm:grid-cols-3">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-extrabold text-accent sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/80">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {["InterNACHI", "ASHI Member", "State Licensed", "Fully Insured"].map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-primary-foreground/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground/80"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
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
          <Reveal className="mt-12">
            <StatsBar items={stats} />
          </Reveal>
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

      {/* SERVICE AREAS */}
      <section id="service-areas" className="bg-primary-deep py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            inverted
            eyebrow="Service Areas"
            title={`Proudly Serving Homeowners Across ${site.state}`}
            intro="Our inspectors are spread across the state, so you get local knowledge with statewide consistency."
          />
          <Reveal className="mt-12">
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-2.5 text-sm font-medium text-primary-foreground/90"
                >
                  {city}
                </span>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-primary-foreground/70">
              Don't see your town? We travel statewide —{" "}
              <a href={site.phoneHref} className="font-semibold text-accent hover:underline">
                give us a call
              </a>
              .
            </p>
          </Reveal>
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

      {/* RESOURCES */}
      <section id="resources" className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Resources"
            title="Home Inspection Tips & Resources"
            intro="Practical guidance from our inspectors for buyers, sellers and homeowners."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                  <img
                    src={postImages[p.image]}
                    alt={p.title}
                    width={900}
                    height={600}
                    loading="lazy"
                    className="h-48 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-primary">
                        {p.category}
                      </span>
                      <span className="text-muted-foreground">{p.date}</span>
                    </div>
                    <h3 className="mt-3 text-base font-bold text-primary">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read More <ArrowRight className="size-4" />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" size="xl">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <Reveal className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
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
