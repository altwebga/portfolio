"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { YandexCaptcha } from "./yandex-captcha";

type ContactFormProps = {
  className?: string;
};

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: "Имя не должно быть меньше 2 символов",
  }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message:
      "Номер телефона должен быть в международном формате, например, +71234567890",
  }),
});

export function ContactForm({ className }: ContactFormProps) {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      phone: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
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
                <Input placeholder="+71234567890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="py-4">
          <YandexCaptcha onVerify={() => setIsCaptchaVerified(true)} />
        </div>
        <Button disabled={!isCaptchaVerified} type="submit" className="w-full">
          Отправить
        </Button>
      </form>
    </Form>
  );
}
