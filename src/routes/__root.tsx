import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { useEffect } from 'react'

import en from '../locales/en.json'
import appCss from '../index.css?url'
import outfitFont from '../assets/fonts/outfit-latin.woff2?url'
import monoFont from '../assets/fonts/jetbrains-mono-latin.woff2?url'
import { LanguageProvider, useTranslation } from '../i18n'

// Runs before first paint: the reveal animations stay hidden until JS marks the
// document, so the page still reads when JS never arrives.
const JS_CLASS_SCRIPT = "document.documentElement.classList.add('js')"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        // From en.json so the prerendered head matches what the client sets below.
        title: en.meta.title,
      },
      {
        name: 'description',
        content: en.meta.description,
      }
    ],
    links: [
      // Without this the browser requests /favicon.ico on every visit and gets a
      // 404. public/icon.png was already there, just never referenced.
      {
        rel: 'icon',
        type: 'image/png',
        href: '/icon.png',
      },
      {
        rel: 'apple-touch-icon',
        href: '/icon.png',
      },
      // Both are used above the fold -- Outfit by everything, the mono face by the
      // hero's typed line -- so they start downloading alongside the CSS rather
      // than after it is parsed. crossorigin must match how CSS fetches a font.
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: outfitFont,
        crossOrigin: 'anonymous',
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: monoFont,
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Document>{children}</Document>
    </LanguageProvider>
  )
}

function Document({ children }: { children: React.ReactNode }) {
  const { lang, t } = useTranslation()

  // The prerendered head is always English; this is what puts the tab and the
  // search preview in the reader's own language once we know it.
  useEffect(() => {
    document.title = t('meta.title')
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t('meta.description'))
  }, [lang, t])

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_CLASS_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="min-h-screen font-sans antialiased">
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
