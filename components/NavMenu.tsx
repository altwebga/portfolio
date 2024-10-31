"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/siteConfig";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

type NavMenuProps = {
  className?: string;
};

export function NavMenu({ className }: NavMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex items-center gap-2 border p-2 rounded-md md:hidden">
        {open ? <X /> : <Menu />} Меню
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[400px] md:w-[840px]">
        <SheetHeader>
          <SheetTitle>seomix.</SheetTitle>
          <SheetDescription></SheetDescription>
          <nav className="w-full">
            <ul className={cn("list-none", className)}>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={cn(
                    "text-primary text-lg font-semibold",
                    pathname === link.href ? " text-sky-600" : "text-primary"
                  )}
                >
                  <Link href={link.href}>
                    <SheetClose>{link.title}</SheetClose>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
