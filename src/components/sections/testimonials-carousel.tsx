"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { BadgeCheck, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { GoogleReview } from "@/lib/google-places";

interface TestimonialsCarouselProps {
  reviews: GoogleReview[];
}

function getInitial(name: string): string {
  const trimmed = name.trim();
  return trimmed ? trimmed.charAt(0).toUpperCase() : "?";
}

export function TestimonialsCarousel({ reviews }: TestimonialsCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
            >
              <article className="group flex h-full flex-col rounded-2xl bg-white border border-cyan-bg-alt shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`size-4 ${
                        i < review.rating
                          ? "fill-yellow-accent text-yellow-accent"
                          : "fill-slate-light text-slate-light"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="flex-1 text-slate-primary text-sm leading-relaxed line-clamp-4">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-cyan-bg-alt">
                  {review.profile_photo_url?.startsWith("http") ? (
                    <Image
                      src={review.profile_photo_url}
                      alt={`Foto de ${review.author_name}`}
                      width={36}
                      height={36}
                      className="size-9 shrink-0 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-primary font-bold text-white text-sm"
                    >
                      {getInitial(review.author_name)}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-dark">
                      {review.author_name}
                    </p>
                    <div className="flex items-center gap-1.5 text-slate-muted text-xs">
                      <BadgeCheck className="size-3.5 text-blue-primary shrink-0" />
                      <span>{review.relative_time_description}</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Nav buttons */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Anterior"
        className="absolute left-0 top-1/2 z-10 hidden size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-primary text-white shadow-lg transition-all duration-300 hover:bg-blue-dark md:flex"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Siguiente"
        className="absolute right-0 top-1/2 z-10 hidden size-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-primary text-white shadow-lg transition-all duration-300 hover:bg-blue-dark md:flex"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Dots */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Ir a reseña ${index + 1}`}
            className={`size-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "w-6 bg-blue-primary"
                : "bg-cyan-bg-alt hover:bg-blue-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
