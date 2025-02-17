'use client'

import { createWindow } from '@/components/primitives/window'
import type { ModuleType } from '@/types/module'
import { useWindowHistory } from './window.history'
import type { WindowManagerState } from './window.store'

interface WindowManagerItemProps {
  /**
   * The app to render
   */
  app: ModuleType<keyof WindowManagerState>
}

export const WindowManagerItem = (props: WindowManagerItemProps) => {
  const { app } = props

  const windowHistory = useWindowHistory()

  const determineZIndex = (window: keyof WindowManagerState) => {
    const index = windowHistory.history.indexOf(window)

    return 20 + (index === -1 ? 0 : windowHistory.history.length - index)
  }

  return createWindow({
    value: app.key,
    zIndex: determineZIndex(app.key),
    settings: {
      width: app.width,
      height: app.height,
    },
    dropdown: app.dropdown,
    children: app.app,
  })
}
