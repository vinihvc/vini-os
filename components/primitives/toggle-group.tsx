'use client'

import { cn } from '@/lib/cn'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import * as React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { toggleVariants } from './toggle'

export const ToggleGroup = ToggleGroupPrimitive.Root

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

interface ToggleGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>,
    VariantProps<typeof toggleVariants> {}

export const ToggleGroupItem = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>((props, ref) => {
  const { active, className, ...rest } = props

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(toggleVariants({ active, className }))}
      {...rest}
    />
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName
