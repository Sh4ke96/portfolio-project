"use client";

import "@/styles/cv.css";
import Image from "next/image";
import Link from "next/link";
import { Printer, ArrowLeft, Mail, Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { quests } from "@/lib/data";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";

const CV_SKILLS = [
  "React", "Next.js", "TypeScript", "JavaScript",
  "Node.js", "PHP", "Laravel",
  "PostgreSQL", "MySQL", "Redis", "Supabase",
  "Docker", "Azure", "Git",
  "HTML", "CSS", "Sass", "Tailwind",
  "Redux", "Vite", "Cypress",
  "RabbitMQ", "Yarn", "npm",
  "Cursor AI", "GitHub Copilot", "Claude Code", "Codex",
];

export default function CvPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="cv-print-area min-h-screen bg-background text-foreground">

      {/* ── Toolbar (hidden on print) ─────────────────────────────────── */}
      <div className="cv-no-print border-b-2 border-border bg-card px-4 py-3">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline"
          >
            <ArrowLeft size={16} />
            Portfolio
          </Link>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 border-2 border-accent bg-accent px-4 py-2 font-mono text-sm text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <Printer size={16} />
              {t.cv.print}
            </button>
          </div>
        </div>
      </div>

      {/* ── CV sheet ─────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1600px] p-4 print:p-0">
        <div className="cv-sheet mx-auto flex overflow-hidden border-2 border-border bg-card shadow-lg print:shadow-none">

          {/* Sidebar — intentionally dark navy in all modes */}
          <aside className="cv-block w-[72mm] shrink-0 bg-[#0a2540] p-6 text-[#bae4f0]">
            <div className="mb-6 flex justify-center">
              <Image
                src="/avatar.png"
                alt="Artur Michałek"
                width={96}
                height={96}
                className="border-2 border-[#0091b9]"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <h1 className="text-center text-lg font-bold">Artur Michałek</h1>
            <p className="mb-6 text-center text-sm text-[#8db3c7]">Fullstack Developer</p>

            <section className="cv-block mb-6">
              <h2 className="mb-2 border-b border-[#1f3346] pb-1 text-xs font-bold uppercase tracking-wider text-[#ff6500]">
                {t.cv.contact}
              </h2>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="mailto:artuuur.michalek@gmail.com"
                    className="flex items-center gap-2 text-[#bae4f0] hover:text-[#0091b9] transition-colors"
                  >
                    <Mail size={12} className="shrink-0" />
                    artuuur.michalek@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/artur-micha%C5%82ek-69863918b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#bae4f0] hover:text-[#0091b9] transition-colors"
                  >
                    <Linkedin size={12} className="shrink-0" />
                    /in/artur-michałek
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sh4ke96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#bae4f0] hover:text-[#0091b9] transition-colors"
                  >
                    <Github size={12} className="shrink-0" />
                    github.com/sh4ke96
                  </a>
                </li>
              </ul>
            </section>

            <section className="cv-block mb-6">
              <h2 className="mb-2 border-b border-[#1f3346] pb-1 text-xs font-bold uppercase tracking-wider text-[#ff6500]">
                {t.cv.skills}
              </h2>
              <ul className="columns-2 gap-2 space-y-0.5 text-xs">
                {CV_SKILLS.map((skill) => (
                  <li key={skill} className="break-inside-avoid">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            <section className="cv-block mb-6">
              <h2 className="mb-2 border-b border-[#1f3346] pb-1 text-xs font-bold uppercase tracking-wider text-[#ff6500]">
                {t.cv.languages}
              </h2>
              <ul className="space-y-1 text-xs">
                <li>{t.cv.langPolish}</li>
                <li>{t.cv.langEnglish}</li>
              </ul>
            </section>

            <section className="cv-block">
              <h2 className="mb-2 border-b border-[#1f3346] pb-1 text-xs font-bold uppercase tracking-wider text-[#ff6500]">
                {t.cv.softSkills}
              </h2>
              <ul className="space-y-1 text-xs">
                {t.cv.softSkillsList.map((s) => (
                  <li key={s} className="flex items-center gap-1.5">
                    <span className="h-1 w-1 shrink-0 bg-[#0091b9]" />
                    {s}
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          {/* Main content */}
          <main className="flex-1 bg-card p-8 text-foreground">

            <section className="cv-block mb-8">
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
                {t.cv.profile}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t.cv.profileText}
              </p>
            </section>

            <section className="cv-block mb-8">
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
                {t.cv.experience}
              </h2>
              <div className="space-y-6">
                {quests.map((job) => (
                  <div key={`${job.company}-${job.period}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-bold text-foreground">{job.company}</h3>
                      <span className="text-xs text-muted-foreground">{job.period}</span>
                    </div>
                    <p className="mb-1 text-sm font-medium text-secondary">
                      {job.role} · {job.location}
                    </p>
                    <p className="mb-1 text-sm leading-relaxed text-muted-foreground">
                      {job.description[lang]}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="cv-block mb-8">
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
                {t.cv.education}
              </h2>
              <p className="text-sm text-muted-foreground">{t.cv.educationText}</p>
            </section>

            <section className="cv-block mt-auto border-t border-border pt-4">
              <h2 className="mb-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {t.cv.gdprTitle}
              </h2>
              <p className="text-[9px] leading-relaxed text-muted-foreground">
                {t.cv.gdprText}
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
