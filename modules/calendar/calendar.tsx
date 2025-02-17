'use client'

import { Tabs } from '@/components/primitives/tabs'
import { CalendarContent } from './calendar.content'
import { CalendarWindowSidebar } from './calendar.sidebar'
import { CalendarMonth } from './tabs/month'
import { CalendarSchedule } from './tabs/schedule'

export const App = (props: React.ComponentProps<typeof Tabs>) => {
  const { ...rest } = props

  return (
    <Tabs
      defaultValue="month"
      orientation="vertical"
      className="flex flex-1"
      {...rest}
    >
      <CalendarWindowSidebar />

      <CalendarContent>
        <CalendarMonth />

        <CalendarSchedule />
      </CalendarContent>
    </Tabs>
  )
}
