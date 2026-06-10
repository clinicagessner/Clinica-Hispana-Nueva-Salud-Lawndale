import Image from "next/image";
import { Star } from "lucide-react";
import { StarRating } from "@/components/shared/star-rating";
import { LANDING_COPY } from "@/lib/landing-conquesting";
import { CONTACT_INFO, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import type { Locale } from "@/i18n/config";

function getInitial(name: string): string {
  const trimmed = name.trim();
  return trimmed ? trimmed.charAt(0).toUpperCase() : "?";
}

export async function LandingReviews({ locale }: { locale: Locale }) {
  const c = LANDING_COPY[locale].reviews;
  const googleData = await getGooglePlaceData();
  const reviews = (googleData?.reviews ?? []).slice(0, 3);

  const totalReviews = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const rating = googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;

  if (reviews.length === 0) {
    return (
      <section className="py-16 md:py-24 bg-cyan-warm" aria-labelledby="landing-reviews-heading">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2
            id="landing-reviews-heading"
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-dark mb-4"
          >
            {c.title}
          </h2>
          <p className="text-lg text-slate-dark/70 mb-6">{c.subtitle}</p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <StarRating rating={rating} starClassName="size-6" />
            <span className="ml-2 font-semibold text-slate-dark">
              {rating.toFixed(1)} · {totalReviews}+ {locale === "en" ? "reviews" : "reseñas"}
            </span>
          </div>
          <a
            href={CONTACT_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-primary px-7 py-3 font-bold text-white shadow-lg hover:bg-blue-dark transition-all"
          >
            {locale === "en" ? "Read reviews on Google" : "Ver reseñas en Google"}
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-cyan-warm" aria-labelledby="landing-reviews-heading">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="landing-reviews-heading"
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-dark mb-4"
          >
            {c.title}
          </h2>
          <p className="text-lg text-slate-dark/70 mb-4">{c.subtitle}</p>
          <div className="flex items-center justify-center gap-2">
            <StarRating rating={rating} starClassName="size-5" />
            <span className="ml-2 text-sm font-semibold text-slate-dark">
              {rating.toFixed(1)} · {totalReviews}+ {locale === "en" ? "reviews" : "reseñas"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((r) => (
            <article
              key={`${r.author_name}-${r.time}`}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col"
            >
              <div className="flex gap-1 mb-4" aria-label={`${r.rating} ${locale === "en" ? "stars" : "estrellas"}`}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 text-yellow-accent-dark"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p className="text-sm text-slate-dark/80 leading-relaxed mb-6 flex-1 line-clamp-6">
                {r.text}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                {r.profile_photo_url && !r.profile_photo_url.includes("default.webp") ? (
                  <Image
                    src={r.profile_photo_url}
                    alt={r.author_name}
                    width={40}
                    height={40}
                    className="size-10 rounded-full object-cover"
                    unoptimized
                  />
                ) : (
                  <div
                    className="size-10 rounded-full bg-red-accent-bg text-red-accent font-bold flex items-center justify-center"
                    aria-hidden
                  >
                    {getInitial(r.author_name)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-slate-dark text-sm">
                    {r.author_name}
                  </p>
                  <p className="text-xs text-slate-dark/60">
                    {r.relative_time_description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={CONTACT_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-primary px-7 py-3 font-bold text-white shadow-lg hover:bg-blue-dark transition-all text-sm"
          >
            <Star className="size-4 text-yellow-accent-dark" fill="currentColor" strokeWidth={0} />
            {locale === "en" ? "Read all reviews on Google" : "Ver todas las reseñas en Google"}
          </a>
        </div>
      </div>
    </section>
  );
}
