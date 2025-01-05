'use client'

import useLanguageStore from '@/store/useLanguageStore'
import { useTranslations } from 'use-intl'
import { useQueryState } from 'nuqs'

export default function About() {
  const t = useTranslations('Home')
  //const locale = useLanguageStore((state) => state.lang)
  //const setLang = useLanguageStore((state) => state.setLang)

  const [locale, setLang] = useQueryState('locale', { defaultValue: 'en' })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Значение возвращается строкой, поэтому уточняем тип
    const newLang = e.target.value as 'en' | 'ru'
    setLang(newLang)
  }

  return (
    <section>
      <h1>{t('title')}</h1>
      {/*<input value={name || ''} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName(null)}>Clear</button>
      <p>Hello, {name || 'anonymous visitor'}!</p>*/}
      <div>
        <select
          aria-label='Выберите язык'
          value={locale}
          onChange={handleChange}
        >
          <option value='en'>English</option>
          <option value='ru'>Русский</option>
        </select>
      </div>
      <span>
        Всем привет 👋 Меня зовут Игорь, я frontend developer. В свободное время
        пишу для{' '}
        <a href='http://doka.guide' target='_blank' rel='noopener noreferrer'>
          Доки
        </a>
        , разрабатываю{' '}
        <a
          href='http://https://github.com/teplostanski/vite-plugin-pretty-module-classnames'
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
      </span>

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
