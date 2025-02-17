import { Globe } from 'lucide-react'
import { App } from './browser'

export default {
  key: 'browser',
  label: 'Browser',
  version: '1.0.0',
  width: 1200,
  height: 800,
  icon: <Globe />,
  app: <App />,
} as const
