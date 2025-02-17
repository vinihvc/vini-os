'use client'

import { createWindow } from '@/components/primitives/window'
import type { ModuleKey } from '@/modules'
import type { ModuleType } from '@/types/module'

interface WindowManagerItemProps {
  /**
   * The app to render
   */
  app: ModuleType<ModuleKey>
}

export const WindowManagerItem = (props: WindowManagerItemProps) => {
  const { app } = props

  return createWindow({
    value: app.key,
    settings: {
      width: app.width,
      height: app.height,
    },
    dropdown: app.dropdown,
    children: app.app,
  })
}
