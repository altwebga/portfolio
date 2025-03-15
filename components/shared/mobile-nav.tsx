"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { navItems } from "@/lib/nav-items";
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="lg" className="text-lg">
            {open ? <XIcon /> : <MenuIcon />}
            Меню
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="text-left"></SheetTitle>
            <SheetDescription className="text-left px-4">Меню</SheetDescription>
            <nav className="text-left p-4">
              <ul className="list-none space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "cursor-pointer font-medium transition-colors hover:text-primary text-2xl",
                        pathname === item.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      <SheetClose>{item.title}</SheetClose>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetHeader>
          <SheetFooter>
            <ThemeToggle />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
