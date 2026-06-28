"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, Check, Phone, MapPin, ClipboardList, Clock } from "lucide-react";
import type { Promotion } from "@/types";

export function promoImage(slug: string): string {
  return `/images/promotions/${slug}.webp`;
}

/** Collapse a bilingual Promotion down to the active locale for rendering. */
export function localizePromotion(p: Promotion, locale: string) {
  const en = locale === "en";
  return {
    slug: p.slug,
    title: en ? p.titleEn : p.title,
    price: p.price,
    blurb: en ? p.blurbEn : p.blurb,
    includes: en ? p.includesEn : p.includes,
    alt: en ? p.altEn : p.alt,
    image: promoImage(p.slug),
  };
}

export type LocalizedPromo = ReturnType<typeof localizePromotion>;

export type PromoLabels = {
  limitedTime: string;
  priceLabel: string;
  includesLabel: string;
  ctaCall: string;
  ctaDirections: string;
  ctaForm: string;
  close: string;
};

export type PromoContact = {
  phone: string;
  phoneFormatted: string;
  googleMapsUrl: string;
  address: string;
};

interface PromotionDialogProps {
  promo: LocalizedPromo | null;
  labels: PromoLabels;
  contact: PromoContact;
  /** Anchor to the form on the current page (e.g. "#contact" or "#lead-form"). */
  formHref: string;
  onClose: () => void;
}

/**
 * Single detail modal reused by the home carousel and the /promociones grid.
 * One scrollable column at every breakpoint so the flyer never gets clipped on
 * desktop. Closing ONLY calls onClose — it never navigates.
 */
export function PromotionDialog({
  promo,
  labels,
  contact,
  formHref,
  onClose,
}: PromotionDialogProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!promo) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [promo, onClose]);

  if (!promo) return null;

  const titleId = `promo-dialog-title-${promo.slug}`;

  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-blue-deep/70 p-4 backdrop-blur-sm sm:p-6"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto flex max-h-[90vh] w-full max-w-md flex-col overflow-y-auto rounded-2xl bg-white shadow-2xl"
      >
        {/* Close */}
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={labels.close}
          className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-blue-deep/55 text-white backdrop-blur-sm transition-colors hover:bg-blue-deep/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        {/* Flyer — full, never cropped */}
        <div className="relative aspect-4/5 w-full shrink-0">
          <Image
            src={promo.image}
            alt={promo.alt}
            fill
            sizes="(max-width: 480px) 100vw, 448px"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 p-5 sm:p-6">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-red-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-accent">
            <Clock className="size-3.5" aria-hidden="true" />
            {labels.limitedTime}
          </span>

          <h2
            id={titleId}
            className="text-2xl font-heading font-bold text-slate-dark"
          >
            {promo.title}
          </h2>

          {promo.price && (
            <p className="flex items-baseline gap-2">
              <span className="text-xs font-medium uppercase tracking-wide text-slate-muted">
                {labels.priceLabel}
              </span>
              <span className="text-3xl font-extrabold text-red-accent">
                {promo.price}
              </span>
            </p>
          )}

          <p className="text-sm leading-relaxed text-slate-primary">
            {promo.blurb}
          </p>

          <div>
            <p className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-dark">
              <ClipboardList className="size-4 text-blue-primary" aria-hidden="true" />
              {labels.includesLabel}
            </p>
            <ul className="space-y-2">
              {promo.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-primary">
                  <Check className="mt-0.5 size-4 shrink-0 text-blue-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3 CTAs */}
          <div className="mt-1 flex flex-col gap-2.5">
            <a
              href={`tel:${contact.phone}`}
              aria-label={`${labels.ctaCall} ${contact.phoneFormatted} — ${promo.title}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-accent px-5 py-3 font-bold text-white shadow-md transition-colors hover:bg-red-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-accent focus-visible:ring-offset-2"
            >
              <Phone className="size-5" aria-hidden="true" />
              {labels.ctaCall}
            </a>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${labels.ctaDirections} — ${contact.address}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-primary/30 bg-white px-4 py-3 font-semibold text-blue-primary transition-colors hover:bg-cyan-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary"
              >
                <MapPin className="size-5" aria-hidden="true" />
                {labels.ctaDirections}
              </a>

              <a
                href={formHref}
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-primary px-4 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2"
              >
                {labels.ctaForm}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
