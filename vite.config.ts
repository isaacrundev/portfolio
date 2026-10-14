import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  plugins: [
    devtools(),
    nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    tailwindcss(),
    tanstackStart({
      // Nothing on this page depends on the request, so render it once at build time
      // and let the CDN serve the file instead of invoking a function per visit.
      prerender: { enabled: true, crawlLinks: false, failOnError: true },
    }),
    viteReact(),
  ],
})

export default config
