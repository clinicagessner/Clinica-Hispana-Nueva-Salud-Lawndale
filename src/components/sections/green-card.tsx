import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import {
  Phone,
  CalendarCheck,
  Stethoscope,
  Syringe,
  TestTube,
  FileText,
  CheckCircle,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";
import { CONTACT_INFO } from "@/lib/constants";

const features = [
  { icon: ShieldCheck, text: "Médico Civil Surgeon certificado por USCIS" },
  { icon: CalendarCheck, text: "Resultados en 3-5 días hábiles" },
  { icon: CheckCircle, text: "Atención 100% en español" },
  { icon: Phone, text: "Sin cita previa necesaria" },
];

const steps = [
  { number: 1, icon: CalendarCheck, title: "Agenda tu Cita" },
  { number: 2, icon: Stethoscope, title: "Examen Médico" },
  { number: 3, icon: Syringe, title: "Vacunas Requeridas" },
  { number: 4, icon: TestTube, title: "Pruebas de Laboratorio" },
  { number: 5, icon: FileText, title: "Formulario I-693" },
];

export async function GreenCard() {
  const t = await getTranslations("greenCard");
  const locale = await getLocale();

  return (
    <section id="green-card" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/logo.webp"
          alt="Examen médico de inmigración I-693 en Houston TX"
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
            <Badge className="bg-yellow-accent text-blue-primary text-xs font-bold px-4 py-1.5 mb-5 shadow-md hover:bg-yellow-accent-dark">
              <ShieldCheck className="size-4 mr-1.5" weight="fill" />
              {t("badge")}
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 leading-tight">
              {t("title")}
            </h2>

            <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
              {t("subtitle")}
            </p>

            {/* Features as check list */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-yellow-accent/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="size-4 text-yellow-accent" weight="fill" />
                  </div>
                  <span className="text-sm md:text-base text-white/90">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-yellow-accent hover:bg-yellow-accent-dark text-blue-primary font-bold gap-2 shadow-lg text-sm md:text-base px-6 md:px-8"
                asChild
              >
                <Link href="/#contact">
                  <CalendarCheck className="size-5" weight="bold" />
                  {t("ctaSchedule")}
                </Link>
              </Button>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center justify-center h-11 px-6 md:px-8 rounded-lg border-2 border-white/80 text-white font-medium hover:bg-white hover:text-blue-primary transition-colors gap-2 text-sm md:text-base"
              >
                <Phone className="size-5" weight="bold" />
                {t("ctaCall")}
              </a>
            </div>
          </div>

          {/* Right — Steps glass card */}
          <div className="animate-on-scroll fade-up stagger-2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 p-6 md:p-8 shadow-2xl">
              <h3 className="text-lg font-heading font-bold text-white mb-6 flex items-center gap-2">
                <FileText className="size-5 text-yellow-accent" weight="fill" />
                {locale === "en" ? "How it works" : "¿Cómo funciona?"}
              </h3>

              <div className="relative">
                {/* Vertical connecting line */}
                <div className="absolute left-5 top-3 bottom-3 w-px bg-linear-to-b from-yellow-accent via-blue-light/30 to-transparent" />

                <div className="space-y-5">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4 relative">
                      {/* Number */}
                      <div className="relative z-10 size-10 rounded-full bg-blue-primary border-2 border-yellow-accent/40 text-white flex items-center justify-center font-bold text-sm shadow-lg shrink-0">
                        {step.number}
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex items-center gap-3 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                        <step.icon className="size-5 text-yellow-accent shrink-0" weight="duotone" />
                        <span className="text-sm md:text-base font-medium text-white">
                          {step.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
