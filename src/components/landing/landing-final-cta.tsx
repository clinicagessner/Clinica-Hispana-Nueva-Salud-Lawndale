import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import { TelButton } from "@/components/landing/tel-button";
import { CONTACT_INFO } from "@/lib/constants";
import { LANDING_COPY } from "@/lib/landing-conquesting";
import type { Locale } from "@/i18n/config";

export function LandingFinalCTA({ locale }: { locale: Locale }) {
  const c = LANDING_COPY[locale].finalCta;

  return (
    <section className="bg-red-accent text-white py-16 md:py-20" aria-labelledby="landing-final-heading">
      <div className="container mx-auto px-4 text-center">
        <h2
          id="landing-final-heading"
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          {c.title}
        </h2>
        <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          {c.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <TelButton label={c.ctaCall} variant="white" size="lg" />
          <Link
            href={CONTACT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <MapPin className="size-5" aria-hidden />
            <span>{c.ctaDirections}</span>
          </Link>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base">
          {c.badges.map((b) => (
            <li key={b} className="inline-flex items-center gap-2">
              <CheckCircle2
                className="size-5 shrink-0"
                aria-hidden
                strokeWidth={2.5}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
