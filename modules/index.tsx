import { default as Browser } from './browser'
import { default as Calculator } from './calculator'
import { default as Calendar } from './calendar'
import { default as Explorer } from './explorer'
import { default as Notepad } from './notepad'
import { default as Photos } from './photos'
import { default as Settings } from './settings'

const modules = [
  Notepad,
  Browser,
  Settings,
  Calculator,
  Calendar,
  Explorer,
  Photos,
]

export type ModuleKey = (typeof modules)[number]['key']

export default modules
