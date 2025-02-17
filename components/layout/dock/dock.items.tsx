'use client'

import { ToggleGroup } from '@/components/primitives/toggle-group'
import { cn } from '@/lib/cn'
import type { ModuleKey } from '@/modules'
import { useDock } from '@/store/dock'
import { useWindowState } from '@/store/window'
import type { ModuleType } from '@/types/module'
import type React from 'react'
import { DockItem } from './dock.item'

interface DockItemsProps extends React.ComponentProps<'div'> {
  /**
   * The modules to display
   */
  apps: ModuleType<ModuleKey>[]
}

export const DockItems = (props: DockItemsProps) => {
  const { apps, className } = props

  const dock = useDock()
  const window = useWindowState()

  const dockItems = apps
    .map((app, index) => {
      // docked items
      const dockItem = dock.find((item) => item.type === app.key)
      // not docked but open
      const isOpen = window.some((win) => win.type === app.key)

      return dockItem?.dock || isOpen
        ? {
            ...app,
            ...dockItem,
            order: dockItem?.dock?.order ?? index + apps.length,
          }
        : null
    })
    .filter(Boolean)
    // sort by order
    .sort((a, b) => {
      if (a?.order && b?.order) {
        return a.order - b.order
      }

      return 0
    })

  console.log(dockItems)

  return (
    <ToggleGroup
      type="multiple"
      className={cn('mx-2 flex flex-1 items-center space-x-1', className)}
    >
      {dockItems?.map((app, index) => {
        if (!app) return null

        return <DockItem key={`${app.type}-${index}`} app={app} />
      })}
    </ToggleGroup>
  )
}
