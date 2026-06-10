import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { Phone, MapPin, Envelope, ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";

type MetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const localePath = locale === "en" ? "/en" : "";

  return {
    title: "Política de Privacidad HIPAA",
    description: `Política de privacidad y aviso de prácticas de privacidad HIPAA de ${SITE_CONFIG.name}. Conozca cómo protegemos su información de salud.`,
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}${localePath}/privacy`,
      languages: {
        es: "/privacy",
        en: "/en/privacy",
        "x-default": "/privacy",
      },
    },
    openGraph: {
      title: `Política de Privacidad HIPAA | ${SITE_CONFIG.name}`,
      description: `Política de privacidad y aviso de prácticas de privacidad HIPAA. Conozca cómo protegemos su información de salud en ${SITE_CONFIG.name}.`,
      url: `${SITE_CONFIG.baseUrl}${localePath}/privacy`,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-28 pb-16 md:pt-32 md:pb-24 bg-cyan-warm min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-dark/70 hover:text-blue-primary mb-6 transition-colors"
          >
            <ArrowLeft className="size-4" weight="bold" />
            Volver al inicio
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-dark mb-4">
            Política de Privacidad HIPAA
          </h1>

          <p className="text-muted-foreground mb-8">
            Última actualización: 15 de abril de 2026
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-slate-dark prose-a:text-blue-primary prose-a:no-underline hover:prose-a:underline">

            {/* Introduction */}
            <div className="bg-red-50 border-l-4 border-blue-primary p-4 rounded-r-lg mb-8 not-prose">
              <p className="text-slate-dark text-sm leading-relaxed">
                Este documento proporciona un resumen formal de la manera en que <strong>{SITE_CONFIG.name}</strong> cumple
                con la Ley de Portabilidad y Responsabilidad del Seguro de Salud de 1996 (HIPAA) en relación con la
                información recopilada, transmitida o almacenada a través de su sitio web oficial. La Clínica está
                comprometida con mantener la privacidad, confidencialidad y seguridad de la Información de Salud
                Protegida (PHI) de acuerdo con las regulaciones federales y las leyes estatales aplicables.
              </p>
            </div>

            <h2 id="informacion">Información que Recopilamos</h2>
            <p>
              El sitio web puede recopilar información personal e identificable proporcionada voluntariamente
              por los usuarios, incluyendo pero no limitada a:
            </p>
            <ul>
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Solicitudes de citas</li>
              <li>Información limitada relacionada con la salud proporcionada a través de formularios electrónicos seguros</li>
            </ul>

            <h2 id="proteccion">Protección de Datos</h2>
            <p>
              Cualquier Información de Salud Protegida enviada electrónicamente está protegida mediante salvaguardas
              administrativas, técnicas y físicas apropiadas, incluyendo:
            </p>
            <ul>
              <li>Encriptación SSL (Secure Socket Layer)</li>
              <li>Acceso restringido al sistema</li>
              <li>Protocolos de almacenamiento seguro de datos</li>
              <li>Capacitación del personal en privacidad y seguridad</li>
            </ul>

            <h2 id="uso">Uso de la Información</h2>
            <p>
              La información obtenida a través del sitio web se utiliza exclusivamente para operaciones
              legítimas de atención médica, incluyendo:
            </p>
            <ul>
              <li>Programación de citas</li>
              <li>Respuesta a consultas</li>
              <li>Facilitación de procesos de facturación</li>
              <li>Coordinación de la atención al paciente</li>
            </ul>
            <p className="font-medium text-slate-dark">
              Bajo ninguna circunstancia se vende, arrienda o divulga la Información de Salud Protegida
              para fines de marketing no autorizados.
            </p>

            <h2 id="terceros">Proveedores de Servicios Terceros</h2>
            <p>
              Cuando se contratan proveedores de servicios terceros en funciones que implican acceso a PHI,
              {SITE_CONFIG.name} asegura que se ejecute un Acuerdo de Asociado de Negocios (BAA) válido en
              cumplimiento con los requisitos de HIPAA.
            </p>

            <h2 id="hipaa">Derechos del Paciente bajo HIPAA</h2>
            <p>
              Los pacientes conservan todos los derechos otorgados bajo HIPAA, incluyendo:
            </p>
            <ul>
              <li><strong>Acceso:</strong> Derecho a acceder a sus registros de salud</li>
              <li><strong>Corrección:</strong> Solicitar enmiendas a información inexacta</li>
              <li><strong>Restricciones:</strong> Solicitar restricciones en ciertas divulgaciones</li>
              <li><strong>Contabilidad:</strong> Recibir un informe de divulgaciones cuando sea aplicable</li>
              <li><strong>Comunicación confidencial:</strong> Solicitar comunicaciones a través de medios alternativos</li>
              <li><strong>Copia del aviso:</strong> Obtener una copia de este aviso de privacidad</li>
            </ul>

            <h2 id="quejas">Quejas de Privacidad</h2>
            <p>
              Las personas pueden presentar quejas relacionadas con la privacidad sin temor a represalias
              contactando al Oficial de Privacidad designado de la Clínica o al Departamento de Salud y
              Servicios Humanos de EE.UU. (HHS).
            </p>

            <h2 id="aviso-legal">Aviso Legal</h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg not-prose">
              <p className="text-slate-dark text-sm leading-relaxed">
                La información presentada en el sitio web de la Clínica tiene fines informativos generales
                únicamente y <strong>no constituye consejo médico, diagnóstico o tratamiento</strong>. Se recomienda a
                los usuarios consultar directamente con un proveedor de atención médica calificado sobre
                cualquier preocupación médica. <strong>En caso de una emergencia médica, las personas deben llamar
                inmediatamente al 911</strong> o buscar los servicios médicos de emergencia apropiados.
              </p>
            </div>

            <h2 id="cookies">Cookies y Tecnología de Seguimiento</h2>
            <p>
              Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar su experiencia
              de navegación y analizar el uso del sitio. Puede configurar su navegador para rechazar cookies,
              aunque esto puede afectar algunas funcionalidades del sitio.
            </p>

            <h2 id="cambios">Cambios a esta Política</h2>
            <p>
              Podemos actualizar esta política de privacidad periódicamente para reflejar cambios en nuestras
              prácticas o requisitos legales. Los cambios entrarán en vigor inmediatamente después de su
              publicación en este sitio web. Le recomendamos revisar esta página periódicamente.
            </p>

            <h2 id="contacto">Contacto</h2>
            <p>
              Si tiene preguntas sobre esta política de privacidad, sobre cómo manejamos su información,
              o desea ejercer sus derechos bajo HIPAA, contáctenos:
            </p>

            <div className="not-prose grid sm:grid-cols-2 gap-4 mt-6">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-red-50 transition-colors group"
              >
                <div className="size-10 rounded-full bg-blue-primary/10 flex items-center justify-center group-hover:bg-blue-primary/20 transition-colors">
                  <Phone className="size-5 text-blue-primary" weight="fill" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Teléfono</p>
                  <p className="font-medium text-slate-dark">{CONTACT_INFO.phoneFormatted}</p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-red-50 transition-colors group"
              >
                <div className="size-10 rounded-full bg-blue-primary/10 flex items-center justify-center group-hover:bg-blue-primary/20 transition-colors">
                  <Envelope className="size-5 text-blue-primary" weight="fill" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Correo</p>
                  <p className="font-medium text-slate-dark text-sm">{CONTACT_INFO.email}</p>
                </div>
              </a>

              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-red-50 transition-colors group sm:col-span-2"
              >
                <div className="size-10 rounded-full bg-blue-primary/10 flex items-center justify-center group-hover:bg-blue-primary/20 transition-colors">
                  <MapPin className="size-5 text-blue-primary" weight="fill" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Dirección</p>
                  <p className="font-medium text-slate-dark">
                    {CONTACT_INFO.address}, {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-muted-foreground italic">
                Este resumen se proporciona con fines informativos y no reemplaza el Aviso Completo de
                Prácticas de Privacidad de la Clínica, el cual está disponible a solicitud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
