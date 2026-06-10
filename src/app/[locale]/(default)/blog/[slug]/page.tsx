import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";
import { getBlogPosts, getBlogPost, getRelatedPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDots, Clock, ArrowLeft, Phone } from "@phosphor-icons/react/dist/ssr";
import { JsonLdBlogPosting } from "@/components/seo/json-ld-blog";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const locales = ["es", "en"];
  const posts = getBlogPosts("es");
  return locales.flatMap((locale) =>
    posts.map((post) => ({
      locale,
      slug: post.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = getBlogPost(slug, locale);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  const localePath = locale === "en" ? "/en" : "";

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}${localePath}/blog/${slug}`,
      languages: {
        es: `/blog/${slug}`,
        en: `/en/blog/${slug}`,
        "x-default": `/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `${SITE_CONFIG.baseUrl}${localePath}/blog/${slug}`,
      images: post.image
        ? [
            {
              url: post.image,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("blog");

  const getLocalizedHref = (href: string) => {
    if (locale === "es") return href;
    return href.startsWith("/") ? `/${locale}${href}` : `/${locale}/${href}`;
  };

  const post = getBlogPost(slug, locale);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, locale, 2);

  return (
    <>
      <JsonLdBlogPosting post={post} locale={locale} />

      <article>
        {/* Hero Header with Background Image */}
        <header className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          {/* Background Image */}
          {post.image && (
            <div className="absolute inset-0">
              <Image
                src={post.image}
                alt={`${post.title} - Artículo de salud Clínica Hispana Nueva Salud Lawndale Houston TX`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
            </div>
          )}

          <div className="container mx-auto px-4 relative z-10">
            {/* Back Button */}
            <div className="mb-8">
              <Link href={getLocalizedHref("/blog")}>
                <Button variant="ghost" className="gap-2 text-white/90 hover:text-white hover:bg-white/10">
                  <ArrowLeft className="w-4 h-4" />
                  {t("backToBlog")}
                </Button>
              </Link>
            </div>

            <div className="max-w-3xl">
              {post.category && (
                <Badge className="mb-4 bg-blue-primary hover:bg-blue-dark text-white border-0">
                  {post.category}
                </Badge>
              )}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                {post.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <CalendarDots className="w-4 h-4" weight="fill" />
                  {new Date(post.date).toLocaleDateString(locale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                {post.readTime && (
                  <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Clock className="w-4 h-4" weight="fill" />
                    {post.readTime} {t("minRead")}
                  </span>
                )}
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {t("by")} <strong className="text-white">{post.author}</strong>
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="blog-content">
              <div dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }} />
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 md:p-10 bg-linear-to-br from-blue-primary via-blue-dark to-slate-900 rounded-2xl text-white text-center shadow-xl">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                {t("ctaTitle")}
              </h3>
              <p className="mb-8 text-white/90 max-w-md mx-auto">
                {t("ctaDescription")}
              </p>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center gap-2 bg-white text-blue-primary font-bold px-8 py-4 rounded-full hover:bg-blue-light hover:scale-105 transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" weight="fill" />
                {t("callNow")} {CONTACT_INFO.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-4xl mx-auto mt-16">
              <h2 className="text-2xl font-heading font-bold text-slate-dark mb-8">
                {t("relatedPosts")}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={getLocalizedHref(`/blog/${relatedPost.slug}`)}
                      className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100 hover:border-red-200"
                    >
                      {relatedPost.image && (
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={relatedPost.image}
                            alt={`${relatedPost.title} - Blog Clínica Hispana Nueva Salud Lawndale Houston`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="font-heading font-bold text-slate-dark group-hover:text-blue-primary transition-colors line-clamp-2 mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date(relatedPost.date).toLocaleDateString(locale, {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}

// Simple markdown parser (for basic formatting)
function parseMarkdown(markdown: string): string {
  // The page already renders the post title as the h1 (from frontmatter), so any
  // leading `# Title` in the markdown body would produce a duplicate h1.
  const stripped = markdown.replace(/^\s*#\s+.+\r?\n+/, "");

  let html = stripped
    // Headers — `#` (single hash) is intentionally not handled: see strip above.
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    // Bold
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>')
    // Unordered lists
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    // Ordered lists
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    // Paragraphs
    .replace(/\n\n/gim, '</p><p>')
    // Line breaks
    .replace(/\n/gim, '<br>');

  // Wrap content in paragraph tags
  html = `<p>${html}</p>`;

  // Fix list structure
  html = html
    .replace(/<p><li>/g, '<ul><li>')
    .replace(/<\/li><\/p>/g, '</li></ul>')
    .replace(/<\/li><br><li>/g, '</li><li>')
    .replace(/<br><ul>/g, '</p><ul>')
    .replace(/<\/ul><br>/g, '</ul><p>');

  return html;
}
