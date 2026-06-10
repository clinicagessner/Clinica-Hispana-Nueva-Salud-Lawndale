import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { ScrollAnimations } from "@/components/animations/scroll-animations";
import { MetaPixelSPATracker } from "@/components/tracking/meta-pixel";
import { GoogleAdsTag } from "@/components/tracking/google-ads";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { SITE_CONFIG, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import "../globals.css";

// Sora (display/titulares) + Inter (cuerpo) — pareja moderna del rediseño Nueva Salud Lawndale.
const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const placeData = await getGooglePlaceData();
  const rating = (placeData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating).toFixed(1);
  const count = placeData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const ogDescription = t("ogDescription", { rating, count });

  return {
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    keywords: [
      "clínica hispana Houston",
      "Clínica Hispana Nueva Salud Lawndale",
      "médico español Houston",
      "doctor hispano Houston",
      "clínica médica Houston TX",
      "medicina familiar Houston",
      "examen inmigración Houston",
      "laboratorio clínico Houston",
      "Hispanic clinic Houston",
      "Spanish speaking doctor Houston",
      "Lawndale St Houston clinic",
    ],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-touch-icon.png",
    },
    metadataBase: new URL(SITE_CONFIG.baseUrl),
    alternates: {
      canonical: locale === "en" ? "/en" : "/",
      languages: {
        es: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_MX" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_MX",
      url: SITE_CONFIG.baseUrl,
      siteName: SITE_CONFIG.name,
      title: t("title"),
      description: ogDescription,
      images: [
        {
          url: `${SITE_CONFIG.baseUrl}/images/og.webp`,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} - Clínica médica hispana en Houston TX`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: ogDescription,
      images: [`${SITE_CONFIG.baseUrl}/images/og.webp`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const [messages, t] = await Promise.all([
    getMessages(),
    getTranslations({ locale, namespace: "accessibility" }),
  ]);

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${sora.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0180f9" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" />
        <link rel="preconnect" href="https://cdn.callrail.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        {/* Meta Pixel — plain script in head, NOT managed by React. ID vía env. */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('set','autoConfig',false,'${process.env.NEXT_PUBLIC_META_PIXEL_ID}');fbq('init','${process.env.NEXT_PUBLIC_META_PIXEL_ID}');fbq('track','PageView');`,
            }}
          />
        )}
      </head>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <MetaPixelSPATracker />
        <NextIntlClientProvider messages={messages}>
          <TooltipProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
            >
              {t("skipToContent")}
            </a>
            {children}
            <ScrollToTop />
            <ScrollAnimations />
            <SpeedInsights />
            <Analytics />
          </TooltipProvider>
        </NextIntlClientProvider>
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      <GoogleAdsTag />
      {/* CallRail swap script — solo si el cliente provee su URL (env). TODO(cliente). */}
      {process.env.NEXT_PUBLIC_CALLRAIL_SWAP_URL && (
        <Script
          src={process.env.NEXT_PUBLIC_CALLRAIL_SWAP_URL}
          strategy="afterInteractive"
        />
      )}
    </html>
  );
}
