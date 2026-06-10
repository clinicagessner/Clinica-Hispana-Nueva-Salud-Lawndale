import { getTranslations } from "next-intl/server";
import { Star } from "lucide-react";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { CONTACT_INFO } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";

export async function Testimonials() {
  const [t, googleData] = await Promise.all([
    getTranslations("testimonials"),
    getGooglePlaceData(),
  ]);

  const rating = googleData?.rating ?? 0;
  const totalReviews = googleData?.totalReviews ?? 0;
  const reviews = googleData?.reviews ?? [];
  const hasRating = totalReviews > 0 && rating > 0;
  const roundedRating = Math.round(rating);

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

          {hasRating && (
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`size-4 ${
                      i < roundedRating
                        ? "fill-yellow-accent text-yellow-accent"
                        : "fill-slate-light text-slate-light"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-slate-muted font-medium">
                {rating.toFixed(1)} · {totalReviews} {t("reviews")}
              </span>
            </div>
          )}
        </div>

        {/* Carousel — solo si hay reseñas reales */}
        {reviews.length > 0 && <TestimonialsCarousel reviews={reviews} />}

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
