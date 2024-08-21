"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
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
import { Button } from "@/components/ui/button";
import { navLinks } from "@/config/site";
import { SocialNetwork } from "./social-network";
import { PiCubeTransparentFill } from "react-icons/pi";
import { Separator } from "./ui/separator";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="link">{open ? <X /> : <Menu />} Menu</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-left">
            <Link href="/">
              <SheetClose className="flex items-center gap-2">
                <PiCubeTransparentFill className="h-6 w-6" />
                <span className="text-2xl font-bold">seomix.</span>
              </SheetClose>
            </Link>
          </SheetTitle>
          <SheetDescription className="py-4">
            <Separator />
          </SheetDescription>
        </SheetHeader>
        <nav>
          <ul className="flex flex-col space-y-4 p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.id} className="list-none">
                <Link
                  href={link.href}
                  className={cn(
                    "text-xl",
                    pathname === link.href ? "text-blue-500" : ""
                  )}
                >
                  <SheetClose>{link.title}</SheetClose>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <SheetFooter className="mt-8">
          <SocialNetwork color="primary" size="medium" />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
