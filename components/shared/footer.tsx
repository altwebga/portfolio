import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  return (
    <footer className="bg-background w-full border-t">
      <div className="h-16 flex items-center justify-between container mx-auto px-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} seomix. All rights reserved.
        </p>
        <ThemeToggle />
      </div>
    </footer>
  );
}
