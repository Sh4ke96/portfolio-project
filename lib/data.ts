export type Quest = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: { en: string; pl: string };
  tech: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: LangStr;
  longDescription?: LangStr;
  modules?: string[];
  tech: string[];
  code: string;
  live: string;
  featured?: boolean;
  status: "live" | "wip";
  stars?: number;
  image: string;
};

export type TechItem = {
  name: string;
  icon: string;
};

export type LangStr = { en: string; pl: string };

export type BlogSection = {
  heading?: LangStr;
  paragraphs: LangStr[];
};

export type BlogPost = {
  slug: string;
  title: LangStr;
  excerpt: LangStr;
  date: string;
  readTime: string;
  heroImage?: string;
  sections?: BlogSection[];
};

export const quests: Quest[] = [
  {
    company: "MadMountain",
    role: "Fullstack Developer",
    period: "2024.01 — Present",
    location: "Remote",
    description: {
      en: "Building fullstack products with Next.js, TypeScript, Laravel, PostgreSQL, Redis, Docker and Azure. Responsible for architecture decisions, API design, and frontend delivery.",
      pl: "Budowanie aplikacji fullstack w Next.js, TypeScript, Laravel, PostgreSQL, Redis, Docker i Azure. Odpowiedzialny za decyzje architektoniczne, projektowanie API i dostarczanie frontendu.",
    },
    tech: ["Next.js", "TypeScript", "Laravel", "PostgreSQL", "Redis", "Docker", "Azure"],
  },
  {
    company: "Konceptika",
    role: "Frontend Developer",
    period: "2022.09 — 2023.12",
    location: "Remote",
    description: {
      en: "Built client-facing products with React, Next.js, TypeScript, WordPress and Vercel. Delivered pixel-perfect UI, interactive animations, and CMS integrations.",
      pl: "Tworzenie produktów klienckich w React, Next.js, TypeScript, WordPress i Vercel. Pixel-perfect UI, interaktywne animacje i integracje z CMS.",
    },
    tech: ["React", "Next.js", "TypeScript", "WordPress", "Tailwind", "Vercel"],
  },
  {
    company: "ArtGroup",
    role: "Frontend Developer",
    period: "2022.02 — 2022.06",
    location: "Remote",
    description: {
      en: "Maintained marketing and client sites with HTML, CSS, Sass, JavaScript, and jQuery.",
      pl: "Utrzymywanie stron marketingowych i klienckich w HTML, CSS, Sass, JavaScript i jQuery.",
    },
    tech: ["HTML", "CSS", "Sass", "JavaScript", "jQuery", "WordPress"],
  },
];

export const projects: Project[] = [
  {
    slug: "nimbusly",
    title: "Nimbusly",
    description: {
      en: "Family hub app — shared budget, shopping, gifts, birthdays, chores, watchlist, notes and more. Available in Polish and English.",
      pl: "Aplikacja hub dla rodziny — wspólny budżet, zakupy, prezenty, urodziny, obowiązki, watchlista, notatki i więcej. Dostępna po polsku i angielsku.",
    },
    longDescription: {
      en: "Nimbusly brings every corner of home life into one place. Each family member has their own profile while all family data stays in sync in real time. Features: shared budgets with income/expense tracking, recurring entries and payment reminders; live-updating shopping lists with mobile full-screen detail view; gift ideas without spoiling surprises; birthday calendar with weekly mobile view; shared work/family schedule; unified family calendar (birthdays, chores, schedule); home pharmacy with expiry tracking; movies & series watchlist; restaurant wishlist with ratings; pet profiles and care schedules; household chores with assignees and recurrence; rich Markdown notes with pinning and attachments. PWA with offline support and Web Push (iOS 16.4+ / Android), global search (Ctrl+K), in-app notification feed, guided tours via the Nimbus AI companion, and a public change log.",
      pl: "Nimbusly łączy wszystkie obszary życia domowego w jednym miejscu. Każdy członek rodziny ma własny profil, dane synchronizują się w czasie rzeczywistym. Funkcje: wspólny budżet z przychodami, wydatkami, wpisami cyklicznymi i przypomnieniami o płatnościach; listy zakupów z podglądem live; pomysły na prezenty bez spoilerów; kalendarz urodzin z widokiem tygodniowym; wspólny harmonogram pracy/rodziny; zunifikowany kalendarz rodzinny; domowa apteczka z datami ważności; watchlista filmów i seriali; lista restauracji z ocenami; profile zwierząt; obowiązki domowe z przypisaniem i cyklicznością; notatki Markdown z pinowaniem i załącznikami. PWA z trybem offline i Web Push, globalne wyszukiwanie (Ctrl+K), feed powiadomień, przewodniki Nimbus i publiczny changelog.",
    },
    modules: [
      "Budget", "Shopping lists", "Gifts", "Birthdays", "Schedule",
      "Family calendar", "Medicine cabinet", "Watchlist", "Restaurants",
      "Pets", "Chores", "Notes", "Family management", "Dashboard",
      "Global search", "Web Push (PWA)", "Nimbus companion", "Change log",
    ],
    tech: ["Next.js", "React 19", "TypeScript", "Tailwind v4", "Supabase", "PostgreSQL", "Zustand", "Recharts", "Cypress", "driver.js", "Vercel"],
    code: "https://github.com/Sh4ke96/nimbusly",
    live: "https://www.nimbusly.pl",
    featured: true,
    status: "live",
    image: "/project-imgs/nimbusly-thumbnail.png",
  },
  {
    slug: "zoriva",
    title: "Zoriva",
    description: {
      en: "Multilingual health management platform for individuals and families. Track medications, dosage schedules, reminders, and treatment history.",
      pl: "Wielojęzyczna platforma zarządzania zdrowiem dla osób i rodzin. Leki, dawkowanie, przypomnienia i historia leczenia w jednym miejscu.",
    },
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Cypress", "next-intl"],
    code: "https://github.com/Sh4ke96/zoriva-platform",
    live: "#",
    status: "wip",
    image: "/project-imgs/zoriva-thumbnail.png",
  },
];

