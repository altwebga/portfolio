"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"

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
import { cn } from "@/lib/utils"

export function PasswordRecoveryForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [isPending, setIsPending] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")
    setMessage("")
    setIsPending(true)

    const form = new FormData(event.currentTarget)
    const email = String(form.get("email") ?? "")
    const response = await fetch("/api/auth/request-password-reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        redirectTo: "/auth/reset-password",
      }),
    })
    const result = (await response.json().catch(() => null)) as {
      message?: string
    } | null

    setIsPending(false)

    if (!response.ok) {
      setError(result?.message ?? "Не удалось отправить ссылку")
      return
    }

    setMessage(
      result?.message ??
        "Если такой email есть в системе, на него придет ссылка восстановления"
    )
  }

  return (
    <div className={cn("w-full max-w-sm", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Восстановление пароля</CardTitle>
          <CardDescription>
            Отправим ссылку для сброса пароля на ваш email
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              {error ? <FieldError>{error}</FieldError> : null}
              {message ? (
                <FieldDescription className="rounded-3xl bg-muted p-3">
                  {message}
                </FieldDescription>
              ) : null}
              <Field>
                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending ? "Отправляем..." : "Отправить ссылку"}
                </Button>
                <FieldDescription className="text-center">
                  Вспомнили пароль? <Link href="/auth/login">Войти</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
