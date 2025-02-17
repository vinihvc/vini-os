'use client'

import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemWithIndicator,
} from '@/components/primitives/radio-group'
import { TabsContent } from '@/components/primitives/tabs'
import { THEME_COLORS } from '@/config/theme-color'
import { type ThemeColor, setThemeColor, useThemeColor } from '@/store/theme'
import { useTheme } from 'next-themes'

export const AppearanceSettings = () => {
  const { theme, setTheme } = useTheme()

  const { color } = useThemeColor()

  return (
    <TabsContent className="gap-5" value="appearance">
      <RadioGroup
        className="grid gap-4"
        value={theme}
        onValueChange={(value) => setTheme(value)}
      >
        <div className="flex items-center justify-between">
          <div className="font-semibold text-sm">Mode</div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <label htmlFor="light" className="flex flex-col items-center gap-2">
            <RadioGroupItem
              id="light"
              value="light"
              className="h-20 w-full cursor-pointer rounded-xl border bg-white"
              active="ring"
            />

            <div className="select-none font-medium text-xs">Light</div>
          </label>

          <label htmlFor="dark" className="flex flex-col items-center gap-1">
            <RadioGroupItem
              id="dark"
              value="dark"
              className="h-20 w-full cursor-pointer rounded-xl border bg-black"
              active="ring"
            />

            <div className="select-none font-medium text-xs">Dark</div>
          </label>

          <label htmlFor="auto" className="flex flex-col items-center gap-2">
            <RadioGroupItem
              id="auto"
              value="system"
              className="flex h-20 w-full cursor-pointer overflow-clip rounded-xl border"
              active="ring"
            >
              <div className="h-full w-full bg-black" />

              <div className="h-full w-full bg-white" />
            </RadioGroupItem>

            <div className="select-none font-medium text-xs">Auto</div>
          </label>
        </div>
      </RadioGroup>

      <RadioGroup
        className="grid gap-4"
        value={color}
        onValueChange={(e) => setThemeColor({ color: e as ThemeColor })}
      >
        <div className="flex items-center justify-between">
          <div className="font-semibold text-sm">Accent</div>
        </div>

        <div className="grid grid-cols-6 gap-4">
          {THEME_COLORS.map(({ name, value, color }) => (
            <label
              key={value}
              htmlFor={value}
              className="flex flex-col items-center gap-1"
              style={
                {
                  '--theme-primary': `${color}`,
                } as React.CSSProperties
              }
            >
              <RadioGroupItemWithIndicator
                id={value}
                value={value}
                className="border bg-[var(--theme-primary)]"
              />

              <div className="select-none font-medium text-xs">{name}</div>
            </label>
          ))}
        </div>
      </RadioGroup>
    </TabsContent>
  )
}
