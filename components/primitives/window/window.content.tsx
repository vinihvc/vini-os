import { cn } from '@/lib/cn'
import { Slot } from '@radix-ui/react-slot'

interface WindowContentProps extends React.ComponentProps<'div'> {
  /**
   * The actions to render in the content.
   */
  actions?: React.ReactNode
  /**
   * If true, the component will render the children as a slot.
   *
   * @default false
   */
  asChild?: boolean
}

export const WindowContent = (props: WindowContentProps) => {
  const { actions, className, children, asChild, ...rest } = props

  const Component = asChild ? Slot : 'div'

  return (
    <Component className={cn('flex flex-1 flex-col', className)} {...rest}>
      <div className="flex h-8 w-full items-center gap-2 border-b bg-background px-2">
        {actions}
      </div>

      {children}
    </Component>
  )
}
