import { Settings as SettingsIcon } from 'lucide-react'
import * as Settings from './settings'

export default {
  key: 'settings',
  label: 'Settings',
  version: '1.0.0',
  width: 600,
  height: 400,
  icon: <SettingsIcon />,
  app: <Settings.App />,
} as const
