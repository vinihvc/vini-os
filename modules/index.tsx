import { default as Browser } from './browser'
import { default as Notepad } from './notepad'
import { default as Settings } from './settings'

export type ModuleType = typeof Notepad | typeof Browser | typeof Settings

const modules: ModuleType[] = [Notepad, Browser, Settings]

export default modules
