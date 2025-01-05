// src/app/providers.tsx
'use client'
import useLanguageStore from '@/store/useLanguageStore'
import { parseAsString, useQueryState } from 'nuqs'
import { ReactNode, useEffect, useState } from 'react'
import { IntlProvider } from 'use-intl'

export default function Providers({ children }: { children: ReactNode }) {
  const [locale] = useQueryState('locale', parseAsString.withDefault('en'))

  //const [isHydrated, setIsHydrated] = useState(false)

  //useEffect(() => {
  //  const hydrate = async () => {
  //    await useLanguageStore.persist.rehydrate()
  //    setIsHydrated(useLanguageStore.persist.hasHydrated())
  //  }

  //  hydrate()
  //}, [])

  //if (!isHydrated) {
  //  return null
  //}

  const messagesEn = {
    Home: {
      title: 'Hello',
    },
  }

  const messagesRu = {
    Home: {
      title: 'Привет',
    },
  }

  const messages = locale === 'en' ? messagesEn : messagesRu

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}
