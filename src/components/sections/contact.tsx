import { getTranslations } from "next-intl/server";
import { Phone, Envelope, MapPin, Clock } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/forms/contact-form";
import { CONTACT_INFO } from "@/lib/constants";

export async function Contact() {
  const t = await getTranslations("contact");

  return (
    <section id="contact" className="py-14 md:py-20 bg-cyan-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header — left aligned */}
          <div className="animate-on-scroll fade-up mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-slate-dark">
              {t("title")}
            </h2>
            <p className="mt-2 text-base text-slate-primary">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Contact Info — compact left column */}
            <div className="animate-on-scroll fade-up lg:col-span-2 flex flex-col gap-4">
              {/* Quick info cards */}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="group flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-cyan-bg-alt hover:shadow-md hover:border-blue-primary/20 transition-all"
              >
                <div className="size-11 rounded-xl bg-blue-primary flex items-center justify-center shrink-0">
                  <Phone className="size-5 text-white" weight="fill" />
                </div>
                <div>
                  <p className="text-xs text-slate-muted font-medium uppercase tracking-wide">
                    {t("info.phone")}
                  </p>
                  <p className="text-base font-bold text-slate-dark group-hover:text-blue-primary transition-colors">
                    {CONTACT_INFO.phoneFormatted}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="group flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-cyan-bg-alt hover:shadow-md hover:border-blue-primary/20 transition-all"
              >
                <div className="size-11 rounded-xl bg-blue-primary flex items-center justify-center shrink-0">
                  <Envelope className="size-5 text-white" weight="fill" />
                </div>
                <div>
                  <p className="text-xs text-slate-muted font-medium uppercase tracking-wide">
                    {t("info.email")}
                  </p>
                  <p className="text-sm font-semibold text-slate-dark group-hover:text-blue-primary transition-colors">
                    {CONTACT_INFO.email}
                  </p>
                </div>
              </a>

              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-cyan-bg-alt hover:shadow-md hover:border-blue-primary/20 transition-all"
              >
                <div className="size-11 rounded-xl bg-red-accent flex items-center justify-center shrink-0">
                  <MapPin className="size-5 text-white" weight="fill" />
                </div>
                <div>
                  <p className="text-xs text-slate-muted font-medium uppercase tracking-wide">
                    {t("info.address")}
                  </p>
                  <p className="text-sm font-semibold text-slate-dark group-hover:text-blue-primary transition-colors">
                    {CONTACT_INFO.address}, {CONTACT_INFO.city}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-cyan-bg-alt">
                <div className="size-11 rounded-xl bg-yellow-accent flex items-center justify-center shrink-0">
                  <Clock className="size-5 text-blue-primary" weight="fill" />
                </div>
                <div>
                  <p className="text-xs text-slate-muted font-medium uppercase tracking-wide">
                    {t("info.hours")}
                  </p>
                  <p className="text-sm font-semibold text-slate-dark">
                    {t("info.hoursWeekday")}
                  </p>
                  <p className="text-xs text-slate-muted">
                    {t("info.hoursWeekend")}
                  </p>
                </div>
              </div>

              {/* Footer note */}
              <p className="text-xs text-slate-muted px-1">
                {t("info.footerNote")}
              </p>
            </div>

            {/* Form — wider right column */}
            <div className="animate-on-scroll fade-up stagger-1 lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-cyan-bg-alt p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
