'use client'

import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/primitives/toggle-group'
import { useTheme } from 'next-themes'

export const AppearanceTab = () => {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = (value: string) => {
    setTheme(value)
  }

  return (
    <ToggleGroup
      className="grid gap-2"
      type="single"
      value={theme}
      onValueChange={handleThemeChange}
    >
      <div className="flex items-center justify-between">
        <div className="font-semibold text-sm">Mode</div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <label htmlFor="light" className="flex flex-col items-center gap-2">
          <ToggleGroupItem
            id="light"
            value="light"
            className="h-20 w-full cursor-pointer rounded-lg border-2 border-black bg-white data-[state=on]:ring-2 data-[state=on]:ring-foreground data-[state=on]:ring-offset-1 data-[state=on]:ring-offset-background"
          />

          <div className="select-none font-medium text-xs">Light</div>
        </label>

        <label htmlFor="dark" className="flex flex-col items-center gap-2">
          <ToggleGroupItem
            id="dark"
            value="dark"
            className="h-20 w-full cursor-pointer rounded-lg border-2 border-black bg-black data-[state=on]:ring-2 data-[state=on]:ring-foreground data-[state=on]:ring-offset-1 data-[state=on]:ring-offset-background"
          />

          <div className="select-none font-medium text-xs">Dark</div>
        </label>

        <label htmlFor="auto" className="flex flex-col items-center gap-2">
          <ToggleGroupItem
            id="auto"
            value="system"
            className="flex h-20 w-full cursor-pointer gap-0 rounded-lg border-2 border-black data-[state=on]:ring-2 data-[state=on]:ring-foreground data-[state=on]:ring-offset-1 data-[state=on]:ring-offset-background"
          >
            <div className="h-full w-full rounded-l-md bg-black" />

            <div className="h-full w-full rounded-r-md bg-white" />
          </ToggleGroupItem>

          <div className="select-none font-medium text-xs">Auto</div>
        </label>
      </div>
    </ToggleGroup>
  )
}
