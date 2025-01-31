'use client'

import { buttonVariants } from '@/components/primitives/button'
import { cn } from '@/lib/cn'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type * as React from 'react'
import { DayPicker } from 'react-day-picker'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

export const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(className)}
      classNames={{
        month: 'space-y-4',
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-y-0 relative',
        month_caption: 'flex justify-center pt-1 relative items-center',
        month_grid: 'w-full border-collapse grid gap-1',
        caption_label: 'text-xs font-medium',
        nav: 'flex items-center justify-between absolute inset-x-0',
        button_previous: cn(
          buttonVariants({ variant: 'outline' }),
          'z-10 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        button_next: cn(
          buttonVariants({ variant: 'outline' }),
          'z-10 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        weeks: 'w-full border-collapse grid gap-1',
        weekdays: 'flex',
        weekday: 'text-muted-foreground rounded-md w-9 font-normal text-xs',
        week: 'flex w-full mt-2 gap-1',
        day_button:
          'h-9 w-9 text-center text-xs p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
        ),
        range_end: 'day-range-end',
        selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        today: 'bg-accent text-accent-foreground',
        outside:
          'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
        disabled: 'text-muted-foreground opacity-50',
        range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: ({ ...props }) =>
          props.orientation === 'left' ? (
            <ChevronLeft {...props} className="h-4 w-4" />
          ) : (
            <ChevronRight {...props} className="h-4 w-4" />
          ),
      }}
      {...props}
    />
  )
}

Calendar.displayName = 'Calendar'
