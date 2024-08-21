"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { usePathname } from "next/navigation";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать не менее 2 символов.",
  }),
  phone: z
    .string()
    .min(10, {
      message: "Номер должен содержать не менее 10 цифр",
    })
    .max(12, {
      message: "Номер должен содержать не более 12 цифр",
    }),
  url: z.string(),
});

export function PopupForm() {
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { toast } = useToast();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phone: "",
      url: pathname,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Форма отправлена",
          description: "Мы свяжемся с вами в ближайшее время.",
          variant: "default",
        });
        form.reset();
        setOpen(false); // Закрываем модальное окно
      } else {
        toast({
          title: "Ошибка",
          description: "Не удалось отправить форму. Попробуйте позже.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при отправке формы.",
        variant: "destructive",
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-40" variant="default">
          Начать проект
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Заявка на проект</DialogTitle>
          <DialogDescription>
            Отправьте заявку, и мы свяжемся с вами в течение 15 минут.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-2 items-center">
                    <FormLabel className="w-20">Имя</FormLabel>
                    <FormControl>
                      <Input placeholder="Иван Иванов" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-2 items-center">
                    <FormLabel className="w-20">Телефон</FormLabel>
                    <FormControl>
                      <Input placeholder="+7 999 999-99-99" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={isChecked}
                onCheckedChange={(checked) => setIsChecked(checked === true)}
              />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <a href="/privacy-policy" target="_blank" rel="noreferrer">
                  Согласен(а) с политикой конфиденциальности
                </a>
              </Label>
            </div>
            {/* Скрытое поле для URL */}
            <input type="hidden" name="url" value={pathname} />

            <DialogFooter>
              <Button type="submit" disabled={!isChecked} className="w-48">
                Отправить
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
