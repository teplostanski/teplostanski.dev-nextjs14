'use client'

import Link from 'next/link'
import { nanoid } from 'nanoid'
import BackButton from '../BackButton/BackButton'
import { useTranslations } from 'use-intl'
import { useCurrentLocale } from '@/shared/hooks/useCurrentLocale'
import { useIsPrefixPath } from '@/shared/hooks/useIsPrefixPath'

const Header = () => {
  const t = useTranslations()
  const { prefixPath } = useCurrentLocale()
  const isRoot = useIsPrefixPath(prefixPath)

  const navItems = [
    {
      id: 'nav_block_home',
      name: 'home',
      path: '/',
    },
    //{
    //  id: 'nav_block_contacts',
    //  name: 'ссылки',
    //  path: '#contacts',
    //},
    //{
    //  id: 'nav_block_projects',
    //  name: 'проекты',
    //  path: '/projects',
    //},
  ]

  const filteredNavItems = isRoot
    ? navItems.filter((item) => item.name !== 'home')
    : navItems

  return (
    <header
      style={{
        display: 'flex',
        flexDirection: 'column-reverse',
      }}
    >
      <nav style={{ display: 'flex', gap: '1em' }}>
        {isRoot ? <h1>{t('Header')}</h1> : <BackButton />}
        {filteredNavItems.map(({ id, name, path }) => (
          <ul key={nanoid()} style={{ margin: '0', padding: '0' }}>
            <li id={id} style={{ listStyle: 'none' }}>
              <Link href={path}>{name}</Link>
            </li>
          </ul>
        ))}
      </nav>
    </header>
  )
}

export default Header
