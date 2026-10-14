import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import en from "./locales/en.json";
import zhTW from "./locales/zh-TW.json";

export type Lang = "en" | "zh-TW";

const translations: Record<Lang, typeof en> = { en, "zh-TW": zhTW };

const STORAGE_KEY = "lang";

/** Reads a dotted key like "hero.greeting" out of one locale's strings. */
const read = (source: unknown, key: string): unknown =>
  key
    .split(".")
    .reduce<unknown>(
      (node, part) => (node as Record<string, unknown> | undefined)?.[part],
      source,
    );

/** Falls back to English for a key a translation is missing, then to the caller's. */
export const translate = (lang: Lang, key: string, fallback?: string): string => {
  const value = read(translations[lang], key) ?? read(en, key);
  return typeof value === "string" ? value : (fallback ?? key);
};

/**
 * localStorage first so an explicit choice wins, then the browser's own list of
 * preferred languages — the first of our two it asks for is the one it gets.
 */
export const detectLanguage = (): Lang => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "zh-TW") return stored;
  for (const tag of navigator.languages ?? []) {
    if (tag.startsWith("zh")) return "zh-TW";
    if (tag.startsWith("en")) return "en";
  }
  return "en";
};

type Language = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string, fallback?: string) => string;
};

const LanguageContext = createContext<Language>({
  lang: "en",
  setLang: () => {},
  t: (key, fallback) => translate("en", key, fallback),
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Only the server knows nothing about the visitor, so it renders English. A
  // first client render that disagreed with that HTML would fail hydration, so
  // the detected language is applied just after it instead of during it.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => setLangState(detectLanguage()), []);

  const setLang = useCallback((next: Lang) => {
    localStorage.setItem(STORAGE_KEY, next);
    setLangState(next);
  }, []);

  const value = useMemo<Language>(
    () => ({ lang, setLang, t: (key, fallback) => translate(lang, key, fallback) }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useTranslation = () => useContext(LanguageContext);
