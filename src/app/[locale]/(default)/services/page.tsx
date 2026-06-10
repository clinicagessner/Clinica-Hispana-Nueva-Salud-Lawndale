import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/routing";
import { ServicesFilter } from "@/components/services/services-filter";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { getLocalizedService } from "@/lib/utils";
import { JsonLdCollectionPage, JsonLdBreadcrumb } from "@/components/seo/json-ld";

const categoryInfo: Record<string, { label: string; labelEn: string; iconName: string }> = {
  especial: { label: "Especiales", labelEn: "Special", iconName: "Star" },
  especialidad: { label: "Especialidades", labelEn: "Specialties", iconName: "Stethoscope" },
  diagnostico: { label: "Diagnóstico", labelEn: "Diagnostics", iconName: "TestTube" },
  mujer: { label: "Salud Mujer", labelEn: "Women's Health", iconName: "GenderFemale" },
};

const categoryOrder = ["especial", "diagnostico", "mujer", "especialidad"];

type MetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const localePath = locale === "en" ? "/en" : "";

  return {
    title: t("title"),
    description: locale === "en"
      ? "Medical services in Houston TX: family medicine, I-693 immigration exams, lab tests, gynecology, ultrasound, DOT physicals and more. Walk-ins welcome, Spanish-speaking staff."
      : "Servicios médicos en Houston TX: medicina familiar, exámenes I-693, laboratorio, ginecología, ultrasonido, examen DOT y más. Sin cita previa, atención en español.",
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}${localePath}/services`,
      languages: {
        es: "/services",
        en: "/en/services",
        "x-default": "/services",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("subtitle"),
      url: `${SITE_CONFIG.baseUrl}${localePath}/services`,
      images: [
        {
          url: `${SITE_CONFIG.baseUrl}/images/logo.webp`,
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
  };
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("services");

  const categories = categoryOrder.map((id) => ({
    id,
    label: locale === "en" ? categoryInfo[id].labelEn : categoryInfo[id].label,
    iconName: categoryInfo[id].iconName,
  }));

  const sortedServices = [...SERVICES].sort((a, b) => a.order - b.order).map((s) => getLocalizedService(s, locale));

  const localePath = locale === "en" ? "/en" : "";

  return (
    <>
      <JsonLdCollectionPage
        name={t("title")}
        description={t("subtitle")}
        url={`${SITE_CONFIG.baseUrl}${localePath}/services`}
      />
      <JsonLdBreadcrumb
        items={[
          { name: locale === "en" ? "Home" : "Inicio", url: `${SITE_CONFIG.baseUrl}${localePath}` },
          { name: locale === "en" ? "Services" : "Servicios", url: `${SITE_CONFIG.baseUrl}${localePath}/services` },
        ]}
      />
      <main className="min-h-screen bg-background">
        {/* Hero Header */}
        <section className="relative pt-24 pb-10 md:pt-28 md:pb-14 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-blue-primary via-blue-dark to-slate-900" />
          <div className="absolute inset-0 opacity-25">
            <Image
              src="/images/logo.webp"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              aria-hidden="true"
            />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              {locale === "en" ? "Back to Home" : "Volver al Inicio"}
            </Link>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 drop-shadow-lg">
                {t("title")}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                {t("subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Services with Filter */}
        <ServicesFilter services={sortedServices} categories={categories} />
      </main>
    </>
  );
}
