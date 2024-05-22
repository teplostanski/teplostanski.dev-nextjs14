import { ReactNode } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { indexPageTitle, indexPageDesc, keywords } from './layout.metadata'
import FloatingButtonWrapper from './components/FloatingButtonWrapper'

import '@/styles/global.scss'

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ru'>
      <body>
        <Header />
        <FloatingButtonWrapper>{children}</FloatingButtonWrapper>
      </body>
    </html>
  )
}
