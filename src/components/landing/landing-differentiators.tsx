import {
  Star,
  CalendarOff,
  Clock,
  Languages,
  ShieldCheck,
  DollarSign,
  Car,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";
import { LANDING_COPY } from "@/lib/landing-conquesting";
import type { Locale } from "@/i18n/config";

const ICONS: Record<string, LucideIcon> = {
  Star,
  CalendarOff,
  Clock,
  Languages,
  ShieldCheck,
  DollarSign,
  Car,
  FlaskConical,
};

export function LandingDifferentiators({ locale }: { locale: Locale }) {
  const c = LANDING_COPY[locale].diff;

  return (
    <section className="py-16 md:py-24 bg-cyan-warm" aria-labelledby="landing-diff-heading">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2
            id="landing-diff-heading"
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-dark mb-4"
          >
            {c.title}
          </h2>
          <p className="text-lg text-slate-dark/70">{c.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {c.items.map((item) => {
            const Icon = ICONS[item.icon] ?? Star;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-primary/20 transition-all"
              >
                <div className="size-12 rounded-xl bg-red-accent-bg flex items-center justify-center mb-4">
                  <Icon className="size-6 text-red-accent" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-dark/70 leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
