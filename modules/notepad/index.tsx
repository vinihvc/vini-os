import type { ModuleType } from '@/types/module'
import { NotepadText } from 'lucide-react'
import * as Notepad from './notepad'

const app: ModuleType<'notepad'> = {
  key: 'notepad',
  label: 'Notepad',
  version: '1.0.0',
  width: 250,
  height: 366,
  icon: <NotepadText />,
  app: <Notepad.App />,
  dropdown: undefined,
}

export default app
