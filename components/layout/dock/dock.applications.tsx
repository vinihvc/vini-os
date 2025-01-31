'use client'

import { Button } from '@/components/primitives/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/primitives/popover'
import { cn } from '@/lib/cn'
import {
  Calculator,
  Image,
  LayoutGrid,
  Mail,
  Music,
  NotepadText,
  Settings,
} from 'lucide-react'
import type React from 'react'
import { DOCK_WIDTH } from './dock'

interface ApplicationsProps extends React.ComponentProps<'div'> {}

export const Applications = (props: ApplicationsProps) => {
  const { className, ...rest } = props

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="data-[state=open]:bg-foreground/10"
          variant="ghost"
          size="icon"
        >
          <LayoutGrid />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        sideOffset={16}
        align="start"
        alignOffset={-12}
        className={cn('h-[600px] w-auto gap-2', className)}
        style={{
          width: DOCK_WIDTH,
          zIndex: 1000,
          ...rest.style,
        }}
        {...rest}
      >
        <div className="font-semibold">Applications</div>

        <div className="mt-10 grid grid-cols-5 gap-4">
          <Button
            className="h-20 w-full flex-col gap-4 font-medium [&>svg]:h-6 [&>svg]:w-6"
            size="icon"
            variant="ghost"
          >
            <NotepadText />

            <span className="text-xs">Notepad</span>
          </Button>

          <Button
            className="h-20 w-full flex-col gap-4 font-medium [&>svg]:h-6 [&>svg]:w-6"
            size="icon"
            variant="ghost"
          >
            <Mail />

            <span className="text-xs">Mail</span>
          </Button>

          <Button
            className="h-20 w-full flex-col gap-4 font-medium [&>svg]:h-6 [&>svg]:w-6"
            size="icon"
            variant="ghost"
          >
            <Settings />

            <span className="text-xs">Settings</span>
          </Button>

          <Button
            className="h-20 w-full flex-col gap-4 font-medium [&>svg]:h-6 [&>svg]:w-6"
            size="icon"
            variant="ghost"
          >
            <Calculator />

            <span className="text-xs">Calculator</span>
          </Button>

          <Button
            className="h-20 w-full flex-col gap-4 font-medium [&>svg]:h-6 [&>svg]:w-6"
            size="icon"
            variant="ghost"
          >
            <Music />

            <span className="text-xs">Player</span>
          </Button>

          <Button
            className="h-20 w-full flex-col gap-4 font-medium [&>svg]:h-6 [&>svg]:w-6"
            size="icon"
            variant="ghost"
          >
            <Image />

            <span className="text-xs">Photos</span>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
