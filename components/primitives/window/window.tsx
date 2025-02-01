'use client'

import { useClickOutside } from '@/hooks/use-click-outside'
import { cn } from '@/lib/cn'
import { EllipsisVertical, Minus, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useDragControls } from 'motion/react'
import React from 'react'
import {
  type WindowManagerState,
  closeWindow,
  focusWindow,
  minimizeWindow,
  unfocusWindow,
  useWindowState,
} from '../../ui/window-manager/window.store'
import { Button } from '../button'
import { Dropdown, DropdownContent, DropdownTrigger } from '../dropdown'

interface WindowProps extends React.ComponentProps<'div'> {
  /**
   * The class name of the header
   */
  headerClassName?: string
  /**
   * The dropdown to render in the window
   */
  dropdown?: React.ReactNode
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
  const {
    headerClassName,
    dropdown,
    value,
    className,
    children,
    zIndex,
    ...rest
  } = props

  const $ref = React.useRef<HTMLDivElement>(null)

  const dragControls = useDragControls()

  const windowManager = useWindowState()

  useClickOutside($ref, () => unfocusWindow(value))

  const isOpen = windowManager[value].isOpen
  const isFocused = windowManager[value].isFocused
  const isMinimized = windowManager[value].isMinimized

  return (
    <AnimatePresence>
      {isOpen && !isMinimized && (
        <motion.div
          data-state={isOpen && !isMinimized ? 'open' : 'closed'}
          data-focused={isFocused}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.1 }}
          drag
          dragControls={dragControls}
          dragListener={false}
          dragMomentum={false}
          className={cn(
            'group relative',
            'min-w-[300px]',
            'flex flex-col',
            'bg-background/90 backdrop-blur',
            'rounded-lg border',
            'data-[focused=true]:drop-shadow-lg',
            '-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2',
            className,
          )}
          style={{ zIndex, ...rest.style }}
          onClick={() => focusWindow(value)}
        >
          <motion.div
            onPointerDown={(event) => dragControls.start(event)}
            className={cn(
              'flex h-8 items-center justify-between rounded-t-lg px-2',
              'group-data-[focused=false]:opacity-60',
              'absolute top-0 right-0 bottom-0 left-0 justify-end',
              headerClassName,
            )}
          >
            <div className="flex items-center gap-2">
              {dropdown && (
                <Dropdown>
                  <DropdownTrigger asChild>
                    <Button
                      className="h-6 w-6 [&>svg]:h-3 [&>svg]:w-3"
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                      }}
                    >
                      <EllipsisVertical />
                    </Button>
                  </DropdownTrigger>

                  <DropdownContent align="end" sideOffset={8}>
                    {dropdown}
                  </DropdownContent>
                </Dropdown>
              )}

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
          </motion.div>

          <div
            className={cn('flex flex-1 flex-col overflow-hidden rounded-lg')}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
