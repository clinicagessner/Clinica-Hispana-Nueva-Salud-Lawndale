import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "@/i18n/routing";
import {
  SITE_CONFIG,
  CONTACT_INFO,
  SOCIAL_LINKS,
  SERVICES,
} from "@/lib/constants";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export async function Footer() {
  const t = await getTranslations();
  const currentYear = new Date().getFullYear();

  const topServices = [...SERVICES]
    .sort((a, b) => a.order - b.order)
    .slice(0, 6);

  return (
    <footer role="contentinfo" className="relative overflow-hidden bg-blue-dark text-white">
      {/* Top accent band */}
      <div className="h-1 w-full bg-yellow-accent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 pt-14 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand — 4 cols */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-4"
              aria-label={SITE_CONFIG.name}
            >
              <Image
                src="/images/logo.webp"
                alt={`Logo de ${SITE_CONFIG.name}`}
                width={72}
                height={72}
                className="size-18 object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">
              {SITE_CONFIG.tagline}
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.facebook && (
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de Clínica Hispana Nueva Salud Lawndale"
                  className="size-9 rounded-lg bg-white/10 hover:bg-yellow-accent hover:text-blue-primary flex items-center justify-center transition-colors"
                >
                  <FacebookIcon className="size-4" />
                </a>
              )}
              {SOCIAL_LINKS.instagram && (
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Clínica Hispana Nueva Salud Lawndale"
                  className="size-9 rounded-lg bg-white/10 hover:bg-yellow-accent hover:text-blue-primary flex items-center justify-center transition-colors"
                >
                  <InstagramIcon className="size-4" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation — 2 cols */}
          <nav aria-label="Navegación" className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-yellow-accent mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/#chronic-care" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("nav.chronicCare")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link href="/walk-in" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("nav.walkIn")}
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services — 3 cols */}
          <nav aria-label="Servicios" className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-yellow-accent mb-4">
              {t("nav.services")}
            </h3>
            <ul className="space-y-2.5">
              {topServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {service.shortTitle || service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact — 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-yellow-accent mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <MapPin className="size-4 shrink-0 mt-0.5 text-yellow-accent" aria-hidden="true" />
                  <span>
                    {CONTACT_INFO.address}, {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Phone className="size-4 shrink-0 text-yellow-accent" aria-hidden="true" />
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors break-all"
                >
                  <Mail className="size-4 shrink-0 text-yellow-accent" aria-hidden="true" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/70 text-sm">
                <Clock className="size-4 shrink-0 mt-0.5 text-yellow-accent" aria-hidden="true" />
                <span>{CONTACT_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs text-center md:text-left">
            &copy; {currentYear} {SITE_CONFIG.name}. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-xs text-center md:text-right">
            Sitio web creado por{" "}
            <a
              href="https://rcweb.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-accent hover:text-white transition-colors font-medium"
            >
              RC Web Solutions LLC
            </a>
          </p>
        </div>

        {/* Medical disclaimer */}
        <p className="text-white/30 text-[10px] text-center mt-6 max-w-3xl mx-auto leading-relaxed">
          La información proporcionada en este sitio web es solo con fines informativos y no sustituye el consejo médico profesional. Consulte a un profesional de la salud para diagnóstico y tratamiento.
        </p>
      </div>
    </footer>
  );
}
