import Link from "next/link";
import { Logo } from "./app-logo";
import { MobileNav } from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";

export function Header() {
  return (
    <header className="bg-background/50 backdrop-blur-md sticky top-0 z-40 w-full border-b">
      <div className="h-16 flex items-center justify-between container mx-auto px-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="w-6 h-6" />
          <span className="hidden md:block">seomix.</span>
        </Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
