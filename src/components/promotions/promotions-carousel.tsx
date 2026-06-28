"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Eye, Hand } from "lucide-react";
import type { Promotion } from "@/types";
import {
  PromotionDialog,
  localizePromotion,
  type LocalizedPromo,
  type PromoContact,
  type PromoLabels,
} from "@/components/promotions/promotion-dialog";

export type CarouselLabels = PromoLabels & {
  viewDetail: string;
  swipeHint: string;
  openAria: string;
  prev: string;
  next: string;
};

interface PromotionsCarouselProps {
  promotions: Promotion[];
  locale: string;
  labels: CarouselLabels;
  contact: PromoContact;
  /** Form anchor on the home page. */
  formHref: string;
}

export function PromotionsCarousel({
  promotions,
  locale,
  labels,
  contact,
  formHref,
}: PromotionsCarouselProps) {
  const [selected, setSelected] = useState<LocalizedPromo | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps" },
    [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Pause autoplay while the dialog is open.
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins()?.autoplay;
    if (!autoplay) return;
    if (selected) autoplay.stop();
    else autoplay.play();
  }, [selected, emblaApi]);

  return (
    <>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {promotions.map((promo) => {
              const lp = localizePromotion(promo, locale);
              return (
                <div
                  key={promo.slug}
                  className="min-w-0 flex-[0_0_82%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <button
                    type="button"
                    onClick={() => setSelected(lp)}
                    aria-label={`${labels.openAria} ${lp.title}`}
                    className="group block w-full overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2"
                  >
                    <div className="relative aspect-4/5 w-full">
                      <Image
                        src={lp.image}
                        alt={lp.alt}
                        fill
                        sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                      {/* Hover/focus overlay */}
                      <div className="absolute inset-0 flex items-end justify-center bg-blue-deep/0 p-4 opacity-0 transition-all duration-300 group-hover:bg-blue-deep/40 group-hover:opacity-100 group-focus-visible:bg-blue-deep/40 group-focus-visible:opacity-100">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-blue-primary shadow-md">
                          <Eye className="size-4" aria-hidden="true" />
                          {labels.viewDetail}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 px-4 py-3 text-left">
                      <span className="font-semibold text-slate-dark line-clamp-1">
                        {lp.title}
                      </span>
                      {lp.price && (
                        <span className="shrink-0 text-lg font-extrabold text-red-accent">
                          {lp.price}
                        </span>
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrows — desktop */}
        <button
          type="button"
          onClick={scrollPrev}
          aria-label={labels.prev}
          className="absolute left-0 top-1/2 z-10 hidden size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-primary text-white shadow-lg transition-colors hover:bg-blue-dark md:flex"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label={labels.next}
          className="absolute right-0 top-1/2 z-10 hidden size-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-primary text-white shadow-lg transition-colors hover:bg-blue-dark md:flex"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>

      {/* Swipe hint — mobile */}
      <p className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-muted md:hidden">
        <Hand className="size-4" aria-hidden="true" />
        {labels.swipeHint}
      </p>

      <PromotionDialog
        promo={selected}
        labels={labels}
        contact={contact}
        formHref={formHref}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
