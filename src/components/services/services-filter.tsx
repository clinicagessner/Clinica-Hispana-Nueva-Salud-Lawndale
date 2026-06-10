"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Activity,
  ArrowRight,
  Bone,
  Bug,
  Check,
  ClipboardList,
  Droplet,
  FileText,
  FlaskConical,
  Heart,
  Monitor,
  Scissors,
  Shield,
  ShieldCheck,
  Stethoscope,
  Syringe,
  TestTube,
  Truck,
  Users,
  Wind,
  Zap,
} from "lucide-react";

import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

type IconComponent = ComponentType<
  SVGProps<SVGSVGElement> & { size?: number | string }
>;

// Map service.icon string -> lucide component.
// Names used in constants: Stethoscope, FileText, Shield, Activity, Heart,
// Flask, TestTube, FirstAid, Heartbeat, Drop, GenderFemale, Syringe,
// Clipboard, Virus, Lightning, ShieldCheck, Wind, Truck, Scissors, Users,
// Bone, Monitor. Fallback to Activity.
const iconMap: Record<string, IconComponent> = {
  Stethoscope,
  FileText,
  Shield,
  ShieldCheck,
  Activity,
  Heart,
  Heartbeat: Heart,
  Flask: FlaskConical,
  TestTube,
  FirstAid: Activity,
  Drop: Droplet,
  GenderFemale: Heart,
  Syringe,
  Clipboard: ClipboardList,
  Virus: Bug,
  Lightning: Zap,
  Wind,
  Truck,
  Scissors,
  Users,
  Bone,
  Monitor,
};

interface Category {
  id: string;
  label: string;
  /** Optional — older callers may still pass this, but pills don't render it. */
  iconName?: string;
}

interface ServicesFilterProps {
  services: Service[];
  categories: Category[];
}

export function ServicesFilter({ services, categories }: ServicesFilterProps) {
  const t = useTranslations("services");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const pillBase =
    "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2";
  const pillActive = "bg-blue-primary text-white shadow-lg";
  const pillInactive = "bg-cyan-bg text-blue-primary hover:bg-blue-primary/10";

  return (
    <div className="container mx-auto px-4 py-8 md:py-10">
      {/* Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          aria-pressed={activeCategory === "all"}
          className={cn(
            pillBase,
            activeCategory === "all" ? pillActive : pillInactive
          )}
        >
          {t("filterAll")}
        </button>

        {categories.map((cat) => {
          const active = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={active}
              className={cn(pillBase, active ? pillActive : pillInactive)}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredServices.map((service) => {
          const IconComponent = iconMap[service.icon] || Activity;
          const topFeatures = service.features.slice(0, 3);

          return (
            <article
              key={service.id}
              className="relative bg-white rounded-2xl border border-slate-light hover:border-blue-primary hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group flex flex-col"
            >
              {/* Ribbon for highlighted services */}
              {service.highlighted && (
                <span className="absolute top-3 right-3 z-10 bg-red-accent text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full shadow-md">
                  {t("categoryEspecial")}
                </span>
              )}

              {/* Header: square image left + icon badge + title/description right */}
              <div className="p-5 flex items-start gap-4">
                <div className="relative shrink-0">
                  <div className="relative size-20 rounded-xl overflow-hidden bg-cyan-warm ring-1 ring-slate-light">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  {/* Overlapping icon bubble */}
                  <div className="absolute -bottom-2 -right-2 size-9 rounded-full bg-blue-primary text-white flex items-center justify-center shadow-lg ring-2 ring-white">
                    <IconComponent className="size-4" aria-hidden="true" />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-base md:text-lg font-heading font-bold text-slate-dark leading-snug group-hover:text-blue-primary transition-colors pr-8">
                    {service.shortTitle || service.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-muted line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features list */}
              {topFeatures.length > 0 && (
                <ul className="px-5 pb-4 space-y-2">
                  {topFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-primary"
                    >
                      <Check
                        className="size-4 text-red-accent shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Footer link */}
              <div className="mt-auto px-5 py-4 border-t border-slate-light/70 bg-cyan-warm/40">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-blue-primary font-semibold text-sm group-hover:text-blue-dark group-hover:gap-2.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary rounded"
                  aria-label={`${t("learnMore")} — ${service.title}`}
                >
                  {t("learnMore")}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* No results */}
      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-muted">{t("noServices")}</p>
        </div>
      )}
    </div>
  );
}
