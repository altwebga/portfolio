"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav-items";
import { Button } from "../ui/button";
import { UserNav } from "./user-nav";

export function DesktopNav() {
  const pathname = usePathname();
  const { data: session } = useSession();
  return (
    <div className="hidden md:flex items-center gap-8">
      <nav>
        <ul className="list-none flex items-center gap-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Button
                size="lg"
                asChild
                variant={pathname === item.href ? "outline" : "ghost"}
              >
                <Link href={item.href}>{item.title}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        {session ? (
          <UserNav />
        ) : (
          <Button asChild variant="outline">
            <Link href="/auth/login">Войти</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
