import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/Bits";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Phone, CalendarCheck } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Home Inspection in Vizag | Schedule Online | Lotus Home Inspection" },
      { name: "description", content: "Book your home inspection in Visakhapatnam today. Call or WhatsApp +91 99080 43567. Fast scheduling, certified civil engineers, detailed photo reports delivered in 24 hours." },
      { name: "keywords", content: "book home inspection Vizag, schedule property inspection Visakhapatnam, home inspection appointment Vizag, WhatsApp home inspector Vizag" },
      { property: "og:title", content: "Book Inspection | Lotus Home Inspection Visakhapatnam" },
      { property: "og:description", content: "Schedule your home inspection in Vizag. Call or WhatsApp +91 99080 43567." },
    ],
    links: [{ rel: "canonical", href: "https://lotushomeinspection.com/book" }],
  }),
  component: Book,
});

function Book() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Schedule Your Inspection" 
          intro="Ready to get a complete health check for your home? Contact our team directly to find a time that works best for you." 
        />
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-border flex flex-col items-center text-center">
            <div className="size-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
              <Phone className="size-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp or Call</h3>
            <p className="text-slate-600 mb-6">
              The fastest way to book. Send us a message on WhatsApp and we will confirm your slot in minutes.
            </p>
            <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white">
              <a href={site.phoneHref} target="_blank" rel="noopener noreferrer">
                Message {site.phone}
              </a>
            </Button>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-border flex flex-col items-center text-center">
            <div className="size-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
              <CalendarCheck className="size-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Email Request</h3>
            <p className="text-slate-600 mb-6">
              Prefer email? Send us your property details and requested date, and we'll get back to you shortly.
            </p>
            <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              <a href={`mailto:${site.email}?subject=Inspection Booking Request`}>
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
