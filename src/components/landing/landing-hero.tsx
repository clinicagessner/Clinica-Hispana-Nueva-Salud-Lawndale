import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Clock } from "lucide-react";
import { TelButton } from "@/components/landing/tel-button";
import { CONTACT_INFO } from "@/lib/constants";
import { LANDING_COPY } from "@/lib/landing-conquesting";
import type { Locale } from "@/i18n/config";

export function LandingHero({ locale }: { locale: Locale }) {
  const c = LANDING_COPY[locale].hero;

  return (
    <section
      className="relative overflow-hidden bg-cyan-warm pt-8 pb-12 md:pt-12 md:pb-20"
      aria-labelledby="landing-hero-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 size-96 rounded-full bg-blue-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 size-[28rem] rounded-full bg-yellow-accent/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-blue-primary/10 text-blue-primary rounded-full px-4 py-1.5 mb-4">
              <Clock className="size-4" aria-hidden="true" />
              <span className="text-xs md:text-sm font-semibold">{c.badge}</span>
            </div>

            <div className="inline-flex items-center gap-2 mb-4">
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 text-yellow-accent-dark"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </span>
              <span className="text-sm text-slate-dark/80 font-medium">
                {c.rating}
              </span>
            </div>

            <h1
              id="landing-hero-heading"
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-dark leading-tight mb-4"
            >
              {c.h1}
            </h1>

            <p className="text-base md:text-lg text-slate-dark/80 mb-8 max-w-xl">
              {c.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <TelButton label={c.ctaCall} variant="primary" size="lg" />
              <Link
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold bg-white text-blue-primary border border-blue-primary/20 shadow-sm hover:bg-blue-primary/5 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2"
                aria-label={c.ctaDirections}
              >
                <MapPin className="size-5" aria-hidden="true" />
                <span>{c.ctaDirections}</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/logo.webp"
                alt={c.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
