'use client'

import { Calendar as CalendarIcon, Clock, Plus } from 'lucide-react'
import { Button } from '../primitives/button'
import { ToggleGroup, ToggleGroupItem } from '../primitives/toggle-group'
import { Window } from '../primitives/window'

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
      <div className="flex flex-1">
        <ToggleGroup
          type="single"
          className="flex w-48 shrink-0 flex-col gap-1 border-border border-r p-2"
        >
          <ToggleGroupItem value="month" asChild>
            <Button
              className="w-full justify-start font-medium data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
              variant="ghost"
            >
              <CalendarIcon />
              Month View
            </Button>
          </ToggleGroupItem>

          <ToggleGroupItem value="schedule" asChild>
            <Button
              className="w-full justify-start font-medium data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
              variant="ghost"
            >
              <Clock />
              Schedule
            </Button>
          </ToggleGroupItem>
        </ToggleGroup>

        <div className="flex w-full flex-col bg-background/90 p-4">
          <div className="mb-4 flex justify-between">
            <h2 className="font-semibold text-xl">March 2024</h2>

            <Button variant="outline" size="sm">
              <Plus />
              New Event
            </Button>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div
                key={day}
                className="flex h-10 items-center justify-center font-semibold text-sm"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid flex-1 grid-cols-7 gap-1">
            {Array.from({ length: 31 }, (_, i) => (
              <Button
                key={i + 1}
                variant="ghost"
                className="h-full w-full"
                size="icon"
              >
                {i + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Window>
  )
}
