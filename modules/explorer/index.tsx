import { DropdownItem } from '@/components/primitives/dropdown'
import type { ModuleType } from '@/types/module'
import { Folder } from 'lucide-react'
import * as Explorer from './explorer'

const app: ModuleType<'explorer'> = {
  key: 'explorer',
  label: 'Explorer',
  version: '1.0.0',
  width: 800,
  height: 600,
  icon: <Folder />,
  app: <Explorer.App />,
  dropdown: <DropdownItem>New Folder</DropdownItem>,
}

export default app
