import { Button } from '@/components/primitives/button'
import { Calendar } from '@/components/primitives/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/primitives/popover'
import { DateTime } from '@/components/ui/date-time'
import React from 'react'

export const CalendarMenu = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="h-full gap-4 px-3 py-1 hover:bg-transparent data-[state=open]:bg-foreground/10"
        >
          <DateTime />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        sideOffset={12}
        alignOffset={-12}
        align="end"
        className="w-auto"
      >
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  )
}
