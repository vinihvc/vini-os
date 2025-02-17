'use client'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/primitives/context-menu'
import { cn } from '@/lib/cn'
import { setSettingsTab } from '@/modules/settings/settings.store'
import { openWindow } from '@/store/window'
import type React from 'react'
import { DOCK_WIDTH } from './dock'

interface DockNavigationProps extends React.ComponentProps<'nav'> {}

export const DockNavigation = (props: DockNavigationProps) => {
  const { className, children, ...rest } = props

  const handleContextMenu = () => {
    openWindow('settings')
    setSettingsTab('general')
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <nav
          className={cn(
            'mx-auto flex h-14 items-center justify-between rounded-2xl bg-background/90 px-3 shadow-lg backdrop-blur',
            className,
          )}
          style={{
            maxWidth: DOCK_WIDTH,
          }}
          {...rest}
        >
          {children}
        </nav>
      </ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuItem onSelect={handleContextMenu}>
          Customize dock
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
