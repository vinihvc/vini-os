import { Button } from '@/components/primitives/button'
import { TabsList, TabsTrigger } from '@/components/primitives/tabs'
import { WindowSidebar } from '@/components/primitives/window/window.sidebar'
import { Calendar as CalendarIcon, Clock } from 'lucide-react'

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
