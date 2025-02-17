import { ToggleGroup } from '@/components/primitives/toggle-group'
import { cn } from '@/lib/cn'
import type React from 'react'
import { DockControls } from './controls'
import { Applications } from './dock.applications'
import { DockItem } from './dock.item'

export const DOCK_WIDTH = '42rem'

interface DockProps extends React.ComponentProps<'div'> {}

export const Dock = async (props: DockProps) => {
  const { className, ...rest } = props

  const modules = (await import('@/modules')).default

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
          <Applications apps={modules} />

          <ToggleGroup
            type="multiple"
            className="mx-2 flex flex-1 items-center space-x-1"
          >
            {modules.map((app) => (
              <DockItem key={app.key} app={app} />
            ))}
          </ToggleGroup>

          <DockControls />
        </div>
      </nav>
    </div>
  )
}
