import type * as React from 'react'

import { cn } from '@/lib/cn'

interface TextareaProps extends React.ComponentProps<'textarea'> {}

export const Textarea = (props: TextareaProps) => {
  const { className, ref, ...rest } = props

  return (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-[60px] w-full',
        'rounded-md border border-input bg-transparent',
        'px-3 py-2',
        'text-base md:text-sm',
        'shadow-sm',
        'placeholder:text-muted-foreground',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...rest}
    />
  )
}
