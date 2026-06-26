import {
  BadgeCheckIcon,
  CreditCardIcon,
  BellIcon,
  type LucideIcon,
} from "lucide-react"

interface IUserNav {
  title: string
  href: string
  icon: LucideIcon
}

export const userNav: IUserNav[] = [
  {
    title: "Аккаунт",
    href: "/dashboard/account",
    icon: BadgeCheckIcon,
  },
  {
    title: "Платежи",
    href: "/dashboard/payment",
    icon: CreditCardIcon,
  },
  {
    title: "Уведомления",
    href: "/dashboard/notification",
    icon: BellIcon,
  },
]
