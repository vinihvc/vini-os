import { Button } from '@/components/primitives/button'
import { TabsContent } from '@/components/primitives/tabs'

export const CalendarMonth = () => {
  return (
    <TabsContent className="p-4" value="month">
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
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={i + 1}
            variant="ghost"
            className="h-full w-full"
            size="icon"
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </TabsContent>
  )
}
