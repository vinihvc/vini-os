'use client'

import { Tabs } from '@/components/primitives/tabs'
import { Window } from '@/components/primitives/window'
import { CalendarContent } from './calendar.content'
import { CalendarWindowSidebar } from './calendar.sidebar'
import { CalendarMonth } from './tabs/month'
import { CalendarSchedule } from './tabs/schedule'

const WINDOW_NAME = 'calendar'

interface CalendarWindowProps extends React.ComponentProps<'div'> {
  zIndex: number
}

export const CalendarWindow = (props: CalendarWindowProps) => {
  const { zIndex, ...rest } = props

  return (
    <Window
      className="h-[600px] w-[800px]"
      title="Calendar"
      value={WINDOW_NAME}
      zIndex={zIndex}
      {...rest}
    >
      <Tabs defaultValue="month" orientation="vertical" className="flex flex-1">
        <CalendarWindowSidebar />

        <CalendarContent>
          <CalendarMonth />

          <CalendarSchedule />
        </CalendarContent>
      </Tabs>
    </Window>
  )
}
