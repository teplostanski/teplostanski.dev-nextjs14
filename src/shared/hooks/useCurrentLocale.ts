'use client'

import { defaultLocale, locales, type Locale } from '@/shared/constants/locales'
import { usePathname } from 'next/navigation'

export const useCurrentLocale = (): { locale: Locale; prefixPath: string } => {
  const pathname = usePathname()

  const matchedLocale = locales.find((locale) => {
    if (locale.prefix === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(locale.prefix)
  })

  if (matchedLocale) {
    return {
      locale: matchedLocale.code,
      prefixPath: matchedLocale.prefix,
    }
  }

  return {
    locale: defaultLocale,
    prefixPath: '/',
  }
}
