import type { MetadataRoute } from "next";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { getBlogPosts } from "@/lib/blog";
import { locales } from "@/i18n/config";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  alternates?: {
    languages: Record<string, string>;
  };
};

// Fechas reales del último cambio de cada página estática (git). Actualizar
// a mano cuando cambie el copy de la página, no en refactors.
const STATIC_DATES: Record<string, string> = {
  "": "2026-06-28",
  "/services": "2026-06-12",
  "/walk-in": "2026-08-01",
  "/promociones": "2026-09-01",
  "/blog": "2026-07-22",
  "/privacy": "2026-06-09",
};

// Strings YYYY-MM-DD comparan bien lexicográficamente.
const latest = (dates: string[], fallback: string) =>
  dates.reduce((max, d) => (d > max ? d : max), fallback);

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.baseUrl;
  const blogPosts = getBlogPosts("es");

  // Google descarta lastmod si detecta fechas inventadas: antes 70 URLs
  // llevaban una constante anterior al primer commit del repo.
  const newestService = latest(SERVICES.map((s) => s.dateModified), STATIC_DATES["/services"]);
  const newestPost = latest(blogPosts.map((p) => p.dateModified ?? p.date), STATIC_DATES["/blog"]);

  const localePath = (locale: string) => (locale === "es" ? "" : `/${locale}`);

  const createAlternates = (path: string) => ({
    languages: {
      es: `${baseUrl}${path}`,
      en: `${baseUrl}/en${path}`,
      "x-default": `${baseUrl}${path}`,
    },
  });

  const staticPages: { path: string; lastModified: string; priority: number; changeFrequency: ChangeFrequency }[] = [
    { path: "", lastModified: latest([STATIC_DATES[""], newestService, newestPost], STATIC_DATES[""]), priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", lastModified: newestService, priority: 0.9, changeFrequency: "monthly" },
    { path: "/walk-in", lastModified: STATIC_DATES["/walk-in"], priority: 0.85, changeFrequency: "monthly" },
    { path: "/promociones", lastModified: STATIC_DATES["/promociones"], priority: 0.85, changeFrequency: "weekly" },
    { path: "/blog", lastModified: newestPost, priority: 0.8, changeFrequency: "weekly" },
    { path: "/privacy", lastModified: STATIC_DATES["/privacy"], priority: 0.3, changeFrequency: "yearly" },
  ];

  const staticRoutes: SitemapEntry[] = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}${localePath(locale)}${page.path}`,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: createAlternates(page.path),
    }))
  );

  const serviceRoutes: SitemapEntry[] = SERVICES.flatMap((service) =>
    locales.map((locale) => ({
      url: `${baseUrl}${localePath(locale)}/services/${service.slug}`,
      lastModified: service.dateModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: createAlternates(`/services/${service.slug}`),
    }))
  );

  const blogRoutes: SitemapEntry[] = blogPosts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${baseUrl}${localePath(locale)}/blog/${post.slug}`,
      // Misma fuente que BlogPosting.dateModified en json-ld-blog.tsx
      lastModified: post.dateModified ?? post.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: createAlternates(`/blog/${post.slug}`),
    }))
  );

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
