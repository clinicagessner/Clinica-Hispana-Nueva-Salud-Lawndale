# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Bilingual (es default / en) marketing site for **Clínica Hispana San Juan** — a medical clinic in Houston, TX. Next.js 16 App Router + React 19 + Tailwind 4 + shadcn/ui, deployed on Vercel. Production URL: `https://www.clinicahispanasanjuan.com`.

El proyecto se construyó replicando la arquitectura del sitio hermano **Clínica Hispana La Caridad** (`chlacaridad.com`, repo local en `../clinica-hispana-la-caridad`). La estructura técnica es idéntica; la identidad visual, copy y datos son propios.

## ⚠️ Estado del proyecto (Fase 1 — esqueleto técnico)

**Datos del cliente confirmados:**
- Dirección: `7040 Lawndale St # B, Houston, TX 77023` (East End de Houston).
- Teléfono: `+1 (832) 530-4188`.

**PROVISIONAL / placeholder (reemplazar con lo que entregue el cliente):**
- **Paleta de marca** en `src/app/globals.css`: teal `#0e7c7b` + coral `#f4663b` + ámbar `#f4b740` + mint `#eaf6f4`. Es temporal y distinta a La Caridad. **Footgun:** los nombres de token CSS (`--blue-*`, `--red-*`, `--yellow-*`, `--cyan-*`, y las clases Tailwind `bg-blue-primary`, `text-red-accent`, etc.) son **heredados** del sitio hermano — solo se cambiaron los VALORES, no los nombres, para no romper ~40 componentes. En el pase final de marca, renombrar a `--primary/--accent/...` (brief §6.1) y actualizar todas las clases a la vez (Tailwind v4 descarta clases desconocidas en silencio).
- **Logo e imágenes** (`public/images/`, favicons): siguen siendo de La Caridad como placeholder. El cliente provee TODAS las imágenes — no usar stock/AI.
- **Dominio** `clinicahispanasanjuan.com`: tentativo, confirmar con cliente.
- **Email** `info@clinicahispanasanjuan.com`: tentativo.

**PENDIENTE del cliente (bloquea Fases 2-4):**
- `GOOGLE_PLACE_ID` real + `GOOGLE_PLACES_API_KEY` → sin esto, reviews/rating se OMITEN del JSON-LD (ver abajo). Coordenadas en `CONTACT_INFO` son del brief: `29.7169134, -95.2967503` (verificar contra el Place real).
- URLs reales de Facebook/Instagram (`SOCIAL_LINKS` están vacías).
- Credenciales de tracking: Meta Pixel + CAPI, GA4, Google Ads, CallRail.
- Confirmar **cuáles de los 18 servicios** ofrece San Juan y si es **Civil Surgeon USCIS** (define si entran `examenes-inmigracion`/I-693).
- Horario real, seguros aceptados, tono de voz, lista de no-targets SEO.

**Deuda de contenido para Fase 2 (heredado de La Caridad, requiere reescritura):**
- El copy de `src/lib/constants.ts`, `service-faqs.ts` y `src/content/blog/**` menciona la zona **Sharpstown/Fondren/suroeste de Houston** (donde está La Caridad). San Juan está en el **East End (77023)** → revisar área de servicio, barrios y ZIPs servidos.
- Blog posts y FAQs son de La Caridad rebrandeados — revisar/reescribir con el cliente antes de publicar.
- `llms.txt` / `llms-full.txt` en `public/` reflejan datos heredados — actualizar.

**Decisiones tomadas en Fase 1:**
- Reviews/rating: `JsonLdMedicalClinic` (`src/components/seo/json-ld.tsx`) ahora **omite** `aggregateRating` y `review[]` cuando no hay datos reales del Google Places API (antes había reseñas inventadas hardcodeadas — prohibido por el brief). Volverán automáticamente al configurar el Place ID.
- IndexNow key regenerada para San Juan: `public/7a058d4b03962dd5ab69fe97c9a05382.txt` (la de La Caridad se eliminó).
- Verificación de Search Console de La Caridad eliminada de `public/`.

## Commands

```bash
npm run dev      # next dev (Turbopack)
npm run build    # next build — type-checks; fail here before pushing
npm run start    # serve production build
npm run lint     # eslint (flat config in eslint.config.mjs)
```

There is no test runner configured. `npm run build` is the de-facto correctness gate.

## Architecture

### Routing & i18n (next-intl)

