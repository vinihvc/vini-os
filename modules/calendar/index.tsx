import type { ModuleType } from '@/types/module'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as Calendar from './calendar'

const app: ModuleType<'calendar'> = {
  key: 'calendar',
  label: 'Calendar',
  version: '1.0.0',
  width: 800,
  height: 600,
  icon: <CalendarIcon />,
  app: <Calendar.App />,
}

export default app
