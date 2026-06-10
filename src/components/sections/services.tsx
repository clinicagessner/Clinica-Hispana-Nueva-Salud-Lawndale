"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import { getLocalizedService } from "@/lib/utils";
import { cn } from "@/lib/utils";

const FEATURED_SLUGS = [
  "condiciones-cronicas",
  "examenes-inmigracion",
  "examenes-sangre",
  "ginecologia",
];

export function Services() {
  const t = useTranslations("services");
  const locale = useLocale();
  const [active, setActive] = useState(0);

  const featured = FEATURED_SLUGS.map((slug) => {
    const service = SERVICES.find((s) => s.slug === slug);
    return service ? getLocalizedService(service, locale) : null;
  }).filter(Boolean) as ReturnType<typeof getLocalizedService>[];

  return (
    <section id="services" className="bg-cyan-bg py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-dark mb-2">
            {t("title")}
          </h2>
          <p className="text-sm md:text-base text-slate-primary">
            {t("subtitle")}
          </p>
        </div>

        {/* Expanding strips — desktop */}
        <div className="hidden md:flex h-[420px] gap-3 max-w-5xl mx-auto">
          {featured.map((service, i) => (
            <div
              key={service.slug}
              onMouseEnter={() => setActive(i)}
              className={cn(
                "relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out",
                active === i ? "flex-4 shadow-2xl ring-1 ring-white/10" : "flex-1 shadow-lg"
              )}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={i === 0}
              />
              <div
                className={cn(
                  "absolute inset-0 transition-all duration-500",
                  active === i
                    ? "bg-linear-to-t from-blue-dark/75 via-blue-primary/15 to-transparent"
                    : "bg-linear-to-t from-blue-dark/70 via-blue-dark/40 to-blue-dark/30"
                )}
              />

              {/* Expanded content — visible only on active strip */}
              <div
                className={cn(
                  "absolute inset-0 p-6 flex flex-col justify-end transition-opacity duration-500",
                  active === i ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
              >
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm mb-3 line-clamp-2 max-w-md">
                  {service.description}
                </p>
                <a
                  href={`/${locale === "en" ? "en/" : ""}services/${service.slug}`}
                  className="service-link inline-flex items-center gap-2 font-medium w-fit"
                >
                  <span>{t("learnMore")}</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>

              {/* Collapsed title — vertical text on inactive strips */}
              <div
                className={cn(
                  "absolute inset-0 flex flex-col items-center justify-end p-4 gap-2 transition-opacity duration-500",
                  active === i ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
              >
                <span className="text-white/40 text-[10px] font-bold tracking-widest">
                  0{i + 1}
                </span>
                <h3 className="text-xs font-heading font-bold text-white [writing-mode:vertical-lr] rotate-180 tracking-wide">
                  {service.shortTitle || service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile — stacked horizontal cards */}
        <div className="flex md:hidden flex-col gap-3">
          {featured.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative h-44 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <h3 className="text-lg font-heading font-bold text-white mb-0.5">
                  {service.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-white/80 text-sm font-medium group-hover:text-white group-hover:gap-2.5 transition-all">
                  {t("learnMore")}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-6 md:mt-8">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white rounded-full px-8"
          >
            <Link href="/services">
              {t("viewAll")}
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
