'use client'

import { Button } from '@/components/primitives/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/primitives/popover'
import {
  type WindowManagerState,
  openWindow,
} from '@/components/ui/window-manager/window.store'
import { cn } from '@/lib/cn'
import type { ModuleType } from '@/types/module'
import { PopoverClose } from '@radix-ui/react-popover'
import { LayoutGrid } from 'lucide-react'
import type React from 'react'
import { DOCK_WIDTH } from './dock'

interface ApplicationsProps extends React.ComponentProps<'div'> {
  /**
   * The applications to display
   */
  apps: ModuleType<keyof WindowManagerState>[]
}

export const Applications = (props: ApplicationsProps) => {
  const { apps, className, ...rest } = props

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="data-[state=open]:bg-foreground/10"
          variant="ghost"
          size="icon"
        >
          <LayoutGrid />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        sideOffset={16}
        align="start"
        alignOffset={-12}
        className={cn('h-[600px] w-auto gap-2', className)}
        style={{
          width: DOCK_WIDTH,
          ...rest.style,
        }}
        {...rest}
      >
        <div className="font-semibold">Applications</div>

        <div className="mt-6 grid grid-cols-5 gap-4">
          {apps.map((app) => (
            <PopoverClose asChild key={app.key}>
              <Button
                className="h-20 w-full flex-col gap-4 font-medium [&>svg]:h-6 [&>svg]:w-6"
                size="icon"
                variant="ghost"
                onClick={() => openWindow(app.key)}
              >
                {app.icon}

                <span className="text-xs">{app.label}</span>
              </Button>
            </PopoverClose>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
