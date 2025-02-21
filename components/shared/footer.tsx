import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  return (
    <footer className="bg-background w-full border-t">
      <div className="h-16 container mx-auto flex items-center justify-between p-4">
        <div>
          <p>© 2012 - {new Date().getFullYear()} All rights reserved</p>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
