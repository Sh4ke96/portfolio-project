import { en } from "./en";
import { pl } from "./pl";

export const dictionaries = { en, pl } as const;

export type Locale = keyof typeof dictionaries;

export type { Dictionary } from "./types";
