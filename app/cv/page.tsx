"use client";

import "@/styles/cv.css";
import Image from "next/image";
import Link from "next/link";
import { Printer, ArrowLeft, Mail, Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { quests } from "@/lib/data";

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
    <div className="cv-print-area min-h-screen bg-[#f4f9fc] text-[#0a2540]">
      <div className="cv-no-print border-b-2 border-[#b9d6e4] bg-white px-4 py-4">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#0091b9] hover:underline"
          >
            <ArrowLeft size={16} />
            Portfolio
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 border-2 border-[#ff6500] bg-[#ff6500] px-4 py-2 font-mono text-sm text-white"
          >
            <Printer size={16} />
            {t.cv.print}
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] p-4 print:p-0">
        <div className="cv-sheet mx-auto flex overflow-hidden border-2 border-[#b9d6e4] bg-white shadow-lg print:shadow-none">

          {/* Sidebar */}
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

          {/* Main */}
          <main className="flex-1 p-8">
            <section className="cv-block mb-8">
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#0091b9]">
                {t.cv.profile}
              </h2>
              <p className="text-sm leading-relaxed text-[#4a6b80]">
                {t.cv.profileText}
              </p>
            </section>

            <section className="cv-block mb-8">
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#0091b9]">
                {t.cv.experience}
              </h2>
              <div className="space-y-6">
                {quests.map((job) => (
                  <div key={`${job.company}-${job.period}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-bold">{job.company}</h3>
                      <span className="text-xs text-[#4a6b80]">{job.period}</span>
                    </div>
                    <p className="mb-1 text-sm font-medium text-[#004e9b]">
                      {job.role} · {job.location}
                    </p>
                    <p className="mb-1 text-sm leading-relaxed text-[#4a6b80]">
                      {job.description[lang]}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="border border-[#b9d6e4] px-1.5 py-0.5 text-[10px] text-[#4a6b80]"
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
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#0091b9]">
                {t.cv.education}
              </h2>
              <p className="text-sm text-[#4a6b80]">{t.cv.educationText}</p>
            </section>

            <section className="cv-block mt-auto border-t border-[#b9d6e4] pt-4">
              <h2 className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#8db3c7]">
                {t.cv.gdprTitle}
              </h2>
              <p className="text-[9px] leading-relaxed text-[#8db3c7]">
                {t.cv.gdprText}
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
