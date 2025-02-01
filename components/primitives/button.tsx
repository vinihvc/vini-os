import { cn } from '@/lib/cn'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, tv } from 'tailwind-variants'
export const buttonVariants = tv({
  base: [
    'relative',
    'inline-flex items-center justify-center',
    'rounded-md',
    'text-xs font-medium',
    'transition-colors',
    'cursor-pointer',
    'outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'gap-2 [&>svg]:h-4 [&>svg]:w-4',
  ],
  variants: {
    variant: {
      none: [],
      solid: ['bg-primary text-primary-foreground'],
      outline: ['border text-foreground'],
      ghost: ['hover:bg-foreground/10 text-foreground'],
      link: ['text-foreground hover:underline underline-offset-2'],
    },
    size: {
      sm: 'h-9 px-3',
      md: 'h-10 px-4',
      lg: 'h-11 px-5',
      icon: 'h-9 w-9',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  /**
   * If true, the button will render the child component.
   *
   * @default false
   */
  asChild?: boolean
}

export const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    variant,
    size,
    className,
    asChild,
    ref,
    ...rest
  } = props

  const Component = asChild ? Slot : 'button'

  return (
    <Component
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    />
  )
}
