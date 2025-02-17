import { NotepadText } from 'lucide-react'
import * as Notepad from './notepad'

export default {
  key: 'notepad',
  label: 'Notepad',
  version: '1.0.0',
  width: 250,
  height: 366,
  icon: <NotepadText />,
  app: <Notepad.App />,
} as const
