export interface Service {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  shortTitle: string;
  shortDescription?: string;
  shortDescriptionEn?: string;
  description: string;
  descriptionEn?: string;
  longDescription: string;
  longDescriptionEn?: string;
  icon: string;
  image: string;
  category: 'medicina-general' | 'examenes' | 'salud-mujer' | 'laboratorio' | 'tratamientos';
  keywords: string[];
  keywordsEn?: string[];
  features: string[];
  featuresEn?: string[];
  faqs?: { question: string; answer: string }[];
  faqsEn?: { question: string; answer: string }[];
  highlighted?: boolean;
  order: number;
}

export interface Promotion {
  id: string;
  title: string;
  badge: string;
  description: string;
  includes: string[];
}

export interface ContactInfo {
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  hours: string;
  hoursWeekday: string;
  hoursWeekend: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
  googleReviewUrl: string;
  placeId: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  date: string;
  dateModified?: string;
  author: string;
  image?: string;
  featured?: boolean;
  content: string;
  contentEn?: string;
  category?: string;
  categoryEn?: string;
  readTime?: number;
  keywords?: string[];
  keywordsEn?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  x?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
  google?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  baseUrl: string;
  locale: string;
  logoUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface TestimonialData {
  reviews: GoogleReview[];
  averageRating: number;
  totalReviews: number;
}
