'use client'

import { useTranslations } from 'use-intl'

export const Disclaimer = () => {
  const t = useTranslations('Home')

  return <p>{t('disclaimer')}</p>
}
