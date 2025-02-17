import type { ModuleType } from '@/types/module'
import { Globe } from 'lucide-react'
import * as Browser from './browser'

const app: ModuleType<'browser'> = {
  key: 'browser',
  label: 'Browser',
  version: '1.0.0',
  width: 1200,
  height: 800,
  icon: <Globe />,
  app: <Browser.App />,
}

export default app
