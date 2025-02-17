import type { ModuleType } from '@/types/module'
import { Settings as SettingsIcon } from 'lucide-react'
import * as Settings from './settings'

const app: ModuleType<'settings'> = {
  key: 'settings',
  label: 'Settings',
  version: '1.0.0',
  width: 600,
  height: 400,
  icon: <SettingsIcon />,
  app: <Settings.App />,
}

export default app
