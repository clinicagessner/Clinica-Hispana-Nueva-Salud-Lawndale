import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Phone,
  MapPin,
  Clock,
  CalendarCheck,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/shared/star-rating";
import { CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";

export function Hero({
  rating = 0,
  totalReviews = 0,
}: {
  rating?: number;
  totalReviews?: number;
}) {
  const t = useTranslations("hero");
  const tc = useTranslations("common");

  // WhatsApp usa su número dedicado (exclusivo para chat), nunca el principal:
  // el swap.js de CallRail reescribe el número de llamadas visible en el DOM y
  // no debe tocar este enlace. Por eso tampoco se muestra el número como texto.
  const whatsappHref = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(tc("whatsappMessage"))}`;

  const fullTitle = t("title");
  const highlightMatch = fullTitle.match(/(.*?)(Houston|Confianza)(.*)/);
  const hasReviews = totalReviews > 0;

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-[calc(100svh-5rem)] flex items-center justify-center py-16 md:py-20"
      aria-labelledby="hero-heading"
    >
      {/* Capa 1 — degradado de marca (fallback si no hay foto) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-brand-gradient animate-brand-pan"
      />
      {/* Capa 2 — foto de fondo (aparece al subir /images/hero-bg.jpg) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
      />
      {/* Capa 3 — scrim oscuro para legibilidad del texto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-b from-blue-deep/85 via-blue-deep/55 to-blue-deep/90"
      />

      <div className="container relative z-10 mx-auto px-4 w-full">
        <div className="mx-auto max-w-3xl text-center text-white">
          {/* Logo */}
          <div className="animate-hero-title relative mx-auto mb-5 size-28 md:size-36">
            <Image
              src="/images/logo.webp"
              alt={`Logo de ${SITE_CONFIG.name}, clínica médica hispana en Houston TX`}
              fill
              priority
              fetchPriority="high"
              className="object-contain drop-shadow-lg"
              sizes="144px"
            />
          </div>

          {/* Badge */}
          <div className="animate-hero-title inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-accent opacity-75 animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-yellow-accent" />
            </span>
            <span className="text-xs md:text-sm font-semibold tracking-wide">
              {t("badge")}
            </span>
          </div>

          {/* Titular */}
          <h1
            id="hero-heading"
            className="animate-hero-title text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-4 text-balance drop-shadow-md"
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

          {/* Subtítulo */}
          <p className="animate-hero-subtitle mx-auto max-w-2xl text-base md:text-lg text-blue-light/95 mb-8 leading-relaxed">
            {t("subtitle")}
          </p>

          {/* CTAs */}
          <div className="animate-hero-cta flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Button asChild variant="accent" size="xl">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                aria-label={`${t("ctaCall")} — ${CONTACT_INFO.phoneFormatted}`}
              >
                <Phone className="size-5" aria-hidden="true" />
                {t("ctaCall")}
              </a>
            </Button>

            <Button asChild variant="whatsapp" size="xl">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={tc("whatsapp")}
                className="group"
              >
                <WhatsappLogo
                  className="size-5 shrink-0 transition-transform group-hover:scale-110"
                  weight="fill"
                  aria-hidden="true"
                />
                {t("ctaWhatsapp")}
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

          {/* ¿Prefieres que te contactemos? → enlace al formulario de la home */}
          <p className="animate-hero-cta -mt-4 mb-10 text-sm font-medium text-blue-light/90">
            {t("contactPrompt")}{" "}
            <a
              href="#contact"
              className="group inline-flex items-center gap-1 rounded font-semibold text-yellow-accent underline decoration-yellow-accent/40 decoration-2 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {t("contactLink")}
              <ArrowRight
                className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </p>

          {/* Bento cards de vidrio */}
          <div className="animate-hero-features grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto">
            {/* Horario */}
            <div className="glass-card rounded-2xl px-4 py-4 flex flex-col items-center text-center gap-1">
              <Clock className="size-6 text-yellow-accent" aria-hidden="true" />
              <span className="text-white font-bold text-sm md:text-base leading-tight">
                9 AM – 9 PM
              </span>
              <span className="text-blue-light/80 text-xs">
                {t("badgeOpenDays")}
              </span>
            </div>

            {/* Walk-in */}
            <div className="glass-card rounded-2xl px-4 py-4 flex flex-col items-center text-center gap-1">
              <CalendarCheck className="size-6 text-yellow-accent" aria-hidden="true" />
              <span className="text-white font-bold text-sm md:text-base leading-tight">
                {t("badgeWalkIn")}
              </span>
              <span className="text-blue-light/80 text-xs">
                {t("badgeWalkInSub")}
              </span>
            </div>

            {/* Rating en vivo */}
            <a
              href={CONTACT_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl px-4 py-4 flex flex-col items-center text-center gap-1 transition-transform hover:scale-[1.03]"
            >
              <StarRating
                rating={hasReviews ? rating : 5}
                starClassName="size-4"
                emptyClassName="fill-white/25 text-white/25"
              />
              <span className="text-white font-bold text-sm md:text-base leading-tight">
                {hasReviews ? rating.toFixed(1) : "Google"}
              </span>
              <span className="text-blue-light/80 text-xs">
                {hasReviews
                  ? `${totalReviews}${t("googleReviews")}`
                  : "Google"}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div
        aria-hidden="true"
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-blue-primary/50 animate-bounce"
      >
        <ChevronDown className="size-6" />
      </div>
    </section>
  );
}
