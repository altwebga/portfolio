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
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <div className="dark:hidden flex flex-row items-center gap-2">
        <Sun className="h-8 w-8 " />
        <span>День</span>
      </div>
      <div className="hidden dark:flex flex-row items-center gap-2">
        <Moon className="h-8 w-8" />
        <span>Ночь</span>
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
