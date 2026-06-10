import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";
import { CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";
import { LANDING_CALLRAIL, LANDING_COPY } from "@/lib/landing-conquesting";
import { LandingCallButton } from "@/components/landing/landing-call-button";
import type { Locale } from "@/i18n/config";

export function LandingFooter({ locale }: { locale: Locale }) {
  const c = LANDING_COPY[locale].location;
  const year = new Date().getFullYear();
  const rights =
    locale === "en" ? "All rights reserved" : "Todos los derechos reservados";

  return (
    <footer className="bg-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={SITE_CONFIG.logoUrl}
                alt={SITE_CONFIG.name}
                width={48}
                height={48}
                className="size-12 object-contain bg-white rounded-lg p-1"
              />
              <span className="font-heading font-bold text-lg leading-tight">
                Clínica Hispana
                <br />
                Nueva Salud Lawndale
              </span>
            </div>
            <p className="text-sm text-white/70">{SITE_CONFIG.tagline}</p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <MapPin className="size-5 shrink-0 text-yellow-accent" aria-hidden />
              <p className="text-sm text-white/85 leading-relaxed">
                {CONTACT_INFO.address}
                <br />
                {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
              </p>
            </div>
            <div className="flex gap-3">
              <Clock className="size-5 shrink-0 text-yellow-accent" aria-hidden />
              <p className="text-sm text-white/85">{c.hoursValue}</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-semibold text-base">
              {locale === "en" ? "Call now" : "Llame ahora"}
            </p>
            <LandingCallButton
              className="inline-flex items-center gap-3 rounded-full bg-red-accent text-white px-6 py-3 font-semibold shadow-md hover:bg-red-accent-dark hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-accent focus-visible:ring-offset-2 focus-visible:ring-offset-blue-dark"
              ariaLabel={`${locale === "en" ? "Call" : "Llamar"} ${LANDING_CALLRAIL.display}`}
            >
              <Phone className="size-5" aria-hidden />
              <span>{LANDING_CALLRAIL.display}</span>
            </LandingCallButton>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/60">
          © {year} {SITE_CONFIG.name}. {rights}.
        </div>
      </div>
    </footer>
  );
}