// skillicons.dev icon keys – rendered as a single sprite URL
export const SKILL_ICONS = [
  "git", "azure", "docker", "html", "css", "js", "ts",
  "supabase", "sass", "laravel", "nextjs", "npm", "php",
  "babel", "cypress", "mysql", "nodejs", "postgres",
  "rabbitmq", "redis", "redux", "vite", "xd", "yarn",
] as const;

export type SkillIcon = typeof SKILL_ICONS[number];

export const techStack: Record<string, TechItem[]> = {
  frontend: [
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    { name: "Sass", icon: "https://skillicons.dev/icons?i=sass" },
    { name: "Redux", icon: "https://skillicons.dev/icons?i=redux" },
    { name: "Vite", icon: "https://skillicons.dev/icons?i=vite" },
    { name: "Babel", icon: "https://skillicons.dev/icons?i=babel" },
    { name: "Cypress", icon: "https://skillicons.dev/icons?i=cypress" },
    { name: "XD", icon: "https://skillicons.dev/icons?i=xd" },
  ],
  backend: [
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
    { name: "Laravel", icon: "https://skillicons.dev/icons?i=laravel" },
    { name: "RabbitMQ", icon: "https://skillicons.dev/icons?i=rabbitmq" },
  ],
  database: [
    { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
    { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
    { name: "Redis", icon: "https://skillicons.dev/icons?i=redis" },
    { name: "Supabase", icon: "https://skillicons.dev/icons?i=supabase" },
  ],
  devops: [
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
    { name: "Azure", icon: "https://skillicons.dev/icons?i=azure" },
    { name: "npm", icon: "https://skillicons.dev/icons?i=npm" },
    { name: "Yarn", icon: "https://skillicons.dev/icons?i=yarn" },
  ],
  ai: [
    { name: "Cursor AI", icon: "/tech/cursor-ai.svg" },
    { name: "GitHub Copilot", icon: "/tech/github-copilot.svg" },
    { name: "Claude Code", icon: "/tech/claude-code.svg" },
    { name: "Codex", icon: "/tech/codex.svg" },
  ],
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-nimbusly",
    title: {
      en: "Building Nimbusly: a family hub that actually ships",
      pl: "Budowa Nimbusly: rodzinny hub, który naprawdę działa",
    },
    excerpt: {
      en: "From a shopping list side project to a live PWA with 14+ modules, real-time sync, Web Push, and an in-app AI companion called Nimbus.",
      pl: "Od pobocznego projektu z listą zakupów do działającej PWA z 14+ modułami, synchronizacją na żywo, Web Push i asystentem Nimbus w aplikacji.",
    },
    date: "2026-07-12",
    readTime: "7 min",
    heroImage: "/project-imgs/nimbusly-thumbnail.png",
    sections: [
      {
        paragraphs: [
          {
            en: "Nimbusly started as a simple idea: my family kept losing track of shopping lists, birthdays, and who was supposed to do what around the house. Notes lived in three different apps, the budget was a spreadsheet nobody updated, and every birthday reminder came too late. I wanted one place where all of that lived — shared, synced, and actually used by everyone at home.",
            pl: "Nimbusly zaczęło się od prostego problemu: rodzina gubiła listy zakupów, urodziny i to, kto miał co zrobić w domu. Notatki siedziały w trzech różnych aplikacjach, budżet był w arkuszu, którego nikt nie aktualizował, a przypomnienia o urodzinach przychodziły za późno. Chciałem jedno miejsce — wspólne, zsynchronizowane i naprawdę używane przez wszystkich.",
          },
          {
            en: "What began as a shopping list experiment grew into a full family hub. Today Nimbusly is live at www.nimbusly.pl (v0.11.4), available in Polish and English, and it covers far more than groceries.",
            pl: "To, co zaczęło się od eksperymentu z listą zakupów, przerodziło się w pełny hub rodzinny. Dziś Nimbusly działa na www.nimbusly.pl (v0.11.4), jest dostępne po polsku i angielsku i obejmuje znacznie więcej niż zakupy.",
          },
        ],
      },
      {
        heading: {
          en: "What it does",
          pl: "Co potrafi",
        },
        paragraphs: [
          {
            en: "The app bundles 14 modules into one dashboard: shared budget with recurring entries and payment reminders, live-updating shopping lists, gift ideas without spoiling surprises, birthday calendar, work/family schedule, unified family calendar, home pharmacy with expiry tracking, movies & series watchlist, restaurant wishlist, pet profiles, household chores with assignees, Markdown notes with attachments, and family account management with roles (founder, admin, member).",
            pl: "Aplikacja łączy 14 modułów w jednym dashboardzie: wspólny budżet z wpisami cyklicznymi i przypomnieniami o płatnościach, listy zakupów z podglądem live, pomysły na prezenty bez spoilerów, kalendarz urodzin, harmonogram pracy/rodziny, zunifikowany kalendarz rodzinny, domowa apteczka z datami ważności, watchlista filmów i seriali, lista restauracji, profile zwierząt, obowiązki domowe z przypisaniem, notatki Markdown z załącznikami oraz zarządzanie kontem rodzinnym z rolami (founder, admin, member).",
          },
          {
            en: "Each family member has their own profile. Data syncs in real time — when someone adds milk to the shopping list on their phone, it shows up on everyone else's screen within seconds. Solo mode works too, for people who just want the tools without inviting anyone.",
            pl: "Każdy członek rodziny ma własny profil. Dane synchronizują się w czasie rzeczywistym — gdy ktoś doda mleko do listy zakupów na telefonie, u pozostałych pojawi się to w ciągu sekund. Działa też tryb solo, dla osób, które chcą korzystać z narzędzi bez zapraszania nikogo.",
          },
        ],
      },
      {
        heading: {
          en: "Mobile-first and installable",
          pl: "Mobile-first i instalowalna",
        },
        paragraphs: [
          {
            en: "Most family interactions happen on a phone, so the layout is mobile-first: bottom navigation, larger touch targets, safe-area insets, and dedicated mobile flows for shopping lists (full-screen detail sheet) and birthdays (accordion + weekly calendar view). On desktop you get a sidebar and a module grid.",
            pl: "Większość interakcji rodzinnych dzieje się na telefonie, więc layout jest mobile-first: dolna nawigacja, większe obszary dotykowe, safe-area insets i dedykowane flow mobilne dla list zakupów (pełnoekranowy widok) oraz urodzin (akordeon + widok tygodniowy). Na desktopie jest sidebar i siatka modułów.",
          },
          {
            en: "Nimbusly is a PWA — web manifest, service worker, offline fallback, install prompt, and Web Push notifications (iOS 16.4+ / Android). Push covers family activity and budget payment reminders. On iOS you need to add the app to your home screen first; browser tabs don't get push.",
            pl: "Nimbusly to PWA — manifest, service worker, tryb offline, prompt instalacji i powiadomienia Web Push (iOS 16.4+ / Android). Push obejmuje aktywność rodziny i przypomnienia o płatnościach w budżecie. Na iOS trzeba najpierw dodać aplikację na ekran główny — w karcie przeglądarki push nie działa.",
          },
        ],
      },
      {
        heading: {
          en: "Meet Nimbus — the in-app companion",
          pl: "Poznaj Nimbusa — asystenta w aplikacji",
        },
        paragraphs: [
          {
            en: "One thing I'm particularly proud of is Nimbus — a small companion widget in the bottom-right corner. It runs guided tours (driver.js) for the app and every module, shows contextual hints, answers FAQ questions, suggests cross-module actions, celebrates milestones, and has a quiet mode. You can resume tours with Esc, navigate with keyboard shortcuts, and it surfaces a \"needs attention\" banner when something requires action.",
            pl: "Jestem szczególnie dumny z Nimbusa — małego asystenta w prawym dolnym rogu. Prowadzi przewodniki (driver.js) po aplikacji i każdym module, pokazuje kontekstowe podpowiedzi, odpowiada na FAQ, sugeruje akcje między modułami, świętuje kamienie milowe i ma tryb cichy. Można wznowić tour klawiszem Esc, nawigować skrótami klawiszowymi, a gdy coś wymaga uwagi — pojawia się banner „wymaga uwagi”.",
          },
          {
            en: "Building Nimbus meant maintaining a tour catalog, bilingual copy for every step, context hints per route, FAQ entries, and celebration hooks — all kept in sync whenever a module changes. It's a lot of metadata, but it makes the app feel approachable for non-technical family members.",
            pl: "Zbudowanie Nimbusa wymagało utrzymania katalogu tourów, dwujęzycznych tekstów dla każdego kroku, podpowiedzi kontekstowych per route, wpisów FAQ i hooków celebracji — wszystko zsynchronizowane przy każdej zmianie modułu. To sporo metadanych, ale sprawia, że aplikacja jest przystępna dla nietechnicznych członków rodziny.",
          },
        ],
      },
      {
        heading: {
          en: "Tech stack and architecture",
          pl: "Stack technologiczny i architektura",
        },
        paragraphs: [
          {
            en: "Nimbusly runs on Next.js 16, React 19, and TypeScript. Styling is Tailwind CSS v4 with shadcn/ui and Radix UI primitives. Supabase handles auth, PostgreSQL with Row Level Security, and real-time subscriptions. Client state lives in Zustand; mutations go through Server Actions. Charts use Recharts, E2E tests use Cypress, unit tests use the Node test runner.",
            pl: "Nimbusly działa na Next.js 16, React 19 i TypeScript. Stylowanie to Tailwind CSS v4 z shadcn/ui i prymitywami Radix UI. Supabase obsługuje auth, PostgreSQL z Row Level Security i subskrypcje real-time. Stan klienta jest w Zustandzie, mutacje idą przez Server Actions. Wykresy to Recharts, testy E2E — Cypress, testy jednostkowe — Node test runner.",
          },
          {
            en: "The project has a strict release process: every user-visible change gets a changelog entry (PL + EN), a version bump, README update, and tests. Cron jobs handle weekly digests, budget payment reminders, and family activity digests via Resend email. Vercel Analytics and Speed Insights track production performance.",
            pl: "Projekt ma rygorystyczny proces release'ów: każda widoczna zmiana dostaje wpis w changelogu (PL + EN), bump wersji, aktualizację README i testy. Cron joby obsługują cotygodniowe podsumowania, przypomnienia o płatnościach w budżecie i digest aktywności rodziny przez Resend. Vercel Analytics i Speed Insights śledzą wydajność na produkcji.",
          },
        ],
      },
      {
        heading: {
          en: "What I learned",
          pl: "Czego się nauczyłem",
        },
        paragraphs: [
          {
            en: "Shipping a family app taught me that real-time sync is easy to build but hard to get right UX-wise — optimistic updates, conflict handling, and \"who changed this?\" context matter more than the WebSocket plumbing. RLS in Supabase is powerful but requires discipline: every new table needs policies before it goes to production.",
            pl: "Wypuszczenie aplikacji rodzinnej nauczyło mnie, że synchronizacja real-time jest łatwa do zbudowania, ale trudna w UX — optymistyczne aktualizacje, obsługa konfliktów i kontekst „kto to zmienił?” liczą się bardziej niż sam WebSocket. RLS w Supabase jest potężny, ale wymaga dyscypliny: każda nowa tabela potrzebuje polityk zanim trafi na produkcję.",
          },
          {
            en: "The biggest win was building for my own family first. Every module exists because we actually needed it — not because it looked good on a feature list. If you're thinking about a side project, start with a problem you live with daily. Nimbusly is that project for me, and it's live at www.nimbusly.pl if you want to take a look.",
            pl: "Największym sukcesem było budowanie najpierw dla własnej rodziny. Każdy moduł istnieje, bo naprawdę go potrzebowaliśmy — nie dlatego, że dobrze wyglądał na liście funkcji. Jeśli myślisz o side projekcie, zacznij od problemu, z którym żyjesz codziennie. Nimbusly to taki projekt dla mnie — działa na www.nimbusly.pl, jeśli chcesz zajrzeć.",
          },
        ],
      },
    ],
  },
  {
    slug: "pixel-portfolio-redesign",
    title: {
      en: "Rebuilding my portfolio: App Router, Tailwind v4 & a pixel design system",
      pl: "Przebudowa portfolio: App Router, Tailwind v4 i pikselowy design system",
    },
    excerpt: {
      en: "Why I scrapped the old Pages Router setup and went all-in on Next.js 15, Tailwind v4, and a retro pixel art aesthetic.",
      pl: "Dlaczego wyrzuciłem stary setup z Pages Routerem i postawiłem na Next.js 15, Tailwind v4 i retro pikselową estetykę.",
    },
    date: "2026-06-07",
    readTime: "8 min",
    heroImage: "/blog/portfolio-hero.png",
    sections: [
      {
        paragraphs: [
          {
            en: "Every developer rewrites their portfolio at least three times. This is my third. Each time I convince myself it'll be the last — and this time I actually mean it, mostly because I went pixel-art style and that aesthetic ages better than any trend-chasing design.",
            pl: "Każdy developer przepisuje swoje portfolio co najmniej trzy razy. To moja trzecia wersja. Za każdym razem przekonuję się, że ta ostatnia — i tym razem naprawdę tak myślę, bo postawiłem na pixel art, a ta estetyka starzeje się lepiej niż jakikolwiek modny design.",
          },
          {
            en: "The old portfolio was built on Next.js 13 with the Pages Router, SCSS Modules, and anime.js. It worked, but it felt like dragging a legacy codebase around every time I opened it. So when I started planning a full redesign, I decided to also do a proper tech upgrade.",
            pl: "Stare portfolio działało na Next.js 13 z Pages Routerem, modułami SCSS i anime.js. Działało — ale za każdym razem gdy je otwierałem, czułem, że trzymam stary legacy codebase. Przy okazji redesignu postanowiłem zrobić porządny upgrade technologiczny.",
          },
        ],
      },
      {
        heading: {
          en: "What I was starting from",
          pl: "Punkt wyjścia",
        },
        paragraphs: [
          {
            en: "The previous stack was: Next.js 13 (Pages Router), React 18, TypeScript 4.8, SCSS Modules for styling, anime.js for animations, and a mix of emailjs-com, formik, yup, and react-scroll that I never fully used.",
            pl: "Poprzedni stack to: Next.js 13 (Pages Router), React 18, TypeScript 4.8, moduły SCSS do stylowania, anime.js do animacji oraz mix emailjs-com, formik, yup i react-scroll — których nigdy w pełni nie używałem.",
          },
          {
            en: "The codebase had accumulated a lot of half-finished ideas — a contact form that was never wired up, animation utilities that were imported but not used, and SCSS files for components that had been refactored away. A cleanup was long overdue.",
            pl: "W kodzie nagromadziło się dużo pół-skończonych pomysłów — formularz kontaktowy nigdy nie podpięty, narzędzia animacyjne importowane lecz nieużywane, pliki SCSS dla usuniętych komponentów. Czas był na porządki.",
          },
        ],
      },
      {
        heading: {
          en: "Upgrading the core: Next.js 15 + App Router",
          pl: "Upgrade rdzenia: Next.js 15 + App Router",
        },
        paragraphs: [
          {
            en: "Moving from Pages Router to App Router was the biggest structural change. The new routing model with layouts, Server Components by default, and the cleaner data-fetching patterns made a lot of sense for a portfolio. No more _app.tsx, no more _document.tsx — just a clean app/ directory.",
            pl: "Przejście z Pages Router na App Router to największa zmiana strukturalna. Nowy model routingu z layoutami, Server Components jako domyślnymi i czystszymi wzorcami data-fetching doskonale pasuje do portfolio. Żadnego _app.tsx, żadnego _document.tsx — tylko czysty katalog app/.",
          },
          {
            en: "Next.js went from 13.4 to 15.5, React from 18.2 to 19, TypeScript from 4.8 to 5.9. The tsconfig got updated too — target moved to ES2017, moduleResolution switched to bundler mode. Zero breaking changes in my codebase after those upgrades, which was a pleasant surprise.",
            pl: "Next.js przeszedł z 13.4 na 15.5, React z 18.2 na 19, TypeScript z 4.8 na 5.9. Zaktualizowany tsconfig — target zmieniony na ES2017, moduleResolution na bundler. Zero breaking changes w moim kodzie po tych upgradach — miłe zaskoczenie.",
          },
        ],
      },
      {
        heading: {
          en: "Ditching SCSS for Tailwind v4",
          pl: "SCSS wylatuje, wchodzi Tailwind v4",
        },
        paragraphs: [
          {
            en: "I had Tailwind in the old package.json but never actually used it — it was installed as a plan that didn't happen. This time I went all-in. Tailwind v4 (via @tailwindcss/postcss) is a significant step up from v3: the config moves into globals.css using @theme inline, custom utilities are declared with @utility, and the whole setup is leaner.",
            pl: "Tailwind siedział w starym package.json, ale nigdy go nie używałem — zainstalowany jako plan, który się nie ziścił. Tym razem postawiłem na full. Tailwind v4 (przez @tailwindcss/postcss) to poważny krok naprzód względem v3: konfiguracja przenosi się do globals.css przez @theme inline, własne utility deklaruje się przez @utility, a całość jest mniej skomplikowana.",
          },
          {
            en: "Every SCSS module got deleted. Component styles moved inline as Tailwind classes. The globals.css now holds the design tokens (CSS variables for colors, semantic tokens for light/dark themes), custom utilities like section-wrapper and pixel-card, and the keyframe animations.",
            pl: "Każdy moduł SCSS wylądował w koszu. Style komponentów przeniesione jako klasy Tailwind. Plik globals.css przechowuje teraz tokeny designu (zmienne CSS dla kolorów, tokeny semantyczne dla trybu jasnego/ciemnego), własne utility jak section-wrapper i pixel-card, oraz animacje keyframe.",
          },
          {
            en: "Losing SCSS meant losing some things I liked — nested rules, mixins — but gaining Tailwind's JIT performance and the ability to prototype layout changes in seconds without context-switching between files.",
            pl: "Rezygnacja z SCSS to strata kilku rzeczy, które lubiłem — zagnieżdżone reguły, mixiny — ale zysk to wydajność JIT Tailwinda i możliwość prototypowania zmian layoutu w sekundy bez przełączania się między plikami.",
          },
        ],
      },
      {
        heading: {
          en: "Animations: one library instead of two",
          pl: "Animacje: jedna biblioteka zamiast dwóch",
        },
        paragraphs: [
          {
            en: "The old codebase used both anime.js and a partial Framer Motion setup. I kept Framer Motion (upgraded from v7 to v12) and removed anime.js entirely. The DotGrid background animation, which was the main anime.js consumer, got rewritten with Framer Motion's staggerChildren and a useEffect-driven variant.",
            pl: "Stary codebase używał zarówno anime.js, jak i częściowego setupu Framer Motion. Zostawiłem Framer Motion (upgrade z v7 na v12) i usunąłem anime.js całkowicie. Animacja tła DotGrid, główny konsument anime.js, przepisana z użyciem staggerChildren Framer Motion.",
          },
          {
            en: "For simple effects like the avatar bob, pixel glow ring, and floating squares, I defined CSS keyframes in globals.css and exposed them as animate-* Tailwind utilities. That kept Framer Motion for orchestrated, interactive animations and CSS for ambient effects.",
            pl: "Dla prostych efektów — kiwanie avatara, pikselowy pierścień, unoszące się kwadraty — zdefiniowałem keyframes CSS w globals.css i wystawiłem je jako utility animate-* Tailwinda. Framer Motion odpowiada za skoordynowane animacje, CSS za efekty otoczenia.",
          },
        ],
      },
      {
        heading: {
          en: "The pixel art design system",
          pl: "Pikselowy design system",
        },
        paragraphs: [
          {
            en: "The visual concept is retro RPG — think early 2000s game UI but applied to a developer portfolio. The palette is built around five named colors: teal (#0091b9), orange (#ff6500), yellow (#f5c518), navy (#0a2540), and light-blue (#bae4f0). These map to semantic tokens that swap correctly in light and dark mode.",
            pl: "Koncepcja wizualna to retro RPG — UI z gier z początku lat 2000., przeniesiony na portfolio developera. Paleta opiera się na pięciu kolorach: teal (#0091b9), orange (#ff6500), yellow (#f5c518), navy (#0a2540) i light-blue (#bae4f0). Mapują się na tokeny semantyczne poprawnie zmieniające się w trybie jasnym i ciemnym.",
          },
          {
            en: "The Pixelify Sans font from Google Fonts serves as the pixel-style display font, applied through a --font-pixel CSS variable and a font-pixel Tailwind utility. Component styling follows a consistent pattern: 2px solid borders, no border-radius, pixel-box shadows at 4px offset.",
            pl: "Czcionka Pixelify Sans z Google Fonts pełni rolę pikselowej czcionki display, aplikowanej przez zmienną CSS --font-pixel i utility font-pixel Tailwinda. Stylowanie komponentów: 2px solid borders, zero border-radius, pixel-box shadows z przesunięciem 4px.",
          },
          {
            en: "The LV.30 badge on the avatar isn't random — it reflects roughly 4 years of professional experience mapped to a game-level metaphor. The stat bars (XP, Quests, Skills) pull real numbers. The player bio is an actual bio, not Lorem Ipsum.",
            pl: "Odznaka LV.30 na avatarze to nieprzypadkowa liczba — odzwierciedla ok. 4 lata doświadczenia zawodowego przełożone na metaforę poziomu w grze. Statystyki (XP, Questy, Skille) zawierają prawdziwe liczby. Bio gracza to prawdziwe bio, nie Lorem Ipsum.",
          },
        ],
      },
      {
        heading: {
          en: "i18n without a library",
          pl: "i18n bez biblioteki",
        },
        paragraphs: [
          {
            en: "The portfolio is bilingual (Polish and English) because I work in both. Rather than pulling in next-intl or react-i18next for a single-page portfolio, I built a minimal solution: two typed dictionary objects in lib/dictionaries/, a React Context that holds the active locale, and a useLanguage() hook for access anywhere.",
            pl: "Portfolio jest dwujęzyczne (polski i angielski), bo pracuję w obu językach. Zamiast wciągać next-intl czy react-i18next do jednoplikowego portfolio, zbudowałem minimalne rozwiązanie: dwa typowane słowniki w lib/dictionaries/, React Context trzymający aktywne locale i hook useLanguage() do dostępu w dowolnym miejscu.",
          },
          {
            en: "TypeScript keeps it safe — the pl.ts dictionary is typed as DeepString<typeof en>, which means every key from the English dictionary must exist in Polish, but values can be any string rather than matching the exact English literals.",
            pl: "TypeScript pilnuje poprawności — słownik pl.ts jest typowany jako DeepString<typeof en>, co oznacza, że każdy klucz z angielskiego słownika musi istnieć w polskim, ale wartości mogą być dowolnym stringiem.",
          },
        ],
      },
      {
        heading: {
          en: "What's next",
          pl: "Co dalej",
        },
        paragraphs: [
          {
            en: "The blog system is currently static data in data.ts. Next up is probably MDX support so posts can have real rich content, or a headless CMS integration if the writing habit sticks. The projects section will grow as I finish and publish more work.",
            pl: "System bloga to aktualnie statyczne dane w data.ts. Następny krok to pewnie wsparcie MDX, by posty miały bogatą treść, albo integracja z headless CMS jeśli nawyk pisania się utrzyma. Sekcja projektów urośnie w miarę jak będę kończyć i publikować kolejne prace.",
          },
          {
            en: "The redesign took a few evenings of focused work, most of which was the Tailwind migration and getting the pixel design tokens right. The end result is a codebase I actually enjoy opening — which is the only real metric that matters for a personal project.",
            pl: "Redesign zajął kilka wieczorów skupionej pracy, głównie migracja na Tailwind i dogranie pikselowych tokenów designu. Efekt końcowy to codebase, który faktycznie lubię otwierać — to jedyna miara, która naprawdę liczy się przy projekcie osobistym.",
          },
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
