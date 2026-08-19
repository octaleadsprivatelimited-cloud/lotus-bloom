import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import heroImg from "@/assets/hero-inspector.webp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Lotus Home Inspection | Book Inspection in Vizag" },
      { name: "description", content: "Contact Lotus Home Inspection in Visakhapatnam. Call +91 99080 43567 or visit our MVP Colony office to schedule your home inspection. Available Mon-Sat across Vizag." },
      { name: "keywords", content: "contact home inspector Vizag, book home inspection Visakhapatnam, home inspection phone number Vizag, MVP Colony home inspector, schedule inspection Vizag" },
      { property: "og:title", content: "Contact Us | Lotus Home Inspection Visakhapatnam" },
      { property: "og:description", content: "Call +91 99080 43567 to schedule your home inspection in Vizag. MVP Colony, Visakhapatnam." },
    ],
    links: [{ rel: "canonical", href: "https://lotushomeinspection.com/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section 
        className="relative min-h-[45vh] py-24 px-4 flex flex-col items-center justify-center text-center bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="relative z-10 mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">Contact Us</h1>
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-white font-medium">Contact</span>
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Get in Touch</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have questions about our inspection services or ready to book an appointment? 
            Reach out to us using the details below, and our team will get back to you promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600 mb-2">Mon-Fri from 8am to 6pm.</p>
              <a href="tel:+919908043567" className="text-primary font-semibold hover:underline">
                +91 99080 43567
              </a>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600 mb-2">Our friendly team is here to help.</p>
              <a href="mailto:contact@lotus-bloom.com" className="text-primary font-semibold hover:underline">
                contact@lotus-bloom.com
              </a>
            </div>

            {/* Office */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Office</h3>
              <p className="text-slate-600">
                MVP Colony<br />
                Visakhapatnam, Andhra Pradesh<br />
                India
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-border overflow-hidden h-full min-h-[500px]">
            <iframe
              title="Office Location Map"
              width="100%"
              height="100%"
              style={{ minHeight: "500px", border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=MVP%20Colony,%20Visakhapatnam&t=&z=14&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}
