import { getTranslations } from "next-intl/server";
import {
  MapPin,
  Car,
  Wheelchair,
  Bus,
  Clock,
  Phone,
  NavigationArrow,
} from "@phosphor-icons/react/dist/ssr";
import { CONTACT_INFO } from "@/lib/constants";

export async function Location() {
  const t = await getTranslations("location");

  const features = [
    { icon: Car, label: t("features.parking") },
    { icon: Wheelchair, label: t("features.wheelchair") },
    { icon: Bus, label: t("features.bus") },
  ];

  return (
    <section id="location" className="py-14 md:py-20 bg-cyan-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top row — header + CTAs */}
          <div className="animate-on-scroll fade-up flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-slate-dark">
                {t("title")}
              </h2>
              <p className="mt-1 text-base text-slate-primary">{t("subtitle")}</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-dark transition-colors"
              >
                <NavigationArrow className="size-4" weight="fill" />
                {t("getDirections")}
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-blue-primary px-5 py-2.5 text-sm font-semibold text-blue-primary hover:bg-blue-primary hover:text-white transition-colors"
              >
                <Phone className="size-4" weight="bold" />
                {t("call")}
              </a>
            </div>
          </div>

          {/* Main content — map + info side by side */}
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Map — spans 2 cols */}
            <div className="animate-on-scroll fade-up lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-cyan-bg-alt">
              <div className="relative aspect-video lg:aspect-auto lg:h-full lg:min-h-[360px]">
                <iframe
                  src={CONTACT_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de la Clínica Hispana Houston"
                  className="absolute inset-0"
                />
              </div>
            </div>

            {/* Info card */}
            <div className="animate-on-scroll fade-up stagger-1 flex flex-col gap-4">
              {/* Address */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-cyan-bg-alt flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <div className="size-10 rounded-xl bg-blue-primary flex items-center justify-center shrink-0">
                    <MapPin className="size-5 text-white" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-bold text-slate-dark">
                      {t("howToGetHere")}
                    </h3>
                    <p className="text-sm text-slate-primary mt-0.5">
                      {CONTACT_INFO.address}
                      <br />
                      {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 pt-4 border-t border-cyan-bg-alt">
                  <div className="size-10 rounded-xl bg-red-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="size-5 text-red-accent" weight="fill" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-dark">
                      {t("hours")}
                    </p>
                    <p className="text-xs text-slate-muted mt-0.5">
                      Último paciente: 8:30 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-3">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 bg-white rounded-xl p-3 shadow-sm border border-cyan-bg-alt text-center"
                    >
                      <div className="size-9 rounded-lg bg-cyan-bg flex items-center justify-center">
                        <IconComponent
                          className="size-4 text-blue-primary"
                          weight="fill"
                        />
                      </div>
                      <span className="text-[11px] text-slate-primary font-medium leading-tight">
                        {feature.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
