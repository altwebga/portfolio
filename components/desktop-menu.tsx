"use client";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navLinks } from "@/config/site";

export function DesktopMenu() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden lg:flex gap-4 list-none">
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.id}>
            <Link
              href={link.href}
              className={cn(
                "text-lg hover:bg-gray-500/20 px-4 py-2 rounded-md font-bold",
                {
                  "text-blue-500": pathname === link.href,
                }
              )}
            >
              {link.title}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
