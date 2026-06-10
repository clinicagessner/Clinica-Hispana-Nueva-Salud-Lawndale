import {
  Clock,
  CalendarOff,
  Languages,
  FileCheck,
  FlaskConical,
  DollarSign,
  Car,
  Check,
  X,
  type LucideIcon,
} from "lucide-react";
import { LANDING_COPY } from "@/lib/landing-conquesting";
import { TelButton } from "@/components/landing/tel-button";
import type { Locale } from "@/i18n/config";

const ICONS: Record<string, LucideIcon> = {
  Clock,
  CalendarOff,
  Languages,
  FileCheck,
  FlaskConical,
  DollarSign,
  Car,
};

export function LandingComparison({ locale }: { locale: Locale }) {
  const c = LANDING_COPY[locale].comparison;

  return (
    <section
      className="py-16 md:py-24 bg-cyan-bg"
      aria-labelledby="landing-comparison-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2
            id="landing-comparison-heading"
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-dark mb-4"
          >
            {c.title}
          </h2>
          <p className="text-lg text-slate-dark/70">{c.subtitle}</p>
        </div>

        {/* Desktop: 3-column table */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-100">
              <div className="col-span-4 px-6 py-4 font-heading font-bold text-slate-dark text-sm uppercase tracking-wide">
                {c.headers.feature}
              </div>
              <div className="col-span-4 px-6 py-4 font-heading font-bold text-slate-dark/60 text-sm uppercase tracking-wide text-center">
                {c.headers.others}
              </div>
              <div className="col-span-4 px-6 py-4 font-heading font-bold text-blue-primary text-sm uppercase tracking-wide text-center bg-blue-primary/5">
                {c.headers.us}
              </div>
            </div>
            {c.rows.map((row, i) => {
              const Icon = ICONS[row.icon] ?? Clock;
              const isLast = i === c.rows.length - 1;
              return (
                <div
                  key={row.feature}
                  className={`grid grid-cols-12 items-center ${
                    isLast ? "" : "border-b border-slate-100"
                  }`}
                >
                  <div className="col-span-4 px-6 py-5 flex items-center gap-3">
                    <div className="size-9 shrink-0 rounded-lg bg-red-accent-bg flex items-center justify-center">
                      <Icon className="size-4 text-red-accent" aria-hidden="true" />
                    </div>
                    <span className="font-semibold text-slate-dark text-sm">
                      {row.feature}
                    </span>
                  </div>
                  <div className="col-span-4 px-6 py-5 text-sm text-slate-dark/60 text-center flex items-center justify-center gap-2">
                    <X className="size-4 text-slate-dark/40 shrink-0" aria-hidden="true" />
                    <span>{row.others}</span>
                  </div>
                  <div className="col-span-4 px-6 py-5 text-sm font-semibold text-slate-dark text-center bg-blue-primary/5 flex items-center justify-center gap-2">
                    <Check
                      className="size-4 text-blue-primary shrink-0"
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                    <span>{row.us}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-4 max-w-md mx-auto">
          {c.rows.map((row) => {
            const Icon = ICONS[row.icon] ?? Clock;
            return (
              <div
                key={row.feature}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <div className="flex items-center gap-3 px-5 py-3 bg-slate-50 border-b border-slate-100">
                  <div className="size-9 shrink-0 rounded-lg bg-red-accent-bg flex items-center justify-center">
                    <Icon className="size-4 text-red-accent" aria-hidden="true" />
                  </div>
                  <span className="font-semibold text-slate-dark text-sm">
                    {row.feature}
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-3 border-r border-slate-100">
                    <p className="text-[10px] uppercase tracking-wide text-slate-dark/50 font-semibold mb-1">
                      {c.headers.others}
                    </p>
                    <div className="flex items-start gap-1.5">
                      <X
                        className="size-3.5 text-slate-dark/40 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <p className="text-xs text-slate-dark/70 leading-snug">
                        {row.others}
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-blue-primary/5">
                    <p className="text-[10px] uppercase tracking-wide text-blue-primary font-semibold mb-1">
                      {c.headers.us}
                    </p>
                    <div className="flex items-start gap-1.5">
                      <Check
                        className="size-3.5 text-blue-primary shrink-0 mt-0.5"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                      <p className="text-xs font-semibold text-slate-dark leading-snug">
                        {row.us}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 md:mt-12 max-w-2xl mx-auto text-center">
          <p className="text-base md:text-lg text-slate-dark/80 mb-6 leading-relaxed">
            {c.footer}
          </p>
          <TelButton label={c.ctaCall} variant="primary" size="lg" />
        </div>
      </div>
    </section>
  );
}
