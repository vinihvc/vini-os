'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'

import { cn } from '@/lib/cn'

export const Tabs = TabsPrimitive.Root

export const TabsList = TabsPrimitive.List

export const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        'transition-all',
        'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground',
        'disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...rest}
    />
  )
})

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

export const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn('flex flex-1 flex-col p-3', className)}
      {...rest}
    />
  )
})

TabsContent.displayName = TabsPrimitive.Content.displayName
