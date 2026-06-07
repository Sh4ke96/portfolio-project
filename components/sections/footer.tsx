"use client";

import Link from "next/link";
import { PixelAvatar } from "@/components/pixel-avatar";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="cv-no-print border-t-2 border-border bg-card">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between sm:px-8 lg:px-10 2xl:px-12">
        <div className="flex items-center gap-3">
          <PixelAvatar size={48} />
          <div>
            <p className="pixel-text text-sm font-bold">Artur Michałek</p>
            <p className="font-mono text-xs text-muted-foreground">{t.footer.madeWith}</p>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-4 font-mono text-xs text-muted-foreground">
          <Link href="#about" className="hover:text-accent">
            {t.nav.about}
          </Link>
          <Link href="/blog" className="hover:text-accent">
            {t.nav.blog}
          </Link>
          <Link href="/cv" className="hover:text-accent">
            {t.nav.cv}
          </Link>
        </nav>

        <p className="font-mono text-xs text-muted-foreground">
          © {year} · {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
