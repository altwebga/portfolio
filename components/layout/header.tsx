import { Logo } from "../shared/logo";
import { AnimatedThemeToggler } from "../theme/theme-toggle";
import { AppNav } from "../shared/app-nav";

export function Header() {
  return (
    <header className="bg-background/50 backdrop-blur-md border-b z-50 fixed top-0 w-full">
      <div className="container mx-auto px-4 flex flex-row justify-between items-center h-16">
        <Logo className="h-4 w-auto" />
        <div className="flex md:flex-row flex-row-reverse gap-8 md:w-full">
          <AppNav />
          <AnimatedThemeToggler />
        </div>
      </div>
    </header>
  );
}
