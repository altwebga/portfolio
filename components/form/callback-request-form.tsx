"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { createRequestWebsite } from "@/actions/request-website";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { SmartCaptchaWidget } from "../shared/smart-captcha";
import Link from "next/link";

const formSchema = z.object({
  client: z.string().trim().min(1, "Укажите ваше имя"),
  phone: z
    .string()
    .trim()
    .min(1, "Укажите номер телефона")
    .regex(/^\+?[\d\s()-]{7,20}$/, "Некорректный номер телефона"),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProp {
  textAction?: string;
}

export function CallbackRequestForm({
  textAction = "Начать проект",
}: ContactFormProp) {
  const [open, setOpen] = React.useState(false);
  const [captchaToken, setCaptchaToken] = React.useState("");
  const [agreement, setAgreement] = React.useState(true);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { client: "", phone: "" },
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
      setOpen(false);
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
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) {
          form.reset();
          setCaptchaToken("");
          setAgreement(true);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button size="lg" type="button">
          {textAction}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Заявка на звонок</DialogTitle>
            <DialogDescription>
              Оставьте свой номер и мы перезвоним вам в течение 15 минут.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="flex flex-col gap-4">
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
            <SmartCaptchaWidget onToken={setCaptchaToken} language="ru" />
            {/* ✅ чекбокс отдельно от RHF */}
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

          <DialogFooter className="mt-4">
            <Button type="submit" className="w-full" disabled={!canSubmit}>
              {isSubmitting ? "Отправка..." : "Отправить"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
