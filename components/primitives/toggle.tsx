'use client'

import { cn } from '@/lib/cn'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export const toggleVariants = tv({
  base: [
    'flex items-center',
    'gap-2',
    'text-xs',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    '[&>svg]:h-4 [&>svg]:w-4',
  ],
  variants: {
    active: {
      none: [],
      ring: [
        'data-[state=on]:ring-2 data-[state=on]:ring-foreground data-[state=on]:ring-offset-2 data-[state=on]:ring-offset-background',
      ],
      solid: [
        'data-[state=on]:bg-accent-foreground data-[state=on]:text-accent',
      ],
    },
  },
  defaultVariants: {
    active: 'none',
  },
})

interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

export const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  ToggleProps
>((props, ref) => {
  const { active, className, ...rest } = props

  return (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(toggleVariants({ active }), className)}
      {...rest}
    />
  )
})
