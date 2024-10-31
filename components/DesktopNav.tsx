"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/siteConfig";
export function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="hidden md:flex gap-8 items-center list-none">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={cn(
              "text-lg font-semibold hover:text-muted-foreground",
              pathname === link.href ? " text-sky-600 " : "text-primary"
            )}
          >
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
