import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LANDING_COPY } from "@/lib/landing-conquesting";
import type { Locale } from "@/i18n/config";

export function LandingFAQ({ locale }: { locale: Locale }) {
  const c = LANDING_COPY[locale].faq;

  return (
    <section className="py-16 md:py-24 bg-cyan-warm" aria-labelledby="landing-faq-heading">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="landing-faq-heading"
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-dark mb-4"
          >
            {c.title}
          </h2>
          <p className="text-lg text-slate-dark/70">{c.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {c.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white border border-slate-100 rounded-2xl px-6 shadow-sm hover:shadow-md hover:border-blue-primary/20 transition-all data-[state=open]:border-blue-primary/30 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-dark py-5 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-dark/80 leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
