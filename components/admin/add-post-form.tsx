"use client";

import { useTransition, useRef } from "react"; // Добавляем useRef
import { createPost } from "@/actions/create-post";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  postType: z.enum(["ARTICLE", "PORTFOLIO", "SERVICE"]),
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  image: z.instanceof(File).optional(),
  video: z.string().optional(),
  price: z.string().optional(),
});

export function AddPostForm() {
  const [isPending, startTransition] = useTransition();
  const fileInputRef = useRef<HTMLInputElement>(null); // Ref для файлового поля
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      postType: "ARTICLE",
      title: "",
      description: "",
      image: undefined,
      video: "",
      price: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Form submitted", data);
    const formData = new FormData();
    formData.append("postType", data.postType);
    formData.append("title", data.title);
    formData.append("description", data.description);
    if (data.image) {
      formData.append("image", data.image);
    }
    if (data.price) {
      formData.append("price", data.price);
    }
    if (data.video) {
      formData.append("video", data.video);
    }

    startTransition(async () => {
      console.log("Transition started");
      try {
        const result = await createPost(formData);
        if (result.error) {
          toast({
            title: "Error",
            description: result.error,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Success",
            description: "Post created successfully",
          });
          // Сбрасываем форму после успешной загрузки
          form.reset({
            postType: "ARTICLE", // Явно сбрасываем postType
            title: "",
            description: "",
            image: undefined,
            video: "",
            price: "",
          });

          // Очищаем файловое поле
          if (fileInputRef.current) {
            fileInputRef.current.value = ""; // Очищаем значение файлового поля
          }
        }
      } catch (error) {
        console.error("Error during transition:", error);
        toast({
          title: "Error",
          description: "An unexpected error occurred",
          variant: "destructive",
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="postType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Тип записи</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="max-w-xs">
                    <SelectValue placeholder="Тип записи" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ARTICLE">Статья</SelectItem>
                  <SelectItem value="PORTFOLIO">Портфолио</SelectItem>
                  <SelectItem value="SERVICE">Услуга</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Заголовок записи</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.watch("postType") === "SERVICE" && (
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Цена услуги</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {form.watch("postType") === "PORTFOLIO" && (
          <FormField
            control={form.control}
            name="video"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ссылка на видео RuTube</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Контент</FormLabel>
              <FormControl>
                <Textarea placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Загрузить изображение</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  ref={fileInputRef} // Привязываем ref к файловому полю
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    field.onChange(file);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Публикуется..." : "Опубликовать"}
        </Button>
      </form>
    </Form>
  );
}
