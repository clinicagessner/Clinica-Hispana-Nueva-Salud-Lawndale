import { MapPin, Clock, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { LANDING_CALLRAIL, LANDING_COPY } from "@/lib/landing-conquesting";
import { LandingCallButton } from "@/components/landing/landing-call-button";
import type { Locale } from "@/i18n/config";

export function LandingLocation({ locale }: { locale: Locale }) {
  const c = LANDING_COPY[locale].location;

  return (
    <section className="py-16 md:py-24 bg-yellow-accent-bg" aria-labelledby="landing-location-heading">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="landing-location-heading"
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-dark mb-4"
          >
            {c.title}
          </h2>
          <p className="text-lg text-slate-dark/70">{c.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col">
            <div className="space-y-6 flex-1">
              <div className="flex gap-4">
                <div className="size-10 shrink-0 rounded-xl bg-red-accent-bg flex items-center justify-center">
                  <MapPin className="size-5 text-red-accent" aria-hidden />
                </div>
                <div>
                  <p className="font-semibold text-slate-dark mb-1">
                    {c.addressLabel}
                  </p>
                  <p className="text-sm text-slate-dark/80 leading-relaxed">
                    {CONTACT_INFO.address}
                    <br />
                    {CONTACT_INFO.city}, {CONTACT_INFO.state}{" "}
                    {CONTACT_INFO.zip}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-10 shrink-0 rounded-xl bg-red-accent-bg flex items-center justify-center">
                  <Clock className="size-5 text-red-accent" aria-hidden />
                </div>
                <div>
                  <p className="font-semibold text-slate-dark mb-1">
                    {c.hoursLabel}
                  </p>
                  <p className="text-sm text-slate-dark/80">{c.hoursValue}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-10 shrink-0 rounded-xl bg-red-accent-bg flex items-center justify-center">
                  <Phone className="size-5 text-red-accent" aria-hidden />
                </div>
                <div>
                  <p className="font-semibold text-slate-dark mb-1">
                    {c.phoneLabel}
                  </p>
                  <LandingCallButton
                    className="text-red-accent font-bold hover:text-red-accent-dark transition-colors inline-block"
                    ariaLabel={`${c.phoneLabel} ${LANDING_CALLRAIL.display}`}
                  >
                    {LANDING_CALLRAIL.display}
                  </LandingCallButton>
                </div>
              </div>
            </div>

            <a
              href={CONTACT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-red-accent text-white px-6 py-3 font-semibold shadow-md hover:bg-red-accent-dark hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-accent focus-visible:ring-offset-2"
            >
              <MapPin className="size-5" aria-hidden />
              <span>{c.ctaMaps}</span>
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-100 min-h-[320px] lg:min-h-full">
            <iframe
              src={CONTACT_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={
                locale === "en"
                  ? "Clínica Hispana Nueva Salud Lawndale location map"
                  : "Mapa de ubicación de Clínica Hispana Nueva Salud Lawndale"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
