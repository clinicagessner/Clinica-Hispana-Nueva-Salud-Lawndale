import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function readBlogFile(slug: string, locale: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, locale, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: data.slug || slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    dateModified: data.dateModified,
    author: data.author || "Clínica Hispana Nueva Salud Lawndale",
    image: data.image,
    featured: data.featured || false,
    category: data.category,
    readTime: data.readTime,
    keywords: data.keywords || [],
    content: content.trim(),
  };
}

function getAllSlugs(): string[] {
  const esDir = path.join(BLOG_DIR, "es");
  if (!fs.existsSync(esDir)) return [];

  return fs
    .readdirSync(esDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
}

export function getBlogPosts(locale: string = "es"): BlogPost[] {
  const slugs = getAllSlugs();

  return slugs
    .map((slug) => readBlogFile(slug, locale))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string, locale: string = "es"): BlogPost | null {
  return readBlogFile(slug, locale);
}

export function getFeaturedPost(locale: string = "es"): BlogPost | null {
  const posts = getBlogPosts(locale);
  return posts.find((post) => post.featured) || null;
}

export function getRelatedPosts(slug: string, locale: string = "es", limit: number = 3): BlogPost[] {
  const posts = getBlogPosts(locale);
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}
