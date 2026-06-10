import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Service, BlogPost } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLocalizedService(service: Service, locale: string) {
  const isEn = locale === "en";
  return {
    ...service,
    title: (isEn && service.titleEn) || service.title,
    description: (isEn && service.descriptionEn) || service.description,
    longDescription: (isEn && service.longDescriptionEn) || service.longDescription,
    features: (isEn && service.featuresEn) || service.features,
    keywords: (isEn && service.keywordsEn) || service.keywords,
    faqs: (isEn && service.faqsEn) || service.faqs,
  };
}

export function getLocalizedPost(post: BlogPost, locale: string) {
  const isEn = locale === "en";
  return {
    ...post,
    title: (isEn && post.titleEn) || post.title,
    description: (isEn && post.descriptionEn) || post.description,
    content: (isEn && post.contentEn) || post.content,
    category: (isEn && post.categoryEn) || post.category,
    keywords: (isEn && post.keywordsEn) || post.keywords,
  };
}
