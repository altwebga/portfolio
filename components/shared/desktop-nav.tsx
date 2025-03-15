"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav-items";
import { Button } from "../ui/button";

export function DesktopNav() {
  const pathname = usePathname();
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
    </div>
  );
}
