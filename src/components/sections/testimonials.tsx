import { getTranslations } from "next-intl/server";
import { Star } from "lucide-react";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { CONTACT_INFO, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData, type GoogleReview } from "@/lib/google-places";

const fallbackReviews: GoogleReview[] = [
  {
    author_name: "María García",
    rating: 5,
    text: "Excelente atención, todo el personal habla español y me sentí muy cómoda. El doctor fue muy amable y profesional. Recomiendo esta clínica a toda la comunidad hispana.",
    time: 1710000000000,
    relative_time_description: "hace 2 semanas",
    profile_photo_url: "/images/logo.webp",
  },
  {
    author_name: "Carlos Rodríguez",
    rating: 5,
    text: "Muy buen servicio, no tuve que esperar mucho y los precios son muy accesibles. Me atendieron sin cita y resolvieron mi problema de salud rápidamente.",
    time: 1707400000000,
    relative_time_description: "hace 1 mes",
    profile_photo_url: "/images/logo.webp",
  },
  {
    author_name: "Ana Martínez",
    rating: 5,
    text: "La mejor clínica hispana en Houston. Llevé a mis hijos y los trataron con mucho cariño. El laboratorio es muy eficiente y los resultados fueron rápidos.",
    time: 1709400000000,
    relative_time_description: "hace 3 semanas",
    profile_photo_url: "/images/logo.webp",
  },
  {
    author_name: "José López",
    rating: 5,
    text: "Muy profesionales y atentos. Me explicaron todo en español y me dieron opciones de pago. Definitivamente volveré para mis chequeos regulares.",
    time: 1704800000000,
    relative_time_description: "hace 2 meses",
    profile_photo_url: "/images/logo.webp",
  },
  {
    author_name: "Laura Hernández",
    rating: 5,
    text: "Excelente experiencia. El personal es muy amable y el lugar está muy limpio. Me sentí como en casa. Los recomiendo ampliamente.",
    time: 1710600000000,
    relative_time_description: "hace 1 semana",
    profile_photo_url: "/images/logo.webp",
  },
];

export async function Testimonials() {
  const [t, googleData] = await Promise.all([
    getTranslations("testimonials"),
    getGooglePlaceData(),
  ]);

  const totalReviews =
    googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const reviews = googleData?.reviews?.length
    ? googleData.reviews
    : fallbackReviews;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-cyan-bg py-14 md:py-20"
    >
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="animate-on-scroll fade-up flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-slate-dark">
              {t("title")}
            </h2>
            <p className="mt-2 text-base text-slate-primary">
              {t("subtitle")}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-4 fill-yellow-accent text-yellow-accent"
                />
              ))}
            </div>
            <span className="text-sm text-slate-muted font-medium">
              {totalReviews}+ {t("reviews")}
            </span>
          </div>
        </div>

        {/* Carousel */}
        <TestimonialsCarousel reviews={reviews} />

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href={CONTACT_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-primary px-7 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-dark hover:-translate-y-0.5 hover:shadow-xl text-sm"
          >
            <Star className="size-4 fill-yellow-accent text-yellow-accent" />
            {t("leaveReview")}
          </a>
        </div>
      </div>
    </section>
  );
}
