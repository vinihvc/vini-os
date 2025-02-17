'use client'

import { Button } from '@/components/primitives/button'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/primitives/context-menu'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/primitives/popover'
import { cn } from '@/lib/cn'
import type { ModuleKey } from '@/modules'
import { addDockItem } from '@/store/dock'
import { openWindow } from '@/store/window'
import type { ModuleType } from '@/types/module'
import { PopoverClose } from '@radix-ui/react-popover'
import { LayoutGrid } from 'lucide-react'
import type React from 'react'
import { DOCK_WIDTH } from './dock'

interface ApplicationsProps extends React.ComponentProps<'div'> {
  /**
   * The applications to display
   */
  apps: ModuleType<ModuleKey>[]
}

export const Applications = (props: ApplicationsProps) => {
  const { apps, className, ...rest } = props

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="data-[state=open]:bg-foreground/10"
          variant="ghost"
          onContextMenu={(e) => e.stopPropagation()}
          size="icon"
        >
          <LayoutGrid />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        sideOffset={16}
        align="start"
        alignOffset={-12}
        onContextMenu={(e) => e.stopPropagation()}
        className={cn('h-[600px] w-auto gap-2 p-5', className)}
        style={{
          width: DOCK_WIDTH,
          ...rest.style,
        }}
        {...rest}
      >
        <div className="grid grid-cols-5 gap-4">
          {apps.map((app) => (
            <ContextMenu key={app.key}>
              <ContextMenuTrigger asChild>
                <PopoverClose asChild>
                  <Button
                    className="h-20 w-full flex-col gap-4 font-medium [&>svg]:h-6 [&>svg]:w-6"
                    size="icon"
                    variant="ghost"
                    onClick={() => openWindow(app.key)}
                  >
                    {app.icon}

                    {app.label}
                  </Button>
                </PopoverClose>
              </ContextMenuTrigger>

              <ContextMenuContent>
                <ContextMenuItem
                  onSelect={() => addDockItem({ type: app.key })}
                >
                  Add to dock
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
