'use client'

import { IntlProvider } from 'use-intl'
import { useLocaleMessages } from '@/shared/hooks/useLocaleMessages'
import { useRouter } from 'next/navigation'

import { Inter } from 'next/font/google'
import { useCurrentLocale } from '@/shared/hooks/useCurrentLocale'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-inter',
})

export default function Providers({ children }: { children: React.ReactNode }) {
  const { locale } = useCurrentLocale()
  const messages = useLocaleMessages()
  const router = useRouter()
  const useHref = (href: string) => href
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  return (
    <html lang={locale} className='light'>
      <body className={`${inter.variable} font-sans`}>
        <IntlProvider timeZone={timeZone} locale={locale} messages={messages}>
          <div className='p-4 sm:px-16 sm:py-4 lg:px-32 lg:py-4'>
            <Header />
            {children}
            <Footer />
          </div>
        </IntlProvider>
      </body>
    </html>
  )
}
