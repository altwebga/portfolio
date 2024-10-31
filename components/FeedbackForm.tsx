"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { YandexCaptcha } from "@/components/YandexCaptcha";
import { useState } from "react";
import { sendFormSMTP } from "@/actions/sendFormSMTP";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "localhost:3000";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать хотя бы два символа.",
  }),
  phone: z.string(),
  url: z.string(),
});

type FormData = z.infer<typeof FormSchema>;

export function FeedbackForm({ onSuccess }: { onSuccess: () => void }) {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phone: "",
      url: baseUrl,
    },
  });

  const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean>(false);

  async function onSubmit(data: FormData) {
    try {
      await sendFormSMTP(data);
      toast({
        title: "Форма успешно отправлена",
        description: "Мы скоро с вами свяжемся.",
        variant: "default",
      });

      form.reset(); // Сброс полей формы
      onSuccess(); // Закрытие формы
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Неизвестная ошибка";

      toast({
        title: "Ошибка при отправке формы",
        description: errorMessage || "Пожалуйста, попробуйте позже.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-stretch gap-3 px-4 md:px-0"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ваше имя</FormLabel>
              <FormControl>
                <Input placeholder="Тони Старк" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер телефона</FormLabel>
              <FormControl>
                <Input placeholder="+7 (999) 999-99-99" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <YandexCaptcha onVerify={() => setIsCaptchaVerified(true)} />
        <Button disabled={!isCaptchaVerified} type="submit">
          Отправить
        </Button>
      </form>
    </Form>
  );
}
