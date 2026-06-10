import { Star } from "lucide-react";

interface StarRatingProps {
  /** Rating from 0 to 5 (e.g. 4.2). The 5 stars fill proportionally. */
  rating: number;
  /** Tailwind size classes for each star (e.g. "size-4 md:size-5"). */
  starClassName?: string;
  /** Classes for the empty portion (e.g. "fill-white/25 text-white/25" on dark bg). */
  emptyClassName?: string;
  /** Gap between stars. */
  className?: string;
}

/**
 * Five stars with proportional gold fill based on the live rating.
 * Each star is independently clipped, so 4.2 -> 4 full + a 20%-filled 5th star.
 */
export function StarRating({
  rating,
  starClassName = "size-4",
  emptyClassName = "fill-slate-light text-slate-light",
  className = "flex gap-0.5",
}: StarRatingProps) {
  return (
    <span className={className} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i)); // 0..1 for this star
        return (
          <span key={i} className="relative inline-flex">
            <Star className={`${starClassName} ${emptyClassName}`} />
            {fill > 0 && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star
                  className={`${starClassName} fill-yellow-accent text-yellow-accent`}
                />
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}
