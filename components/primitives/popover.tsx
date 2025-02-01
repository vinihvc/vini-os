'use client'

import { cn } from '@/lib/cn'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as React from 'react'

export const Popover = PopoverPrimitive.Root

export const PopoverTrigger = PopoverPrimitive.Trigger

export const PopoverAnchor = PopoverPrimitive.Anchor

export const PopoverContent = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>((props, ref) => {
  const { className, align = 'center', sideOffset = 4, ...rest } = props

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'w-72',
          'z-50 p-2',
          'bg-background/90 backdrop-blur',
          'text-foreground',
          'shadow-md',
          'rounded-lg border',
          'outline-none',
          'data-[state=closed]:animate-out data-[state=open]:animate-in',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[side=bottom]:slide-in-from-top-1/2',
          'data-[side=left]:slide-in-from-right-1/2',
          'data-[side=right]:slide-in-from-left-1/2',
          'data-[side=top]:slide-in-from-bottom-1/2',
          className,
        )}
        {...rest}
      />
    </PopoverPrimitive.Portal>
  )
})

PopoverContent.displayName = PopoverPrimitive.Content.displayName
