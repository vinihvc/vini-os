import type { ModuleKey } from '@/modules'
import { store } from '@/store/global'
import { atom, useAtom } from 'jotai'

type Window = {
  type: ModuleKey
  isOpen: boolean
  isMinimized: boolean
  isFocused: boolean
}

type WindowManagerState = {
  windows: Window[]
  history: ModuleKey[]
}

const windowManagerAtom = atom<WindowManagerState>({
  windows: [],
  history: [],
})

export const useWindowState = () => {
  const [windowManager] = useAtom(windowManagerAtom)

  return windowManager.windows
}

export const useWindowHistory = () => {
  const [windowManager] = useAtom(windowManagerAtom)

  return { history: windowManager.history }
}

const updateWindowHistory = (windowType: ModuleKey, windows: Window[]) => {
  const openWindows = windows.filter((w) => w.isOpen)

  return [windowType, ...openWindows.map((w) => w.type)]
}

export const openWindow = (windowType: ModuleKey, minimize = false) => {
  store.set(windowManagerAtom, (prev) => {
    const existingWindow = prev.windows.find((w) => w.type === windowType)

    if (existingWindow) {
      return {
        windows: prev.windows.map((window) =>
          window.type === windowType
            ? {
                ...window,
                isOpen: true,
                isMinimized: window.isOpen && !window.isMinimized && minimize,
              }
            : window,
        ),
        history: updateWindowHistory(windowType, prev.windows),
      }
    }

    return {
      windows: [
        ...prev.windows,
        {
          type: windowType,
          isOpen: true,
          isMinimized: false,
          isFocused: true,
        },
      ],
      history: updateWindowHistory(windowType, prev.windows),
    }
  })
}

export const closeWindow = (windowType: ModuleKey) => {
  store.set(windowManagerAtom, (prev) => ({
    windows: prev.windows.filter((window) => window.type !== windowType),
    history: prev.history.filter((type) => type !== windowType),
  }))
}

export const minimizeWindow = (windowType: ModuleKey) => {
  store.set(windowManagerAtom, (prev) => ({
    ...prev,
    windows: prev.windows.map((window) =>
      window.type === windowType
        ? { ...window, isMinimized: true, isFocused: false }
        : window,
    ),
  }))
}

export const focusWindow = (windowType: ModuleKey) => {
  store.set(windowManagerAtom, (prev) => ({
    windows: prev.windows.map((window) =>
      window.type === windowType
        ? { ...window, isMinimized: false, isFocused: true }
        : { ...window, isFocused: false },
    ),
    history: updateWindowHistory(windowType, prev.windows),
  }))
}

export const unfocusWindow = (windowType: ModuleKey) => {
  store.set(windowManagerAtom, (prev) => ({
    ...prev,
    windows: prev.windows.map((window) =>
      window.type === windowType
        ? { ...window, isMinimized: false, isFocused: false }
        : window,
    ),
  }))
}
