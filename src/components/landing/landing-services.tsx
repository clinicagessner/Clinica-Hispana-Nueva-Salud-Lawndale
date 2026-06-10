import Image from "next/image";
import { SERVICES } from "@/lib/constants";
import { LANDING_COPY } from "@/lib/landing-conquesting";
import type { Locale } from "@/i18n/config";

const FEATURED_SLUGS = [
  "medicina-familiar",
  "examenes-inmigracion",
  "condiciones-cronicas",
  "laboratorio",
] as const;

export function LandingServices({ locale }: { locale: Locale }) {
  const c = LANDING_COPY[locale].services;

  const services = FEATURED_SLUGS
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <section className="py-16 md:py-24 bg-cyan-warm" aria-labelledby="landing-services-heading">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="landing-services-heading"
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-dark mb-4"
          >
            {c.title}
          </h2>
          <p className="text-lg text-slate-dark/70">{c.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const title =
              (locale === "en" ? service.titleEn : service.title) ?? service.title;
            const description =
              (locale === "en" ? service.descriptionEn : service.description) ??
              service.description;
            return (
              <article
                key={service.id}
                className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-md group"
              >
                <Image
                  src={service.image}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-blue-dark/95 via-blue-dark/50 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-2 leading-tight">
                    {title}
                  </h3>
                  <p className="text-sm text-white/90 line-clamp-3">
                    {description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
