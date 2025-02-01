'use client'

import { ToggleGroupItem } from '@/components/primitives/toggle-group'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/primitives/tooltip'
import { cn } from '@/lib/cn'
import { Button } from '../../primitives/button'
import {
  type WindowManagerState,
  openWindow,
  useWindowState,
} from '../../ui/window-manager/window.store'

interface DockItemProps extends React.ComponentProps<'button'> {
  /**
   * The data to display
   */
  data: {
    /**
     * The key of the window manager state
     */
    value: keyof WindowManagerState
    /**
     * The icon to display
     */
    icon: React.ElementType
    /**
     * The label to display
     */
    label: string
  }
}

export const DockItem = (props: DockItemProps) => {
  const { data, className, ...rest } = props

  const windowManager = useWindowState()

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <ToggleGroupItem value={data.value} asChild>
          <Button
            data-state={windowManager[data.value].isOpen ? 'open' : 'closed'}
            data-minimized={windowManager[data.value].isMinimized}
            className={cn(
              'data-[minimized=false]:data-[state=open]:bg-foreground/5',
              "data-[state=open]:after:-translate-x-1/2 data-[state=open]:after:absolute data-[state=open]:after:bottom-1 data-[state=open]:after:left-1/2 data-[state=open]:after:h-0.5 data-[state=open]:after:w-0.5 data-[state=open]:after:rounded-full data-[state=open]:after:bg-foreground/80 data-[state=open]:after:content-['']",
            )}
            variant="ghost"
            size="icon"
            onClick={() => openWindow(data.value, true)}
            {...rest}
          >
            <data.icon />
          </Button>
        </ToggleGroupItem>
      </TooltipTrigger>

      <TooltipContent sideOffset={14}>{data.label}</TooltipContent>
    </Tooltip>
  )
}
