// src/store/useLanguageStore.ts
import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface LanguageStore {
  lang: 'ru' | 'en'
  setLang: (lang: 'ru' | 'en') => void
}

const useLanguageStore = create<LanguageStore>()(
  persist(
    devtools(
      immer((set) => ({
        lang: 'ru',
        setLang: (lang) => set({ lang }),
      })),
    ),
    {
      name: 'd_lang',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useLanguageStore
