"use client"

import type { ComponentProps } from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { authClient } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const signUpSchema = z
  .object({
    name: z.string().trim().min(2, "Имя должно быть минимум 2 символа"),
    email: z.string().trim().email("Введите корректный email"),
    password: z.string().min(8, "Пароль должен быть минимум 8 символов"),
    confirmPassword: z.string().min(1, "Повторите пароль"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  })

type SignUpFormValues = z.infer<typeof signUpSchema>

export function SignupForm({ ...props }: ComponentProps<typeof Card>) {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  async function onSubmit(values: SignUpFormValues) {
    setServerError(null)

    const { error } = await authClient.signUp.email({
      email: values.email,
      password: values.password,
      name: values.name,
      callbackURL: "/dashboard",
    })

    if (error) {
      setServerError(error.message || "Не удалось создать аккаунт")
      return
    }

    router.push("/dashboard")
    router.refresh()
  }

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Создать аккаунт</CardTitle>
        <CardDescription>
          Введите данные, чтобы зарегистрироваться.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FieldGroup>
            <Field data-invalid={Boolean(errors.name)}>
              <FieldLabel htmlFor="name">Имя</FieldLabel>
              <Input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Константин"
                aria-invalid={Boolean(errors.name)}
                {...register("name")}
              />
              <FieldError errors={[errors.name]} />
            </Field>
            <Field data-invalid={Boolean(errors.email)}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="m@example.com"
                aria-invalid={Boolean(errors.email)}
                {...register("email")}
              />
              <FieldDescription>
                Мы будем использовать email для входа в аккаунт.
              </FieldDescription>
              <FieldError errors={[errors.email]} />
            </Field>
            <Field data-invalid={Boolean(errors.password)}>
              <FieldLabel htmlFor="password">Пароль</FieldLabel>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                aria-invalid={Boolean(errors.password)}
                {...register("password")}
              />
              <FieldDescription>
                Минимум 8 символов.
              </FieldDescription>
              <FieldError errors={[errors.password]} />
            </Field>
            <Field data-invalid={Boolean(errors.confirmPassword)}>
              <FieldLabel htmlFor="confirm-password">
                Повторите пароль
              </FieldLabel>
              <Input
                id="confirm-password"
                type="password"
                autoComplete="new-password"
                aria-invalid={Boolean(errors.confirmPassword)}
                {...register("confirmPassword")}
              />
              <FieldError errors={[errors.confirmPassword]} />
            </Field>
            {serverError ? <FieldError>{serverError}</FieldError> : null}
            <Field>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Создаем аккаунт..." : "Создать аккаунт"}
              </Button>
              <FieldDescription className="px-6 text-center">
                Уже есть аккаунт? <a href="/auth/sign-in">Войти</a>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
