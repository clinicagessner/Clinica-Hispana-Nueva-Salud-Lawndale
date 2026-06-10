import type { MetadataRoute } from "next";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { getBlogPosts } from "@/lib/blog";
import { locales } from "@/i18n/config";

type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
  alternates?: {
    languages: Record<string, string>;
  };
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.baseUrl;
  const siteLastUpdated = new Date("2026-04-15");

  // Helper to create alternates for hreflang
  const createAlternates = (path: string) => ({
    languages: {
      es: `${baseUrl}${path}`,
      en: `${baseUrl}/en${path}`,
      "x-default": `${baseUrl}${path}`,
    },
  });

  // Static pages
  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/walk-in", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "daily" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "monthly" as const },
  ];

  const staticRoutes: SitemapEntry[] = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === "es" ? "" : `/${locale}`}${page.path}`,
      lastModified: siteLastUpdated,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: createAlternates(page.path),
    }))
  );

  // Service pages
  const serviceRoutes: SitemapEntry[] = SERVICES.flatMap((service) =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === "es" ? "" : `/${locale}`}/services/${service.slug}`,
      lastModified: siteLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: createAlternates(`/services/${service.slug}`),
    }))
  );

  // Blog posts
  const blogPosts = getBlogPosts("es");
  const blogRoutes: SitemapEntry[] = blogPosts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === "es" ? "" : `/${locale}`}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: createAlternates(`/blog/${post.slug}`),
    }))
  );

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
