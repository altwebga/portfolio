"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { authClient } from "@/lib/auth-client"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  ChevronsUpDownIcon,
  SparklesIcon,
  BadgeCheckIcon,
  CreditCardIcon,
  BellIcon,
  LogOutIcon,
} from "lucide-react"
import { userNav } from "@/lib/config"

type NavUserData = {
  name?: string | null
  email?: string | null
  image?: string | null
}

function getInitials(name?: string | null, email?: string | null) {
  const source = name?.trim() || email?.trim() || "User"
  const parts = source.split(/\s+/).filter(Boolean)

  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
  }

  return source.slice(0, 2).toUpperCase()
}

export function NavUser({ user }: { user: NavUserData }) {
  const { isMobile } = useSidebar()
  const router = useRouter()
  const [isPending, setIsPending] = useState(false)
  const displayName = user.name || "Пользователь"
  const displayEmail = user.email || "Без email"
  const initials = getInitials(user.name, user.email)

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
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                {user.image ? (
                  <AvatarImage src={user.image} alt={displayName} />
                ) : null}
                <AvatarFallback className="rounded-lg">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{displayName}</span>
                <span className="truncate text-xs">{displayEmail}</span>
              </div>
              <ChevronsUpDownIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-fit"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  {user.image ? (
                    <AvatarImage src={user.image} alt={displayName} />
                  ) : null}
                  <AvatarFallback className="rounded-lg">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{displayName}</span>
                  <span className="truncate text-xs">{displayEmail}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <SparklesIcon />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              {userNav.map((item, index) => {
                const Icon = item.icon
                return (
                  <DropdownMenuItem asChild key={index}>
                    <Link href={item.href} className="flex gap-2">
                      <Icon />
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut} disabled={isPending}>
              <LogOutIcon />
              {isPending ? "Выходим..." : "Выйти"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
