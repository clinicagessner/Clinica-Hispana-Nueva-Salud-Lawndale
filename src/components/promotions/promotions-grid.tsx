"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import type { Promotion } from "@/types";
import {
  PromotionDialog,
  localizePromotion,
  type LocalizedPromo,
  type PromoContact,
  type PromoLabels,
} from "@/components/promotions/promotion-dialog";

export type GridLabels = PromoLabels & {
  viewDetail: string;
};

interface PromotionsGridProps {
  promotions: Promotion[];
  locale: string;
  labels: GridLabels;
  contact: PromoContact;
  /** Form anchor on the /promociones page. */
  formHref: string;
}

export function PromotionsGrid({
  promotions,
  locale,
  labels,
  contact,
  formHref,
}: PromotionsGridProps) {
  const [selected, setSelected] = useState<LocalizedPromo | null>(null);

  // Deep-link: /promociones#<slug> opens that dialog. Clear the hash FIRST
  // (synchronously) so that closing the dialog doesn't reopen or redirect.
  useEffect(() => {
    const slug = window.location.hash.replace("#", "");
    if (!slug) return;
    const promo = promotions.find((p) => p.slug === slug);
    if (!promo) return;
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
    // Browser-only read on mount (the hash never reaches the server), so opening
    // the dialog here can't be hoisted out of the effect without a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelected(localizePromotion(promo, locale));
  }, [promotions, locale]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {promotions.map((promo) => {
          const lp = localizePromotion(promo, locale);
          return (
            <article
              key={promo.slug}
              id={promo.slug}
              className="flex scroll-mt-24 flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-blue-light/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-4/5 w-full">
                <Image
                  src={lp.image}
                  alt={lp.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-red-accent px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
                  <Clock className="size-3" aria-hidden="true" />
                  {labels.limitedTime}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading font-bold text-slate-dark">
                    {lp.title}
                  </h3>
                  {lp.price && (
                    <span className="shrink-0 text-lg font-extrabold text-red-accent">
                      {lp.price}
                    </span>
                  )}
                </div>
                {/* Full blurb in the DOM (indexable); line-clamp is visual only. */}
                <p className="text-sm leading-relaxed text-slate-primary line-clamp-2">
                  {lp.blurb}
                </p>
                <button
                  type="button"
                  onClick={() => setSelected(lp)}
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-blue-primary px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2"
                >
                  {labels.viewDetail}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          );
        })}
      </div>

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
