'use client'

import { cn } from '@/lib/cn'
import { CalendarDays, Folder, Globe, Settings } from 'lucide-react'
import { DockControls } from './controls/dock.controls'
import { Applications } from './dock.applications'
import { DockItem } from './dock.item'

export const DOCK_WIDTH = '42rem'

interface DockProps extends React.ComponentProps<'div'> {}

export const Dock = (props: DockProps) => {
  const { className, ...rest } = props

  return (
    <div className="fixed inset-x-2 bottom-2">
      <nav
        className={cn(
          'mx-auto flex h-14 items-center justify-between rounded-2xl bg-background/90 px-3 shadow-lg backdrop-blur',
          className,
        )}
        style={{
          maxWidth: DOCK_WIDTH,
        }}
        {...rest}
      >
        <div className="flex w-full items-center">
          <Applications />

          <div className="mx-2 flex flex-1 items-center space-x-1">
            <DockItem
              data={{
                value: 'explorer',
                icon: Folder,
                label: 'Explorer',
              }}
            />

            <DockItem
              data={{
                value: 'browser',
                icon: Globe,
                label: 'Browser',
              }}
            />

            <DockItem
              data={{
                value: 'settings',
                icon: Settings,
                label: 'Settings',
              }}
            />

            <DockItem
              data={{
                value: 'calendar',
                icon: CalendarDays,
                label: 'Calendar',
              }}
            />
          </div>

          <DockControls />
        </div>
      </nav>
    </div>
  )
}
