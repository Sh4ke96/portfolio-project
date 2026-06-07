# Artur Michałek — Portfolio

Pixel-art developer portfolio built with Next.js 15 and Tailwind CSS v4. Bilingual (EN/PL), dark/light theme, App Router.

## Live

[artur-michalek.vercel.app](https://artur-michalek.vercel.app)

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Themes | next-themes |
| Icons | Lucide React |
| Fonts | Geist, Geist Mono, Pixelify Sans |
| Deployment | Vercel |
| Node.js | 20.x |

## Features

- Pixel-art retro RPG design system with custom CSS design tokens
- Bilingual content (EN / PL) via custom React Context i18n
- Dark / light / system theme switcher
- Responsive layout — mobile first, max-width 1600px
- Sections: Hero, About + Career Quests, Tech Stack, Projects, Blog, Contact, CV
- Printable CV page with GDPR clause
- Scroll-to-top button
- Blog with hero images and bilingual post content

## Local Development

```bash
# install dependencies
npm install

# run dev server
npm run dev
# → http://localhost:3000

# type check
npx tsc --noEmit

# production build
npm run build
```

## Project Structure

```
app/                  # Next.js App Router pages
  layout.tsx          # Root layout (fonts, theme, i18n)
  page.tsx            # Home page
  blog/               # Blog list + post pages
  cv/                 # Printable CV page
components/
  sections/           # Page sections (Hero, About, Tech, Projects, Blog, Contact, Footer)
  blog/               # Blog client components
  navbar.tsx          # Navigation bar
  scroll-to-top.tsx   # Scroll-to-top button
  pixel-avatar.tsx    # Pixel avatar component
  theme-toggle.tsx    # Dark/light/system toggle
  language-toggle.tsx # EN/PL toggle
lib/
  data.ts             # Quests, projects, tech stack, blog posts
  dictionaries/       # EN and PL translation objects
  i18n.tsx            # Language context + useLanguage hook
  cn.ts               # Tailwind class merge utility
public/
  avatar.png          # Pixel art avatar
  tech/               # Tech stack icon SVGs
  project-imgs/       # Project thumbnail images
  blog/               # Blog post hero images
styles/
  globals.css         # Tailwind v4 theme, design tokens, keyframe animations
  cv.css              # Print styles for CV page
```
