import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import {
  Heart,
  Syringe,
  TestTube,
  CheckCircle,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/routing";
import { CONTACT_INFO } from "@/lib/constants";

const conditions = [
  { icon: Heart, title: "Diabetes", titleEn: "Diabetes" },
  { icon: Heart, title: "Hipertensión", titleEn: "Hypertension" },
  { icon: TestTube, title: "Colesterol Alto", titleEn: "High Cholesterol" },
  { icon: Syringe, title: "Tiroides", titleEn: "Thyroid" },
];

const features = [
  { icon: CheckCircle, textEs: "Laboratorio con resultados el mismo día", textEn: "Same-day lab results" },
  { icon: CheckCircle, textEs: "Monitoreo continuo y personalizado", textEn: "Ongoing personalized monitoring" },
  { icon: CheckCircle, textEs: "Educación y prevención en español", textEn: "Education and prevention in Spanish" },
  { icon: CheckCircle, textEs: "Aceptamos pacientes sin seguro", textEn: "Uninsured patients welcome" },
];

export async function ChronicCare() {
  const t = await getTranslations("chronicCare");
  const locale = await getLocale();

  return (
    <section id="chronic-care" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/logo.webp"
          alt={locale === "en" ? "Chronic disease management at Clinica Hispana Nueva Salud Lawndale" : "Manejo de enfermedades crónicas en Clínica Hispana Nueva Salud Lawndale"}
          fill
          className="object-cover"
          quality={60}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-br from-blue-dark/95 via-blue-primary/85 to-blue-dark/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left — Content */}
          <div className="animate-on-scroll fade-up">
            <span className="inline-flex items-center gap-2 bg-yellow-accent text-blue-primary text-xs font-bold px-4 py-1.5 rounded-full mb-5 shadow-md">
              <Heart className="size-4" weight="fill" />
              {t("badge")}
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 leading-tight">
              {t("title")}
            </h2>

            <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
              {t("subtitle")}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-yellow-accent/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="size-4 text-yellow-accent" weight="fill" />
                  </div>
                  <span className="text-sm md:text-base text-white/90">
                    {locale === "en" ? feature.textEn : feature.textEs}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-yellow-accent hover:bg-yellow-accent-dark text-blue-primary font-bold rounded-lg px-6 md:px-8 h-11 text-sm md:text-base shadow-lg transition-colors"
              >
                {t("ctaSchedule")}
              </Link>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white font-medium hover:bg-white hover:text-blue-primary rounded-lg px-6 md:px-8 h-11 text-sm md:text-base transition-colors"
              >
                <Phone className="size-5" weight="bold" />
                {t("ctaCall")}
              </a>
            </div>
          </div>

          {/* Right — Conditions card */}
          <div className="animate-on-scroll fade-up stagger-2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 p-6 md:p-8 shadow-2xl">
              <h3 className="text-lg font-heading font-bold text-white mb-6">
                {t("conditionsTitle")}
              </h3>

              <div className="space-y-4">
                {conditions.map((condition, idx) => (
                  <div key={idx} className="flex items-center gap-4 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="size-10 rounded-full bg-blue-primary border-2 border-yellow-accent/40 text-white flex items-center justify-center font-bold text-sm shadow-lg shrink-0">
                      <condition.icon className="size-5 text-yellow-accent" weight="duotone" />
                    </div>
                    <span className="text-sm md:text-base font-medium text-white">
                      {locale === "en" ? condition.titleEn : condition.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <Link
                  href="/services/condiciones-cronicas"
                  className="inline-flex items-center gap-2 text-yellow-accent text-sm font-semibold hover:text-white transition-colors"
                >
                  {t("learnMore")}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
