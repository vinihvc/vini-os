import { Button } from '@/components/primitives/button'
import { WindowContent } from '@/components/primitives/window/window.content'
import { Plus } from 'lucide-react'

interface CalendarContentProps extends React.ComponentProps<'div'> {}

export const CalendarContent = (props: CalendarContentProps) => {
  const { ...rest } = props

  return (
    <WindowContent
      actions={
        <Button
          className="h-6 w-6 [&>svg]:h-3 [&>svg]:w-3"
          variant="ghost"
          size="icon"
        >
          <Plus />
        </Button>
      }
      {...rest}
    />
  )
}
