"use client";

import { useLanguage } from "@/lib/i18n";
import type { Locale } from "@/lib/dictionaries";
import { cn } from "@/lib/cn";

const locales: Locale[] = ["en", "pl"];

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex border-2 border-border" role="group" aria-label="Language">
      {locales.map((locale, i) => (
        <button
          key={locale}
          type="button"
          onClick={() => setLang(locale)}
          title={locale.toUpperCase()}
          className={cn(
            "flex h-9 w-9 items-center justify-center font-mono text-xs font-semibold uppercase transition-colors",
            i < locales.length - 1 && "border-r border-border",
            lang === locale
              ? "bg-accent text-accent-foreground"
              : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}
