import { DockControls } from './controls'
import { Applications } from './dock.applications'
import { DockItems } from './dock.items'
import { DockNavigation } from './dock.navigation'

export const DOCK_WIDTH = '42rem'

export const Dock = async () => {
  const modules = (await import('@/modules')).default

  return (
    <div className="fixed inset-x-2 bottom-2 z-[9999] select-none">
      <DockNavigation>
        <div className="flex w-full items-center">
          <Applications apps={modules} />

          <DockItems apps={modules} />

          <DockControls />
        </div>
      </DockNavigation>
    </div>
  )
}
