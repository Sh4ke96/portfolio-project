"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export function BlogPreviewSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="blog" className="section-wrapper border-t-2 border-border">
      <h2 className="pixel-text mb-8 text-3xl font-bold text-balance">
        {t.blog.title}
        <span className="text-accent">.</span>
      </h2>

      {blogPosts.length === 0 ? (
        <p className="text-muted-foreground">{t.blog.empty}</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="pixel-card flex flex-col gap-0 overflow-hidden p-0"
            >
              {post.heroImage && (
                <div className="w-full border-b-2 border-border overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt={post.title[lang]}
                    width={1792}
                    height={1024}
                    className="w-full h-auto"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col justify-between gap-3 p-5">
                <div>
                  <h3 className="pixel-text text-base font-semibold leading-snug">
                    {post.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt[lang]}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs text-muted-foreground">
                    {post.date} · {post.readTime} {t.blog.minRead}
                  </p>
                  <span className="flex items-center gap-1 font-mono text-xs text-accent">
                    {t.blog.readMore}
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
