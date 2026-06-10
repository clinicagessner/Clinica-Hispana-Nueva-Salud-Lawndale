import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingDifferentiators } from "@/components/landing/landing-differentiators";
import { LandingComparison } from "@/components/landing/landing-comparison";
import { LandingOfferings } from "@/components/landing/landing-offerings";
import { LandingServices } from "@/components/landing/landing-services";
import { LandingReviews } from "@/components/landing/landing-reviews";
import { LandingLocation } from "@/components/landing/landing-location";
import { LandingFAQ } from "@/components/landing/landing-faq";
import { LandingFinalCTA } from "@/components/landing/landing-final-cta";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LandingComparacionClinicasHouston({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  return (
    <>
      <LandingHero locale={l} />
      <LandingDifferentiators locale={l} />
      <LandingComparison locale={l} />
      <LandingOfferings locale={l} />
      <LandingServices locale={l} />
      <LandingReviews locale={l} />
      <LandingLocation locale={l} />
      <LandingFAQ locale={l} />
      <LandingFinalCTA locale={l} />
    </>
  );
}
