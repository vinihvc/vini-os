'use client'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/primitives/context-menu'
import { ToggleGroupItem } from '@/components/primitives/toggle-group'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/primitives/tooltip'
import { cn } from '@/lib/cn'
import type { ModuleKey } from '@/modules'
import { addDockItem, removeDockItem, useDock } from '@/store/dock'
import type { ModuleType } from '@/types/module'
import { openWindow, useWindowState } from '../../../store/window'
import { Button } from '../../primitives/button'

interface DockItemProps extends React.ComponentProps<'button'> {
  /**
   * The data to display
   */
  app: ModuleType<ModuleKey>
}

export const DockItem = (props: DockItemProps) => {
  const { app, className, ...rest } = props

  const windowManager = useWindowState()

  const dock = useDock()

  const findApp = windowManager.find((window) => window.type === app.key)
  const findDock = dock.find((item) => item.type === app.key)
  return (
    <ContextMenu>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <ToggleGroupItem value={app.key} asChild>
            <ContextMenuTrigger asChild>
              <Button
                data-state={findApp?.isOpen ? 'open' : 'closed'}
                data-minimized={findApp?.isMinimized}
                className={cn(
                  'data-[minimized=false]:data-[state=open]:bg-foreground/5',
                  "data-[state=open]:after:-translate-x-1/2 data-[state=open]:after:absolute data-[state=open]:after:bottom-1 data-[state=open]:after:left-1/2 data-[state=open]:after:h-0.5 data-[state=open]:after:w-0.5 data-[state=open]:after:rounded-full data-[state=open]:after:bg-primary data-[state=open]:after:content-['']",
                )}
                variant="ghost"
                size="icon"
                onClick={() => openWindow(app.key, true)}
                {...rest}
              >
                {app.icon}
              </Button>
            </ContextMenuTrigger>
          </ToggleGroupItem>
        </TooltipTrigger>

        <TooltipContent sideOffset={14}>{app.label}</TooltipContent>
      </Tooltip>

      <ContextMenuContent>
        {findDock?.dock && (
          <ContextMenuItem onSelect={() => removeDockItem(app.key)}>
            Remove from dock
          </ContextMenuItem>
        )}

        {!findDock?.dock && (
          <ContextMenuItem onSelect={() => addDockItem({ type: app.key })}>
            Add to dock
          </ContextMenuItem>
        )}
      </ContextMenuContent>
    </ContextMenu>
  )
}
