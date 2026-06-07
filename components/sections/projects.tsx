"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { projects } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { GithubIcon } from "@/components/social-icons";
import { cn } from "@/lib/cn";

export function ProjectsSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="projects" className="section-wrapper border-t-2 border-border">
      <h2 className="pixel-text mb-8 text-3xl font-bold text-balance">
        {t.projects.title}
        <span className="text-accent">.</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="pixel-card group overflow-hidden p-0">
            <div className="w-full border-b-2 border-border overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={1792}
                height={1024}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {project.featured && (
                <span className="absolute left-3 top-3 border-2 border-accent bg-accent px-2 py-0.5 font-mono text-xs text-accent-foreground">
                  {t.projects.featured}
                </span>
              )}
            </div>

            <div className="p-6">
              <div className="mb-2 flex items-center justify-between gap-2">
                <h3 className="pixel-text text-lg font-semibold">{project.title}</h3>
                <div className="flex items-center gap-2">
                  {project.stars != null && (
                    <span className="flex items-center gap-1 font-mono text-xs text-yellow">
                      <Star size={14} fill="currentColor" />
                      {project.stars}
                    </span>
                  )}
                  <span
                    className={cn(
                      "border px-2 py-0.5 font-mono text-xs",
                      project.status === "live"
                        ? "border-teal text-teal"
                        : "border-orange text-orange"
                    )}
                  >
                    {t.projects.status[project.status]}
                  </span>
                </div>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {project.description[lang]}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Link
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-mono text-xs text-accent hover:underline"
                >
                  <GithubIcon className="h-4 w-4" />
                  {t.projects.viewCode}
                </Link>
                {project.status === "live" && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-mono text-xs text-accent hover:underline"
                  >
                    <ExternalLink size={14} />
                    {t.projects.viewLive}
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
