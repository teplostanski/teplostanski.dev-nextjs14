import '@/styles/global.scss'
import { ReactNode } from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { indexPageTitle, indexPageDesc, keywords } from './layout.metadata'

export const metadata = {
  title: indexPageTitle,
  description: indexPageDesc,
  keywords: keywords,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ru'>
      <head>
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
        <link rel='manifest' href='/site.webmanifest' />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
