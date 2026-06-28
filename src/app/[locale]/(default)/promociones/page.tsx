import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowLeft, Tag, Question } from "@phosphor-icons/react/dist/ssr";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG, CONTACT_INFO, PROMOTIONS } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import { StarRating } from "@/components/shared/star-rating";
import { ContactForm } from "@/components/forms/contact-form";
import { PromotionsGrid } from "@/components/promotions/promotions-grid";
import { JsonLdBreadcrumb, JsonLdFAQ } from "@/components/seo/json-ld";

type Props = {
  params: Promise<{ locale: string }>;
};

const COPY = {
  es: {
    title: "Promociones de Salud en Houston | Nueva Salud Lawndale",
    description:
      "Promociones vigentes en Clínica Hispana Nueva Salud Lawndale, Houston: paquetes de salud a precios accesibles. Sin cita previa, atención en español.",
    backToHome: "Volver al inicio",
    eyebrow: "Promociones",
    h1: "Promociones por tiempo limitado",
    subtitle:
      "Paquetes de salud a precios accesibles en nuestra clínica del East End de Houston. Sin cita previa y con atención 100% en español.",
    reviewsLabel: "reseñas en Google",
    faqTitle: "Preguntas frecuentes",
    leadFormTitle: "¿Te interesa una promoción?",
    leadFormSubtitle:
      "Déjanos tus datos y te contactamos, o llámanos directamente. Sin compromiso.",
    breadcrumbs: [
      { name: "Inicio", path: "" },
      { name: "Promociones", path: "/promociones" },
    ],
    faqs: [
      {
        question: "¿Hasta cuándo están vigentes las promociones?",
        answer:
          "Son ofertas por tiempo limitado y pueden cambiar sin previo aviso. Te recomendamos llamarnos para confirmar disponibilidad y vigencia antes de tu visita.",
      },
      {
        question: "¿Necesito cita o seguro médico para una promoción?",
        answer:
          "No necesitas cita previa ni seguro médico. Atendemos sin cita todos los días de 9 AM a 9 PM y ofrecemos precios de pago directo accesibles.",
      },
      {
        question: "¿Cómo reservo o aprovecho una promoción?",
        answer: `Puedes llamarnos al ${CONTACT_INFO.phoneFormatted}, llenar el formulario de esta página o visitarnos directamente en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}.`,
      },
    ],
  },
  en: {
    title: "Health Promotions in Houston | Nueva Salud Lawndale",
    description:
      "Current promotions at Clínica Hispana Nueva Salud Lawndale, Houston: affordable health packages. Walk-ins welcome, Spanish-speaking care.",
    backToHome: "Back to home",
    eyebrow: "Promotions",
    h1: "Limited-time promotions",
    subtitle:
      "Affordable health packages at our East End Houston clinic. No appointment needed and fully bilingual care.",
    reviewsLabel: "reviews on Google",
    faqTitle: "Frequently asked questions",
    leadFormTitle: "Interested in a promotion?",
    leadFormSubtitle:
      "Leave us your details and we'll contact you, or call us directly. No obligation.",
    breadcrumbs: [
      { name: "Home", path: "" },
      { name: "Promotions", path: "/promociones" },
    ],
    faqs: [
      {
        question: "How long are the promotions valid?",
        answer:
          "These are limited-time offers and may change without notice. We recommend calling us to confirm availability and validity before your visit.",
      },
      {
        question: "Do I need an appointment or insurance for a promotion?",
        answer:
          "You don't need an appointment or insurance. We accept walk-ins every day from 9 AM to 9 PM and offer affordable self-pay pricing.",
      },
      {
        question: "How do I book or claim a promotion?",
        answer: `You can call us at ${CONTACT_INFO.phoneFormatted}, fill out the form on this page, or visit us at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}.`,
      },
    ],
  },
} as const;

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = COPY[locale as "es" | "en"] ?? COPY.es;
  const localePath = locale === "en" ? "/en" : "";
  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}${localePath}/promociones`,
      languages: {
        es: "/promociones",
        en: "/en/promociones",
        "x-default": "/promociones",
      },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE_CONFIG.baseUrl}${localePath}/promociones`,
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export default async function PromocionesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("promotions");
  const c = COPY[locale as "es" | "en"] ?? COPY.es;
  const localePath = locale === "en" ? "/en" : "";
  const placeData = await getGooglePlaceData();
  const rating = placeData?.rating ?? 0;
  const totalReviews = placeData?.totalReviews ?? 0;
  const hasReviews = totalReviews > 0;

  const breadcrumbs = c.breadcrumbs.map((b) => ({
    name: b.name,
    url: `${SITE_CONFIG.baseUrl}${localePath}${b.path}`,
  }));

  return (
    <>
      <main className="min-h-screen bg-cyan-warm pb-16 pt-24 md:pt-28">
        <div className="container mx-auto px-4">
          {/* Back to home */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-primary transition-colors hover:text-blue-dark"
          >
            <ArrowLeft weight="bold" className="size-4" />
            {c.backToHome}
          </Link>

          {/* Compact header */}
          <div className="mt-6 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-accent/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-red-accent">
              <Tag weight="fill" className="size-4" />
              {c.eyebrow}
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-dark">
              {c.h1}
            </h1>
            <p className="mt-3 text-base md:text-lg text-slate-primary">
              {c.subtitle}
            </p>

            {/* Live reviews badge */}
            <a
              href={CONTACT_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-blue-light/40 transition-transform hover:scale-[1.02]"
            >
              <StarRating
                rating={hasReviews ? rating : 5}
                starClassName="size-4"
              />
              <span className="text-sm font-bold text-slate-dark">
                {hasReviews ? rating.toFixed(1) : "Google"}
              </span>
              {hasReviews && (
                <span className="text-sm text-slate-muted">
                  · {totalReviews} {c.reviewsLabel}
                </span>
              )}
            </a>
          </div>

          {/* Grid */}
          <div className="mt-10">
            <PromotionsGrid
              promotions={PROMOTIONS}
              locale={locale}
              formHref="#lead-form"
              contact={{
                phone: CONTACT_INFO.phone,
                phoneFormatted: CONTACT_INFO.phoneFormatted,
                googleMapsUrl: CONTACT_INFO.googleMapsUrl,
                address: CONTACT_INFO.address,
              }}
              labels={{
                limitedTime: t("limitedTime"),
                priceLabel: t("priceLabel"),
                includesLabel: t("includesLabel"),
                ctaCall: t("ctaCall"),
                ctaDirections: t("ctaDirections"),
                ctaForm: t("ctaForm"),
                close: t("close"),
                viewDetail: t("viewDetail"),
              }}
            />
          </div>

          {/* FAQ */}
          <section className="mt-16 max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <Question weight="duotone" className="size-7 text-blue-primary" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-dark">
                {c.faqTitle}
              </h2>
            </div>
            <div className="space-y-3">
              {c.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-blue-light/40"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-slate-dark [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <ArrowRight className="size-4 shrink-0 text-blue-primary transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-5 pb-5 pt-0 leading-relaxed text-slate-primary">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Lead form */}
          <section id="lead-form" className="mt-16 scroll-mt-24 max-w-3xl">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-blue-light/40 md:p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-dark">
                {c.leadFormTitle}
              </h2>
              <p className="mt-2 text-base text-slate-primary">
                {c.leadFormSubtitle}
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      </main>

      <JsonLdBreadcrumb items={breadcrumbs} />
      <JsonLdFAQ questions={c.faqs.map((f) => ({ question: f.question, answer: f.answer }))} />
    </>
  );
}
