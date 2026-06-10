import {
  Star,
  Clock,
  CalendarOff,
  DollarSign,
  Languages,
  FileCheck,
  Car,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";
import { LANDING_COPY } from "@/lib/landing-conquesting";
import type { Locale } from "@/i18n/config";

const ICONS: Record<string, LucideIcon> = {
  Star,
  Clock,
  CalendarOff,
  DollarSign,
  Languages,
  FileCheck,
  Car,
  FlaskConical,
};

export function LandingOfferings({ locale }: { locale: Locale }) {
  const c = LANDING_COPY[locale].offerings;

  return (
    <section className="py-16 md:py-24 bg-yellow-accent-bg" aria-labelledby="landing-offerings-heading">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="landing-offerings-heading"
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-dark mb-4"
          >
            {c.title}
          </h2>
          <p className="text-lg text-slate-dark/70">{c.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 divide-y divide-slate-100 overflow-hidden">
          {c.items.map((item) => {
            const Icon = ICONS[item.icon] ?? Star;
            return (
              <div
                key={item.label}
                className="flex items-center gap-4 px-6 py-4 hover:bg-cyan-warm transition-colors"
              >
                <div className="size-10 shrink-0 rounded-xl bg-red-accent-bg flex items-center justify-center">
                  <Icon className="size-5 text-red-accent" aria-hidden="true" />
                </div>
                <span className="font-semibold text-slate-dark flex-1">
                  {item.label}
                </span>
                <span className="text-sm md:text-base text-slate-dark/80 text-right">
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
