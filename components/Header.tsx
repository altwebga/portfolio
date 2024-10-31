import Link from "next/link";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { NavMenu } from "./NavMenu";
// import { UserAuthMenu } from "./UserAuthMenu";
import { DesktopNav } from "./DesktopNav";

export function Header() {
  return (
    <header className="bg-background/50 backdrop-blur-md sticky top-0 z-40 w-full border-b">
      <div className="flex items-center justify-between h-16 md:h-20 px-4 container mx-auto">
        <div className="flex items-center gap-4">
          <Link href={"/"} className="flex items-center gap-2">
            <Logo />
            <span className="text-2xl font-[family-name:var(--font-geist-sans)]">
              seomix.
            </span>
          </Link>
          <NavMenu />
        </div>
        <div>
          <DesktopNav />
        </div>
        <div className="flex items-center gap-4">
          {/* <UserAuthMenu /> */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
