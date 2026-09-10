import { SITE_CONFIG, CONTACT_INFO, SOCIAL_LINKS, SERVICES, PROMOTIONS } from "@/lib/constants";
import { getServiceFAQs } from "@/lib/service-faqs";
import { getBlogPosts } from "@/lib/blog";
import { getLocalizedService } from "@/lib/utils";
import { SERVICE_CATEGORY_ORDER, getCategoryLabel } from "@/lib/service-categories";
import es from "@/messages/es.json";
import en from "@/messages/en.json";

// llms.txt y llms-full.txt se generan desde los mismos datos que las páginas
// (servicios, promociones, posts, contacto), así nunca vuelven a quedar
// desfasados como los archivos estáticos que reemplazan.

const base = SITE_CONFIG.baseUrl;
const url = (path: string, locale: "es" | "en" = "es") => `${base}${locale === "en" ? "/en" : ""}${path}`;
const byOrder = [...SERVICES].sort((a, b) => a.order - b.order);

const faqPairs = (locale: "es" | "en") => {
  const f = (locale === "en" ? en : es).faq as Record<string, string>;
  return Object.keys(f)
    .filter((k) => /^q\d+$/.test(k))
    .sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)))
    .map((k) => ({ q: f[k], a: f[`a${k.slice(1)}`] }))
    .filter((p) => p.q && p.a);
};

const lastUpdated = () => {
  const dates = [
    ...SERVICES.map((s) => s.dateModified),
    ...getBlogPosts("es").map((p) => p.dateModified ?? p.date),
  ];
  return dates.reduce((m, d) => (d > m ? d : m), "2026-01-01");
};

const HOURS_EN = "Monday to Sunday, 9:00 AM to 9:00 PM, including weekends. Walk-ins accepted during all open hours.";
const AREA_EN =
  "Houston's East End and nearby neighborhoods: Eastwood, Segundo Barrio, Magnolia Park, Forest Hill, Gulfgate, Idylwild, Manchester. ZIP codes primarily served: 77023, 77011, 77012, 77003, 77020, 77087, 77017.";

export function buildLlmsTxt(): string {
  const posts = getBlogPosts("en");
  const lines: string[] = [];
  lines.push(`# ${SITE_CONFIG.name} — Houston, TX`, "");
  lines.push(`> ${en.about.body}`, "");
  lines.push("## About", "", es.about.body, "");
  lines.push(
    "## Location",
    "",
    `- Address: ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}`,
    `- Phone: ${CONTACT_INFO.phoneFormatted}`,
    `- WhatsApp (chat only): ${CONTACT_INFO.whatsappDisplay}`,
    `- Email: ${CONTACT_INFO.email}`,
    `- Coordinates: ${CONTACT_INFO.coordinates.lat}, ${CONTACT_INFO.coordinates.lng}`,
    `- Google Maps: ${CONTACT_INFO.googleMapsUrl}`,
    ""
  );
  lines.push("## Hours", "", HOURS_EN, "");
  lines.push("## Service Area", "", AREA_EN, "");
  lines.push(
    "## Credentials",
    "",
    "- USCIS-designated Civil Surgeon for immigration medical exams (Form I-693)",
    "- Licensed medical professionals; content reviewed by the clinic's medical team",
    "- Bilingual staff (Spanish primary, English available)",
    "- Google rating and review count are shown live on the website",
    ""
  );
  lines.push(`## Services (${SERVICES.length} total)`, "");
  for (const cat of SERVICE_CATEGORY_ORDER) {
    const group = byOrder.filter((s) => s.category === cat);
    if (!group.length) continue;
    lines.push(`### ${getCategoryLabel(cat, "en")} / ${getCategoryLabel(cat, "es")}`, "");
    for (const raw of group) {
      const s = getLocalizedService(raw, "en");
      lines.push(`- ${s.title} — ${url(`/services/${raw.slug}`)}`);
    }
    lines.push("");
  }
  lines.push(
    "## Key pages",
    "",
    `- Homepage: ${url("/")}`,
    `- All services: ${url("/services")}`,
    `- Walk-in clinic info: ${url("/walk-in")}`,
    `- Promotions / health packages: ${url("/promociones")}`,
    `- Blog: ${url("/blog")}`,
    `- English version: ${url("/", "en")}`,
    ""
  );
  lines.push("## Current promotions", "");
  for (const p of PROMOTIONS) {
    lines.push(`- ${p.titleEn}${p.price ? ` (${p.price})` : ""}: ${p.includesEn.join(", ")} — ${url("/promociones")}#${p.slug}`);
  }
  lines.push("", "Prices are shown on each promotion and may change without notice.", "");
  lines.push(`## Guides (${posts.length})`, "");
  for (const p of posts) {
    lines.push(`- ${p.title} (updated ${p.dateModified ?? p.date}) — ${url(`/blog/${p.slug}`)}`);
  }
  lines.push("");
  lines.push("## Pricing and insurance", "", "Self-pay only, with affordable direct prices; no insurance is required or billed. Cash, credit and debit cards accepted. Call for the current price of a specific service.", "");
  lines.push("## Languages", "", "- Spanish (primary; all consultations available in Spanish)", "- English (also available)", "");
  lines.push("## Frequently Asked Questions", "");
  for (const { q, a } of faqPairs("en")) lines.push(`Q: ${q}`, `A: ${a}`, "");
  lines.push("## Social Media", "", `- Facebook: ${SOCIAL_LINKS.facebook}`, `- Instagram: ${SOCIAL_LINKS.instagram}`, "");
  lines.push("## Full descriptions", "", `${url("/llms-full.txt")}`, "");
  lines.push(`Last updated: ${lastUpdated()}`, "");
  return lines.join("\n");
}

