"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
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
import { Checkbox } from "../ui/checkbox"

const signInSchema = z.object({
  email: z.string().trim().email("Введите корректный email"),
  password: z.string().min(1, "Введите пароль"),
  rememberMe: z.boolean(),
})

type SignInFormValues = z.infer<typeof signInSchema>

export function SignInForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
  })

  async function onSubmit(values: SignInFormValues) {
    setServerError(null)

    const { error } = await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
        callbackURL: "/dashboard",
        rememberMe: values.rememberMe,
      },
      {
        onSuccess: () => {
          router.push("/dashboard")
          router.refresh()
        },
        onError: (ctx) => {
          setServerError(ctx.error.message || "Не удалось войти в аккаунт")
        },
      }
    )

    if (error) {
      setServerError(error.message || "Не удалось войти в аккаунт")
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Войти в аккаунт</CardTitle>
          <CardDescription>
            Введите email и пароль, чтобы продолжить.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FieldGroup>
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
                <FieldError errors={[errors.email]} />
              </Field>
              <Field data-invalid={Boolean(errors.password)}>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Пароль</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Забыли пароль?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  aria-invalid={Boolean(errors.password)}
                  {...register("password")}
                />
                <FieldError errors={[errors.password]} />
              </Field>
              <Field orientation="horizontal">
                <Controller
                  control={control}
                  name="rememberMe"
                  render={({ field }) => (
                    <Checkbox
                      id="remember-me"
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        field.onChange(checked === true)
                      }}
                    />
                  )}
                />
                <div className="grid gap-1">
                  <FieldLabel htmlFor="remember-me">Запомнить меня</FieldLabel>
                </div>
              </Field>
              {serverError ? <FieldError>{serverError}</FieldError> : null}
              <Field>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Входим..." : "Войти"}
                </Button>
                <FieldDescription className="text-center">
                  Нет аккаунта? <a href="/auth/sign-up">Зарегистрироваться</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
