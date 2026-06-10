import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { locales, type Locale } from "@/i18n/config";
import { LANDING_COPY } from "@/lib/landing-conquesting";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = LANDING_COPY[locale as Locale] ?? LANDING_COPY.es;
  return {
    title: copy.meta.title,
    description: copy.meta.description,
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    },
    alternates: { canonical: undefined },
  };
}

export default async function LandingLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <>{children}</>;
}
