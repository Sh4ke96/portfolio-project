"use client";

import { useLanguage } from "@/lib/i18n";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/social-icons";
import Link from "next/link";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-wrapper border-t-2 border-border">
      <h2 className="pixel-text mb-4 text-3xl font-bold text-balance">
        {t.contact.title}
        <span className="text-accent">.</span>
      </h2>
      <p className="mb-10 text-muted-foreground">{t.contact.subtitle}</p>

      <div className="flex flex-col gap-6">
        <Link
          href="mailto:artuuur.michalek@gmail.com"
          className="flex items-center gap-3 font-mono text-lg text-foreground transition-colors hover:text-accent"
        >
          <MailIcon className="h-5 w-5 shrink-0 text-accent" />
          artuuur.michalek@gmail.com
        </Link>

        <div className="flex gap-4">
          <Link
            href="https://www.github.com/sh4ke96"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-border px-4 py-3 font-mono text-sm text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/artur-micha%C5%82ek-69863918b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-border px-4 py-3 font-mono text-sm text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
