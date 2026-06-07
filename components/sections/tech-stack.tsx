"use client";

import Image from "next/image";
import { Monitor, Server, Database, Container, Bot } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { techStack, type TechItem } from "@/lib/data";

const groups = ["frontend", "backend", "database", "devops", "ai"] as const;

const GROUP_ICONS = {
  frontend: Monitor,
  backend: Server,
  database: Database,
  devops: Container,
  ai: Bot,
} as const;

function TechTile({ item }: { item: TechItem }) {
  return (
    <div className="flex flex-col items-center gap-2 border-2 border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[4px_4px_0_0_var(--color-accent)]">
      <div className="relative h-10 w-10">
        <Image
          src={item.icon}
          alt={item.name}
          fill
          className="object-contain"
          unoptimized
        />
      </div>
      <span className="font-mono text-xs text-foreground text-center">{item.name}</span>
    </div>
  );
}

export function TechStackSection() {
  const { t } = useLanguage();

  return (
    <section id="tech" className="section-wrapper border-t-2 border-border">
      <h2 className="pixel-text mb-8 text-3xl font-bold text-balance">
        {t.tech.title}
        <span className="text-accent">.</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group}>
            <h3 className="mb-4 flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-teal">
              {(() => { const Icon = GROUP_ICONS[group]; return <Icon size={16} aria-hidden />; })()}
              {t.tech[group]}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {techStack[group].map((item) => (
                <TechTile key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
