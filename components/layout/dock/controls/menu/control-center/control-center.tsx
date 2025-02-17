'use client'

import { Button } from '@/components/primitives/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/primitives/popover'
import { Slider } from '@/components/primitives/slider'
import { Toggle } from '@/components/primitives/toggle'
import { Bluetooth, Moon, Settings2, Volume2, Wifi } from 'lucide-react'
import { ControlCenterBrightness } from './control-center.brightness'

export const ControlCenter = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-transparent data-[state=open]:bg-foreground/10"
          onContextMenu={(e) => e.stopPropagation()}
        >
          <Settings2 />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        sideOffset={16}
        align="end"
        alignOffset={-89}
        className="grid gap-2"
      >
        <div className="grid grid-cols-2 gap-2">
          <div className="grid gap-2 rounded-2xl bg-foreground/5 px-2 py-2">
            <Toggle defaultPressed asChild>
              <Button className="group justify-start gap-2 px-0" variant="none">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-background transition group-data-[state=off]:bg-foreground/10 group-data-[state=off]:text-foreground">
                  <Wifi className="h-4 w-4" />
                </div>

                <div className="grid place-items-start font-medium text-xs">
                  <span>Wi-Fi </span>

                  <span className="group-data-[state=off]:hidden">On</span>
                  <span className="group-data-[state=on]:hidden">Off</span>
                </div>
              </Button>
            </Toggle>

            <Toggle defaultPressed asChild>
              <Button className="group justify-start gap-2 px-0" variant="none">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-background transition group-data-[state=off]:bg-foreground/10 group-data-[state=off]:text-foreground">
                  <Bluetooth className="h-4 w-4" />
                </div>

                <div className="grid place-items-start font-medium text-xs">
                  <span>Bluetooth </span>

                  <span className="group-data-[state=off]:hidden">On</span>
                  <span className="group-data-[state=on]:hidden">Off</span>
                </div>
              </Button>
            </Toggle>
          </div>

          <Toggle active="solid" asChild>
            <Button className="h-full flex-col place-items-center gap-4 rounded-2xl bg-foreground/5 p-2 text-foreground [&>svg]:h-6 [&>svg]:w-6">
              <Moon />

              <span className="font-medium text-xs">Focus Mode</span>
            </Button>
          </Toggle>
        </div>

        <ControlCenterBrightness />

        <div className="flex items-center gap-2 rounded-2xl bg-foreground/5 px-4 py-2">
          <Volume2 className="h-4 w-4" />

          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      </PopoverContent>
    </Popover>
  )
}
