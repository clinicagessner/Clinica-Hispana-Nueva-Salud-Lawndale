import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "DuckAssistBot",
          "Amazonbot",
        ],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: ["CCBot"],
        disallow: "/",
      },
    ],
    sitemap: `${SITE_CONFIG.baseUrl}/sitemap.xml`,
  };
}
