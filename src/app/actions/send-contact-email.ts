"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { SERVICES, SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";
import { sendLeadEvent } from "@/lib/meta-capi";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendContactEmailOptions {
  eventID?: string;
  sourceUrl?: string;
}

export async function sendContactEmail(
  data: ContactFormData,
  options?: SendContactEmailOptions
) {
  // Validate on server
  const result = contactFormSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: "Datos inválidos" };
  }

  const { nombre, telefono, email, servicio, mensaje } = result.data;

  // Get service name
  const serviceName =
    SERVICES.find((s) => s.id === servicio)?.title || servicio;

  try {
    await resend.emails.send({
      from: "Formulario Web <noreply@nuevasaludlawndale.com>",
      to: [CONTACT_INFO.email],
      replyTo: email || undefined,
      subject: `Nuevo contacto: ${nombre} - ${serviceName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nuevo Contacto</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1E293B; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #1E3A5F 0%, #2563EB 100%); padding: 30px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Nuevo Mensaje de Contacto</h1>
              <p style="color: rgba(255,255,255,0.8); margin: 10px 0 0 0;">Recibido desde el formulario web</p>
            </div>

            <div style="background: #F8FAFC; padding: 30px; border: 1px solid #E2E8F0; border-top: none;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0;">
                    <strong style="color: #64748B; font-size: 12px; text-transform: uppercase;">Nombre</strong><br>
                    <span style="font-size: 16px; color: #1E293B;">${nombre}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0;">
                    <strong style="color: #64748B; font-size: 12px; text-transform: uppercase;">Teléfono</strong><br>
                    <a href="tel:${telefono}" style="font-size: 16px; color: #2563EB; text-decoration: none;">${telefono}</a>
                  </td>
                </tr>
                ${
                  email
                    ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0;">
                    <strong style="color: #64748B; font-size: 12px; text-transform: uppercase;">Correo Electrónico</strong><br>
                    <a href="mailto:${email}" style="font-size: 16px; color: #2563EB; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                `
                    : ""
                }
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0;">
                    <strong style="color: #64748B; font-size: 12px; text-transform: uppercase;">Servicio de Interés</strong><br>
                    <span style="font-size: 16px; color: #1E293B; background: #DBEAFE; padding: 4px 12px; border-radius: 20px; display: inline-block; margin-top: 4px;">${serviceName}</span>
                  </td>
                </tr>
                ${
                  mensaje
                    ? `
                <tr>
                  <td style="padding: 12px 0;">
                    <strong style="color: #64748B; font-size: 12px; text-transform: uppercase;">Mensaje</strong><br>
                    <p style="font-size: 16px; color: #1E293B; background: white; padding: 16px; border-radius: 8px; margin: 8px 0 0 0; border: 1px solid #E2E8F0;">${mensaje}</p>
                  </td>
                </tr>
                `
                    : ""
                }
              </table>
            </div>

            <div style="background: #1E293B; padding: 20px; border-radius: 0 0 12px 12px; text-align: center;">
              <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 12px;">
                Este mensaje fue enviado desde ${SITE_CONFIG.baseUrl}
              </p>
            </div>
          </body>
        </html>
      `,
    });

    // Send Meta CAPI Lead event (server-side, non-blocking)
    if (options?.eventID) {
      const headersList = await headers();
      const nameParts = nombre.trim().split(/\s+/);

      sendLeadEvent({
        eventID: options.eventID,
        firstName: nameParts[0] || "",
        lastName: nameParts.slice(1).join(" ") || "",
        phone: telefono,
        email: email || undefined,
        service: servicio,
        sourceUrl: options.sourceUrl || SITE_CONFIG.baseUrl,
        userAgent: headersList.get("user-agent") || "",
        ip: headersList.get("x-forwarded-for")?.split(",")[0]?.trim() || headersList.get("x-real-ip") || "",
      }).catch((err) => console.error("Meta CAPI error (non-blocking):", err));
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Error al enviar el correo" };
  }
}
