import { setRequestLocale } from "next-intl/server";
import { getGooglePlaceData } from "@/lib/google-places";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Promotions } from "@/components/sections/promotions";
import { ChronicCare } from "@/components/sections/chronic-care";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { Location } from "@/components/sections/location";
import { BlogPreview } from "@/components/sections/blog-preview";
import { ScrollSpy } from "@/components/layout/scroll-spy";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const placeData = await getGooglePlaceData();

  return (
    <>
      <Hero rating={placeData?.rating} totalReviews={placeData?.totalReviews} />
      <Promotions locale={locale} />
      <Services />
      <ChronicCare />
      <Testimonials />
      <FAQ />
      <Location />
      <BlogPreview />
      <Contact />
      <ScrollSpy />
    </>
  );
}
