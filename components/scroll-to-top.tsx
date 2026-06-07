"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`cv-no-print fixed bottom-6 right-6 z-50 border-2 border-border bg-card p-3 text-foreground shadow-[4px_4px_0_0_var(--color-accent)] transition-all hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-accent-foreground ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ChevronUp size={20} />
    </button>
  );
}
