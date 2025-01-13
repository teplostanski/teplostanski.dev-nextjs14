'use client'

import { useCurrentLocale } from '@/shared/hooks/useCurrentLocale'

const messagesRu = {
  Header: 'игорь теплостанский',
  Home: {
    disclaimer: 'Всё в порядке! Css стили подгрузились ;3',
    about: {
      messages: {
        first:
          'Всем привет 👋 Меня зовут Игорь, я frontend developer. В свободное время пишу для <doka_guide>Доки</doka_guide>, разрабатываю <vite_plugin>vite-plugin-pretty-module-classnames</vite_plugin> и <moonbloom_theme>Moonbloom Theme</moonbloom_theme>.',
        second:
          'Мне нравится создавать приложения и проекты с открытым исходным кодом. Ниже я оставлю все необходимые ссылочки 👇',
      },
    },
  },

  Common: {
    link_back_to_home: 'домой',
    language: 'Язык',
    links: 'ссылки',
  },
}

const messagesEn = {
  Header: 'igor teplostanski',
  Home: {
    disclaimer: 'All good! CSS styles have loaded successfully ;3',
    about: {
      messages: {
        first:
          'Hi everyone 👋 My name is Igor, and I’m a frontend developer. In my free time, I write for <doka_guide>doka.guide</doka_guide>, develop <vite_plugin>vite-plugin-pretty-module-classnames</vite_plugin>, and work on <moonbloom_theme>Moonbloom Theme</moonbloom_theme>.',
        second:
          'I enjoy creating applications and open-source projects. Below, I’ve left all the necessary links for you 👇',
      },
    },
  },

  Common: {
    link_back_to_home: 'Back to home',
    language: 'Language',
    links: 'links',
  },
}

const MESSAGE_MAP = {
  en: messagesEn,
  ru: messagesRu,
} as const

export const useLocaleMessages = () => {
  const { locale } = useCurrentLocale()
  return MESSAGE_MAP[locale]
}
