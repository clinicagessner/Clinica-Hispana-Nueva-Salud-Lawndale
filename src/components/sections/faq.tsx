import { getTranslations } from "next-intl/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";
import { JsonLdFAQ } from "@/components/seo/json-ld";

export async function FAQ() {
  const t = await getTranslations();

  // Prepare FAQ data for JSON-LD
  const faqData = FAQ_ITEMS.map((item) => ({
    question: t(item.question),
    answer: t(item.answer),
  }));

  return (
    <section id="faq" className="py-16 md:py-24 bg-cyan-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="animate-on-scroll fade-up text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-dark mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("faq.subtitle")}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="animate-on-scroll fade-up stagger-1 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="group bg-white border border-slate-100 rounded-2xl px-6 shadow-sm hover:shadow-md hover:border-blue-primary/20 transition-all duration-300 data-[state=open]:border-blue-primary/30 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-dark hover:text-blue-primary hover:no-underline py-5 data-[state=open]:text-blue-primary">
                  <span className="flex items-center gap-4">
                    <span className="flex items-center justify-center size-8 rounded-lg bg-cyan-bg text-blue-primary text-sm font-bold group-data-[state=open]:bg-blue-primary group-data-[state=open]:text-white transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{t(item.question)}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-12 leading-relaxed">
                  {t(item.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* JSON-LD for FAQ */}
      <JsonLdFAQ questions={faqData} />
    </section>
  );
}
