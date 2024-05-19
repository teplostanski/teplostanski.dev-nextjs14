import { Inter } from 'next/font/google'
import './globals.scss'
//import Link from 'next/link'
import { ReactNode } from 'react'
//import LayoutNav from './components/LayoutNav/LayoutNav'

import styles from './layout.module.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The kitchen of World of Warcraft',
  description: 'My amazing article app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
