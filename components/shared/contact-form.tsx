"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendFormSMTP } from "@/actions/send-form";
import { toast } from "sonner";
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
import { PhoneInput } from "@/components/ui/phone-input";
import { YandexCaptcha } from "./yandex-captcha";
import { usePathname } from "next/navigation"; // Импортируем usePathname

type ContactFormProps = {
  className?: string;
  onSuccess: () => void;
};

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: "Имя не должно быть меньше 2 символов",
  }),
  phone: z.string().min(1, {
    message: "Пожалуйста, введите номер телефона",
  }),
});

export function ContactForm({ className, onSuccess }: ContactFormProps) {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      phone: "",
    },
  });

  // Получаем текущий путь страницы
  const pathname = usePathname();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      // Формируем полный URL
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`;

      // Подготавливаем данные для отправки, включая URL
      const formData = {
        name: data.firstName,
        phone: data.phone,
        url: url, // Добавляем URL страницы
      };

      // Вызываем функцию отправки формы
      await sendFormSMTP(formData);

      // Уведомление об успешной отправке
      toast.success("Форма успешно отправлена!");
      form.reset(); // Сброс полей формы
      onSuccess(); // Закрытие формы
    } catch (error) {
      // Уведомление об ошибке
      toast.error("Произошла ошибка при отправке формы.");
      console.error("Ошибка при отправке формы:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        <FormField
          control={form.control}
          name="firstName"
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
                <PhoneInput
                  {...field}
                  defaultCountry="RU"
                  placeholder="+7 (___) ___ __ __"
                  onChange={(value) => field.onChange(value)}
                  value={field.value}
                  required
                  autoComplete="tel"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="py-4">
          <YandexCaptcha onVerify={() => setIsCaptchaVerified(true)} />
        </div>
        <Button
          disabled={!isCaptchaVerified}
          type="submit"
          size="lg"
          className="w-full"
        >
          Отправить
        </Button>
      </form>
    </Form>
  );
}