- All user-facing pages live under `src/app/[locale]/...`. The top-level `src/app/layout.tsx` is intentionally minimal — the real root layout (fonts, Header/Footer, providers, tracking scripts, JSON-LD) is in `src/app/[locale]/layout.tsx`.
- Locale config: `src/i18n/config.ts` (`["es", "en"]`, default `es`), routing in `src/i18n/routing.ts` with `localePrefix: "as-needed"` → Spanish URLs have **no** `/es` prefix, English URLs are `/en/...`. Middleware: `src/proxy.ts` (note: file is `proxy.ts`, not `middleware.ts` — this is Next 16's rename; don't rename it back).
- `generateStaticParams()` + `setRequestLocale(locale)` is called in every page and layout. Keep this pattern when adding new routes, or next-intl will fall out of static rendering.
- UI strings live in `src/messages/{es,en}.json`. Long-form content (service descriptions, FAQs) lives in TypeScript — see next section.

### Content model

Most content is **not** in CMS or markdown — it's hard-coded in TypeScript:

- `src/lib/constants.ts` — `SITE_CONFIG`, `CONTACT_INFO`, `SOCIAL_LINKS`, `GOOGLE_REVIEWS_DATA`, and the full `SERVICES` array (each service carries both `es` fields and `*En` English variants, plus SEO keywords, icon name, category, order, features).
- `src/lib/service-faqs.ts` — FAQ content per service, same bilingual pattern.
- `src/content/blog/{es,en}/*.md` — blog posts with gray-matter frontmatter, loaded via `src/lib/blog.ts` (filesystem read at build time; slugs derived from the `es/` directory).

To localize a Service/BlogPost object for rendering, always go through `getLocalizedService` / `getLocalizedPost` in `src/lib/utils.ts` — these fall back to Spanish when the `*En` field is missing.

### SEO surface

This site is SEO-heavy. Touching any of the following requires keeping the others in sync:

- `src/app/sitemap.ts` — builds entries for static pages + every service + every blog post, **both locales**, with `alternates.languages` hreflang map.
- `src/app/robots.ts` — base robots rules.
- `src/components/seo/json-ld.tsx` and `json-ld-blog.tsx` — JSON-LD generators (MedicalClinic, BreadcrumbList, MedicalProcedure, FAQPage, CollectionPage, BlogPosting). `JsonLdMedicalClinic` is mounted globally in `(default)/layout.tsx`. **It's an async server component** — it `await`s `getGooglePlaceData()` (`src/lib/google-places.ts`, cached 1h via `unstable_cache`) to populate live `aggregateRating` and the latest 5★ `review[]`, with fallback to `GOOGLE_REVIEWS_DATA` if the API call fails. Don't reintroduce hardcoded reviews/ratings. The schema uses `availableService` of `MedicalProcedure` (not `OfferCatalog`/`Offer` — those require `price` and trip Google validation), and intentionally omits a global `WebPage` block (a single hardcoded one was wrong on every non-homepage page).
- Per-page `generateMetadata` sets canonical + hreflang alternates; follow the pattern in `src/app/[locale]/services/page.tsx` (canonical uses `${baseUrl}${localePath}/...`; Spanish canonical has no locale prefix).
- `src/app/api/indexnow/route.ts` — POST endpoint that pings IndexNow with `host` + `key` derived from `SITE_CONFIG.baseUrl`. Key file is served from `/public/<key>.txt`.

When adding a new route: update `sitemap.ts`, add JSON-LD if it's a content page, and ensure the `metadata.alternates` block has both `es` and `en` entries plus `x-default`.

### Security headers & CSP

All headers — including a strict CSP allowlist — are defined in `next.config.ts` `async headers()`. The CSP allows third-party domains for CallRail, Vercel Analytics, Google Analytics/Tag Manager, Google Maps, and Facebook/Meta Pixel + CAPI. **If you add a new third-party script or fetch target, you must extend the corresponding CSP directive** (`script-src`, `connect-src`, `img-src`, `frame-src`), or production requests will be blocked silently.

### Forms & conversion tracking

Contact form pipeline:

1. `src/components/forms/contact-form.tsx` — client form using react-hook-form + Zod (`src/lib/validations.ts`). Generates a client-side `eventID` for Meta event deduplication and fires `fbq('track', 'Lead', ..., { eventID })`.
2. `src/app/actions/send-contact-email.ts` — server action. Re-validates with Zod, sends email via Resend (`from: Formulario Web <noreply@clinicahispanasanjuan.com>` → `CONTACT_INFO.email`), then fires the server-side Meta CAPI `Lead` event with the same `eventID` for dedup.
3. `src/lib/meta-capi.ts` — SHA-256 hashes PII before POSTing to Graph API v21.0. Uses `NEXT_PUBLIC_META_PIXEL_ID`, `META_CAPI_ACCESS_TOKEN`, optional `META_TEST_EVENT_CODE`.

Meta Pixel loading has a specific, non-obvious shape: the base fbq script is injected as a **raw `<script>` tag** inside `<head>` in `[locale]/layout.tsx` (not via `next/script`) to guarantee it runs before hydration. `MetaPixelSPATracker` only fires client-side PageViews on route changes — it does **not** load the pixel. Don't "clean this up" by moving it to `next/script`.

