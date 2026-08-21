import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Lotus Home Inspection",
  description: "Professional civil home building inspection services in Visakhapatnam (Vizag), Andhra Pradesh. Snagging, seepage detection, structural checks by certified civil engineers.",
  url: "https://lotushomeinspection.com",
  telephone: "+919908043567",
  email: "info@lotushomeinspection.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "MVP Colony",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    postalCode: "530017",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.7231,
    longitude: 83.3013,
  },
  areaServed: [
    { "@type": "City", name: "Visakhapatnam" },
    { "@type": "City", name: "Vizag" },
    { "@type": "State", name: "Andhra Pradesh" },
  ],
  priceRange: "₹₹",
  openingHours: "Mo-Sa 08:00-18:00",
  sameAs: [],
  image: "https://lotushomeinspection.com/logo.jpg",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "120",
    bestRating: "5",
  },
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error("Root error boundary:", error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lotus Home Inspection | Best Home Inspection in Visakhapatnam (Vizag)" },
      { name: "description", content: "Lotus Home Inspection — #1 home inspection service in Visakhapatnam (Vizag). Certified civil engineers for new flat snagging, seepage check, old property inspection. Photo reports in 24 hours. Call +91 99080 43567." },
      { name: "keywords", content: "home inspection Visakhapatnam, home inspection Vizag, flat inspection Vizag, snagging inspection Visakhapatnam, new apartment inspection Vizag, property inspection Andhra Pradesh, seepage check Vizag, building inspection Vizag, civil inspection Visakhapatnam, home inspector near me Vizag, house inspection Visakhapatnam, structural inspection Vizag, home inspection cost Vizag, best home inspector Vizag, property check before buying Vizag" },
      { name: "author", content: "Lotus Home Inspection" },
      { name: "geo.region", content: "IN-AP" },
      { name: "geo.placename", content: "Visakhapatnam" },
      { name: "geo.position", content: "17.7231;83.3013" },
      { name: "ICBM", content: "17.7231, 83.3013" },
      { property: "og:title", content: "Lotus Home Inspection | Best Home Inspection in Visakhapatnam" },
      { property: "og:description", content: "Certified civil home inspection in Vizag. Snagging, seepage, structural checks. Detailed photo reports in 24 hours." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lotushomeinspection.com" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Lotus Home Inspection" },
      { property: "og:image", content: "https://lotushomeinspection.com/logo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Lotus Home Inspection | Vizag's Best Home Inspectors" },
      { name: "twitter:description", content: "Certified civil engineers. New flat snagging, seepage checks, structural inspections in Visakhapatnam." },
      { name: "twitter:image", content: "https://lotushomeinspection.com/logo.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/logo.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/logo.png" },
      { rel: "canonical", href: "https://lotushomeinspection.com" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Footer />
      <WhatsAppWidget />
    </QueryClientProvider>
  );
}
