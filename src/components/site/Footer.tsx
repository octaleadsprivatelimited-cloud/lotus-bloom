import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { Logo } from "./Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 py-12 md:py-16 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Footer */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Info */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white inline-block p-2">
              <Logo className="text-slate-950 w-32" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {site.tagline} We provide thorough and fully certified inspections across the state.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li><a href={site.phoneHref} className="hover:text-white transition-colors">{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="hover:text-white transition-colors">{site.email}</a></li>
              <li className="pt-2 text-slate-400">
                MVP Colony<br />
                Visakhapatnam, AP
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile Footer Accordion */}
        <div className="md:hidden flex flex-col gap-6">
          <div className="space-y-4">
            <div className="bg-white inline-block p-2">
              <Logo className="text-slate-950 w-32" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {site.tagline} We provide thorough and fully certified inspections across the state.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="quick-links" className="border-slate-800">
              <AccordionTrigger className="text-white hover:text-slate-300 font-bold uppercase tracking-wider text-sm">Quick Links</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 text-sm pt-2 pb-4">
                  <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                  <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="contact" className="border-slate-800">
              <AccordionTrigger className="text-white hover:text-slate-300 font-bold uppercase tracking-wider text-sm">Contact Us</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 text-sm pt-2 pb-4">
                  <li><a href={site.phoneHref} className="hover:text-white transition-colors">{site.phone}</a></li>
                  <li><a href={`mailto:${site.email}`} className="hover:text-white transition-colors">{site.email}</a></li>
                  <li className="pt-2 text-slate-400">MVP Colony<br />Visakhapatnam, AP</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="legal" className="border-slate-800">
              <AccordionTrigger className="text-white hover:text-slate-300 font-bold uppercase tracking-wider text-sm">Legal</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 text-sm pt-2 pb-4">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500 text-center flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} {site.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Developed By <a href="https://www.octaleads.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Octaleads</a>
          </p>
        </div>
      </div>
    </footer>
  );
}