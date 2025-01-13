'use client'

import { links } from '@/shared/constants/links'
import { useTranslations } from 'use-intl'

export default function About() {
  const t = useTranslations('Home.about.messages')

  return (
    <section>
      <span>
        {t.rich('first', {
          doka_guide: (chunks) => <a href={links.doka.link}>{chunks}</a>,
          vite_plugin: (chunks) => (
            <a href={links.vite_plugin.link}>{chunks}</a>
          ),
          moonbloom_theme: (chunks) => (
            <a href={links.moonbloom_theme.link}>{chunks}</a>
          ),
        })}
      </span>
      <br />
      <span>{t('second')}</span>
      {/*<span>
        Всем привет 👋 Меня зовут Игорь, я frontend developer. В свободное время
        пишу для{' '}
        <a href='http://doka.guide' target='_blank' rel='noopener noreferrer'>
          Доки
        </a>
        , разрабатываю{' '}
        <a
          href='https://www.npmjs.com/package/vite-plugin-pretty-module-classnames'
          target='_blank'
          rel='noopener noreferrer'
        >
          vite-plugin-pretty-module-classnames
        </a>{' '}
        и{' '}
        <a
          href='http://https://github.com/moonbloom-theme/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Moonbloom Theme
        </a>
        .
      </span>
      <br />
      <span>
        Мне нравится создавать приложения и проекты с открытым исходным кодом.
        Ниже я оставлю все необходимые ссылочки 👇
      </span>*/}

      {/*<ul>
          <li>
            <a href='#'>проекты</a>
          </li>
          <li>
            <a href='#'>портфолио</a>
          </li>
        </ul>*/}
    </section>
  )
}
