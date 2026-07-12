"use client";

import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/lib/i18n";
import { GithubIcon } from "@/components/social-icons";
import type { Project } from "@/lib/data";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  const { t, lang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!project) return;
    window.addEventListener("keydown", handleKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prev;
    };
  }, [project, handleKey]);

  if (!project || !mounted) return null;

  const hasLive = project.status === "live" && project.live !== "#";

  const modal = (
  /* Single scroll container — works on iOS/Android */
    <div
      className="fixed inset-0 z-[9999] overflow-y-auto overscroll-contain bg-black/85 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      {/* Centers card when short; grows + scrolls when tall */}
      <div
        className="flex min-h-full justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))] sm:px-6 sm:py-10"
        onClick={onClose}
      >
        <div
          className="relative my-auto w-full max-w-2xl border-2 border-border bg-card shadow-[6px_6px_0_0_var(--color-accent)]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label={t.projects.close}
            className="absolute right-3 top-3 z-10 border-2 border-border bg-card p-1.5 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <X size={16} />
          </button>

          <div className="relative border-b-2 border-border">
            <Image
              src={project.image}
              alt={project.title}
              width={1792}
              height={1024}
              className="h-auto w-full"
              priority
            />
            {project.featured && (
              <span className="absolute left-3 top-3 border-2 border-accent bg-accent px-2 py-0.5 font-mono text-xs text-accent-foreground">
                {t.projects.featured}
              </span>
            )}
          </div>

          <div className="space-y-4 p-4 sm:p-5">
            <div className="flex flex-wrap items-center gap-2 pr-8">
              <h2 className="pixel-text text-lg font-bold text-foreground sm:text-xl">
                {project.title}
              </h2>
              <span
                className={cn(
                  "border px-2 py-0.5 font-mono text-xs",
                  project.status === "live"
                    ? "border-teal text-teal"
                    : "border-orange text-orange",
                )}
              >
                {t.projects.status[project.status]}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {(project.longDescription ?? project.description)[lang]}
            </p>

            {project.modules && project.modules.length > 0 && (
              <div>
                <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-teal">
                  {t.projects.modules}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.modules.map((mod) => (
                    <span
                      key={mod}
                      className="border border-border bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-teal">
                Tech stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="border-2 border-border bg-muted px-2 py-0.5 font-mono text-[10px] text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-t-2 border-border pt-3">
              <Link
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-border bg-muted px-3 py-1.5 font-mono text-xs text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                {t.projects.viewCode}
              </Link>
              {hasLive && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-accent bg-accent px-3 py-1.5 font-mono text-xs text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  <ExternalLink size={13} />
                  {t.projects.viewLive}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
