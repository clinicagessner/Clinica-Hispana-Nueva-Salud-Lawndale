"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { CircleNotch, CheckCircle, XCircle } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactFormSchema, type ContactFormData, serviceOptions } from "@/lib/validations";
import { sendContactEmail } from "@/app/actions/send-contact-email";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "invalid"
  >("idle");

  // Se dispara cuando el usuario intenta enviar con campos inválidos.
  const onInvalid = () => {
    setStatus("invalid");
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched",
    defaultValues: {
      nombre: "",
      telefono: "",
      email: "",
      servicio: "",
      mensaje: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      // Generate eventID BEFORE submit for Pixel + CAPI deduplication
      const eventID = crypto.randomUUID();
      const sourceUrl = typeof window !== "undefined" ? window.location.href : "";

      const result = await sendContactEmail(data, { eventID, sourceUrl });
      if (result.success) {
        // Fire Meta Pixel Lead event — NEVER send mensaje field, NEVER re-init pixel
        if (typeof window !== "undefined" && typeof window.fbq === "function") {
          window.fbq("track", "Lead", {
            content_category: data.servicio,
            content_name: "Contact Form",
          }, { eventID });
        }
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-5">
      {/* Nombre */}
      <div className="space-y-2">
        <Label htmlFor="nombre">
          {t("name")} <span className="text-destructive">*</span>
        </Label>
        <Input
          id="nombre"
          {...register("nombre")}
          placeholder={t("namePlaceholder")}
          aria-invalid={!!errors.nombre}
          aria-describedby={errors.nombre ? "nombre-error" : undefined}
          className={errors.nombre ? "border-destructive" : ""}
        />
        {errors.nombre && (
          <p id="nombre-error" className="text-sm text-destructive">
            {errors.nombre.message}
          </p>
        )}
      </div>

      {/* Teléfono */}
      <div className="space-y-2">
        <Label htmlFor="telefono">
          {t("phone")} <span className="text-destructive">*</span>
        </Label>
        <Input
          id="telefono"
          type="tel"
          inputMode="numeric"
          maxLength={10}
          {...register("telefono")}
          onChange={(e) => {
            e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
            register("telefono").onChange(e);
          }}
          placeholder={t("phonePlaceholder")}
          aria-invalid={!!errors.telefono}
          aria-describedby={errors.telefono ? "telefono-error" : undefined}
          className={errors.telefono ? "border-destructive" : ""}
        />
        {errors.telefono && (
          <p id="telefono-error" className="text-sm text-destructive">
            {errors.telefono.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">{t("email")}</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder={t("emailPlaceholder")}
          aria-invalid={!!errors.email}
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Servicio */}
      <div className="space-y-2">
        <Label htmlFor="servicio">
          {t("service")} <span className="text-destructive">*</span>
        </Label>
        <Controller
          name="servicio"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger
                id="servicio"
                onBlur={field.onBlur}
                aria-invalid={!!errors.servicio}
                className={errors.servicio ? "border-destructive" : ""}
              >
                <SelectValue placeholder={t("servicePlaceholder")} />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.servicio && (
          <p className="text-sm text-destructive">{errors.servicio.message}</p>
        )}
      </div>

      {/* Mensaje */}
      <div className="space-y-2">
        <Label htmlFor="mensaje">{t("message")}</Label>
        <Textarea
          id="mensaje"
          {...register("mensaje")}
          placeholder={t("messagePlaceholder")}
          rows={4}
          className={errors.mensaje ? "border-destructive" : ""}
        />
        {errors.mensaje && (
          <p className="text-sm text-destructive">{errors.mensaje.message}</p>
        )}
        <p className="text-[11px] text-slate-muted leading-snug">
          No comparta información médica delicada aquí. Para temas de salud específicos, llámenos al (832) 530-4188.
        </p>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <CircleNotch className="size-5 mr-2 animate-spin" />
            {t("submitting")}
          </>
        ) : (
          t("submit")
        )}
      </Button>

      {/* Status Messages */}
      {status === "invalid" && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-center gap-2 text-destructive bg-error-light p-4 rounded-lg"
        >
          <XCircle className="size-5 shrink-0" weight="fill" />
          <p>{t("fixErrors")}</p>
        </div>
      )}

      {status === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="flex items-center gap-2 text-success bg-success-light p-4 rounded-lg"
        >
          <CheckCircle className="size-5" weight="fill" />
          <p>{t("success")}</p>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-center gap-2 text-destructive bg-error-light p-4 rounded-lg"
        >
          <XCircle className="size-5" weight="fill" />
          <p>{t("error")}</p>
        </div>
      )}
    </form>
  );
}
