import Image from "next/image";
import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import { ArrowRight, Calendar, Clock } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedPost } from "@/lib/blog";

export async function BlogPreview() {
  // Parallel fetching - eliminates waterfall
  const [t, locale] = await Promise.all([
    getTranslations("blog"),
    getLocale()
  ]);

  const getLocalizedHref = (href: string) => {
    if (locale === "es") return href;
    return href.startsWith("/") ? `/${locale}${href}` : `/${locale}/${href}`;
  };

  // Get the featured post or the most recent one
  const featuredPost = getFeaturedPost(locale);

  if (!featuredPost) return null;

  return (
    <section id="blog" className="py-16 md:py-24 bg-cyan-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="animate-on-scroll fade-up text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-dark mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        {/* Featured Post Card */}
        <div className="animate-on-scroll scale-in stagger-1 max-w-4xl mx-auto mb-10">
          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-full min-h-[300px]">
                <Image
                  src={featuredPost.image || "/images/logo.webp"}
                  alt={`Blog de salud: ${featuredPost.title} - Clínica Hispana Nueva Salud Lawndale Houston`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {featuredPost.category && (
                  <Badge className="absolute top-4 left-4 bg-blue-primary">
                    {featuredPost.category}
                  </Badge>
                )}
              </div>

              {/* Content */}
              <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="size-4" weight="fill" />
                    <span>{new Date(featuredPost.date).toLocaleDateString(locale === "en" ? "en-US" : "es-MX", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}</span>
                  </div>
                  {featuredPost.readTime && (
                    <div className="flex items-center gap-1.5">
                      <Clock className="size-4" weight="fill" />
                      <span>{featuredPost.readTime} min</span>
                    </div>
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-dark mb-4">
                  {featuredPost.title}
                </h3>

                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {featuredPost.description}
                </p>

                <Link
                  href={getLocalizedHref(`/blog/${featuredPost.slug}`)}
                  className="inline-flex items-center gap-2 text-blue-primary font-semibold hover:gap-3 transition-all"
                >
                  {t("readMore")}
                  <ArrowRight className="size-5" />
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href={getLocalizedHref("/blog")}>
              {t("viewAll")}
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
