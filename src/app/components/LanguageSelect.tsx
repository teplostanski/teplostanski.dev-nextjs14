'use client'

import useLanguageStore from '@/store/useLanguageStore'

export default function LanguageSelect() {
  const { lang, setLang } = useLanguageStore((state) => ({
    lang: state.lang,
    setLang: state.setLang,
  }))

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as 'en' | 'ru'
    setLang(newLang)
  }

  return (
    <div>
      <select aria-label='Выберите язык' value={lang} onChange={handleChange}>
        <option value='en'>English</option>
        <option value='ru'>Русский</option>
      </select>
    </div>
  )
}
