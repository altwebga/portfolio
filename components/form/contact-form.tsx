"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { createRequestWebsite } from "@/actions/request-website";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

import { SmartCaptchaWidget } from "../shared/smart-captcha";
import Link from "next/link";

const formSchema = z.object({
  client: z.string().trim().min(1, "Укажите ваше имя"),
  phone: z
    .string()
    .trim()
    .min(1, "Укажите номер телефона")
    .regex(/^\+?[\d\s()-]{7,20}$/, "Некорректный номер телефона"),
  // ✅ новое поле (необязательное)
  message: z
    .string()
    .trim()
    .max(2000, "Слишком длинное сообщение")
    .optional()
    .or(z.literal("")),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [captchaToken, setCaptchaToken] = React.useState("");
  const [agreement, setAgreement] = React.useState(true);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { client: "", phone: "", message: "" },
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: FormValues) {
    if (!captchaToken) {
      toast.error("Пройдите капчу");
      return;
    }
    if (!agreement) {
      toast.error("Нужно согласиться на обработку данных");
      return;
    }

    try {
      const res = await createRequestWebsite({
        ...values,
        page_url: window.location.href,
        captcha_token: captchaToken,
      });

      if (!res?.ok) {
        toast.error(res?.error || "Не удалось отправить заявку");
        setCaptchaToken("");
        return;
      }

      toast.success("Заявка отправлена");
      form.reset();
      setCaptchaToken("");
      setAgreement(true);
    } catch {
      toast.error("Не удалось отправить заявку");
      setCaptchaToken("");
    }
  }

  const canSubmit = agreement && Boolean(captchaToken) && !isSubmitting;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-4 max-w-xl border p-4 rounded-md"
    >
      <FieldGroup className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <Controller
            name="client"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="m-0">Имя</FieldLabel>
                <Input {...field} placeholder="Тони Старк" />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="m-0">Номер телефона</FieldLabel>
                <Input {...field} placeholder="+7 123 456 7890" />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="m-0">
                Комментарий (необязательно)
              </FieldLabel>
              <Textarea
                {...field}
                placeholder="Например: нужен сайт-визитка, сроки 2 недели…"
                rows={4}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <SmartCaptchaWidget onToken={setCaptchaToken} language="ru" />

        <Field>
          <div className="flex items-center gap-3">
            <Checkbox
              checked={agreement}
              onCheckedChange={(v) => setAgreement(Boolean(v))}
            />
            <FieldLabel className="m-0">
              <Link href="/privacy-policy" target="_blank" rel="noopener">
                Я согласен(а) на обработку персональных данных
              </Link>
            </FieldLabel>
          </div>
        </Field>
      </FieldGroup>

      <Button type="submit" className="w-full" disabled={!canSubmit}>
        {isSubmitting ? "Отправка..." : "Отправить"}
      </Button>
    </form>
  );
}
