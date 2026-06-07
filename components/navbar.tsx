"use client";

import Link from "next/link";
import { FileDown, Menu, X, User, Layers, FolderKanban, BookOpen, Mail } from "lucide-react";
import { useState } from "react";
import { LanguageToggle } from "./language-toggle";
import { PixelAvatar } from "./pixel-avatar";
import { ThemeToggle } from "./theme-toggle";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/cn";

const links = [
  { href: "#about",    key: "about"    as const, Icon: User },
  { href: "#tech",     key: "tech"     as const, Icon: Layers },
  { href: "#projects", key: "projects" as const, Icon: FolderKanban },
  { href: "#blog",     key: "blog"     as const, Icon: BookOpen },
  { href: "#contact",  key: "contact"  as const, Icon: Mail },
];

export function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="cv-no-print sticky top-0 z-50 border-b-2 border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10 2xl:px-12">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <PixelAvatar size={40} />
          <span className="pixel-text hidden text-sm font-bold sm:inline">Artur Michałek</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(({ href, key, Icon }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-1.5 px-3 py-2 font-mono text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-accent"
            >
              <Icon size={14} aria-hidden />
              {t.nav[key]}
            </a>
          ))}
        </nav>

        {/* Desktop controls */}
        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle />
          <ThemeToggle />
          <Link
            href="/cv"
            className="flex h-9 items-center gap-2 border-2 border-accent bg-accent px-3 font-mono text-sm text-accent-foreground shadow-[4px_4px_0_0_var(--navy)] transition-transform hover:-translate-y-0.5"
          >
            <FileDown size={14} />
            {t.nav.cv}
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          className="border-2 border-border p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "border-t-2 border-border bg-card md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {links.map(({ href, key, Icon }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-2 py-2 font-mono text-sm hover:bg-muted"
            >
              <Icon size={15} aria-hidden />
              {t.nav[key]}
            </a>
          ))}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Link
              href="/cv"
              className="flex h-9 items-center gap-2 border-2 border-accent bg-accent px-3 font-mono text-sm text-accent-foreground"
            >
              <FileDown size={14} />
              {t.nav.cv}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
