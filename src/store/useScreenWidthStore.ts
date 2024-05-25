// store/useScreenWidthStore.ts
import { create } from 'zustand'

interface ScreenWidthStore {
  width: number
  setWidth: (width: number) => void
}

const useScreenWidthStore = create<ScreenWidthStore>((set) => ({
  width: typeof window !== 'undefined' ? window.innerWidth : 0,
  setWidth: (width) => set({ width }),
}))

export default useScreenWidthStore
