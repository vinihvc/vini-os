'use client'

import { Button } from '@/components/primitives/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/primitives/popover'
import { SiDocker, SiGithub } from '@icons-pack/react-simple-icons'
import { ChevronUp } from 'lucide-react'

export const MoreMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="group h-8 w-8 hover:bg-transparent data-[state=open]:bg-foreground/10"
          onContextMenu={(e) => e.stopPropagation()}
        >
          <ChevronUp className="transition group-data-[state=open]:rotate-180" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        sideOffset={16}
        align="start"
        alignOffset={-6}
        className="grid w-40 grid-cols-5 p-1"
      >
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <SiDocker className="h-4 w-4" />
        </Button>

        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
          <a href="https://github.com/vinihvc" target="_blank" rel="noreferrer">
            <SiGithub className="h-4 w-4" />
          </a>
        </Button>
      </PopoverContent>
    </Popover>
  )
}
