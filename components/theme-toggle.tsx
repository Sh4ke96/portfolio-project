"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/cn";

type ThemeOption = "light" | "dark" | "system";

const options: { value: ThemeOption; icon: typeof Sun; labelKey: "light" | "dark" | "system" }[] = [
  { value: "light", icon: Sun, labelKey: "light" },
  { value: "dark", icon: Moon, labelKey: "dark" },
  { value: "system", icon: Monitor, labelKey: "system" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-[108px] border-2 border-border bg-muted" />;
  }

  return (
    <div
      className="flex border-2 border-border"
      role="group"
      aria-label="Theme"
    >
      {options.map(({ value, icon: Icon, labelKey }) => (
        <button
          key={value}
          type="button"
          onClick={() => setTheme(value)}
          title={t.theme[labelKey]}
          className={cn(
            "flex h-9 w-9 items-center justify-center border-r border-border transition-colors last:border-r-0",
            theme === value
              ? "bg-accent text-accent-foreground"
              : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          <Icon size={16} aria-hidden />
        </button>
      ))}
    </div>
  );
}
