"use client";

import * as React from "react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

/* ---------------- schema ---------------- */

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;

const quizSchema = z.object({
  name: z.string().min(2, "Введите имя"),
  email: z
    .string()
    .min(1, "Введите email")
    .regex(emailRegex, "Некорректный email"),
  phone: z
    .string()
    .min(1, "Введите номер телефона")
    .regex(phoneRegex, "Некорректный номер телефона"),
  services: z.array(z.string()).min(1, "Выберите хотя бы одну услугу"),
  budget: z.string().min(1, "Укажите бюджет"),
  agree: z.boolean().refine((v) => v === true, {
    message: "Необходимо согласие",
  }),
});

type QuizValues = z.infer<typeof quizSchema>;
type QuizField = keyof QuizValues;

/* ---------------- data ---------------- */

const SERVICES = [
  { id: "site", label: "Корпоративный сайт" },
  { id: "landing", label: "Лендинг" },
  { id: "shop", label: "Интернет-магазин" },

  { id: "redesign", label: "Редизайн сайта" },
  { id: "support", label: "Техническая поддержка" },

  { id: "seo", label: "SEO-оптимизация" },
  { id: "promotion", label: "Продвижение сайта" },
  { id: "ads", label: "Контекстная реклама" },

  { id: "analytics", label: "Веб-аналитика" },
  { id: "integration", label: "Интеграции и API" },

  { id: "crm", label: "Интеграция CRM" },
  { id: "payment", label: "Платёжные системы" },

  { id: "optimization", label: "Оптимизация скорости" },
  { id: "migration", label: "Перенос сайта" },
] as const;

const SERVICE_LABELS: Record<string, string> = Object.fromEntries(
  SERVICES.map((s) => [s.id, s.label])
);

type Step = {
  title: string;
  fields: QuizField[];
  content: React.ReactNode;
};

/* ---------------- component ---------------- */

export function Quiz() {
  const [step, setStep] = React.useState(0);

  const form = useForm<QuizValues>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      services: [],
      budget: "",
      agree: false,
    },
  });

  const {
    register,
    control,
    trigger,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = form;

  const steps: Step[] = [
    {
      title: "Услуги",
      fields: ["services"],
      content: (
        <Field>
          <FieldLabel>Что нужно сделать?</FieldLabel>

          <Controller
            control={control}
            name="services"
            render={({ field }) => (
              <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                {SERVICES.map((s) => {
                  const checked = field.value.includes(s.id);
                  return (
                    <label
                      key={s.id}
                      className="flex items-center gap-2 text-sm leading-snug"
                    >
                      <Checkbox
                        checked={checked}
                        onCheckedChange={(v) => {
                          const isChecked = v === true;
                          field.onChange(
                            isChecked
                              ? Array.from(new Set([...field.value, s.id]))
                              : field.value.filter((x) => x !== s.id)
                          );
                        }}
                      />
                      <span className="text-muted-foreground">{s.label}</span>
                    </label>
                  );
                })}
              </div>
            )}
          />

          <FieldError>{errors.services?.message}</FieldError>
        </Field>
      ),
    },
    {
      title: "Бюджет",
      fields: ["budget"],
      content: (
        <FieldGroup>
          <Field>
            <FieldLabel>Бюджет</FieldLabel>
            <Input
              placeholder="Например: 100 000 - 150 000 руб"
              {...register("budget")}
            />
            <FieldError>{errors.budget?.message}</FieldError>
          </Field>
        </FieldGroup>
      ),
    },
    {
      title: "Контакты",
      fields: ["name", "email", "phone", "agree"],
      content: (
        <FieldGroup>
          <Field className="max-w-xs">
            <FieldLabel>Имя</FieldLabel>
            <Input placeholder="Тони Старк" {...register("name")} />
            <FieldError>{errors.name?.message}</FieldError>
          </Field>
          <div className="flex flex-col md:flex-row gap-4">
            <Field className="max-w-xs">
              <FieldLabel>Email</FieldLabel>
              <Input placeholder="you@mail.com" {...register("email")} />
              <FieldError>{errors.email?.message}</FieldError>
            </Field>

            <Field className="max-w-xs">
              <FieldLabel>Телефон</FieldLabel>
              <Input
                placeholder="+7 123 456 7890"
                inputMode="tel"
                {...register("phone")}
              />
              <FieldError>{errors.phone?.message}</FieldError>
            </Field>
          </div>
          <Field>
            <Controller
              control={control}
              name="agree"
              render={({ field }) => (
                <label className="flex items-center gap-2">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(v) => field.onChange(v === true)}
                  />
                  <span className="text-sm">
                    Согласен(на) на обработку данных
                  </span>
                </label>
              )}
            />
            <FieldError>{errors.agree?.message}</FieldError>
          </Field>
        </FieldGroup>
      ),
    },
    {
      title: "Проверка",
      fields: [],
      content: (
        <div className="space-y-1 text-sm">
          <div>
            <b>Имя:</b> {getValues("name")}
          </div>
          <div>
            <b>Email:</b> {getValues("email")}
          </div>
          <div>
            <b>Телефон:</b> {getValues("phone")}
          </div>
          <div>
            <b>Услуги:</b>{" "}
            {getValues("services")
              .map((id) => SERVICE_LABELS[id] ?? id)
              .join(", ")}
          </div>
          <div>
            <b>Бюджет:</b> {getValues("budget")}
          </div>
        </div>
      ),
    },
    {
      title: "Готово",
      fields: [],
      content: (
        <div className="py-6 text-center">
          <div className="mb-2 text-2xl font-semibold">Спасибо!</div>
          <div className="text-muted-foreground">
            Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
          </div>
        </div>
      ),
    },
  ];

  const lastIndex = steps.length - 1;
  const isSuccess = step === lastIndex;
  const isReview = step === lastIndex - 1;

  const next = async () => {
    const ok = await trigger(steps[step].fields, { shouldFocus: true });
    if (ok) setStep((s) => Math.min(s + 1, lastIndex));
  };

  const prev = () => setStep((s) => Math.max(0, s - 1));

  const onSubmit = async (data: QuizValues) => {
    try {
      // TODO: отправка на API / Directus
      console.log(data);

      toast.success("Заявка отправлена");

      form.reset();
      setStep(lastIndex);
    } catch (e) {
      toast.error("Ошибка отправки");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border p-6">
      <div className="mb-4">
        <div className="text-sm text-muted-foreground">
          Шаг {Math.min(step + 1, lastIndex)} из {lastIndex}
        </div>
        <div className="text-lg font-semibold">{steps[step].title}</div>
      </div>

      {!isSuccess && (
        <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${((step + 1) / lastIndex) * 100}%` }}
          />
        </div>
      )}

      <div className="mb-6">{steps[step].content}</div>

      {!isSuccess && (
        <div className="flex justify-between gap-3">
          <Button
            type="button"
            variant="secondary"
            onClick={prev}
            disabled={step === 0 || isSubmitting}
          >
            Назад
          </Button>

          {!isReview ? (
            <Button type="button" onClick={next} disabled={isSubmitting}>
              Далее
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              Отправить
            </Button>
          )}
        </div>
      )}
    </form>
  );
}
