'use client'

import { cn } from '@/lib/cn'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import * as React from 'react'

export const ToggleGroup = ToggleGroupPrimitive.Root

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

export const ToggleGroupItem = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn('gap-2 text-xs [&>svg]:h-4 [&>svg]:w-4', className)}
      {...rest}
    />
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName
