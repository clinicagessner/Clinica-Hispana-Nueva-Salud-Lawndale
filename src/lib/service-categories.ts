import type { Service } from "@/types";

export type ServiceCategoryId = Service["category"];

export const SERVICE_CATEGORY_ORDER: ServiceCategoryId[] = [
  "medicina-general",
  "salud-mujer",
  "examenes",
  "laboratorio",
  "tratamientos",
];

export const SERVICE_CATEGORIES: Record<
  ServiceCategoryId,
  { label: string; labelEn: string; iconName: string }
> = {
  "medicina-general": { label: "Medicina General", labelEn: "General Medicine", iconName: "Stethoscope" },
  "salud-mujer": { label: "Salud de la Mujer", labelEn: "Women's Health", iconName: "Flower2" },
  examenes: { label: "Exámenes y Certificados", labelEn: "Exams & Certificates", iconName: "ClipboardList" },
  laboratorio: { label: "Laboratorio y Pruebas", labelEn: "Lab & Testing", iconName: "FlaskConical" },
  tratamientos: { label: "Tratamientos", labelEn: "Treatments", iconName: "Syringe" },
};

export function getCategoryLabel(id: ServiceCategoryId, locale: string) {
  return locale === "en" ? SERVICE_CATEGORIES[id].labelEn : SERVICE_CATEGORIES[id].label;
}

// Etiqueta corta para menús y footer. En español existe `shortTitle`; en
// inglés se deriva del título SEO quitando el sufijo de Houston y el
// diferenciador (" | ..." / ": ...").
export function getServiceNavLabel(service: Service, locale: string) {
  if (locale !== "en" || !service.titleEn) return service.shortTitle || service.title;
  return service.titleEn.split(/\s(?:\||:)\s|\sin\sHouston/)[0].trim();
}
