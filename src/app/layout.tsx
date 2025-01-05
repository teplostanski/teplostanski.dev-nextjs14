// src/app/layout.tsx
import { ReactNode, Suspense } from 'react'
import Header from './components/Header/Header'
import { indexPageTitle, indexPageDesc, keywords } from './layout.metadata'
import '@/styles/global.css'
import Footer from './components/Footer/Footer'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import '@fontsource/cousine'
import Providers from './providers'

export const metadata = {
  title: indexPageTitle,
  description: indexPageDesc,
  keywords: keywords,
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/ico',
        url: '/favicons/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicons/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicons/favicon-32x32.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/favicons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/favicons/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/favicons/android-chrome-512x512.png',
      },
    ],
  },

  manifest: '/manifest.webmanifest',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang='ru'>
      <body>
        <NuqsAdapter>
          <Suspense fallback={<div>Loading application...</div>}>
            {' '}
            <Providers>
              <Header />
              {children}
              <Footer />
            </Providers>
          </Suspense>
        </NuqsAdapter>
      </body>
    </html>
  )
}