export function buildLlmsFullTxt(): string {
  const lines: string[] = [];
  lines.push(`# ${SITE_CONFIG.name} — Full Service Descriptions`, "");
  lines.push(
    `Website: ${base}`,
    `Address: ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}`,
    `Phone: ${CONTACT_INFO.phoneFormatted}`,
    `Hours: ${HOURS_EN}`,
    "",
    "## About / Sobre la clínica",
    "",
    es.about.body,
    "",
    en.about.body,
    "",
    "---",
    ""
  );
  for (const raw of byOrder) {
    const s = getLocalizedService(raw, "es");
    const e = getLocalizedService(raw, "en");
    lines.push(`## ${s.title} / ${e.title}`, "", s.description, "", e.description, "");
    if (raw.features?.length) {
      lines.push("Incluye / Includes:");
      raw.features.forEach((f, i) => lines.push(`- ${f}${raw.featuresEn?.[i] ? ` / ${raw.featuresEn[i]}` : ""}`));
      lines.push("");
    }
    const faqs = getServiceFAQs(raw.slug, "es");
    const faqsEn = getServiceFAQs(raw.slug, "en");
    if (faqs.length) {
      lines.push("Preguntas frecuentes / FAQ:");
      faqs.forEach((f, i) => {
        lines.push(`Q: ${f.question}`, `A: ${f.answer}`);
        if (faqsEn[i]) lines.push(`Q: ${faqsEn[i].question}`, `A: ${faqsEn[i].answer}`);
        lines.push("");
      });
    }
    lines.push(`Service page: ${url(`/services/${raw.slug}`)} | English: ${url(`/services/${raw.slug}`, "en")}`, `Last updated: ${raw.dateModified}`, "", "---", "");
  }
  lines.push(
    "## Clínica Sin Cita Previa / Walk-in Clinic",
    "",
    `${SITE_CONFIG.name} atiende sin cita todos los días de 9:00 AM a 9:00 PM en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, TX ${CONTACT_INFO.zip}. Traiga una identificación con foto y su lista de medicamentos. No se necesita seguro médico.`,
    "",
    `Walk in any day between 9:00 AM and 9:00 PM. Bring a photo ID and your list of current medications. No insurance needed.`,
    "",
    `Walk-in URL: ${url("/walk-in")}`,
    "",
    "---",
    "",
    "## Promociones / Health Promotions",
    ""
  );
  for (const p of PROMOTIONS) {
    lines.push(`### ${p.title} / ${p.titleEn}${p.price ? ` — ${p.price}` : ""}`, "", p.blurb, "", p.blurbEn, "");
    lines.push("Incluye / Includes:");
    p.includes.forEach((inc, i) => lines.push(`- ${inc}${p.includesEn?.[i] ? ` / ${p.includesEn[i]}` : ""}`));
    lines.push("", `URL: ${url("/promociones")}#${p.slug}`, "");
  }
  lines.push("Los precios pueden cambiar sin previo aviso. / Prices may change without notice.", "", "---", "");
  const postsEs = getBlogPosts("es");
  const postsEn = getBlogPosts("en");
  lines.push(`## Guías del blog / Blog guides (${postsEs.length})`, "");
  for (const p of postsEs) {
    const pe = postsEn.find((x) => x.slug === p.slug);
    lines.push(`### ${p.title}${pe ? ` / ${pe.title}` : ""}`, "", p.description, "");
    if (pe) lines.push(pe.description, "");
    lines.push(`Published: ${p.date} | Updated: ${p.dateModified ?? p.date} | Author: ${p.author}`, `URL: ${url(`/blog/${p.slug}`)}${pe ? ` | English: ${url(`/blog/${p.slug}`, "en")}` : ""}`, "");
  }
  lines.push("---", "", "## Reseñas / Reviews", "", `La calificación y el número de reseñas de Google se muestran en vivo en ${base}. / Google rating and review count are shown live on the website.`, "");
  lines.push(`Last updated: ${lastUpdated()}`, "");
  return lines.join("\n");
}
