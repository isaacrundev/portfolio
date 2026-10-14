import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../index.css?url'
import outfitFont from '../assets/fonts/outfit-latin.woff2?url'
import monoFont from '../assets/fonts/jetbrains-mono-latin.woff2?url'
import { LanguageProvider, useTranslation } from '../i18n'

const THEME_INIT_SCRIPT = `(function(){var root=document.documentElement;root.classList.add('js');try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

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
        title: 'Isaac Wu | Web Developer Portfolio',
      },
      {
        name: 'description',
        content: 'Isaac Wu - Passionate Web Developer portfolio showcasing modern user interfaces, performant coding, and digital experiences.',
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
  const { lang } = useTranslation()

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="font-sans antialiased bg-gray-900 text-white min-h-screen">
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
