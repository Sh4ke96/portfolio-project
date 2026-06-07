"use client";

import { useLanguage } from "@/lib/i18n";
import { quests } from "@/lib/data";
import { MapPin, Swords } from "lucide-react";

export function AboutSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="section-wrapper border-t-2 border-border">
      <h2 className="pixel-text mb-8 text-3xl font-bold text-balance">
        {t.about.title}
        <span className="text-accent">.</span>
      </h2>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>{t.about.intro}</p>
          <p>{t.about.work}</p>
          <p>{t.about.hobbies}</p>
        </div>

        <div>
          <h3 className="mb-4 flex items-center gap-2 font-mono text-sm text-teal">
            <Swords size={18} />
            {t.about.questTitle}
          </h3>
          <div className="flex flex-col gap-4">
            {quests.map((quest, index) => (
              <article key={quest.company} className="pixel-card">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="pixel-text text-lg font-semibold">{quest.company}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    LVL {quests.length - index}
                  </span>
                </div>
                <p className="font-mono text-sm text-accent">{quest.role}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{quest.period}</p>
                <p className="mt-1 flex items-center gap-1 font-mono text-xs text-muted-foreground">
                  <MapPin size={12} />
                  {quest.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {quest.description[lang]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
