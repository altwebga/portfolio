"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { menuLinks } from "@/config/menu-links";
import { socialLinks } from "@/config/social-links";
import Image from "next/image";

export function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Меню</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-sm">Меню</SheetTitle>
          <SheetDescription></SheetDescription>
          <nav>
            <ul className="flex flex-col gap-6 list-none">
              {menuLinks.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative pb-1 text-2xl font-medium transition-colors",
                        "after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:scale-x-0 after:bg-current after:transition-transform after:duration-200",
                        "hover:after:scale-x-100",
                        isActive && "after:scale-x-100 text-muted-foreground"
                      )}
                    >
                      <SheetClose>{item.title}</SheetClose>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </SheetHeader>
        <SheetFooter className="w-full">
          <div className="flex flew-row gap-6 justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={link.icon}
                  alt={link.title}
                  unoptimized
                  width={28}
                  height={28}
                />
              </a>
            ))}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
