"use client";
import { DesktopNav } from "../shared/desktop-nav";
import { Logo } from "../shared/logo";
import { MobileNav } from "../shared/mobile-nav";
import { AnimatedThemeToggler } from "../theme/theme-toggle";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const isMobile = useIsMobile();
  return (
    <header className="h-16 bg-background/20 backdrop-blur-md border-b z-50 fixed w-full">
      <div className="h-full container mx-auto px-4 flex flex-row justify-between items-center">
        <Logo />
        <div className="flex md:flex-row flex-row-reverse gap-4 lg:gap-80">
          {isMobile ? <MobileNav /> : <DesktopNav />}
          <AnimatedThemeToggler />
        </div>
      </div>
    </header>
  );
}
