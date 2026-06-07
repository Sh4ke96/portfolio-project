"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import type { BlogPost } from "@/lib/data";

type Props = { posts: BlogPost[] };

export function BlogListClient({ posts }: Props) {
  const { t, lang } = useLanguage();

  return (
    <main className="section-wrapper flex-1">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline"
      >
        <ArrowLeft size={16} />
        {t.blog.backToHome}
      </Link>
      <h1 className="pixel-text mb-8 text-4xl font-bold">
        {t.blog.title}<span className="text-accent">.</span>
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.length === 0 && (
          <p className="col-span-full font-mono text-sm text-muted-foreground">{t.blog.empty}</p>
        )}
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="pixel-card flex flex-col overflow-hidden p-0"
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
                <h2 className="pixel-text text-base font-semibold leading-snug">
                  {post.title[lang]}
                </h2>
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
                  <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
