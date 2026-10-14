import { defineConfig } from "vitest/config";

// Intentionally separate from vite.config.ts: the TanStack Start / nitro plugins
// keep a server alive after the run, which made `vitest run` hang on exit.
export default defineConfig({
  test: {
    environment: "jsdom",
  },
});
