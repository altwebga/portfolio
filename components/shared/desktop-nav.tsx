"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "./mobile-nav";
import { UserNav } from "./user-nav";

export function DesktopNav() {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex items-center gap-8">
      <nav>
        <ul className="list-none flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "cursor-pointer font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary underline underline-offset-8"
                    : "text-muted-foreground"
                )}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <UserNav />
    </div>
  );
}
