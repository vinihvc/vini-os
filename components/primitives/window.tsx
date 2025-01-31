'use client'

import { useClickOutside } from '@/hooks/use-click-outside'
import { cn } from '@/lib/cn'
import { Minus, X } from 'lucide-react'
import { Resizable } from 're-resizable'
import React from 'react'
import Draggable from 'react-draggable'
import { Presence } from '../ui/presence'
import {
  type WindowManagerState,
  closeWindow,
  focusWindow,
  minimizeWindow,
  unfocusWindow,
  useWindowState,
} from '../ui/window-manager/window.store'
import { Button } from './button'

interface WindowProps extends React.ComponentProps<'div'> {
  /**
   * The title of the window
   */
  title: string
  /**
   * The value of the window
   */
  value: keyof WindowManagerState
  /**
   * The z-index of the window
   */
  zIndex: number
}

export const Window = (props: WindowProps) => {
  const { title, value, className, children, zIndex, ...rest } = props

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const $ref = React.useRef<any>(null)

  const windowManager = useWindowState()

  useClickOutside($ref, () => unfocusWindow(value))

  const isOpen = windowManager[value].isOpen
  const isFocused = windowManager[value].isFocused

  return (
    <Presence present={isOpen}>
      <div
        data-state={isOpen ? 'open' : 'closed'}
        data-focused={isFocused}
        className={cn(
          'data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:animate-in',
          'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out',
          '-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2',
        )}
      >
        <Draggable
          nodeRef={$ref}
          handle=".window-handle"
          onStart={() => focusWindow(value)}
        >
          <div
            ref={$ref}
            data-focused={windowManager[value].isFocused}
            className={cn(
              'group relative',
              'min-w-[300px]',
              'flex flex-col',
              'bg-background/90 backdrop-blur',
              'rounded-lg border border-border ',
              'data-[focused=true]:drop-shadow-lg',
              className,
            )}
            style={{ zIndex, ...rest.style }}
            onMouseDown={() => focusWindow(value)}
            {...rest}
          >
            <Resizable className="flex flex-1 flex-col">
              <div className="window-handle flex h-8 items-center justify-between rounded-t-lg border-border border-b bg-[#F3F7F8] px-2 group-data-[focused=false]:opacity-60">
                <span className="font-medium text-xs">{title}</span>

                <div className="flex items-center gap-2">
                  <Button
                    className="h-6 w-6 [&>svg]:h-3 [&>svg]:w-3"
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation()
                      e.preventDefault()
                      minimizeWindow(value)
                    }}
                  >
                    <Minus />
                  </Button>

                  <Button
                    className="h-6 w-6 [&>svg]:h-3 [&>svg]:w-3"
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation()
                      e.preventDefault()
                      closeWindow(value)
                    }}
                  >
                    <X />
                  </Button>
                </div>
              </div>

              {children}
            </Resizable>
          </div>
        </Draggable>
      </div>
    </Presence>
  )
}
