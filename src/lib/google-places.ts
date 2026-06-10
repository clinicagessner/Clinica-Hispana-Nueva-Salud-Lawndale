import { unstable_cache } from "next/cache";

export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url: string;
  author_url?: string;
}

export interface GooglePlaceData {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
}

// Places API (New) — Place Details response shape (subset we request).
interface NewPlaceDetailsResponse {
  rating?: number;
  userRatingCount?: number;
  reviews?: Array<{
    rating?: number;
    text?: { text?: string; languageCode?: string };
    originalText?: { text?: string; languageCode?: string };
    authorAttribution?: {
      displayName?: string;
      uri?: string;
      photoUri?: string;
    };
    relativePublishTimeDescription?: string;
    publishTime?: string;
  }>;
}

async function fetchGooglePlaceDetails(): Promise<GooglePlaceData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn("Google Places API key or Place ID not configured");
    return null;
  }

  try {
    // Places API (New): GET /v1/places/{placeId} with header field mask.
    const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(
      placeId
    )}?languageCode=es`;

    const response = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Google Places API (New) error:", response.status, errText);
      return null;
    }

    const data: NewPlaceDetailsResponse = await response.json();

    // Filter: only 5-star reviews with text. Map to the legacy-shaped
    // GoogleReview used across the app (testimonials + JSON-LD).
    const filteredReviews = (data.reviews ?? [])
      .filter(
        (review) =>
          review.rating === 5 &&
          (review.text?.text ?? review.originalText?.text ?? "").trim().length > 0
      )
      .map((review) => ({
        author_name: review.authorAttribution?.displayName ?? "Paciente",
        rating: review.rating ?? 5,
        text: (review.text?.text ?? review.originalText?.text ?? "").trim(),
        time: review.publishTime
          ? Math.floor(Date.parse(review.publishTime) / 1000)
          : 0,
        relative_time_description: review.relativePublishTimeDescription ?? "",
        profile_photo_url: review.authorAttribution?.photoUri || "/images/logo.webp",
        author_url: review.authorAttribution?.uri,
      }))
      // Most recent 5-star reviews first.
      .sort((a, b) => b.time - a.time);

    return {
      rating: data.rating ?? 5.0,
      totalReviews: data.userRatingCount ?? 0,
      reviews: filteredReviews,
    };
  } catch (error) {
    console.error("Error fetching Google Place details:", error);
    return null;
  }
}

// Cached version - revalidates every hour
export const getGooglePlaceData = unstable_cache(
  fetchGooglePlaceDetails,
  ["google-place-data"],
  {
    revalidate: 3600, // 1 hour
    tags: ["google-reviews"],
  }
);
