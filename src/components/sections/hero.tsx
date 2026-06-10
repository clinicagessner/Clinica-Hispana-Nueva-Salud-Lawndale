import Image from "next/image";
import { useTranslations } from "next-intl";
import { Phone, MapPin, Clock, Star, CheckCircle2, CalendarCheck, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";

export function Hero({
  rating = 0,
  totalReviews = 0,
}: {
  rating?: number;
  totalReviews?: number;
}) {
  const t = useTranslations("hero");

  const features = ["1", "2", "3", "4"] as const;
  const fullTitle = t("title");
  const highlightMatch = fullTitle.match(/(.*?)(Nueva Salud Lawndale)(.*)/);
  const hasReviews = totalReviews > 0;
  const roundedRating = Math.round(rating);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-[calc(100svh-5rem)] flex items-center py-12 md:py-16"
      aria-labelledby="hero-heading"
    >
      {/* Fondo: degradado firma animado + capa de profundidad */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-brand-gradient animate-brand-pan" />
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-linear-to-b from-blue-deep/70 via-blue-deep/30 to-blue-deep/80" />
      {/* Glows decorativos */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="brand-glow -top-24 -left-24 w-[28rem] h-[28rem]" style={{ background: "#2b8cf5" }} />
        <div className="brand-glow top-1/3 -right-24 w-[26rem] h-[26rem]" style={{ background: "#ed1b2e" }} />
        <div className="brand-glow bottom-0 left-1/3 w-80 h-80" style={{ background: "#ffb703" }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* IZQUIERDA — Texto */}
          <div className="lg:col-span-7 text-white">
            <div className="animate-hero-title inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-accent opacity-75 animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-yellow-accent" />
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wide">{t("badge")}</span>
            </div>

            <h1
              id="hero-heading"
              className="animate-hero-title text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-4"
            >
              {highlightMatch ? (
                <>
                  {highlightMatch[1]}
                  <span className="text-yellow-accent">{highlightMatch[2]}</span>
                  {highlightMatch[3]}
                </>
              ) : (
                fullTitle
              )}
            </h1>

            <p className="animate-hero-subtitle text-base md:text-lg text-blue-light/95 mb-6 max-w-2xl leading-relaxed">
              {t("subtitle")}
            </p>

            <ul className="animate-hero-features flex flex-wrap gap-2.5 mb-7 max-w-2xl">
              {features.map((key) => (
                <li
                  key={key}
                  className="inline-flex items-center gap-2 glass-card rounded-full pl-2 pr-3.5 py-1.5"
                >
                  <CheckCircle2 className="size-4 text-yellow-accent shrink-0" aria-hidden="true" />
                  <span className="text-white text-xs md:text-sm font-medium leading-snug">
                    {t(`features.${key}`)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="animate-hero-cta flex flex-col sm:flex-row gap-3 mb-6">
              <Button asChild variant="accent" size="xl">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  aria-label={`${t("ctaCall")} — ${CONTACT_INFO.phoneFormatted}`}
                >
                  <Phone className="size-5" aria-hidden="true" />
                  {t("ctaCall")}
                </a>
              </Button>

              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-blue-primary hover:border-white"
              >
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t("ctaLocation")} — ${CONTACT_INFO.address}, ${CONTACT_INFO.city} ${CONTACT_INFO.state}`}
                >
                  <MapPin className="size-5" aria-hidden="true" />
                  {t("ctaLocation")}
                </a>
              </Button>
            </div>

            {/* Fila de confianza — reseñas solo si existen datos reales */}
            <div className="animate-hero-cta flex items-center gap-3">
              <div className="flex items-center gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`size-4 md:size-5 ${
                      i < (hasReviews ? roundedRating : 5)
                        ? "fill-yellow-accent text-yellow-accent"
                        : "fill-white/25 text-white/25"
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs md:text-sm text-blue-light/90 font-medium">
                {hasReviews
                  ? `${rating.toFixed(1)} · ${totalReviews} ${t("googleReviews")}`
                  : t("badge")}
              </p>
            </div>
          </div>

          {/* DERECHA — Lockup de marca (logo Nueva Salud Lawndale) + chips flotantes */}
          <div className="lg:col-span-5">
            <div className="animate-hero-image relative mx-auto max-w-sm lg:max-w-none">
              {/* Tarjeta central con el logo */}
              <div className="relative rounded-[2rem] bg-white shadow-brand p-7 md:p-9 text-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 brand-kicker shadow-md">
                  <Stethoscope className="size-3.5" aria-hidden="true" />
                  Houston, TX
                </div>
                <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48">
                  <Image
                    src="/images/logo.webp"
                    alt={`Logo de ${SITE_CONFIG.name}, clínica médica hispana en Houston TX`}
                    fill
                    priority
                    fetchPriority="high"
                    className="object-contain"
                    sizes="200px"
                  />
                </div>
                <h2 className="mt-2 text-xl md:text-2xl font-extrabold text-slate-dark leading-tight">
                  {SITE_CONFIG.name}
                </h2>
                <p className="text-sm text-slate-muted mt-1">{SITE_CONFIG.tagline}</p>

                <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-slate-light">
                  <div className="flex flex-col items-center gap-1">
                    <CalendarCheck className="size-5 text-blue-primary" aria-hidden="true" />
                    <span className="text-[11px] md:text-xs font-semibold text-slate-dark text-center leading-tight">
                      {t("badgeWalkIn")}
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Clock className="size-5 text-red-accent" aria-hidden="true" />
                    <span className="text-[11px] md:text-xs font-semibold text-slate-dark text-center leading-tight">
                      9 AM – 9 PM · 7 días
                    </span>
                  </div>
                </div>
              </div>

              {/* Chip flotante: dirección */}
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex absolute -bottom-5 -left-5 items-center gap-2 glass-card-dark rounded-2xl px-4 py-3 text-white shadow-brand-soft hover:scale-[1.03] transition-transform"
              >
                <MapPin className="size-5 text-yellow-accent shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wide text-blue-light/80 font-semibold">Dirección</p>
                  <p className="text-xs font-semibold leading-tight">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </a>

              {/* Chip flotante: teléfono */}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="hidden md:flex absolute -top-5 -right-5 items-center gap-2 glass-card-dark rounded-2xl px-4 py-3 text-white shadow-brand-soft hover:scale-[1.03] transition-transform"
              >
                <Phone className="size-5 text-yellow-accent shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wide text-blue-light/80 font-semibold">Llámenos</p>
                  <p className="text-xs font-semibold leading-tight">{CONTACT_INFO.phoneFormatted}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
