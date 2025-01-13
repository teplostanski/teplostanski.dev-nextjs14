'use client'

import { links } from '@/shared/constants/links'
import { useTranslations } from 'use-intl'

const Links = () => {
  const t = useTranslations('Common')
  const { email, github, telegram, bsky } = links
  const selectedLinks = { email, github, telegram, bsky }

  return (
    <section>
      <div>
        <h2>{t('links')}</h2>
        <ul>
          {Object.entries(selectedLinks).map(([key, { label, link }]) => (
            <li key={key}>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Links
