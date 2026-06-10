# Clínica Hispana San Juan

Sitio web bilingüe (español / inglés) para **Clínica Hispana San Juan**, clínica médica hispana en Houston, TX.

Construido replicando la arquitectura técnica del sitio hermano (`chlacaridad.com`) con identidad
visual, copy y datos propios. Ver `CLAUDE.md` para convenciones, footguns y estado del proyecto.

## Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · shadcn/ui · next-intl · react-hook-form + Zod ·
Resend · @phosphor-icons/react · Google Places API · Meta Pixel + CAPI · GA4 · Vercel.

## Comandos

```bash
npm run dev      # next dev (Turbopack)
npm run build    # next build — type-check + gate de pre-deploy (no hay test runner)
npm run start    # production server
npm run lint     # ESLint flat config
```

## Configuración

1. Copiar `.env.example` a `.env.local` y completar las credenciales del cliente.
2. `npm install`
3. `npm run dev`

## Estado

Fase 1 (esqueleto técnico) en progreso. Marca **provisional** (placeholder) — pendiente paleta,
logo, imágenes y datos finales del cliente. Ver checklist en `CLAUDE.md`.
# Clinica-Hispana-Lawndale
