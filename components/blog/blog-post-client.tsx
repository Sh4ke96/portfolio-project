"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import type { BlogPost } from "@/lib/data";

type Props = { post: BlogPost };

export function BlogPostClient({ post }: Props) {
  const { t, lang } = useLanguage();

  return (
    <article className="section-wrapper max-w-[900px] flex-1">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline"
      >
        <ArrowLeft size={16} />
        {t.blog.backToList}
      </Link>

      {post.heroImage && (
        <div className="mb-8 w-full overflow-hidden border-4 border-border">
          <Image
            src={post.heroImage}
            alt={post.title[lang]}
            width={1792}
            height={1024}
            className="w-full h-auto"
            priority
          />
        </div>
      )}

      <header className="mb-10 border-b-2 border-border pb-6">
        <h1 className="pixel-text text-3xl font-bold leading-snug sm:text-4xl">
          {post.title[lang]}
        </h1>
        <p className="mt-3 font-mono text-sm text-muted-foreground">
          {post.date} · {post.readTime} {t.blog.minRead}
        </p>
        <p className="mt-2 text-base text-muted-foreground">{post.excerpt[lang]}</p>
      </header>

      <div className="space-y-8 text-base leading-relaxed">
        {post.sections?.map((section, i) => (
          <section key={i}>
            {section.heading && (
              <h2 className="pixel-text mb-3 text-xl font-bold text-foreground">
                {section.heading[lang]}
              </h2>
            )}
            <div className="space-y-3 text-muted-foreground">
              {section.paragraphs.map((para, j) => (
                <p key={j}>{para[lang]}</p>
              ))}
            </div>
          </section>
        ))}
        {!post.sections && (
          <p className="text-muted-foreground">{post.excerpt[lang]}</p>
        )}
      </div>
    </article>
  );
}
