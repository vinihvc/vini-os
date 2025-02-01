import { WindowSidebar } from '@/components/primitives/window/window.sidebar'
import { Calendar as CalendarIcon, Clock } from 'lucide-react'
import { Button } from '../../primitives/button'
import { TabsList, TabsTrigger } from '../../primitives/tabs'

interface CalendarWindowSidebarProps extends React.ComponentProps<'div'> {}

export const CalendarWindowSidebar = (props: CalendarWindowSidebarProps) => {
  const { ...rest } = props

  return (
    <WindowSidebar asChild {...rest}>
      <TabsList>
        <TabsTrigger value="month" asChild>
          <Button
            className="w-full justify-start font-medium"
            variant="ghost"
            size="sm"
          >
            <CalendarIcon />
            Month View
          </Button>
        </TabsTrigger>

        <TabsTrigger value="schedule" asChild>
          <Button
            className="w-full justify-start font-medium"
            variant="ghost"
            size="sm"
          >
            <Clock />
            Schedule
          </Button>
        </TabsTrigger>
      </TabsList>
    </WindowSidebar>
  )
}
