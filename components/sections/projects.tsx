"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Star, ChevronRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { GithubIcon } from "@/components/social-icons";
import { ProjectModal } from "@/components/project-modal";
import { cn } from "@/lib/cn";

export function ProjectsSection() {
  const { t, lang } = useLanguage();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-wrapper border-t-2 border-border">
      <h2 className="pixel-text mb-8 text-3xl font-bold text-balance">
        {t.projects.title}
        <span className="text-accent">.</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="pixel-card group cursor-pointer overflow-hidden p-0 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[4px_4px_0_0_var(--color-accent)]"
            onClick={() => setSelected(project)}
            role="button"
            tabIndex={0}
            aria-label={`${project.title} — ${t.projects.learnMore}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelected(project);
              }
            }}
          >
            {/* Thumbnail */}
            <div className="relative w-full overflow-hidden border-b-2 border-border">
              <Image
                src={project.image}
                alt={project.title}
                width={1792}
                height={1024}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {project.featured && (
                <span className="absolute left-3 top-3 border-2 border-accent bg-accent px-2 py-0.5 font-mono text-xs text-accent-foreground">
                  {t.projects.featured}
                </span>
              )}
            </div>

            <div className="p-6">
              {/* Title row */}
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
                        : "border-orange text-orange",
                    )}
                  >
                    {t.projects.status[project.status]}
                  </span>
                </div>
              </div>

              {/* Short description */}
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {project.description[lang]}
              </p>

              {/* Tech tags (first 5 to keep card compact) */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
                {project.tech.length > 5 && (
                  <span className="border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground">
                    +{project.tech.length - 5}
                  </span>
                )}
              </div>

              {/* Footer row */}
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-mono text-xs text-accent hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GithubIcon className="h-4 w-4" />
                    {t.projects.viewCode}
                  </a>
                  {project.status === "live" && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-mono text-xs text-accent hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={12} />
                      {t.projects.viewLive}
                    </a>
                  )}
                </div>

                <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground group-hover:text-accent">
                  {t.projects.learnMore}
                  <ChevronRight size={12} />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
