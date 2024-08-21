import { DesktopMenu } from "./desktop-menu";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { PiCubeTransparentFill } from "react-icons/pi";

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <PiCubeTransparentFill className="h-6 w-6" />
          <span className="text-2xl font-bold">seomix.</span>
        </Link>
        <DesktopMenu />
        <div className="flex items-center">
          <MobileMenu />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
