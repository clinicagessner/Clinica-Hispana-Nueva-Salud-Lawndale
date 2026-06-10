import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingFloatingButtons } from "@/components/landing/landing-floating-buttons";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LandingGroupLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <LandingHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <LandingFooter locale={locale as Locale} />
      <LandingFloatingButtons />
    </>
  );
}
