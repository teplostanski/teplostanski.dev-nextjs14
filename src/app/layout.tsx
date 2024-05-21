import '@/styles/global.scss'
import { ReactNode } from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export const metadata = {
  title: 'The kitchen of World of Warcraft',
  description: 'My amazing article app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ru'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
