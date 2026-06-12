import { z } from 'zod';
import { SERVICES } from '@/lib/constants';

export const contactFormSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  telefono: z
    .string()
    .regex(/^\d{10}$/, "Ingrese un número de teléfono de 10 dígitos"),
  email: z
    .string()
    .email("Ingrese un correo válido")
    .optional()
    .or(z.literal("")),
  servicio: z.string().min(1, "Seleccione un servicio"),
  mensaje: z
    .string()
    .max(500, "El mensaje no puede exceder 500 caracteres")
    .optional()
    .or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const serviceOptions = [
  ...SERVICES.map((service) => ({
    value: service.id,
    label: service.title,
  })),
  { value: "otro", label: "Otro Servicio" },
];

export const contactFormSchemaEn = z.object({
  nombre: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  telefono: z
    .string()
    .regex(/^\d{10}$/, "Please enter a 10-digit phone number"),
  email: z
    .string()
    .email("Please enter a valid email")
    .optional()
    .or(z.literal("")),
  servicio: z.string().min(1, "Please select a service"),
  mensaje: z
    .string()
    .max(500, "Message cannot exceed 500 characters")
    .optional()
    .or(z.literal("")),
});
