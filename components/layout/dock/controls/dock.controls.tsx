import { CalendarMenu } from './menu/calendar'
import { ControlCenter } from './menu/control-center/control-center'
import { MoreMenu } from './menu/more'

export const DockControls = () => {
  return (
    <div className="flex items-center">
      <MoreMenu />

      <ControlCenter />

      <CalendarMenu />
    </div>
  )
}
