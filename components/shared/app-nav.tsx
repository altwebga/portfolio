"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { menuLinks } from "@/config/menu-links";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

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

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline">{open ? <X /> : <Menu />} Меню</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Меню</SheetTitle>
          <SheetDescription></SheetDescription>
          <nav className="flex flex-col gap-4">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium transition-colors hover:text-primary",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                <SheetClose>{link.title}</SheetClose>
              </Link>
            ))}
          </nav>
        </SheetHeader>
        <SheetFooter>
          <SheetClose>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex flex-row gap-12">
      {menuLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "font-medium transition-colors hover:text-primary",
            pathname === link.href ? "text-primary" : "text-muted-foreground",
          )}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}

export function AppNav() {
  return (
    <div className="flex flex-row gap-8 md:w-full md:justify-center">
      <DesktopNav />
      <MobileNav />
    </div>
  );
}
