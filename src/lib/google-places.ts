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

interface GooglePlaceDetailsResponse {
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: Array<{
      author_name: string;
      rating: number;
      text: string;
      time: number;
      relative_time_description: string;
      profile_photo_url: string;
      author_url?: string;
    }>;
  };
  status: string;
  error_message?: string;
}

async function fetchGooglePlaceDetails(): Promise<GooglePlaceData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn("Google Places API key or Place ID not configured");
    return null;
  }

  try {
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "rating,user_ratings_total,reviews");
    url.searchParams.set("reviews_sort", "most_relevant");
    url.searchParams.set("language", "es");
    url.searchParams.set("key", apiKey);

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data: GooglePlaceDetailsResponse = await response.json();

    if (data.status !== "OK") {
      console.error("Google Places API error:", data.status, data.error_message);
      return null;
    }

    const result = data.result;
    if (!result) {
      return null;
    }

    // Filter: only 5-star reviews with text
    const filteredReviews = (result.reviews ?? [])
      .filter((review) => review.rating === 5 && review.text.trim().length > 0)
      .map((review) => ({
        author_name: review.author_name,
        rating: review.rating,
        text: review.text,
        time: review.time,
        relative_time_description: review.relative_time_description,
        profile_photo_url: review.profile_photo_url || "/images/logo.webp",
        author_url: review.author_url,
      }));

    return {
      rating: result.rating ?? 5.0,
      totalReviews: result.user_ratings_total ?? 0,
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
