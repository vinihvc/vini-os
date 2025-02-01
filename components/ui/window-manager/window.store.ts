import { store } from '@/store/global'
import { atom, useAtom } from 'jotai'
import { addWindowHistory } from './window.history'

type Window = {
  isOpen: boolean
  isMinimized: boolean
  isFocused: boolean
}

export type WindowType = keyof WindowManagerState

export type WindowManagerState = {
  settings: Window
  explorer: Window
  browser: Window
  calendar: Window
  notepad: Window
  calculator: Window
  player: Window
  photos: Window
}

export const windowManagerAtom = atom<WindowManagerState>({
  settings: {
    isOpen: false,
    isMinimized: false,
    isFocused: false,
  },
  explorer: {
    isOpen: false,
    isMinimized: false,
    isFocused: false,
  },
  browser: {
    isOpen: false,
    isMinimized: false,
    isFocused: false,
  },
  calendar: {
    isOpen: false,
    isMinimized: false,
    isFocused: false,
  },
  notepad: {
    isOpen: false,
    isMinimized: false,
    isFocused: false,
  },
  calculator: {
    isOpen: false,
    isMinimized: false,
    isFocused: false,
  },
  player: {
    isOpen: false,
    isMinimized: false,
    isFocused: false,
  },
  photos: {
    isOpen: false,
    isMinimized: false,
    isFocused: false,
  },
})

export const useWindowState = () => {
  const [windowManager] = useAtom(windowManagerAtom)

  return windowManager
}

export const openWindow = (
  window: keyof WindowManagerState,
  minimize = false,
) => {
  const { isOpen, isMinimized } = store.get(windowManagerAtom)[window]

  store.set(windowManagerAtom, (prev) => ({
    ...prev,
    [window]: {
      isOpen: true,
      ...(isOpen && !isMinimized && minimize
        ? { isMinimized: true }
        : { isMinimized: false }),
    },
  }))

  addWindowHistory(window)
}

export const closeWindow = (window: keyof WindowManagerState) => {
  store.set(windowManagerAtom, (prev) => ({
    ...prev,
    [window]: { isOpen: false, isMinimized: false, isFocused: false },
  }))
}

export const minimizeWindow = (window: keyof WindowManagerState) => {
  store.set(windowManagerAtom, (prev) => ({
    ...prev,
    [window]: { isOpen: true, isMinimized: true, isFocused: false },
  }))
}

export const focusWindow = (window: keyof WindowManagerState) => {
  store.set(windowManagerAtom, (prev) => ({
    ...prev,
    [window]: { isOpen: true, isMinimized: false, isFocused: true },
  }))

  addWindowHistory(window)
}

export const unfocusWindow = (window: keyof WindowManagerState) => {
  store.set(windowManagerAtom, (prev) => ({
    ...prev,
    [window]: { isOpen: true, isMinimized: false, isFocused: false },
  }))
}
