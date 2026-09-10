import { getLocale, getTranslations } from "next-intl/server";
import { SITE_CONFIG, CONTACT_INFO, SERVICES, PROMOTIONS, SOCIAL_LINKS, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import { getLocalizedService } from "@/lib/utils";
import type { Service } from "@/types";

const CLINIC_ID = `${SITE_CONFIG.baseUrl}/#clinic`;

// Subtipo schema.org por servicio. Antes todo era MedicalProcedure con
// procedureType NoninvasiveProcedure, incluso cirugías y drenajes.
const PHYSICAL_EXAMS = new Set(["examen-dot", "examen-fisico-escolar", "examenes-inmigracion"]);
const SURGICAL = new Set(["cirugias-menores", "drenaje-abscesos", "suturas-heridas", "unas-encarnadas", "extraccion-implantes"]);
export function getServiceSchemaType(service: Pick<Service, "slug" | "category">) {
  if (PHYSICAL_EXAMS.has(service.slug)) return "PhysicalExam";
  if (service.slug === "examenes-sangre") return "BloodTest";
  if (service.slug === "ultrasonido") return "ImagingTest";
  if (service.category === "laboratorio" || service.slug.startsWith("prueba-") || service.slug.startsWith("examen")) return "MedicalTest";
  if (service.category === "tratamientos" && !SURGICAL.has(service.slug)) return "MedicalTherapy";
  return "MedicalProcedure";
}
export const serviceSchemaId = (slug: string) => `${SITE_CONFIG.baseUrl}/services/${slug}#service`;

// `withRating`: la calificación y las reseñas en vivo solo van en la home.
// Con ISR cada página se regeneraba en momentos distintos y el mismo @id
// declaraba reviewCount distintos (100–106) según la página.
export async function JsonLdMedicalClinic({ withRating = false }: { withRating?: boolean } = {}) {
  const placeData = withRating ? await getGooglePlaceData() : null;
  const locale = await getLocale();
  const tAbout = await getTranslations("about");

  // Reviews y rating SOLO desde datos reales (Google Places API o fallback validado).
  // Nunca hardcodear reseñas: si no hay datos reales, se omiten del schema.
  const reviewCount = withRating ? (placeData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews) : 0;
  const ratingValue = withRating ? (placeData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating) : 0;
  const hasRating = reviewCount > 0 && ratingValue > 0;

  const aggregateRating = hasRating
    ? {
        "@type": "AggregateRating" as const,
        ratingValue,
        reviewCount,
        bestRating: 5,
        worstRating: 1,
      }
    : undefined;

  const reviewItems = placeData?.reviews?.length
    ? placeData.reviews.slice(0, 5).map((r) => ({
        "@type": "Review" as const,
        author: { "@type": "Person" as const, name: r.author_name },
        datePublished: new Date(r.time * 1000).toISOString().slice(0, 10),
        reviewBody: r.text,
        reviewRating: { "@type": "Rating" as const, ratingValue: r.rating, bestRating: 5 },
        itemReviewed: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
      }))
    : [];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
        name: SITE_CONFIG.name,
        alternateName: ["Nueva Salud Lawndale", "Clínica Nueva Salud Lawndale"],
        // Mismo párrafo de definición de entidad que se muestra en la home.
        description: tAbout("body"),
        url: SITE_CONFIG.baseUrl,
        telephone: CONTACT_INFO.phone,
        email: CONTACT_INFO.email,
        image: [`${SITE_CONFIG.baseUrl}/images/hero-bg.webp`, `${SITE_CONFIG.baseUrl}/images/logo.webp`],
        logo: `${SITE_CONFIG.baseUrl}/images/logo.webp`,
        hasMap: CONTACT_INFO.googleMapsUrl,
        isAcceptingNewPatients: true,
        knowsLanguage: ["es", "en"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: CONTACT_INFO.phone,
          contactType: "customer service",
          availableLanguage: ["Spanish", "English"],
          areaServed: "US",
        },
        priceRange: "$$",
        currenciesAccepted: "USD",
        paymentAccepted: "Cash, Credit Card, Debit Card",
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT_INFO.address,
          addressLocality: CONTACT_INFO.city,
          addressRegion: CONTACT_INFO.state,
          postalCode: CONTACT_INFO.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CONTACT_INFO.coordinates.lat,
          longitude: CONTACT_INFO.coordinates.lng,
        },
        ...(aggregateRating ? { aggregateRating } : {}),
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "09:00",
            closes: "21:00",
          },
        ],
        availableLanguage: [
          {
            "@type": "Language",
            name: "Spanish",
            alternateName: "es",
          },
          {
            "@type": "Language",
            name: "English",
            alternateName: "en",
          },
        ],
        // Los 29 servicios (la farmacia va como departamento), cada uno con el
        // mismo @id que emite su propia página.
        availableService: SERVICES.filter((s) => s.slug !== "farmacia").map((raw) => {
          const service = getLocalizedService(raw, locale);
          return {
            "@type": getServiceSchemaType(raw),
            "@id": serviceSchemaId(raw.slug),
            name: service.title,
            url: `${SITE_CONFIG.baseUrl}${locale === "es" ? "" : `/${locale}`}/services/${raw.slug}`,
          };
        }),
        ...(SERVICES.some((s) => s.slug === "farmacia")
          ? {
              department: {
                "@type": "Pharmacy",
                name: `Farmacia ${SITE_CONFIG.shortName}`,
                url: `${SITE_CONFIG.baseUrl}/services/farmacia`,
              },
            }
          : {}),
        sameAs: [
          SOCIAL_LINKS.facebook,
          SOCIAL_LINKS.instagram,
          CONTACT_INFO.googleMapsUrl,
        ].filter(Boolean),
        areaServed: {
          "@type": "City",
          name: "Houston",
          "@id": "https://www.wikidata.org/wiki/Q16555",
        },
        // Solo miembros reales de la enumeración MedicalSpecialty de schema.org
        // (FamilyPractice, EmergencyMedicine y PreventiveMedicine no existen).
        medicalSpecialty: [
          "https://schema.org/PrimaryCare",
          "https://schema.org/CommunityHealth",
          "https://schema.org/PublicHealth",
          "https://schema.org/Gynecologic",
          "https://schema.org/LaboratoryScience",
        ],
        ...(reviewItems.length ? { review: reviewItems } : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.baseUrl}/#website`,
        url: SITE_CONFIG.baseUrl,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        publisher: {
          "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
        },
        inLanguage: ["es-MX", "en-US"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export function JsonLdFAQ({ questions }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function JsonLdBreadcrumb({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface MedicalProcedureSchemaProps {
  service: Pick<Service, "slug" | "category">;
  name: string;
  description: string;
  image: string;
  url: string;
  locale: string;
  bodyLocation?: string;
}

export function JsonLdMedicalProcedure({
  service,
  name,
  description,
  image,
  url,
  locale,
  bodyLocation,
}: MedicalProcedureSchemaProps) {
  const type = getServiceSchemaType(service);
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": serviceSchemaId(service.slug),
    name,
    description,
    image: `${SITE_CONFIG.baseUrl}${image}`,
    url,
    inLanguage: locale === "es" ? "es-MX" : "en-US",
    ...(type === "MedicalProcedure" && {
      procedureType: `https://schema.org/${SURGICAL.has(service.slug) ? "SurgicalProcedure" : "NoninvasiveProcedure"}`,
    }),
    ...(bodyLocation && { bodyLocation }),
    // Referencia a la entidad global (definida en el layout), no una copia.
    provider: { "@id": CLINIC_ID },
    availableAt: { "@id": CLINIC_ID },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLdCollectionPage({ name, description, url }: { name: string; description: string; url: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: {
      "@id": `${SITE_CONFIG.baseUrl}/#website`,
    },
    about: {
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    },
    provider: {
      "@type": "MedicalClinic",
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Promociones vigentes como ofertas con precio real (PROMOTIONS en constants).
export function JsonLdOfferCatalog({ locale }: { locale: string }) {
  const localePath = locale === "es" ? "" : `/${locale}`;
  const offers = PROMOTIONS.filter((p) => p.price).map((p) => ({
    "@type": "Offer",
    name: locale === "en" ? p.titleEn : p.title,
    description: locale === "en" ? p.blurbEn : p.blurb,
    url: `${SITE_CONFIG.baseUrl}${localePath}/promociones#${p.slug}`,
    price: Number(String(p.price).replace(/[^0-9.]/g, "")),
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    offeredBy: { "@id": CLINIC_ID },
    itemOffered: {
      "@type": "MedicalTest",
      name: locale === "en" ? p.titleEn : p.title,
    },
  }));
  if (!offers.length) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${SITE_CONFIG.baseUrl}/promociones#catalog`,
    name: locale === "en" ? "Current health promotions" : "Promociones de salud vigentes",
    url: `${SITE_CONFIG.baseUrl}${localePath}/promociones`,
    numberOfItems: offers.length,
    itemListElement: offers,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Nodo de la home con calificación y reseñas reales de Google. Comparte @id con
// la entidad del layout, así que los consumidores de JSON-LD los fusionan.
export async function JsonLdClinicRating() {
  const placeData = await getGooglePlaceData();
  const reviewCount = placeData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const ratingValue = placeData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  if (!(reviewCount > 0 && ratingValue > 0)) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": CLINIC_ID,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.baseUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    ...(placeData?.reviews?.length
      ? {
          review: placeData.reviews.slice(0, 5).map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.author_name },
            datePublished: new Date(r.time * 1000).toISOString().slice(0, 10),
            reviewBody: r.text,
            reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
            itemReviewed: { "@id": CLINIC_ID },
          })),
        }
      : {}),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
