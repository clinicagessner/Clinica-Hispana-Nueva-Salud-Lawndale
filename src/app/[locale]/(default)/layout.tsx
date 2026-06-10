import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingButtons } from "@/components/layout/floating-buttons";
import { JsonLdMedicalClinic } from "@/components/seo/json-ld";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function DefaultGroupLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
      <JsonLdMedicalClinic />
    </>
  );
}
