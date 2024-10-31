"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { nodemailerAuth } from "@/actions/authActions";

const FormSchema = z.object({
  email: z.string().email({ message: "Неправильный адрес электронной почты" }),
});

export function MagicLinks() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      nodemailerAuth(data);
      toast({
        title: "Ссылка отправлена",
        description: "Проверьте вашу почту",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      console.log(error);
      toast({
        title: "Ошибка при отправке ссылки",
        description: "Пожалуйста, попробуйте позже",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormDescription>
                На этот адрес будет отправлена одноразовая ссылка
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={"default"} type="submit">
          Отправить
        </Button>
      </form>
    </Form>
  );
}
