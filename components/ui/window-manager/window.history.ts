import { store } from '@/store/global'
import { atom, useAtom } from 'jotai'
import { type WindowType, windowManagerAtom } from './window.store'

export type WindowHistoryState = {
  history: WindowType[]
}

export const windowHistoryAtom = atom<WindowHistoryState>({
  history: [],
})

export const useWindowHistory = () => {
  const [windowHistory] = useAtom(windowHistoryAtom)

  return windowHistory
}

export const addWindowHistory = (window: WindowType) => {
  const totalWindowOpen = Object.values(store.get(windowManagerAtom)).filter(
    (window) => window.isOpen,
  )

  store.set(windowHistoryAtom, (prev) => {
    const newHistory = [
      window,
      ...prev.history.slice(0, totalWindowOpen.length),
    ]

    return {
      history: newHistory,
    }
  })
}
