"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-8 w-8 dark:hidden" />
      <Moon className="hidden h-8 w-8 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
