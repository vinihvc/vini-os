import type { ModuleType } from '@/types/module'
import { Image } from 'lucide-react'
import * as Photos from './photos'

export const app: ModuleType<'photos'> = {
  key: 'photos',
  label: 'Photos',
  version: '1.0.0',
  width: 800,
  height: 600,
  icon: <Image />,
  app: <Photos.App />,
}

export default app
