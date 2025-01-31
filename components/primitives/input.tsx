import type * as React from 'react'

import { cn } from '@/lib/cn'

interface InputProps extends React.ComponentProps<'input'> {}

export const Input = (props: InputProps) => {
  const { className, type, ref, ...rest } = props

  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        'flex h-9 w-full',
        'rounded-md border border-input bg-background',
        'px-3 py-1',
        'text-base md:text-sm',
        'transition-colors',
        'file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm',
        'placeholder:text-muted-foreground',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...rest}
    />
  )
}
