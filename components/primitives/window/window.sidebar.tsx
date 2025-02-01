import { cn } from '@/lib/cn'
import { Slot } from '@radix-ui/react-slot'

interface WindowSidebarProps extends React.ComponentProps<'nav'> {
  /**
   * If true, the component will render the children as a slot.
   *
   * @default false
   */
  asChild?: boolean
}

export const WindowSidebar = (props: WindowSidebarProps) => {
  const { className, asChild, children, ...rest } = props

  const Component = asChild ? Slot : 'nav'

  return (
    <Component
      className={cn(
        'flex w-48 shrink-0 flex-col gap-1 border-r p-2',
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}
