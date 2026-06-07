"use client";

import { PixelAvatar } from "@/components/pixel-avatar";
import { useLanguage } from "@/lib/i18n";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 animate-float bg-primary/30"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              animationDelay: `${(i % 5) * 0.6}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-avatar-ring rounded-full" />
            <span
              className="absolute -left-3 -top-2 h-3 w-3 animate-twinkle bg-yellow"
              style={{ animationDelay: "0s" }}
            />
            <span
              className="absolute -right-4 top-6 h-2 w-2 animate-twinkle bg-accent"
              style={{ animationDelay: "0.7s" }}
            />
            <span
              className="absolute -bottom-1 left-2 h-2 w-2 animate-twinkle bg-teal"
              style={{ animationDelay: "1.3s" }}
            />

            <PixelAvatar size="xl" showGlow animated />

            <div className="absolute -bottom-2 -right-2 z-10 border-2 border-yellow bg-accent px-2 py-1 font-pixel text-xs text-accent-foreground">
              LV. 30
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-2 font-pixel text-base text-primary">
            {t.hero.welcome}
          </p>
          <h1 className="mb-4 font-pixel text-4xl leading-tight text-foreground md:text-6xl">
            {t.hero.title1}
            <span className="text-accent"> {t.hero.title2}</span>
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-pixel text-sm text-muted-foreground">
            <span className="text-teal">●</span> Next.js
            <span className="text-orange">●</span> TypeScript
            <span className="text-yellow">●</span> Laravel
            <span className="text-navy">●</span> PostgreSQL
            <span className="text-teal">●</span> Docker
            <span className="text-orange">●</span> Azure
          </div>
        </div>

        <div className="relative mx-auto mb-8 max-w-2xl border-4 border-primary bg-card p-6">
          <div className="absolute -top-3 left-4 bg-card px-2 font-pixel text-xs text-primary">
            {t.hero.bioLabel}
          </div>
          <p className="text-sm leading-relaxed text-card-foreground">{t.hero.bio}</p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {[
            { label: t.hero.statExp, value: t.hero.statExpValue, color: "bg-teal" },
            { label: t.hero.statProjects, value: t.hero.statProjectsValue, color: "bg-orange" },
            { label: t.hero.statTech, value: t.hero.statTechValue, color: "bg-yellow" },
          ].map((stat) => (
            <div key={stat.label} className="min-w-[120px] border-2 border-border bg-card p-3">
              <div className={`mb-2 h-1 ${stat.color}`} />
              <p className="font-pixel text-xs text-muted-foreground">
                {stat.label}
              </p>
              <p className="font-pixel text-lg text-card-foreground">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="transform border-4 border-teal bg-primary px-6 py-3 font-pixel text-base text-primary-foreground transition-all hover:scale-105 hover:border-orange hover:bg-accent hover:text-accent-foreground"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className="transform border-4 border-border bg-transparent px-6 py-3 font-pixel text-base text-foreground transition-all hover:scale-105 hover:border-primary"
          >
            {t.hero.ctaContact}
          </a>
        </div>

        <div className="mt-12 animate-bounce">
          <div className="mb-2 font-pixel text-xs text-muted-foreground">
            {t.hero.scroll}
          </div>
          <div className="relative mx-auto h-6 w-4 border-2 border-primary">
            <div className="absolute left-1/2 top-1 h-2 w-1 -translate-x-1/2 animate-pulse bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
