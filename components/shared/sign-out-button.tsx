"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { authClient } from "@/lib/auth-client"
import { Button } from "../ui/button"

interface SignOutButtonProps {
  className?: string
}

export function SignOutButton({ className }: SignOutButtonProps) {
  const router = useRouter()
  const [isPending, setIsPending] = useState(false)

  async function handleSignOut() {
    setIsPending(true)

    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.replace("/auth/sign-in")
          router.refresh()
        },
        onError: () => {
          setIsPending(false)
        },
      },
    })
  }

  return (
    <Button
      className={className}
      type="button"
      onClick={handleSignOut}
      disabled={isPending}
    >
      {isPending ? "Выходим..." : "Выйти"}
    </Button>
  )
}
