import '@/styles/global.scss'
import { ReactNode } from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { indexPageTitle, indexPageDesc, keywords } from './layout.metadata'
//import Head from 'next/head'

const isProd = process.env.NODE_ENV === 'production'
const repoName = process.env.NEXT_PUBLIC_REPO_NAME || ''
const basePath = isProd && repoName ? `/${repoName}` : ''

export const metadata = {
  title: indexPageTitle,
  description: indexPageDesc,
  keywords: keywords,
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: `${basePath}/manifest.webmanifest`,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ru'>
      {/*<head>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.json' />
      </head>*/}
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
