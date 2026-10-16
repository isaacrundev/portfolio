# portfolio

Personal portfolio for Isaac Wu — a single-page site with a hero, about, project
showcases, and contact section, in English and Traditional Chinese.

Built with TanStack Start (SSR) + React 19 + Vite + Tailwind CSS v4.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Checks

```bash
npm run typecheck  # tsc --noEmit
npm run build      # production build into .output/
npm run preview    # serve the production build
npm test           # vitest
```

## Project layout

```
src/
  routes/       file-based routes (index.tsx is the whole page, __root.tsx the shell)
  layouts/      Hero, About, Showcases, Contact — the page sections
  components/   Header, Showcase, SlideCard, BackToTop, ...
  assets/       images + index.ts that re-exports them
  locales/      en.json, zh-TW.json
  data/         showcase entries
  index.css     Tailwind theme (colors, fonts, keyframes)
```

## Notes

- Dark only. `index.css` sets `color-scheme: dark`; there is no light palette and no
  toggle. The pre-paint script in `__root.tsx` only adds a `.js` class, which the
  scroll reveals use to stay hidden only while JS is running.
- Language is stored in `localStorage` under `lang` and falls back to English. `title`
  and `description` are prerendered in English and rewritten once the language is
  known; add new strings to both `locales/*.json` files.
- Screenshots in `src/assets` are WebP at 2x their displayed size (~800KB total).
  Re-encode new screenshots the same way before adding them; the carousel shows
  them at roughly 564x350 CSS px.
