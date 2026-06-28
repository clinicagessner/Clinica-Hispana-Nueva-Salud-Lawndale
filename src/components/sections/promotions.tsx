import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowRight, Tag } from "lucide-react";
import { PromotionsCarousel } from "@/components/promotions/promotions-carousel";
import { PROMOTIONS, CONTACT_INFO } from "@/lib/constants";

export async function Promotions({ locale }: { locale: string }) {
  const t = await getTranslations("promotions");

  return (
    <section
      id="promotions"
      className="scroll-mt-24 py-14 md:py-20 bg-cyan-warm"
      aria-labelledby="promotions-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-accent/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-red-accent">
            <Tag className="size-4" aria-hidden="true" />
            {t("eyebrow")}
          </span>
          <h2
            id="promotions-heading"
            className="mt-4 text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-slate-dark"
          >
            {t("title")}
          </h2>
          <p className="mt-3 text-base text-slate-primary">{t("subtitle")}</p>
        </div>

        <PromotionsCarousel
          promotions={PROMOTIONS}
          locale={locale}
          formHref="#contact"
          contact={{
            phone: CONTACT_INFO.phone,
            phoneFormatted: CONTACT_INFO.phoneFormatted,
            googleMapsUrl: CONTACT_INFO.googleMapsUrl,
            address: CONTACT_INFO.address,
          }}
          labels={{
            limitedTime: t("limitedTime"),
            priceLabel: t("priceLabel"),
            includesLabel: t("includesLabel"),
            ctaCall: t("ctaCall"),
            ctaDirections: t("ctaDirections"),
            ctaForm: t("ctaForm"),
            close: t("close"),
            viewDetail: t("viewDetail"),
            swipeHint: t("swipeHint"),
            openAria: t("openAria"),
            prev: t("prev"),
            next: t("next"),
          }}
        />

        <div className="mt-10 text-center">
          <Link
            href="/promociones"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-primary px-6 py-3 font-bold text-white shadow-md transition-colors hover:bg-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2"
          >
            {t("viewAll")}
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
