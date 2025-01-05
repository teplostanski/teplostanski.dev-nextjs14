// src/app/providers.tsx
'use client'
import { useQueryState } from 'nuqs'
import { ReactNode } from 'react'
import { IntlProvider } from 'use-intl'

export default function Providers({ children }: { children: ReactNode }) {
  const [locale, setLang] = useQueryState('locale', {
    defaultValue: 'ru',
    history: 'push',
    clearOnDefault: false,
  })

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
