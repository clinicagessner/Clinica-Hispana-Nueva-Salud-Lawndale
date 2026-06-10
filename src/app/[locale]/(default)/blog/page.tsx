import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SITE_CONFIG } from "@/lib/constants";
import { getBlogPosts, getFeaturedPost } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarDots, Clock, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { JsonLdCollectionPage, JsonLdBreadcrumb } from "@/components/seo/json-ld";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  const localePath = locale === "en" ? "/en" : "";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}${localePath}/blog`,
      languages: {
        es: "/blog",
        en: "/en/blog",
        "x-default": "/blog",
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      type: "website",
      url: `${SITE_CONFIG.baseUrl}${localePath}/blog`,
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "blog" });

  const getLocalizedHref = (href: string) => {
    if (locale === "es") return href;
    return href.startsWith("/") ? `/${locale}${href}` : `/${locale}/${href}`;
  };

  const allPosts = getBlogPosts(locale);
  const featuredPost = getFeaturedPost(locale);
  const regularPosts = allPosts.filter((post) => !post.featured);

  const localePath = locale === "en" ? "/en" : "";

  return (
    <>
      <JsonLdCollectionPage
        name={t("metaTitle")}
        description={t("metaDescription")}
        url={`${SITE_CONFIG.baseUrl}${localePath}/blog`}
      />
      <JsonLdBreadcrumb
        items={[
          { name: locale === "en" ? "Home" : "Inicio", url: `${SITE_CONFIG.baseUrl}${localePath}` },
          { name: "Blog", url: `${SITE_CONFIG.baseUrl}${localePath}/blog` },
        ]}
      />
      <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-linear-to-b from-blue-light/30 to-background">
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <Link href={getLocalizedHref(`/blog/${featuredPost.slug}`)} className="block group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-video md:aspect-auto md:min-h-[400px]">
                    <Image
                      src={featuredPost.image || "/images/logo.webp"}
                      alt={`${featuredPost.title} - Blog de salud Clínica Hispana Nueva Salud Lawndale Houston`}
                      fill
                      className="object-cover"
                      priority
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-primary">
                      {t("featured")}
                    </Badge>
                  </div>
                  <CardContent className="flex flex-col justify-center p-6 md:p-10">
                    {featuredPost.category && (
                      <Badge variant="outline" className="w-fit mb-4">
                        {featuredPost.category}
                      </Badge>
                    )}
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 group-hover:text-blue-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <CalendarDots className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString(locale, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      {featuredPost.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime} {t("minRead")}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-2 text-blue-primary font-medium group-hover:gap-3 transition-all">
                      {t("readMore")}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.slug} href={getLocalizedHref(`/blog/${post.slug}`)} className="group">
                <Card className="h-full overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video">
                    <Image
                      src={post.image || "/images/logo.webp"}
                      alt={`${post.title} - Blog de salud Clínica Hispana Nueva Salud Lawndale Houston`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    {post.category && (
                      <Badge variant="outline" className="w-fit mb-2">
                        {post.category}
                      </Badge>
                    )}
                    <h3 className="text-xl font-bold text-primary group-hover:text-blue-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarDots className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString(locale, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      {post.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime} {t("minRead")}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {allPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{t("noPosts")}</p>
          </div>
        )}
        </div>
      </section>
    </>
  );
}