Google Ads tag (`AW-374445498`) is hard-coded in `src/components/tracking/google-ads.tsx` via `next/script`. GA4 uses `@next/third-parties/google` and is conditional on `NEXT_PUBLIC_GA_ID`.

### Environment variables

See `.env.example`. Required for full functionality: `RESEND_API_KEY`, `NEXT_PUBLIC_META_PIXEL_ID`, `META_CAPI_ACCESS_TOKEN`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_ID`, `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID` (live Google reviews — feeds both the MedicalClinic JSON-LD and the dynamic ogDescription via `getGooglePlaceData()`; `GOOGLE_REVIEWS_DATA` in `constants.ts` is only the fallback when the API call fails at build time).

## Conventions

- **No barrel imports** from shadcn. Always `import { Button } from "@/components/ui/button"` — one component per import line. The `@/*` path alias maps to `src/*`.
- **No hardcoded hex colors.** The brand palette (`#02176d` blue / `#ed1c24` red / `#ffe16a` yellow / `#e4f7fc` cyan / white) lives as CSS variables in `src/app/globals.css` and as shadcn tokens. Use Tailwind utilities or the custom variables.
- **Never use `bg-white` for sections.** Sections should use palette colors or gradients — white is reserved for cards/inputs. This is a user preference with existing precedent across the codebase.
- **Fonts:** Montserrat (headings) and Roboto Condensed (body), loaded via `next/font/google` in `[locale]/layout.tsx` as CSS variables `--font-montserrat` / `--font-roboto-condensed`. Don't add other Google fonts.
- **Server Components by default.** Only reach for `"use client"` for forms, state, browser APIs, or components with event handlers (Header mobile nav, ScrollToTop, MetaPixelSPATracker, ScrollAnimations, contact form).
- **Pin dependency versions** — use concrete `^X.Y.Z` from `npm view <pkg> version`, never the string `"latest"` in `package.json`.
- **Commit messages** follow Conventional Commits (`feat(scope): ...`, `fix(csp): ...`, `feat(seo): ...`). Do not add `Co-Authored-By` trailers or mention AI/Claude in commits.
- `next/image` only; all images get descriptive Spanish or bilingual alt text. Remote image hosts (Google Photos/Places) must be in `next.config.ts` `images.remotePatterns`.
- **Titles ≤60 characters.** `messages/{es,en}.json` `titleTemplate` is just `"%s"` (no brand suffix) — per-page titles need to stand alone in the SERP. Don't reintroduce a brand suffix in the template; Google truncates anything past ~580px wide and the brand would be the first thing cut.
- **Blog markdown:** the parser in `src/app/[locale]/(default)/blog/[slug]/page.tsx` strips the leading `# Title` from the body before rendering (the page already emits the frontmatter title as the h1). Don't re-add a markdown `# Title` line to existing posts thinking it's missing — it's intentional.
- **Single source of truth for the brand:** every `Service` entry in `constants.ts` flows into the page `<title>`, `<h1>`, OG title, JSON-LD `MedicalProcedure.name`, and the `availableService` array on the global `MedicalClinic` schema. Editing the `title` field of a service propagates everywhere; no other duplication exists.

## Gotchas

- The root `src/app/layout.tsx` is a near-empty passthrough. Editing it rarely does what you expect — the real root layout is `src/app/[locale]/layout.tsx`.
- `src/lib/constants.ts` is ~100 KB. Prefer `Read` with `offset`/`limit` over reading the whole file when editing.
- Blog slugs are enumerated from the **Spanish** directory (`src/content/blog/es/`). An English-only post won't be picked up by `getBlogPosts` or the sitemap — always create the `es/` file first (even if it's a stub), then the `en/` counterpart.
- Middleware matcher in `src/proxy.ts` excludes `api`, `_next`, `_vercel`, and anything with a file extension. Locale-aware API routes are not supported; keep API handlers under `src/app/api/*` (outside `[locale]`).
- `src/app/[locale]/(default)/walk-in/page.tsx` is a single-file static landing — a different pattern from the dynamic `/services/[slug]` route. Bilingual copy lives in a local `COPY` object (es + en) rather than `messages/*.json` because it's specific to this one page; emits `BreadcrumbList` + `FAQPage` JSON-LD. Use this pattern (inline COPY, no message keys) only for one-off landings; for anything that might be reused, add keys to `messages/*.json`.
- **Google Ads healthcare policy:** be cautious adding prescription-drug-adjacent terms (e.g. "disfunción eréctil"/"erectile dysfunction") to a service page `title`/`description`/`keywords` — they can reduce Quality Score of running Ads campaigns. The full `longDescription` body is lower-risk for the same terms. Watch out particularly on `/services/urologia`.
- `llms.txt` and `llms-full.txt` in `public/` are surfaces for ChatGPT/Perplexity/AI Overviews crawlers. Update both whenever you add a new service, a new top-level page, or a major blog guide.
