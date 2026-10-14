import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { detectLanguage, translate } from "./i18n";

const setBrowserLanguages = (languages: string[]) =>
  Object.defineProperty(navigator, "languages", { value: languages, configurable: true });

describe("translate", () => {
  it("reads a dotted key from the given locale", () => {
    expect(translate("en", "nav.about")).toBe("About");
    expect(translate("zh-TW", "nav.about")).toBe("關於我");
  });

  it("returns the caller's string for a key no locale has", () => {
    expect(translate("zh-TW", "showcases.unknown", "a fallback")).toBe("a fallback");
  });

  it("returns the key itself when there is nothing else to return", () => {
    expect(translate("en", "showcases.")).toBe("showcases.");
  });
});

describe("detectLanguage", () => {
  // Not jsdom's: Node 25 defines its own empty `localStorage` global, and that is
  // the one vitest leaves in place, so stub it instead of trusting the environment.
  const store = new Map<string, string>();

  beforeEach(() => {
    store.clear();
    vi.stubGlobal("localStorage", {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => void store.set(key, value),
    });
    setBrowserLanguages(["en-US"]);
  });

  afterEach(() => vi.unstubAllGlobals());

  it("prefers a stored choice over the browser's", () => {
    store.set("lang", "zh-TW");
    setBrowserLanguages(["en-US"]);
    expect(detectLanguage()).toBe("zh-TW");
  });

  it("picks the browser's first language we actually have", () => {
    setBrowserLanguages(["zh-CN", "en-US"]);
    expect(detectLanguage()).toBe("zh-TW");
    setBrowserLanguages(["en-GB", "zh-TW"]);
    expect(detectLanguage()).toBe("en");
  });

  it("falls back to English when the browser asks for neither", () => {
    setBrowserLanguages(["ja-JP", "de-DE"]);
    expect(detectLanguage()).toBe("en");
  });

  it("ignores a stored value that is not a language we have", () => {
    store.set("lang", "ja-JP");
    setBrowserLanguages(["zh-TW"]);
    expect(detectLanguage()).toBe("zh-TW");
  });
});
